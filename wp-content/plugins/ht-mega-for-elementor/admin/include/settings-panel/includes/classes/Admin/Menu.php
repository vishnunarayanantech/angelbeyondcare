<?php
namespace HTMegaOpt\Admin;

class Menu {

    /**
     * [init]
     */
    public function init() {
        add_action( 'admin_menu', [ $this, 'admin_menu' ], 220 );
    }

    /**
     * Register Menu
     *
     * @return void
     */
    public function admin_menu(){
        global $submenu;

        $slug        = 'htmega-addons';
        $capability  = 'manage_options';

        $hook = add_menu_page(
            esc_html__( 'HTMega Addons', 'htmega-addons' ),
            esc_html__( 'HTMega Addons', 'htmega-addons' ),
            $capability,
            $slug,
            [ $this, 'plugin_page' ],
            HTMEGA_ADDONS_PL_URL.'admin/assets/images/menu-icon.svg',
            59
        );

        if ( current_user_can( $capability ) ) {
            $onboarding_completed = get_option('htmega_onboarding_completed');
            $default_hash = '#/general';

            if ( ! get_option( 'htmega_onboarding_completed' ) && ! get_option('htmega_element_tabs') && ! get_option('htmega_advance_element_tabs ') ) {
                $default_hash = '#/setup-wizard';
            } else {
                $default_hash = '#/general';
                update_option('htmega_onboarding_completed', true);
            }
            $submenu[ $slug ][] = array( esc_html__( 'Settings', 'htmega-addons' ), $capability, 'admin.php?page=' . $slug . $default_hash );
        }

        add_action( 'load-' . $hook, [ $this, 'init_hooks'] );

    }

    /**
     * Initialize our hooks for the admin page
     *
     * @return void
     */
    public function init_hooks() {
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    }

