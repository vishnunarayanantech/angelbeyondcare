<?php
/**
 * Plugin Name: Proctor Widget Integration
 * Description: Initializes and persists the proctoring widget across every lesson and quiz chapter of every Tutor LMS course for enrolled (or admin) users, closing the proctoring session on course completion (or, for admins only, an explicit end-session control), and restarting it on the next chapter visited whenever no session is active.
 * Version: 1.9.0
 *
 * Session-validity note: the vendor exposes no documented API to check
 * whether a session_id is still valid server-side (only client-side
 * init() and the session/close endpoint are documented). Session
 * "liveness" here is therefore our own sliding-window timer
 * (PWI_SESSION_EXPIRY_SECONDS since last lesson view), not a real
 * check against the vendor. Genuine vendor-side expiry/rejection can
 * only be detected by the vendor's own widget UI, which the student
 * would see directly — this plugin has no callback hook into that.
 *
 * Scope note: a proctoring session is keyed by (user, course), not by
 * browser tab. Ending it from any tab intentionally ends it everywhere
 * — that matches what "end proctoring" should mean. Leaving the course
 * (navigating elsewhere) intentionally does NOT end the session; proctoring
 * is meant to run uninterrupted for the whole course, so only course
 * completion ends a student's session automatically. The explicit End
 * Proctoring control is restricted to admins (see pwi_can_end_session()) -
 * students are not permitted to end their own session early. This is a
 * deliberate product decision, not an oversight.
 *
 * Multiple runs note: a student can be proctored more than once on the same
 * course - once a session ends (completion, admin end, or 8h idle), the very
 * next lesson or quiz chapter opened with no active session starts a new one
 * (see the template_redirect gate below). Each such run gets its own vendor
 * session_id, distinct from any earlier run on the same course (see
 * pwi_get_session_id()), so the vendor never sees the same session_id reused
 * after it was already closed.
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * The proctoring Key ID / App Key are managed by an administrator from the
 * "Proctor Widget" admin page (stored as the pwi_key_id / pwi_app_key options).
 * No credentials live in this file: until both have been saved, proctoring stays
 * off (see pwi_is_configured()) and an admin notice asks for them.
 */
function pwi_get_setting($name) {
    return trim((string) get_option('pwi_' . $name, ''));
}

function pwi_is_configured() {
    return pwi_get_setting('key_id') !== '' && pwi_get_setting('app_key') !== '';
}

/**
 * A course may have its own dedicated Key ID (meta key below), set from the
 * courses list on the settings page. When set (and not just whitespace), it
 * overrides the global Key ID for that course only - everywhere a Key ID is
 * sent to the proctoring vendor for that course (starting and closing a
 * session) should resolve it through here rather than reading the global
 * setting directly. The App Key stays global; only the Key ID is per-course.
 */
function pwi_course_key_id_meta_key() {
    return '_pwi_course_key_id';
}

function pwi_get_key_id_for_course($course_id) {
    $override = trim((string) get_post_meta((int) $course_id, pwi_course_key_id_meta_key(), true));
    return $override !== '' ? $override : pwi_get_setting('key_id');
}

/**
 * Proctoring is meant to run uninterrupted for the whole course; students are
 * not permitted to end their own session early. Only an admin may. Checked
 * both when deciding whether to render the End Proctoring button and, since a
 * hidden button alone would not stop a direct request to the AJAX action
 * below, again in that handler.
 */
function pwi_can_end_session() {
    return current_user_can('manage_options');
}

define('PWI_SESSION_EXPIRY_SECONDS', 8 * HOUR_IN_SECONDS);
define('PWI_APP_KEY', pwi_get_setting('app_key'));
define('PWI_KEY_ID', pwi_get_setting('key_id'));

/**
 * -- Server-side "is a proctoring session currently active" state, per user+course. --
 * Deliberately not localStorage/cookies: must be tamper-resistant and survive
 * browser restarts / different devices, since the student can't be trusted
 * to self-report whether monitoring is still supposed to be running.
 */
