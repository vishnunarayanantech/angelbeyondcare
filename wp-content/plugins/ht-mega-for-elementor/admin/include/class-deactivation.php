<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
/**
 * Add Plugin Deactivation Feedback
 * 
 * Edit:
 * - $PROJECT_NAME
 * - $PROJECT_VERSION
 * - $PROJECT_SLUG
 * - $PROJECT_PRO_SLUG
 */
class HTmega_Plugin_Deactivation_Feedback {

    public $PROJECT_NAME = 'HT Mega';
    public $PROJECT_TYPE = 'wordpress-plugin';
    public $PROJECT_VERSION = HTMEGA_VERSION;
    public $PROJECT_SLUG = 'ht-mega-for-elementor'; // Without plugin main file.
    public $PROJECT_PRO_SLUG = 'htmega-pro/htmega_pro.php';
    public $PROJECT_PRO_ACTIVE;
    public $PROJECT_PRO_INSTALL;
    public $PROJECT_PRO_VERSION;
   // public $DATA_CENTER = 'https://webhook.site/c76bcc06-ad79-4e62-a55b-71118d236a77'; // For testing purpose only
    public $DATA_CENTER = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjAwNTY1MDYzZTA0MzM1MjY1NTUzNyI_3D_pc';

    private static $_instance = null;
    /**
     * Class Instance
     */
    public static function instance(){
        if( is_null( self::$_instance ) ){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    
    public function __construct() {
        $this->PROJECT_PRO_ACTIVE = $this->is_pro_plugin_active();
        $this->PROJECT_PRO_INSTALL = $this->is_pro_plugin_installed();
        $this->PROJECT_PRO_VERSION = $this->get_pro_version();
        add_action('admin_footer', [ $this, 'deactivation_feedback' ]);
        add_action('wp_ajax_htmega_plugin_deactivation_feedback', [ $this, 'handle_feedback' ]);
    }

    
    /**
     * Handle AJAX feedback submission
     */
    public function handle_feedback() {
            // Add nonce verification
        if ( !check_ajax_referer('htmega_deactivation_nonce', 'nonce', false) ) {
            wp_send_json_error('Invalid nonce');
            return;
        }
        
        if(!current_user_can( 'administrator' )) {
            wp_send_json_error('Permission denied');
            return;
        }
        // Sanitize and prepare data
        $reason = sanitize_text_field($_POST['reason']);
        $message = sanitize_textarea_field($_POST['message']);

        // Prepare data for Pabbly
        $data = array_merge(
            [
                'deactivate_reason' => $reason,
                'deactivate_message' => $message,
            ],
            $this->get_data(),
        );

        $site_url = wp_parse_url( home_url(), PHP_URL_HOST );
        $headers = [
            'user-agent' => $this->PROJECT_NAME . '/' . md5 ( $site_url ) . ';',
            'Content-Type'     => 'application/json',
        ];

        // Send data to Pabbly
        $response = wp_remote_post($this->DATA_CENTER, [
            'method'      => 'POST',
            'timeout'     => 30,
            'redirection' => 5,
            'httpversion' => '1.0',
            'blocking'    => false,
            'sslverify'   => false,
            'headers'     => $headers,
            'body'        => wp_json_encode($data),
            'cookies'     => []
        ]);

        // Check for errors
        if (!is_wp_error($response)) {
            wp_send_json_success('Feedback submitted successfully');
        } else {
            wp_send_json_error('Failed to submit feedback: ' . $response->get_error_message());
        }
    }

    public function get_data() {
        $hash = md5( current_time( 'U', true ) );

        // Get plugin specific information
        $project = [
            'name'          => $this->PROJECT_NAME,
            'type'          => $this->PROJECT_TYPE,
            'version'       => $this->PROJECT_VERSION,
            'pro_active'    => $this->PROJECT_PRO_ACTIVE,
            'pro_installed' => $this->PROJECT_PRO_INSTALL,
            'pro_version'   => $this->PROJECT_PRO_VERSION,
        ];

        $site_title = get_bloginfo( 'name' );
        $site_description = get_bloginfo( 'description' );
        $site_url = wp_parse_url( home_url(), PHP_URL_HOST );
        $admin_email = get_option( 'admin_email' );

        $admin_first_name = '';
        $admin_last_name = '';
        $admin_display_name = '';

        $users = get_users( array(
            'role'    => 'administrator',
            'orderby' => 'ID',
            'order'   => 'ASC',
            'number'  => 1,
            'paged'   => 1,
        ) );

        $admin_user = ( is_array ( $users ) && isset ( $users[0] ) && is_object ( $users[0] ) ) ? $users[0] : null;

        if ( ! empty( $admin_user ) ) {
            $admin_first_name = ( isset( $admin_user->first_name ) ? $admin_user->first_name : '' );
            $admin_last_name = ( isset( $admin_user->last_name ) ? $admin_user->last_name : '' );
            $admin_display_name = ( isset( $admin_user->display_name ) ? $admin_user->display_name : '' );
        }

        $ip_address = $this->get_ip_address();

        // Get Plugins
        $all_plugins = get_plugins();
        $active_plugins = get_option('active_plugins');
        $plugins_string = '';
        foreach($all_plugins as $plugin_path => $plugin) {
            $plugins_string .= sprintf(
                "%s (v%s) - %s | ",
                $plugin['Name'],
                $plugin['Version'],
                in_array($plugin_path, $active_plugins) ? 'Active' : 'Inactive'
            );
        }
        $plugins_string = rtrim($plugins_string, ' | ');
        // Get Themes
        $all_themes = wp_get_themes();
        $active_theme = wp_get_theme();
        $themes_string = '';
        foreach($all_themes as $theme_slug => $theme) {
            $themes_string .= sprintf(
                "%s (v%s) - %s | ",
                $theme->get('Name'),
                $theme->get('Version'),
                ($theme_slug === $active_theme->get_stylesheet()) ? 'Active' : 'Inactive'
            );
        }
        $themes_string = rtrim($themes_string, ' | ');


        $data = [
            'hash'    => $hash,
            'project' => $project,
            'site_title'         => $site_title,
            'site_description'   => $site_description,
            'site_address'       => $site_url,
            'site_url'           => $site_url,
            'admin_email'        => $admin_email,
            'admin_first_name'   => $admin_first_name,
            'admin_last_name'    => $admin_last_name,
            'admin_display_name' => $admin_display_name,
            'server_info'        => $this->get_server_info(),
            'wordpress_info'     => $this->get_wordpress_info(),
            'users_count'        => $this->get_users_count(),
            'plugins_count'      => $this->get_plugins_count(),
            'ip_address'         => $ip_address,
            'country_name'       => $this->get_country_from_ip( $ip_address ),
            'plugin_list'       => $plugins_string,
            'theme_list'        => $themes_string,
        ];

        return $data;
    }

    /**
     * Get server info.
     */
    private function get_server_info() {
        global $wpdb;

        $software = ( isset ( $_SERVER['SERVER_SOFTWARE'] ) && !empty ( $_SERVER['SERVER_SOFTWARE'] ) ) ? $_SERVER['SERVER_SOFTWARE'] : '';
        $php_version = function_exists ( 'phpversion' ) ? phpversion () : '';
        $mysql_version = method_exists ( $wpdb, 'db_version' ) ? $wpdb->db_version () : '';
        $php_max_upload_size = size_format( wp_max_upload_size() );
        $php_default_timezone = date_default_timezone_get();
        $php_soap = class_exists ( 'SoapClient' ) ? 'yes' : 'no';
        $php_fsockopen = function_exists ( 'fsockopen' ) ? 'yes' : 'no';
        $php_curl = function_exists ( 'curl_init' ) ? 'yes' : 'no';

        $server_info = array(
            'software'             => $software,
            'php_version'          => $php_version,
            'mysql_version'        => $mysql_version,
            'php_max_upload_size'  => $php_max_upload_size,
            'php_default_timezone' => $php_default_timezone,
            'php_soap'             => $php_soap,
            'php_fsockopen'        => $php_fsockopen,
            'php_curl'             => $php_curl,
        );

        return $server_info;
    }

    /**
     * Get wordpress info.
     */
    private function get_wordpress_info() {
        $wordpress_info = [];

        $memory_limit = defined ( 'WP_MEMORY_LIMIT' ) ? WP_MEMORY_LIMIT : '';
        $debug_mode = ( defined ( 'WP_DEBUG' ) && WP_DEBUG ) ? 'yes' : 'no';
        $locale = get_locale();
        $version = get_bloginfo( 'version' );
        $multisite = is_multisite () ? 'yes' : 'no';
        $theme_slug = get_stylesheet();

        $wordpress_info = [
            'memory_limit' => $memory_limit,
            'debug_mode'   => $debug_mode,
            'locale'       => $locale,
            'version'      => $version,
            'multisite'    => $multisite,
            'theme_slug'   => $theme_slug,
        ];

        $theme = wp_get_theme( $wordpress_info['theme_slug'] );

        if ( is_object( $theme ) && ! empty( $theme ) && method_exists( $theme, 'get' ) ) {
            $theme_name    = $theme->get( 'Name' );
            $theme_version = $theme->get( 'Version' );
            $theme_uri     = $theme->get( 'ThemeURI' );
            $theme_author  = $theme->get( 'Author' );

            $wordpress_info = array_merge( $wordpress_info, [
                'theme_name'    => $theme_name,
                'theme_version' => $theme_version,
                'theme_uri'     => $theme_uri,
                'theme_author'  => $theme_author,
            ] );
        }

        return $wordpress_info;
    }

    /**
     * Get users count.
     */
    private function get_users_count() {
        $users_count = [];

        $users_count_data = count_users();

        $total_users = isset ( $users_count_data['total_users'] ) ? $users_count_data['total_users'] : 0;
        $avail_roles = isset ( $users_count_data['avail_roles'] ) ? $users_count_data['avail_roles'] : [];

        $users_count['total'] = $total_users;

        if ( is_array( $avail_roles ) && ! empty( $avail_roles ) ) {
            foreach ( $avail_roles as $role => $count ) {
                $users_count[ $role ] = $count;
            }
        }

        return $users_count;
    }

    /**
     * Get plugins count.
     */
    private function get_plugins_count() {
        $total_plugins_count = 0;
        $active_plugins_count = 0;
        $inactive_plugins_count = 0;

        $plugins = get_plugins();
        $plugins = is_array ( $plugins ) ? $plugins : [];

        $active_plugins = get_option( 'active_plugins', [] );
        $active_plugins = is_array ( $active_plugins ) ? $active_plugins : [];

        if ( ! empty( $plugins ) ) {
            foreach ( $plugins as $key => $data ) {
                if ( in_array( $key, $active_plugins, true ) ) {
                    $active_plugins_count++;
                } else {
                    $inactive_plugins_count++;
                }

                $total_plugins_count++;
            }
        }

        $plugins_count = [
            'total'    => $total_plugins_count,
            'active'   => $active_plugins_count,
            'inactive' => $inactive_plugins_count,
        ];

        return $plugins_count;
    }

    /**
     * Get IP Address
     */
    private function get_ip_address() {
        $response = wp_remote_get( 'https://icanhazip.com/' );

        if ( is_wp_error( $response ) ) {
            return '';
        }

        $ip_address = wp_remote_retrieve_body( $response );
        $ip_address = trim( $ip_address );

        if ( ! filter_var( $ip_address, FILTER_VALIDATE_IP ) ) {
            return '';
        }

        return $ip_address;
    }

    /**
     * Get Country Form ID Address
     */
    private function get_country_from_ip( $ip_address ) {
        $api_url = 'http://ip-api.com/json/' . $ip_address;
    
        // Fetch data from the API
        $response = wp_remote_get( $api_url );
    
        if ( is_wp_error( $response ) ) {
            return 'Error';
        }
    
        // Decode the JSON response
        $data = json_decode( wp_remote_retrieve_body($response) );
    
        if ($data && $data->status === 'success') {
            return $data->country;
        } else {
            return 'Unknown';
        }
    }

    /**
     * Is pro active.
     */
    private function is_pro_plugin_active() {
        $result = is_plugin_active( $this->PROJECT_PRO_SLUG );
        $result = ( true === $result ) ? 'yes' : 'no';
        return $result;
    }

    /**
     * Is pro installed.
     */
    private function is_pro_plugin_installed() {
        $plugins = get_plugins();
        $result = isset ( $plugins[$this->PROJECT_PRO_SLUG] ) ? 'yes' : 'no';
        return $result;
    }

    /**
     * Get pro version.
     */
    private function get_pro_version() {
        $plugins = get_plugins();
        $data = ( isset ( $plugins[$this->PROJECT_PRO_SLUG] ) && is_array ( $plugins[$this->PROJECT_PRO_SLUG] ) ) ? $plugins[$this->PROJECT_PRO_SLUG] : [];
        $version = isset ( $data['Version'] ) ? sanitize_text_field ( $data['Version'] ) : '';
        return $version;
    }

    public function deactivation_feedback() {
        // Only show on plugins page
        $screen = get_current_screen();
        if ($screen->id !== 'plugins') {
            return;
        }
        $this->deactivation_form_html();
        $this->deactivation_form_js();
        $this->deactivation_form_css();
    }

    public function deactivation_form_html() { ?>
        <div id="htmega-deactivation-dialog" style="display: none;">
            <div class="htmega-deactivation-dialog-content">
                <button type="button" class="htmega-close-dialog" aria-label="Close">&times;</button>
                <h2 class="htmega-deactivation-dialog-title"><?php esc_html_e('Quick Feedback', 'htmega-addons') ?></h2>
                <p class="htmega-deactivation-dialog-desc"><?php esc_html_e('If you have a moment, please let us know why you are deactivating: ', 'htmega-addons'); echo esc_html($this->PROJECT_NAME); ?></p>
                <form id="htmega-deactivation-feedback-form">
                    <div class="htmega-feedback-options">
                        <label>
                            <input type="radio" name="reason" data-id="found_better" value="<?php esc_attr_e('I found a better plugin', 'htmega-addons') ?>">
                            <?php esc_html_e('I found a better plugin', 'htmega-addons') ?>
                        </label>
                        <div id="htmega-found_better-reason-text" class="htmega-deactivation-reason-input" style="display: none;">
                            <textarea name="found_better_reason" placeholder="<?php esc_attr_e('Please share which plugin.', 'htmega-addons') ?>"></textarea>
                        </div>
                        <label>
                            <input type="radio" name="reason" data-id="stopped_working" value="<?php esc_attr_e('The plugin suddenly stopped working', 'htmega-addons') ?>">
                            <?php esc_html_e('The plugin suddenly stopped working', 'htmega-addons') ?>
                        </label>
                        <div id="htmega-stopped_working-reason-text" class="htmega-deactivation-reason-input" style="display: none;">
                            <textarea name="stopped_working_reason" placeholder="<?php esc_attr_e('Please share more details.', 'htmega-addons') ?>"></textarea>
                        </div>
                        <label>
                            <input type="radio" name="reason" data-id="found_bug" value="<?php esc_attr_e('I encountered an error or bug', 'htmega-addons') ?>">
                            <?php esc_html_e('I encountered an error or bug', 'htmega-addons') ?>
                        </label>
                        <div id="htmega-found_bug-reason-text" class="htmega-deactivation-reason-input" style="display: none;">
                            <textarea name="found_bug_reason" placeholder="<?php esc_attr_e('Please describe the error/bug you encountered. This will help us fix it for future users.', 'htmega-addons') ?>"></textarea>
                        </div>
                        <label>
                            <input type="radio" name="reason" data-id="not_working" value="<?php esc_attr_e("I could not get the plugin to work", 'htmega-addons') ?>">
                            <?php esc_html_e("I could not get the plugin to work", 'htmega-addons') ?>
                        </label>
                        <label>
                            <input type="radio" name="reason" data-id="" value="<?php esc_attr_e('I no longer need the plugin', 'htmega-addons') ?>">
                            <?php esc_html_e('I no longer need the plugin', 'htmega-addons') ?>
                        </label>
                        <label>
                            <input type="radio" name="reason" data-id="" value="<?php esc_attr_e("It's a temporary deactivation", 'htmega-addons') ?>">
                            <?php esc_html_e("It's a temporary deactivation", 'htmega-addons') ?>
                        </label>
                        <label>
                            <input type="radio" name="reason" data-id="other" value="<?php esc_attr_e("Other", 'htmega-addons') ?>">
                            <?php esc_html_e("Other", 'htmega-addons') ?>
                        </label>
                        <div id="htmega-other-reason-text" class="htmega-deactivation-reason-input" style="display: none;">
                            <textarea name="other_reason" placeholder="<?php esc_attr_e("Please share the reason.", 'htmega-addons') ?>"></textarea>
                        </div>
                    </div>
                    <div class="htmega-deactivation-dialog-buttons">
                        <button type="submit" class="button button-primary"><?php esc_html_e("Submit & Deactivate", 'htmega-addons') ?></button>
                        <a href="#" class="htmega-skip-feedback"><?php esc_html_e("Skip & Deactivate", 'htmega-addons') ?></a>
                    </div>
                </form>
            </div>
        </div>
    <?php }
    public function deactivation_form_js() {
        $ajaxurl = admin_url('admin-ajax.php');
        $nonce = wp_create_nonce('htmega_deactivation_nonce');
        ?>
        <script>
            jQuery(document).ready(function($) {
                let pluginToDeactivate = '';
                
                function closeDialog() {
                    $('#htmega-deactivation-dialog').hide();
                    pluginToDeactivate = '';
                }
                
                $('[data-slug="<?php echo esc_attr($this->PROJECT_SLUG); ?>"] .deactivate a').on('click', function(e) {
                    e.preventDefault();
                    pluginToDeactivate = $(this).attr('href');
                    $('#htmega-deactivation-dialog').show();
                });

                $('.htmega-close-dialog').on('click', closeDialog);

                $('#htmega-deactivation-dialog').on('click', function(e) {
                    if (e.target === this) {
                        closeDialog();
                    }
                });
                
                $('.htmega-deactivation-dialog-content').on('click', function(e) {
                    e.stopPropagation();
                });

                $('input[name="reason"]').on('change', function() {
                    $('.htmega-deactivation-reason-input').removeClass('active').hide();
                    
                    const id = $(this).data('id');
                    if (['other', 'found_better', 'stopped_working', 'found_bug'].includes(id)) {
                        $(`#htmega-${id}-reason-text`).addClass('active').show();
                    }
                });

                $('#htmega-deactivation-feedback-form').on('submit', function(e) {
                    e.preventDefault();
                    
                    const $submitButton = $(this).find('button[type="submit"]');
                    const originalText = $submitButton.text();
                    
                    $submitButton.text('Submitting...').prop('disabled', true);

                    const reason = $('input[name="reason"]:checked').val() || 'No reason selected';
                    const message = $('.htmega-deactivation-reason-input.active textarea').val() || '';
                    
                    const data = {
                        action: 'htmega_plugin_deactivation_feedback',
                        reason: reason,
                        message: message,
                        nonce: '<?php echo esc_js($nonce); ?>'
                    };
                    $.post('<?php echo esc_url_raw($ajaxurl); ?>', data)
                        .done(function(response) {
                            if (response.success) {
                                window.location.href = pluginToDeactivate;
                            } else {
                                console.error('Feedback submission failed:', response.data);
                                $submitButton.text(originalText).prop('disabled', false);
                            }
                        })
                        .fail(function(xhr) {
                            console.error('Feedback submission failed:', xhr.responseText);
                            $submitButton.text(originalText).prop('disabled', false);
                        });
                });

                $('.htmega-skip-feedback').on('click', function(e) {
                    e.preventDefault();
                    window.location.href = pluginToDeactivate;
                });
            });
        </script>
        <?php
    }
    public function deactivation_form_css() { ?>
        <style>
            #htmega-deactivation-dialog {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .htmega-deactivation-dialog-content {
                background: #fff;
                padding: 30px;
                max-width: 500px;
                width: 100%;
                border-radius: 4px;
                box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
                position: relative;
            }
            .htmega-deactivation-dialog-title {
                margin-top: 0;
            }

            .htmega-close-dialog {
                position: absolute;
                top: 10px;
                right: 10px;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: #f0f0f0;
                border: none;
                cursor: pointer;
                display: flex;
                justify-content: center;
                font-size: 18px;
                line-height: 18px;
                color: #333;
                transition: all 0.2s ease;
                font-weight: 700;
            }

            .htmega-close-dialog:hover {
                background: #e0e0e0;
                color: #333;
            }

            .htmega-feedback-options {
                margin: 20px 0;
            }

            .htmega-feedback-options label {
                display: block;
                margin: 10px 0;
            }


            .htmega-deactivation-reason-input {
                margin-bottom: 15px;
            }
            .htmega-deactivation-reason-input textarea {
                width: 100%;
                min-height: 60px;
                padding: 6px 8px;
                display: block;
            }

            .htmega-deactivation-dialog-buttons {
                margin-top: 20px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
            }

            .htmega-skip-feedback {
                margin-left: 10px;
                color: #666;
                text-decoration: none;
            }
        </style>
    <?php }
}

// Initialize the class
HTmega_Plugin_Deactivation_Feedback::instance();