    /**
     * Load scripts and styles for the app
     *
     * @return void
     */
    public function enqueue_scripts() {
        wp_enqueue_style( 'htmegaopt-admin' );
        wp_enqueue_style( 'htmegaopt-style' );
        wp_enqueue_script( 'htmegaopt-admin' );

        $option_localize_script = [
            'adminUrl'      => admin_url( '/' ),
            'ajaxUrl'       => admin_url( 'admin-ajax.php' ),
            'rootApiUrl'    => esc_url_raw( rest_url() ),
            'restNonce'     => wp_create_nonce( 'wp_rest' ),
            'verifynonce'   => wp_create_nonce( 'htmegaopt_verifynonce' ),
            'tabs'          => Options_Field::instance()->get_settings_tabs(),
            'sections'      => Options_Field::instance()->get_settings_subtabs(),
            'settings'      => Options_Field::instance()->get_registered_settings(),
            'onboarding_completed' => get_option('htmega_onboarding_completed'),
            'onboarding'    => $this->get_localize_data()['onboarding'],
            'onboarding_asset_url' => HTMEGA_ADDONS_PL_URL.'admin/include/settings-panel/assets/images/',
            'options'       => htmegaopt_get_options( Options_Field::instance()->get_registered_settings() ),
            'labels'        => [
                'pro' => __( 'Pro', 'htmega-addons' ),
                'modal' => [
                    'title' => __( 'BUY PRO', 'htmega-addons' ),
                    'buynow' => __( 'Buy Now', 'htmega-addons' ),
                    'desc' => __( 'Our free version is great, but it doesn\'t have all our advanced features. The best way to unlock all of the features in our plugin is by purchasing the pro version.', 'htmega-addons' )
                ],
                'saveButton' => [
                    'text'   => __( 'Save Settings', 'htmega-addons' ),
                    'saving' => __( 'Saving...', 'htmega-addons' ),
                    'saved'  => __( 'Data Saved', 'htmega-addons' ),
                    'alert' => [
                        'title'=> __( 'Success', 'htmega-addons' ),
                        'text' => __( 'All data has been saved successfully!', 'htmega-addons' )
                    ]
                ],
                'enableAllButton' => [
                    'enable'   => __( 'Enable All', 'htmega-addons' ),
                    'disable'  => __( 'Disable All', 'htmega-addons' ),
                ],
                'resetButton' => [
                    'text'   => __( 'Reset All Settings', 'htmega-addons' ),
                    'reseting'  => __( 'Resetting...', 'htmega-addons' ),
                    'reseted'  => __( 'All Data Restored', 'htmega-addons' ),
                    'alert' => [
                        'one'=>[
                            'title' => __( 'Are you sure?', 'htmega-addons' ),
                            'text' => __( 'It will reset all the settings to default, and all the changes you made will be deleted.', 'htmega-addons' ),
                            'confirm' => __( 'Yes', 'htmega-addons' ),
                            'cancel' => __( 'No', 'htmega-addons' ),
                        ],
                        'two'=>[
                            'title' => __( 'Reset!', 'htmega-addons' ),
                            'text' => __( 'All settings has been reset successfully.', 'htmega-addons' ),
                            'confirm' => __( 'OK', 'htmega-addons' ),
                        ]
                    ],
                ],
            ]
        ];

        // update existing data to new Menu builder module settings default option
        $updated_megamenu_options = [
            "megamenubuilder" =>  wp_json_encode([
                "megamenubuilder_enable"   => htmega_get_option('megamenubuilder', 'htmega_advance_element_tabs'),
                "menu_items_color"           => htmega_get_option('menu_items_color', 'htmegamenu_setting_tabs'),
                "menu_items_hover_color"     => htmega_get_option('menu_items_hover_color', 'htmegamenu_setting_tabs'),
                "sub_menu_width"             => htmega_get_option('sub_menu_width', 'htmegamenu_setting_tabs',200),
                "sub_menu_bg_color"          => htmega_get_option('sub_menu_bg_color', 'htmegamenu_setting_tabs'),
                "sub_menu_items_color"       => htmega_get_option('sub_menu_items_color', 'htmegamenu_setting_tabs'),
                "sub_menu_items_hover_color" => htmega_get_option('sub_menu_items_hover_color', 'htmegamenu_setting_tabs'),
                "mega_menu_width"            => htmega_get_option('mega_menu_width', 'htmegamenu_setting_tabs'),
                "mega_menu_bg_color"         => htmega_get_option('mega_menu_bg_color', 'htmegamenu_setting_tabs'),
            ]),
        ];
        // megamenu modules defautl option's value update
        if ( empty( htmega_get_module_option( 'htmega_megamenu_module_settings' ) ) ) {
            update_option( 'htmega_megamenu_module_settings' , $updated_megamenu_options );
            update_option( 'htmegamenu_setting_tabs' , '' );
        }

        // update existing data to new theme builder module settings default option
        $updated_theme_builder_options = [
            "themebuilder" =>  wp_json_encode([
                "themebuilder_enable" => htmega_get_option('themebuilder', 'htmega_advance_element_tabs'),
                "single_blog_page"    => htmega_get_option('single_blog_page', 'htmegabuilder_templatebuilder_tabs','0'),
                "archive_blog_page"   => htmega_get_option('archive_blog_page', 'htmegabuilder_templatebuilder_tabs','0'),
                "header_page"         => htmega_get_option('header_page', 'htmegabuilder_templatebuilder_tabs','0'),
                "footer_page"         => htmega_get_option('footer_page', 'htmegabuilder_templatebuilder_tabs','0'),
                "search_page"         => htmega_get_option('search_page', 'htmegabuilder_templatebuilder_tabs','0'),
                "error_page"          => htmega_get_option('error_page', 'htmegabuilder_templatebuilder_tabs','0'),
                "coming_soon_page"    => htmega_get_option('coming_soon_page', 'htmegabuilder_templatebuilder_tabs','0'),
                "search_pagep"        => '0',
                "error_pagep"         => '0',
                "coming_soon_pagep"   => '0',
            ]),
        ];
        // megamenu modules defautl option's value update
        if ( empty( htmega_get_module_option( 'htmega_themebuilder_module_settings' ) ) ) {
            update_option( 'htmega_themebuilder_module_settings' , $updated_theme_builder_options );
            update_option( 'htmegabuilder_templatebuilder_tabs' , '' );
        }
        wp_localize_script( 'htmegaopt-admin', 'htmegaOptions', $option_localize_script );
    }