function pwi_session_meta_key($course_id) {
    return '_proctor_session_' . (int) $course_id;
}

/**
 * Separate from pwi_session_meta_key(): that one is a sliding-window
 * "last activity" timestamp, touched on every chapter view so the 8h idle
 * timer keeps resetting. This one is written once, only when a session
 * actually starts, and never touched again until the session ends and a new
 * one starts - it marks which run is currently active, so pwi_get_session_id()
 * can give each run its own vendor session_id instead of reusing one forever.
 */
function pwi_session_started_meta_key($course_id) {
    return '_proctor_session_started_' . (int) $course_id;
}

/**
 * Sliding-window check: a session is only treated as stale after
 * PWI_SESSION_EXPIRY_SECONDS of no lesson activity, not since it first
 * started. Every successful check (i.e. every lesson page load while the
 * session is still valid) pushes the expiry window forward, so a student
 * actively working through lessons for many hours is never incorrectly
 * expired mid-course — only genuine inactivity lets it lapse.
 *
 * We have no vendor-provided API to check session validity server-side
 * (the only documented endpoints are the client-side init() and the
 * session/close call) — this local timer is a best-effort proxy, not a
 * substitute for real validation. See plugin header note on this limit.
 */
function pwi_get_active_session($user_id, $course_id, $touch = true) {
    $meta_key = pwi_session_meta_key($course_id);
    $last_seen = (int) get_user_meta($user_id, $meta_key, true);
    if (!$last_seen) {
        return false;
    }
    if ((time() - $last_seen) > PWI_SESSION_EXPIRY_SECONDS) {
        delete_user_meta($user_id, $meta_key);
        delete_user_meta($user_id, pwi_session_started_meta_key($course_id));
        return false;
    }
    if ($touch) {
        update_user_meta($user_id, $meta_key, time());
    }
    return $last_seen;
}

function pwi_start_active_session($user_id, $course_id) {
    $now = time();
    update_user_meta($user_id, pwi_session_meta_key($course_id), $now);
    update_user_meta($user_id, pwi_session_started_meta_key($course_id), $now);
}

function pwi_clear_active_session($user_id, $course_id) {
    delete_user_meta($user_id, pwi_session_meta_key($course_id));
    delete_user_meta($user_id, pwi_session_started_meta_key($course_id));
}

/**
 * The vendor session_id/session_id_or_external for the run currently active
 * (or just-ended, at close time) for this user+course. Includes the run's own
 * start time so each run gets a distinct id - a student proctored more than
 * once on the same course never has an earlier, already-closed run's id sent
 * to the vendor again (see the "Multiple runs note" in the plugin header).
 *
 * Back-compat: a session already active from before this id scheme shipped
 * has no "started" meta yet. Rather than switch that one in-flight session to
 * a different id mid-run, it falls back to the old id (just user+course) -
 * only sessions that START after this change get a per-run id.
 */
function pwi_get_session_id($user_id, $course_id) {
    $started_at = (int) get_user_meta($user_id, pwi_session_started_meta_key($course_id), true);
    return $started_at
        ? hash('sha256', $user_id . '_' . $course_id . '_' . $started_at)
        : hash('sha256', $user_id . '_' . $course_id);
}

/**
 * Shared close-session call to the proctoring backend, used by both course
 * completion and the explicit "End Proctoring" button.
 */
function pwi_close_proctor_session($user_id, $course_id) {
    if (!pwi_is_configured()) {
        error_log('[Proctor Widget Integration] Key ID / App Key are not set; proctoring session was not closed.');
        return false;
    }

    $proctorclosesessionparams = [
        'session_id_or_external' => pwi_get_session_id($user_id, $course_id),
        'app_key'                => PWI_APP_KEY,
        'key_id'                 => pwi_get_key_id_for_course($course_id),
    ];

    $response = wp_remote_post('https://proctoring.api.techversantinfotech.com/proctor-client/session/close', [
        'headers' => [
            'Content-Type' => 'application/json',
            'x-api-key'    => PWI_APP_KEY,
        ],
        'body'    => wp_json_encode($proctorclosesessionparams),
        'timeout' => 15,
    ]);

    if (is_wp_error($response)) {
        error_log('[Proctor Widget Integration] Failed to close proctoring session: ' . $response->get_error_message());
        return false;
    }

    return true;
}

