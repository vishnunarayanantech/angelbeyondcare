<?php

namespace PopupBuilderBlock\Libs;

defined( 'ABSPATH' ) || exit;

use PopupKitScopedDependencies\Wpmet\UtilityPackage;
use PopupBuilderBlock\Helpers\Utils;

class UtilityPackages {

	/**
	 * UtilityPackages class constructor.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		// To prevent the "doing_it_wrong" notice from being displayed
		// when the "_load_textdomain_just_in_time" function is called.
		add_filter(
			'doing_it_wrong_trigger_error',
			function ( $doing_it_wrong, $function_name ) {
				if ( '_load_textdomain_just_in_time' === $function_name ) {
					return false;
				}

				return $doing_it_wrong;
			},
			10,
			2
		);

		$this->show_our_plugins();

		/**
		 * Checks if the 'user_consent' setting is enabled.
		 * If it is disabled, the function returns without performing any further actions.
		 *
		 * @return void
		 */
		if ( ! Utils::get_settings( 'user_consent' ) ) {
			return;
		}

		/**
		 * Show WPMET stories widget in the dashboard
		 */
		$filter_string = '';

		/**
		 * Initializes the Notice utility package.
		 *
		 * This function initializes the Notice utility package, allowing you to display notices in your WordPress plugin or theme.
		 * It is recommended to call this function during the initialization phase of your plugin or theme.
		 *
		 * @since 1.0.0
		 */
		UtilityPackage\Notice\Notice::init();

		/**
		 * UtilityPackages.php
		 *
		 * This file contains the code for the UtilityPackages class, which is responsible for setting up and configuring the utility packages for the Popup Builder Block plugin.
		 *
		 * @package Popup_Builder_Block
		 * @subpackage Includes\Libs
		 */

		UtilityPackage\Stories\Stories::instance( 'popup-builder-block' )   # @plugin_slug
		// ->is_test(true)                                                      # @check_interval
		->set_filter( $filter_string )                                          # @active_plugins
		->set_plugin( 'Popupkit', 'https://wpmet.com/plugin/popupkit/' )  # @plugin_name  @plugin_url
		->set_api_url( 'https://api.wpmet.com/public/stories/' )                # @api_url_for_stories
		->call();

		/**
		 * Show WPMET banner (codename: jhanda)
		 *
		 * This code snippet is responsible for displaying the WPMET banner, also known as codename "jhanda".
		 * It initializes the UtilityPackage\Banner\Banner class and sets various properties and options.
		 * The banner is associated with the 'testplugin' plugin slug and is set to run in test mode.
		 * The active plugins are filtered based on the provided filter string.
		 * The API URL for the banners is set to 'https://api.wpmet.com/public/jhanda'.
		 * The allowed screen for the banner is set to 'toplevel_page_popupkit'.
		 * Finally, the `call()` method is invoked to display the banner.
		 *
		 * @package popup_builder_block
		 * @subpackage Libs
		 * @since 1.0.0
		 */
		UtilityPackage\Banner\Banner::instance( 'popup-builder-block' )     // @plugin_slug
		// ->is_test(true)                                                      # @check_interval
		->set_filter( ltrim( $filter_string, ',' ) )                            // @active_plugins
		->set_api_url( 'https://api.wpmet.com/public/jhanda' )                  // @api_url_for_banners
		->set_plugin_screens( 'toplevel_page_popupkit' )                     // @set_allowed_screen
		->call();