    /**
     * Render our admin page
     *
     * @return void
     */
    public function plugin_page() {
        ob_start();
        include_once HTMEGAOPT_INCLUDES .'/templates/settings-page.php';
        echo ob_get_clean(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }

    public function get_localize_data() {
        return [
            'onboarding' => [
                'steps'=> [
                    'welcome'   => esc_html__('Welcome', 'htmega-addons'),
                    'elements'  => esc_html__('Elements', 'htmega-addons'),
                    'modules'   => esc_html__('Modules', 'htmega-addons'),
                    'gopro'      => esc_html__('Go Pro', 'htmega-addons'),
                    'templates' => esc_html__('Templates', 'htmega-addons'),
                    'finalize' => esc_html__('Finalize', 'htmega-addons'),
                ],
                'buttons' => [
                    'next' => __( 'Next', 'htmega-addons' ),
                    'skip' => __( 'Skip', 'htmega-addons' ),
                    'back' => __( 'Back', 'htmega-addons' ),
                    'go_to_dashboard' => __( 'Go To Dashboard', 'htmega-addons' ),
                    'enable_all' => __( 'Enable All', 'htmega-addons' ),
                    'disable_all' => __( 'Disable All', 'htmega-addons' ),
                ],
                'welcome' => [
                    'title' => __( 'Welcome To HT Mega', 'htmega-addons' ),
                    'description' => __( 'Thank You for choosing HT Mega for Elementor. Follow these simple steps of easy setup wizard & enjoy your Elementor web-building experience now!', 'htmega-addons' ),
                    'options' => [
                        'basic' => [
                            'title' => __( 'Basic', 'htmega-addons' ),
                            'recommended' => [
                                'status' => true,
                                'text' => __( 'Recommended', 'htmega-addons' )
                            ],
                            'description' => __( 'General widgets will be activated to build your website. Best suited for lightweight-fast starter websites.', 'htmega-addons' ),
                        ],
                        'advanced' => [
                            'title' => __( 'Advanced', 'htmega-addons' ),
                            'recommended' => [
                                'status' => false,
                                'text' => __( 'Recommended', 'htmega-addons' )
                            ],
                            'description' => __( 'Build complex websites with the advance functionalities of HT Mega. All dynamic elements will be activated in this option.', 'htmega-addons' ),
                        ],
                        'custom' => [
                            'title' => __( 'Custom', 'htmega-addons' ),
                            'recommended' => [
                                'status' => false,
                                'text' => __( 'Recommended', 'htmega-addons' )
                            ],
                            'description' => __( 'Configure the elements of HT mega according to your preferences to make your website engaging & stand out.', 'htmega-addons' ),
                        ],
                    ],
                    'data_collection_text' => __( 'By continuing, you agree to allow this plugin to collect some of your data for the purpose of improving your experience.', 'htmega-addons' ),
                    'what_we_collect' => __( 'What We Collect', 'htmega-addons' ),
                    'data_collection_info' => __( 'We gather basic, non-sensitive information to ensure the plugin works smoothly on your site. This includes your site\'s URL, the versions of WordPress and PHP you\'re using, and a list of your installed plugins and themes. Additionally, we collect your email address to send you exclusive discounts and important updates. This data helps us ensure that HT Mega stays up-to-date and compatible with the most popular plugins and themes. Your privacy is important to us. We will never send you spam, and we handle your data with the utmost care.', 'htmega-addons' ),
                    'privacy_policy_link' => 'https://wphtmega.com/privacy-policy/',
                    'privacy_policy_text' => __( 'Privacy Policy', 'htmega-addons' ),
                    'proceed_button' => __( 'Proceed to Next', 'htmega-addons' ),
                    'skip_button' => __( 'Skip & Go to Dashboard', 'htmega-addons' ),
                ],
                'elements' => [
                    'title' => __( 'Activate the Elements You Require', 'htmega-addons' ),
                    'description' => __( 'Select the elements you want to use in your website. You can enable or disable them anytime later.', 'htmega-addons' ),
                    'view_all' => __( 'View All Elements', 'htmega-addons' ),
                    'less_all' => __( 'Show Less Elements', 'htmega-addons' ),
                ],
                'modules' => [
                    'title' => __( 'Select the Modules You Require Now', 'htmega-addons' ),
                    'description' => __( 'Enable/Disable the Modules anytime you want from the HT Mega Dashboard.', 'htmega-addons' ),
                ],
                'gopro' => [
                    'title' => __( '🚀  Get HT Mega Pro for Just $1 in the First Month - Cancel Anytime', 'htmega-addons' ),
                    'subtitle' => __( '💡 All Features. Zero Risk. Just $1 to Begin.', 'htmega-addons' ),
                    'offer_badge' => __( 'Exclusive Deal - Full Pro Access for $1 in Your First Month!', 'htmega-addons' ),
                    'section_title' => __( 'Explore Premium Features', 'htmega-addons' ),
                    'description' => __( 'You can get a lot more out of it upgrading to premium. Get all features', 'htmega-addons' ),
                    'features' => [
                        'advanced_slider' => __( 'Advanced Slider', 'htmega-addons' ),
                        'conditional_display' => __( 'Conditional Display', 'htmega-addons' ),
                        'theme_builder' => __( 'Theme Builder', 'htmega-addons' ),
                        'megamenu_builder' => __( 'Megamenu Builder', 'htmega-addons' ),
                        'floating_effects' => __( 'Floating Effects', 'htmega-addons' ),
                        'custom_css' => __( 'Custom CSS', 'htmega-addons' ),
                        'dynamic_gallery' => __( 'Dynamic Gallery', 'htmega-addons' ),
                        'cross_domain_copy' => __( 'Live Copy Paste', 'htmega-addons' ),
                    ],
                    'more_features_text' => __( '& Many More Features...', 'htmega-addons' ),
                    'value_props' => [
                        'widget_experience' => [
                            'title' => __( 'Experience 135+ Widgets & 14 Modules', 'htmega-addons' ),
                            'desc'  => __( 'No more Elementor limits!', 'htmega-addons' )
                        ],
                        'risk_free' => [
                            'title' => __( 'Risk-Free, Just $1 First Month', 'htmega-addons' ),
                            'desc'  => __( 'Try it for 30 days, cancel anytime.', 'htmega-addons' )
                        ],
                        'lifetime_access' => [
                            'title' => __( 'Full Access & Updates', 'htmega-addons' ),
                            'desc'  => __( 'Try everything for 30 days with a $1 payment.', 'htmega-addons' )
                        ]
                    ],
                    'upgrade_button' => __( 'ACTIVATE FOR $1 NOW', 'htmega-addons' ),
                    'upgrade_url' => 'https://wphtmega.com/one-dollar-trial/?utm_source=onedollar&utm_medium=onboarding',
                ],
                'templates' => [
                    'title' => sprintf( __( 'Explore %s Templates', 'htmega-addons' ), '<span class="gradient-text">900+</span>' ),
                    'description' => __( 'Design stunning websites effortlessly with HT Mega\'s exclusive collection of templates.', 'htmega-addons' ),
                    'features' => [
                        'professionally_designed' => [
                            'title' => __( 'Professionally Designed Templates', 'htmega-addons' ),
                            'description' => __( 'Access a variety of ready-to-use templates for every niche, from business to e-commerce, blogs, and more.', 'htmega-addons' ),
                        ],
                        'one_click_import' => [
                            'title' => __( 'One-Click Import', 'htmega-addons' ),
                            'description' => __( 'Import complete pages or sections in seconds to kickstart your website design with minimal effort.', 'htmega-addons' ),
                        ],
                        'fully_customizable' => [
                            'title' => __( 'Fully Customizable', 'htmega-addons' ),
                            'description' => __( 'Modify every template to match your branding, ensuring a unique and personalized website.', 'htmega-addons' ),
                        ],
                    ],
                ],
                'congrats' => [
                    'title' => __( 'You Have Completed Your Setup for HT Mega', 'htmega-addons' ),
                    'go_to_dashboard' => __( 'Go To Dashboard', 'htmega-addons' ),
                ],
            ],
        ];
    }

}