/**
 * Main gate: decide whether to (re)inject the widget on this chapter page.
 * A "chapter" is a lesson or a quiz - the only two content types Tutor LMS
 * itself treats as course contents (see get_course_contents_by_topic() in
 * Tutor's own Utils.php; no other content type is part of its prev/next
 * chain in this install, so there is nothing else a fix needs to cover).
 * Fires on every chapter in the course so the floating monitor reappears
 * after each full-page navigation and keeps running across quiz chapters
 * too, not just lessons. A new session starts on ANY chapter - lesson or
 * quiz, first or not - whenever none is currently active: that covers a
 * fresh student's first visit, and just as deliberately lets a student be
 * proctored again on a course they already finished (or whose session an
 * admin ended, or that went idle 8h) the moment they open another chapter -
 * proctoring is not a one-time-only thing for a given student on a course.
 */
add_action('template_redirect', function () {
    if (!is_singular(['lesson', 'tutor_quiz'])) {
        return;
    }

    // Credentials not set yet (an admin notice says so): don't start a session or load the widget.
    if (!pwi_is_configured()) {
        return;
    }

    $content = get_queried_object();
    if (!$content) {
        return;
    }

    $topic = get_post($content->post_parent);
    $course_id1 = $topic ? (int) $topic->post_parent : 0;
    if (!$course_id1) {
        return;
    }

    $course = get_post($course_id1);
    if (!$course || $course->post_type !== 'courses') {
        return;
    }

    if (!is_user_logged_in()) {
        return;
    }

    $user_id1 = get_current_user_id();

    $is_enrolled = function_exists('tutor_utils') && tutor_utils()->is_enrolled($course_id1, $user_id1);
    $is_admin = current_user_can('manage_options');

    if (!$is_enrolled && !$is_admin) {
        return;
    }

    $has_active_session = false !== pwi_get_active_session($user_id1, $course_id1);

    if (!$has_active_session) {
        pwi_start_active_session($user_id1, $course_id1);
    }

    add_action('wp_footer', function () use ($course_id1, $course, $user_id1) {
        pwi_render_widget_script($course_id1, $course, $user_id1);
    });
});