		/**
		 * Ask for Ratings
		 *
		 * This code initializes the utility package for asking users to rate the Popup Builder Block plugin.
		 * It sets various properties such as the plugin logo, plugin name and URL, allowed screens, priority,
		 * time interval, and conditions for displaying the rating prompt.
		 *
		 * @package popup_builder_block
		 * @subpackage Libs
		 */
		UtilityPackage\Rating\Rating::instance( 'popup-builder-block' )                    // @plugin_slug
		->set_plugin_logo( 'https://ps.w.org/popup-builder-block/assets/icon-128x128.png' )       // @plugin_logo_url
		->set_plugin( 'Popupkit', 'https://wpmet.com/wordpress.org/rating/popup-builder-block' )   // @plugin_name  @plugin_url
		->set_allowed_screens( 'toplevel_page_popupkit' )                      // @set_allowed_screen
		->set_priority( 30 )                                                          // @priority
		->set_first_appear_day( 7 )                                                   // @time_interval_days
		->set_condition( true )                                                       // @check_conditions
		->set_support_url( 'https://wpmet.com/support-ticket-form/' )                 // @support_url
		->call();
	}

	private function show_our_plugins() {
		/**
		 * Show our plugins menu for others wpmet plugins
		 */
		UtilityPackage\Plugins\Plugins::instance()->init( 'popup-builder-block' ) // @text_domain
		->set_parent_menu_slug( 'popupkit' ) // @plugin_slug
		->set_submenu_name(
			esc_html__( 'Our Plugins', 'popup-builder-block' )
		) // @submenu_name (optional- default: Our Plugins)
		->set_section_title(
			esc_html__( 'Take Your WordPress Website To Next Level!', 'popup-builder-block' )
		) // @section_title (optional)
		->set_section_description(
			esc_html__( 'Our diverse range of plugins has every solution for WordPress, Gutenberg, Elementor, and WooCommerce.', 'popup-builder-block' )
		) // @section_description (optional)
		->set_items_per_row( 4 ) // @items_per_row (optional- default: 6)
		->set_plugins(
			array(
				'elementskit-lite/elementskit-lite.php' => array(
					'name' => esc_html__( 'ElementsKit', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/elementskit-lite/',
					'icon' => 'https://ps.w.org/elementskit-lite/assets/icon-256x256.gif?rev=2518175',
					'desc' => esc_html__( 'All-in-one Elementor addon trusted by 1 Million+ users, makes your website builder process easier with ultimate freedom.', 'popup-builder-block' ),
					'docs' => 'https://wpmet.com/docs/elementskit/',
				),
				'gutenkit-blocks-addon/gutenkit-blocks-addon.php' => array(
					'name' => esc_html__( 'GutenKit', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/gutenkit-blocks-addon/',
					'icon' => 'https://ps.w.org/gutenkit-blocks-addon/assets/icon-256x256.gif?rev=2518175',
					'desc' => esc_html__( 'Page Builder Blocks, Patterns, and Templates for Gutenberg Block Editor.', 'popup-builder-block' ),
					'docs' => 'https://wpmet.com/docs/elementskit/',
				),
				'getgenie/getgenie.php'                 => array(
					'name' => esc_html__( 'GetGenie AI', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/getgenie/',
					'icon' => 'https://ps.w.org/getgenie/assets/icon-256x256.gif?rev=2798355',
					'desc' => esc_html__( 'Your personal AI assistant for content and SEO. Write content that ranks on Google with NLP keywords and SERP analysis data.', 'popup-builder-block' ),
					'docs' => 'https://getgenie.ai/docs/',
				),
				'shopengine/shopengine.php'             => array(
					'name' => esc_html__( 'ShopEngine', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/shopengine/',
					'icon' => 'https://ps.w.org/shopengine/assets/icon-256x256.gif?rev=2505061',
					'desc' => esc_html__( 'Complete WooCommerce solution for Elementor to fully customize any pages including cart, checkout, shop page, and so on.', 'popup-builder-block' ),
					'docs' => 'https://wpmet.com/doc/shopengine/',
				),
				'metform/metform.php'                   => array(
					'name' => esc_html__( 'MetForm', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/genie-image-ai/',
					'icon' => 'https://ps.w.org/metform/assets/icon-256x256.png?rev=2544152',
					'desc' => esc_html__( 'Drag & drop form builder for Elementor to create contact forms, multi-step forms, and more — smoother, faster, and better!', 'popup-builder-block' ),
					'docs' => 'https://wpmet.com/doc/metform/',
				),
				'emailkit/EmailKit.php'                 => array(
					'name' => esc_html__( 'EmailKit', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/genie-image-ai/',
					'icon' => 'https://ps.w.org/emailkit/assets/icon-256x256.png?rev=3003571',
					'desc' => esc_html__( 'Advanced email customizer for WooCommerce and WordPress. Build, customize, and send emails from WordPress to boost your sales!', 'popup-builder-block' ),
					'docs' => 'https://wpmet.com/doc/emailkit/',
				),
				'wp-social/wp-social.php'               => array(
					'name' => esc_html__( 'WP Social', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/wp-social/',
					'icon' => 'https://ps.w.org/wp-social/assets/icon-256x256.png?rev=2544214',
					'desc' => esc_html__( 'Add social share, login, and engagement counter — unified solution for all social media with tons of different styles for your website.', 'popup-builder-block' ),
					'docs' => 'https://wpmet.com/doc/wp-social/',
				),
				'wp-ultimate-review/wp-ultimate-review.php' => array(
					'name' => esc_html__( 'WP Ultimate Review', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/wp-ultimate-review/',
					'icon' => 'https://ps.w.org/wp-ultimate-review/assets/icon-256x256.png?rev=2544187',
					'desc' => esc_html__( 'Collect and showcase reviews on your website to build brand credibility and social proof with the easiest solution.', 'popup-builder-block' ),
					'docs' => 'https://wpmet.com/doc/wp-ultimate-review/',
				),
				'wp-fundraising-donation/wp-fundraising.php' => array(
					'name' => esc_html__( 'FundEngine', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/wp-fundraising-donation/',
					'icon' => 'https://ps.w.org/wp-fundraising-donation/assets/icon-256x256.png?rev=2544150',
					'desc' => esc_html__( 'Create fundraising, crowdfunding, and donation websites with PayPal and Stripe payment gateway integration.', 'popup-builder-block' ),
					'docs' => 'https://wpmet.com/doc/fundengine/',
				),
				'blocks-for-shopengine/shopengine-gutenberg-addon.php' => array(
					'name' => esc_html__( 'Blocks for ShopEngine', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/blocks-for-shopengine/',
					'icon' => 'https://ps.w.org/blocks-for-shopengine/assets/icon-256x256.gif?rev=2702483',
					'desc' => esc_html__( 'All in one WooCommerce solution for Gutenberg! Build your WooCommerce pages in a block editor with full customization.', 'popup-builder-block' ),
					'docs' => 'https://wpmet.com/doc/shopengine/shopengine-gutenberg/',
				),
				'genie-image-ai/genie-image-ai.php'     => array(
					'name' => esc_html__( 'Genie Image', 'popup-builder-block' ),
					'url'  => 'https://wordpress.org/plugins/genie-image-ai/',
					'icon' => 'https://ps.w.org/genie-image-ai/assets/icon-256x256.png?rev=2977297',
					'desc' => esc_html__( 'AI-powered text-to-image generator for WordPress with OpenAI’s DALL-E 2 technology to generate high-quality images in one click.', 'popup-builder-block' ),
					'docs' => 'https://getgenie.ai/docs/',
				),
			)
		) // @plugins
		->call();
	}
}
