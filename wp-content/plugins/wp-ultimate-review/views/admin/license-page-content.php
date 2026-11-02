<?php

use  WurReview\App\Application;
use WurReview\App\License\License;

defined( 'ABSPATH' ) || exit;

  $license_status = License::instance()->status();


?>

<div class="wrap">
    <h2>License Settings</h2>
    <div class="xs-review-admin-container stuffbox" style="padding:15px">
        <div class="attr-card-body">
            <form action="" method="post" class="form-group attr-input-group mf-admin-input-text mf-admin-input-text--xs-review-license-key">

                <?php if($license_status == 'invalid') :?>
                <p>Enter your license key here to activate <?php echo esc_html(Application::name()); ?>. It will enable update notice and auto updates.</p>

                <ol>
                    <li>Log in to your Wpmet account to get the license key.</li>
                    <li>If you don't yet buy this product, get <a href="<?php echo esc_url(Application::landing_page()); ?>" target="_blank"><?php echo esc_html(Application::name()); ?></a> now.</li>
                    <li>Copy the <?php echo esc_html(Application::name()); ?> license key from your account and paste it below.</li>
                </ol>

                <label for="mf-admin-option-text-xs-review-license-key"><b>Your License Key</b></label><br/><br/>

                    <input type="text" class="attr-form-control" id="mf-admin-option-text-xs-review-license-key" required placeholder="Please insert your license key here" name="xs-review-pro-settings-page-key" value="">

                    <span class="attr-input-group-btn">
                        <input type="hidden" name="xs-review-pro-settings-page-action" value="activate">
                        <button class="button button-primary" type="submit"><div class="mf-spinner"></div>Activate</button>
                    </span>

                <div class="xs-review-license-form-result">
                    <p class="attr-alert attr-alert-info">
                        Still can't find your lisence key? <a target="_blank" href="https://wpmet.com/support-ticket">Knock us here!</a>
                    </p>
                </div>

                <?php else: ?>
                <div id="xs-review-sites-notice-id-license-status" class="xs-review-notice notice xs-review-active-notice notice-success" dismissible-meta="user">
                    <p><?php printf( esc_html__('Congratulations! You\'r product is activated for "%s"', 'xs-review-pro'), esc_url(parse_url(home_url(), PHP_URL_HOST))); ?></p>
                </div>

                <div class="attr-revoke-btn-container">
                <input type="hidden" name="xs-review-pro-settings-page-action" value="deactivate">
                <button type="submit" class="button button-secondary">Remove license from this domain</button> <span style="margin: 8px 0 0 20px; display: inline-block;">See documention <a target="_blank" href="https://wpmet.com/knowledgebase/wp-ultimate-review/">here</a>.</span>
                </div>
                <?php endif; ?>

                <?php wp_nonce_field( 'xs-review-pro-settings-page', 'xs-review-pro-settings-page' ); ?>
            </form>
        </div>
    </div>
</div>