function pwi_render_widget_script($course_id1, $course, $user_id1) {
    $current_user = wp_get_current_user();

    $proctorwidgetparams = [
        'key_id'       => pwi_get_key_id_for_course($course_id1),
        'session_id'   => pwi_get_session_id($user_id1, $course_id1),
        'app_key'      => PWI_APP_KEY,
        'course_id'    => $course_id1,
        'course_name'  => $course->post_title,
        'user_id'      => $user_id1,
        'first_name'   => $current_user->first_name ?: $current_user->display_name,
        'last_name'    => $current_user->last_name,
        'email_id'     => $current_user->user_email,
        'redirect_url' => home_url('/'),
        'user_name'    => $current_user->user_login,
    ];

    $end_session_nonce = wp_create_nonce('pwi_end_session_' . $course_id1);
    ?>
    <script>
    (function () {
        var PROCTOR_PARAMS = <?php echo wp_json_encode($proctorwidgetparams); ?>;
        var COURSE_ID = <?php echo (int) $course_id1; ?>;
        var END_SESSION_NONCE = <?php echo wp_json_encode($end_session_nonce); ?>;
        var AJAX_URL = <?php echo wp_json_encode(admin_url('admin-ajax.php')); ?>;
        // Students are not permitted to end their own session early (see
        // pwi_can_end_session() in PHP) - the button below exists only for admins.
        var CAN_END_SESSION = <?php echo wp_json_encode(pwi_can_end_session()); ?>;
        // Stable per-TAB id: a full-page navigation (e.g. "Complete and Next")
        // re-runs this whole script, so a plain `Math.random()` here would mint
        // a new id on every chapter and make the same tab look like a second
        // tab to the check below, almost every time - that was the bug. This
        // reads sessionStorage first, which (unlike a JS variable) survives a
        // full-page navigation within the SAME tab but starts empty in a
        // genuinely different one, and only falls back to a fresh random id if
        // sessionStorage itself is unavailable (e.g. blocked in private mode).
        var TAB_ID = (function () {
            try {
                var existing = sessionStorage.getItem('pwi_tab_id');
                if (existing) {
                    return existing;
                }
                var fresh = 'pwi_' + Math.random().toString(36).slice(2);
                sessionStorage.setItem('pwi_tab_id', fresh);
                return fresh;
            } catch (e) {
                return 'pwi_' + Math.random().toString(36).slice(2);
            }
        })();
        var LOCK_KEY = 'pwi_active_tab_' + COURSE_ID;
        var HEARTBEAT_MS = 3000;
        var STALE_MS = HEARTBEAT_MS * 2;

        // Soft cross-tab lock: same session_id would otherwise be started
        // twice (two camera/mic captures) if a student opens a second lesson
        // in a new tab. Not a hard guarantee (localStorage can be disabled),
        // but covers the common case without needing vendor cooperation.
        //
        // Deliberately no beforeunload/unload listener here: those can
        // block the browser's back/forward cache (bfcache), which would
        // hurt exactly the back/forward navigation this integration needs
        // to be resilient to. Instead, a closed/navigated-away tab simply
        // stops refreshing its heartbeat, and the lock is treated as stale
        // (and reclaimable) after STALE_MS with no fresh heartbeat — no
        // explicit cleanup required.
        function isAnotherTabActive() {
            try {
                var raw = localStorage.getItem(LOCK_KEY);
                if (!raw) return false;
                var data = JSON.parse(raw);
                return data.tabId !== TAB_ID && (Date.now() - data.ts) < STALE_MS;
            } catch (e) {
                return false;
            }
        }

        function claimTabLock() {
            try {
                localStorage.setItem(LOCK_KEY, JSON.stringify({ tabId: TAB_ID, ts: Date.now() }));
            } catch (e) { /* ignore */ }
        }

        function startHeartbeat() {
            claimTabLock();
            setInterval(claimTabLock, HEARTBEAT_MS);
        }

        function showAlreadyActiveWarning() {
            var el = document.createElement('div');
            el.id = 'proctor-multitab-warning';
            el.style.cssText = 'position:fixed;bottom:16px;right:16px;z-index:999999;background:#fff3cd;color:#7a5b00;border:1px solid #ffe08a;border-radius:8px;padding:10px 14px;font:13px/1.4 sans-serif;max-width:260px;box-shadow:0 2px 8px rgba(0,0,0,.15);';
            el.textContent = 'Proctoring is already active in another tab. Use that tab to continue.';
            document.body.appendChild(el);
        }

        function renderEndSessionButton() {
            if (document.getElementById('proctor-end-session-btn')) return;
            var btn = document.createElement('button');
            btn.id = 'proctor-end-session-btn';
            btn.textContent = 'End Proctoring';
            btn.style.cssText = 'position:fixed;bottom:16px;left:16px;z-index:999999;background:#d33;color:#fff;border:none;border-radius:6px;padding:10px 16px;font:13px/1 sans-serif;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2);';
            btn.addEventListener('click', function () {
                btn.disabled = true;
                btn.textContent = 'Ending…';
                var body = new URLSearchParams();
                body.set('action', 'proctor_end_session');
                body.set('course_id', String(COURSE_ID));
                body.set('nonce', END_SESSION_NONCE);
                fetch(AJAX_URL, { method: 'POST', credentials: 'same-origin', body: body })
                    .then(function (r) { return r.json(); })
                    .then(function (res) {
                        if (res && res.success) {
                            btn.textContent = 'Session ended';
                            try { localStorage.removeItem(LOCK_KEY); } catch (e) {}
                        } else {
                            btn.disabled = false;
                            btn.textContent = 'End Proctoring';
                            console.error('[host] Failed to end proctoring session', res);
                        }
                    })
                    .catch(function (e) {
                        btn.disabled = false;
                        btn.textContent = 'End Proctoring';
                        console.error('[host] Failed to end proctoring session', e);
                    });
            });
            document.body.appendChild(btn);
        }

        function initWidget() {
            console.log("[host] Initializing widget...");
            var root = document.getElementById("proctor-widget-root");
            if (!root) {
                root = document.createElement("div");
                root.id = "proctor-widget-root";
                document.body.appendChild(root);
            }
            if (window.proctorClient && typeof window.proctorClient.init === "function") {
                window.proctorClient.init("proctor-widget-root");
            } else {
                console.error("proctorClient.init not found — check your bundle export.");
            }
            if (CAN_END_SESSION) {
                renderEndSessionButton();
            }
            console.log("[host] Widget initialization complete.");
        }

        function loadScript(scriptUrl) {
            return new Promise(function (resolve, reject) {
                var existing = document.querySelector('script[data-proctor="true"]');
                if (existing) {
                    resolve();
                    return;
                }
                var s = document.createElement("script");
                s.type = "module";
                s.src = scriptUrl;
                s.crossOrigin = "anonymous";
                s.dataset.proctor = "true";
                s.onload = resolve;
                s.onerror = reject;
                document.head.appendChild(s);
            });
        }

        function initProctor(params) {
            var entry = "https://dedylcfq70vm0.cloudfront.net/";
            var base64str = btoa(JSON.stringify(params));
            var scriptUrl = entry + "?data=" + encodeURIComponent(base64str);
            loadScript(scriptUrl)
                .then(initWidget)
                .catch(function (e) {
                    console.error("Failed to load proctor bundle.", e);
                });
        }

        if (isAnotherTabActive()) {
            showAlreadyActiveWarning();
        } else {
            startHeartbeat();
            initProctor(PROCTOR_PARAMS);
        }
    })();
    </script>
    <?php
}

