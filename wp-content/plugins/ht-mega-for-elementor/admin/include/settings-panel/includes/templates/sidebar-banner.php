<?php 
// Prevent direct output
if (!defined('ABSPATH')) {
    exit;
}

ob_start(); 
?>
<div class="htoptions-sidebar-adds-area">
<?php 
try {
    if (!function_exists('is_plugin_active')) {
        require_once ABSPATH . 'wp-admin/includes/plugin.php';
    }

    if (class_exists('HTMega_Template_Library')) {
        $template_data = HTMega_Template_Library::instance()->get_templates_info();
        
        if (is_plugin_active('htmega-pro/htmega_pro.php')) {
            $htmega_license_title = apply_filters('htmega_license_title', 'lifetime'); 
            if (!str_contains($htmega_license_title, 'Growth') && !str_contains($htmega_license_title, 'Unlimited - Lifetime')) {
                if (isset($template_data['notices']['sidebar'][1]['status']) && !empty($template_data['notices']['sidebar'][1]['status'])) {
                    ?>
                    <div class="htmega-opt-sidebar-item htmega-opt-banner-image">
                        <a href="<?php echo esc_url($template_data['notices']['sidebar'][1]['bannerlink']); ?>" target="_blank">
                            <img class="htoptions-banner-img" src="<?php echo esc_url($template_data['notices']['sidebar'][1]['bannerimage']); ?>" alt="<?php echo esc_attr__('HT Mega Addons', 'htmega-addons'); ?>"/>
                        </a>
                    </div>
                    <?php
                }
            }
        } else { 
            if (isset($template_data['notices']['sidebar'][0]['status']) && !empty($template_data['notices']['sidebar'][0]['status'])) {
                ?>
                <div class="htmega-opt-sidebar-item htmega-opt-banner-image">
                    <a href="<?php echo esc_url($template_data['notices']['sidebar'][0]['bannerlink']); ?>" target="_blank">
                        <img class="htoptions-banner-img" src="<?php echo esc_url($template_data['notices']['sidebar'][0]['bannerimage']); ?>" alt="<?php echo esc_attr__('HT Mega Addons', 'htmega-addons'); ?>"/>
                    </a>
                </div>
                <?php
            }
            ?>
            <div class="htmega-opt-get-pro htmega-opt-sidebar-item">
                <div class="htmega-opt-get-pro-header">
                    <h2 class="htmega-opt-get-pro-header-title"> <?php esc_html_e( 'Get HT Mega', 'htmega-addons' )?> <span style="color: #FF6067;"><?php esc_html_e( 'PRO', 'htmega-addons' )?></span></h2>
                    <p class="htmega-opt-get-pro-desc"><?php esc_html_e( 'Get more powerful widgets & extensions to elevate your Elementor website', 'htmega-addons' )?></p>
                </div>
                <div class="htmega-opt-get-pro-content">
                    <h3 class="htmega-opt-get-pro-title"><?php esc_html_e( 'What You Get', 'htmega-addons' )?></h3>
                    <ul>
                        <li><?php esc_html_e( '130+ Elemetor Widgets', 'htmega-addons' ) ?></li>
                        <li><?php esc_html_e( '14+ Essential Modules', 'htmega-addons' ) ?></li>
                        <li><?php esc_html_e( '170+ Page Templates', 'htmega-addons') ?></li>
                        <li><?php esc_html_e( '790+ Elementor Blocks Template', 'htmega-addons' ) ?></li>
                        <li><?php esc_html_e( 'Mega Menu Builder', 'htmega-addons' ) ?></li>
                        <li><?php esc_html_e( 'Theme Builder', 'htmega-addons' ) ?></li>
                        <li><?php esc_html_e( 'Advanced Slider', 'htmega-addons' ) ?></li>
                        <li><?php esc_html_e( 'Conditional Display', 'htmega-addons' ) ?></li>
                        <li><?php esc_html_e( 'Much More..', 'htmega-addons' ) ?></li>
                    </ul>
                    <a href="https://wphtmega.com/pricing/?utm_source=admin&utm_medium=mainmenu&utm_campaign=free" class="upgrade-button" target="_blank"><img src="<?php echo esc_url(HTMEGA_ADDONS_PL_URL.'admin/assets/images/icon/get-pro.png'); ?>" alt="<?php echo esc_attr__('Rating icon', 'htmega-addons'); ?>"> <?php esc_html_e( 'Upgrade To PRO ', 'htmega-addons' ); ?></a>
                </div>
            </div>
            <?php
        }
    }
} catch (Exception $e) {
    // Silently fail
}
?>
    <div class="htoption-rating-area htmega-opt-sidebar-item">
        <div class="htoption-rating-icon">
            <img src="<?php echo esc_url(HTMEGA_ADDONS_PL_URL.'admin/assets/images/icon/rating-new.png'); ?>" alt="<?php echo esc_attr__('Rating icon', 'htmega-addons'); ?>">
        </div>
        <div class="htoption-rating-intro">
        <h3 class="htmega-rating-title"><?php esc_html_e( 'Have We Fully Met Your Expectations?', 'htmega-addons' ) ?></h3>
        <p class="htmega-rating-desc">
            <?php echo esc_html__('Thank you for choosing our plugin! If it makes your work easier, please share your happiness with a 5-star rating on WordPress. It’ll take just 2 minutes & means a lot to us!','htmega-addons'); ?></p>
            <a href="https://wordpress.org/support/plugin/ht-mega-for-elementor/reviews/?filter=5#new-post" class="htmega-admin-pro-rating-bution htmega-doc-btn" target="_blank"><?php esc_html_e( 'Provide Your Feedback', 'htmega-addons' ) ?></a>
       </div>
    </div>
</div>
<?php 
$content = ob_get_clean();
echo wp_kses_post(apply_filters('htmega_sidebar_adds_banner', $content));
?>