/**
 * Notify the proctoring backend that the session should close when the
 * student completes a course, and clear our own active-session flag so the
 * widget/button stop appearing on any lesson revisited afterward.
 */
add_action('tutor_course_complete_after', function ($course_id) {
    $course = get_post($course_id);
    if (!$course || $course->post_type !== 'courses') {
        return;
    }

    $user_id1 = get_current_user_id();
    if (!$user_id1) {
        return;
    }

    pwi_close_proctor_session($user_id1, $course_id);
    pwi_clear_active_session($user_id1, $course_id);
});

/**
 * Explicit "End Proctoring" control. Admins only (see pwi_can_end_session()) -
 * the button itself is only rendered for them, but that alone would not stop
 * a student from calling this action directly, so it is enforced here too.
 */
add_action('wp_ajax_proctor_end_session', function () {
    $course_id = isset($_POST['course_id']) ? (int) $_POST['course_id'] : 0;
    $nonce = isset($_POST['nonce']) ? sanitize_text_field(wp_unslash($_POST['nonce'])) : '';

    if (!$course_id || !wp_verify_nonce($nonce, 'pwi_end_session_' . $course_id)) {
        wp_send_json_error(['message' => 'Invalid request.'], 400);
    }

    $user_id1 = get_current_user_id();
    if (!$user_id1) {
        wp_send_json_error(['message' => 'Not logged in.'], 401);
    }

    if (!pwi_can_end_session()) {
        wp_send_json_error(['message' => 'Not permitted.'], 403);
    }

    pwi_close_proctor_session($user_id1, $course_id);
    pwi_clear_active_session($user_id1, $course_id);

    wp_send_json_success(['message' => 'Session ended.']);
});

/**
 * -- Admin settings page: lets an administrator enter the proctoring Key ID and
 * App Key. They are saved as options and read by pwi_get_setting(), so
 * PWI_KEY_ID / PWI_APP_KEY pick them up from the next request onward and the
 * widget script and the session-close call both use the saved values. --
 */
add_action('admin_menu', function () {
    add_menu_page(
        'Proctor Widget Integration',
        'Proctor Widget',
        'manage_options',
        'pwi-settings',
        'pwi_render_settings_page',
        'dashicons-visibility'
    );
});

add_action('admin_init', function () {
    register_setting('pwi_settings', 'pwi_key_id', [
        'type'              => 'string',
        'sanitize_callback' => 'pwi_sanitize_key_id',
    ]);
    register_setting('pwi_settings', 'pwi_app_key', [
        'type'              => 'string',
        'sanitize_callback' => 'pwi_sanitize_app_key',
    ]);
});

add_action('admin_notices', function () {
    if (!current_user_can('manage_options') || pwi_is_configured()) {
        return;
    }
    echo '<div class="notice notice-warning"><p><strong>Proctor Widget Integration:</strong> the Key ID and App Key have not been set, so proctoring is switched off for students. <a href="' . esc_url(admin_url('admin.php?page=pwi-settings')) . '">Enter them here</a>.</p></div>';
});

/**
 * An empty value would silently break proctoring for every student, so it is
 * rejected and the currently saved value (if there is one) is kept instead.
 */
function pwi_sanitize_setting($name, $label, $value) {
    static $reported = [];

    $value = trim(sanitize_text_field((string) $value));
    if ($value !== '') {
        return $value;
    }

    // WordPress can run this callback twice for an option's very first save,
    // so only raise the notice once.
    if (empty($reported[$name])) {
        $reported[$name] = true;
        $kept = pwi_get_setting($name) !== '' ? ' The previous value was kept.' : '';
        add_settings_error('pwi_settings', 'pwi_' . $name . '_empty', $label . ' cannot be empty.' . $kept, 'error');
    }
    return pwi_get_setting($name);
}

function pwi_sanitize_key_id($value) {
    return pwi_sanitize_setting('key_id', 'Key ID', $value);
}

function pwi_sanitize_app_key($value) {
    return pwi_sanitize_setting('app_key', 'App Key', $value);
}

/**
 * Save per-course Key ID overrides from the courses list on the settings
 * page. Unlike the global Key ID/App Key, an empty box here is a valid,
 * deliberate choice (it just means "use the default"), not an error - so a
 * blank value removes the override instead of being rejected.
 */
add_action('admin_post_pwi_save_course_key_ids', function () {
    if (!current_user_can('manage_options')) {
        wp_die('Not permitted.', 'Not permitted', ['response' => 403]);
    }

    $nonce = isset($_POST['pwi_course_key_ids_nonce']) ? sanitize_text_field(wp_unslash($_POST['pwi_course_key_ids_nonce'])) : '';
    if (!wp_verify_nonce($nonce, 'pwi_save_course_key_ids')) {
        wp_die('Invalid request.', 'Invalid request', ['response' => 400]);
    }

    $overrides = (isset($_POST['pwi_course_key_id']) && is_array($_POST['pwi_course_key_id'])) ? $_POST['pwi_course_key_id'] : [];
    foreach ($overrides as $course_id => $value) {
        $course_id = (int) $course_id;
        if (!$course_id) {
            continue;
        }
        $value = trim(sanitize_text_field((string) wp_unslash($value)));
        if ($value === '') {
            delete_post_meta($course_id, pwi_course_key_id_meta_key());
        } else {
            update_post_meta($course_id, pwi_course_key_id_meta_key(), $value);
        }
    }

    wp_safe_redirect(admin_url('admin.php?page=pwi-settings&pwi_course_keys_saved=1'));
    exit;
});

function pwi_render_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    ?>
    <div class="wrap">
        <h1>Proctor Widget Integration</h1>
        <?php settings_errors(); ?>
        <p>These credentials are sent to the proctoring service when a student's proctoring widget starts and when a session is closed. Proctoring is only active while both are set, and it applies to every Tutor LMS course.</p>
        <form method="post" action="options.php">
            <?php settings_fields('pwi_settings'); ?>
            <table class="form-table" role="presentation">
                <tr>
                    <th scope="row"><label for="pwi_key_id">Key ID</label></th>
                    <td>
                        <input type="text" id="pwi_key_id" name="pwi_key_id" class="regular-text code" value="<?php echo esc_attr(pwi_get_setting('key_id')); ?>" autocomplete="off" required>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="pwi_app_key">App Key</label></th>
                    <td>
                        <input type="text" id="pwi_app_key" name="pwi_app_key" class="regular-text code" value="<?php echo esc_attr(pwi_get_setting('app_key')); ?>" autocomplete="off" required>
                        <p class="description">Changes apply from the next lesson page load. Changing these while students have an active proctoring session may stop those sessions from closing correctly.</p>
                    </td>
                </tr>
            </table>
            <?php submit_button('Save Changes'); ?>
        </form>
        <?php pwi_render_courses_list(); ?>
    </div>
    <?php
}

/**
 * List of every Tutor LMS course, shown right under the settings form so an
 * admin can see at a glance what proctoring covers - by default all of them,
 * using the Key ID set above. Each course also has its own Key ID override
 * box: left blank, the course just uses the default; filled in, that Key ID
 * is used for that course instead (see pwi_get_key_id_for_course()). This is
 * its own form (own nonce, posts to admin-post.php), separate from the
 * Key ID/App Key settings form above it.
 */
function pwi_render_courses_list() {
    $courses = get_posts([
        'post_type'      => 'courses',
        'post_status'    => ['publish', 'draft', 'pending', 'private', 'future'],
        'posts_per_page' => -1,
        'orderby'        => 'title',
        'order'          => 'ASC',
    ]);
    $count = count($courses);
    ?>
    <h2>Tutor LMS Courses</h2>
    <?php if (isset($_GET['pwi_course_keys_saved'])) : ?>
        <div class="notice notice-success is-dismissible"><p>Course Key ID overrides saved.</p></div>
    <?php endif; ?>
    <p>Proctoring applies to every course below from the first lesson or quiz chapter a student opens, restarting automatically each time they return with no proctoring session currently active, using the default Key ID above unless a course has its own Key ID set below.</p>
    <?php if ($count === 0) : ?>
        <p><em>No Tutor LMS courses found yet.</em></p>
    <?php else : ?>
        <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
            <input type="hidden" name="action" value="pwi_save_course_key_ids">
            <?php wp_nonce_field('pwi_save_course_key_ids', 'pwi_course_key_ids_nonce'); ?>
            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th style="width:70px;">ID</th>
                        <th>Course Title</th>
                        <th style="width:120px;">Status</th>
                        <th style="width:220px;">Key ID override</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($courses as $course) : ?>
                        <tr>
                            <td><?php echo (int) $course->ID; ?></td>
                            <td>
                                <?php $edit_link = get_edit_post_link($course->ID); ?>
                                <?php if ($edit_link) : ?>
                                    <a href="<?php echo esc_url($edit_link); ?>"><?php echo esc_html($course->post_title !== '' ? $course->post_title : '(no title)'); ?></a>
                                <?php else : ?>
                                    <?php echo esc_html($course->post_title !== '' ? $course->post_title : '(no title)'); ?>
                                <?php endif; ?>
                            </td>
                            <td><?php echo esc_html(ucfirst($course->post_status)); ?></td>
                            <td>
                                <input type="text" class="regular-text code" name="pwi_course_key_id[<?php echo (int) $course->ID; ?>]" value="<?php echo esc_attr(get_post_meta($course->ID, pwi_course_key_id_meta_key(), true)); ?>" placeholder="(using default Key ID)" autocomplete="off">
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <p class="description"><?php echo (int) $count; ?> course<?php echo $count === 1 ? '' : 's'; ?> found. Leave a box empty to use the default Key ID above for that course.</p>
            <?php submit_button('Save Course Key ID Overrides'); ?>
        </form>
    <?php endif; ?>
    <?php
}
