<?php

namespace PopupBuilderBlock\Admin;

defined( 'ABSPATH' ) || exit;

use PopupBuilderBlock\Helpers\Utils;

/**
 * The admin class
 */
class Admin {

	/**
	 * @access private
	 * @var string slug of the admin menu
	 * @since 1.0.0
	 */
	private $menu_link_part;
	private $menu_slug = 'popupkit';

	/**
	 * Initialize the class
	 */
	public function __construct() {
		$this->menu_link_part = admin_url( 'admin.php?page=popupkit' );

		add_action( 'admin_menu', array( $this, 'add_admin_menu' ), 9 );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ), 9 );
	}

	/**
	 * Add the admin menu
	 */
	public function add_admin_menu() {
		add_menu_page(
			esc_html__( 'PopupKit', 'popup-builder-block' ),
			esc_html__( 'PopupKit', 'popup-builder-block' ),
			'manage_options',
			$this->menu_slug,
			array( $this, 'dashboard_callback' ),
			POPUP_BUILDER_BLOCK_PLUGIN_URL . 'includes/Admin/icons/admin-menu.svg',
			26
		);

		add_submenu_page(
			$this->menu_slug,
			esc_html__( 'Campaign', 'popup-builder-block' ),
			esc_html__( 'Campaign', 'popup-builder-block' ),
			'manage_options',
			'edit.php?post_type=popupkit-campaigns',
			'',
			// 1
		);

		add_submenu_page(
			$this->menu_slug,
			esc_html__( 'Subscribers', 'popup-builder-block' ),
			esc_html__( 'Subscribers', 'popup-builder-block' ),
			'manage_options',
			$this->menu_link_part . '#subscribers',
		);

		add_submenu_page(
			$this->menu_slug,
			esc_html__( 'Analytics', 'popup-builder-block' ),
			esc_html__( 'Analytics', 'popup-builder-block' ),
			'manage_options',
			$this->menu_link_part . '#analytics',
		);

		add_submenu_page(
			$this->menu_slug,
			esc_html__( 'Integration', 'popup-builder-block-pro' ),
			esc_html__( 'Integration', 'popup-builder-block-pro' ),
			'manage_options',
			$this->menu_link_part . '#integration'
		);

		add_submenu_page(
			$this->menu_slug,
			esc_html__( 'Templates', 'popup-builder-block' ),
			esc_html__( 'Templates', 'popup-builder-block' ),
			'manage_options',
			$this->menu_link_part . '#templates'
		);

		add_submenu_page(
			$this->menu_slug,
			esc_html__( 'Settings', 'popup-builder-block' ),
			esc_html__( 'Settings', 'popup-builder-block' ),
			'manage_options',
			$this->menu_link_part . '#settings'
		);

		remove_submenu_page( $this->menu_slug, $this->menu_slug );
	}

	/**
	 * Callback function to render the Dashboard page
	 */
	public function dashboard_callback() {
		?>
		<div class="wrap">
			<div class="pbb-dashboard"></div>
		</div>
		<?php
	}

	/**
	 * Enqueue the admin scripts
	 */
	public function enqueue_admin_scripts( $hook ) {
		// Get the current screen
		$screen = get_current_screen();

		// // Check if we are on the edit or add new screen for our custom post type
		if ( in_array( $screen->post_type, Utils::post_type() ) && strpos( $hook, 'popupkit_page' ) === false ) {

			$assets = include POPUP_BUILDER_BLOCK_PLUGIN_DIR . 'build/admin/campaign/index.asset.php';

			if ( isset( $assets['version'] ) ) {
				// Enqueue the stylesheet
				wp_enqueue_style(
					'popup-builder-block-admin',
					POPUP_BUILDER_BLOCK_PLUGIN_URL . 'build/admin/campaign/style-index.css',
					array(),
					$assets['version']
				);

				// Enqueue the JavaScript
				wp_enqueue_script(
					'popup-builder-block-admin',
					POPUP_BUILDER_BLOCK_PLUGIN_URL . 'build/admin/campaign/index.js',
					$assets['dependencies'],
					$assets['version'],
					true
				);
			}

			wp_localize_script(
				'wp-block-editor',
				'popupBuilderBlock',
				array(
					'screen'      => $hook,
					'adminUrl'    => esc_url( admin_url( '/' ) ),
					'version'     => POPUP_BUILDER_BLOCK_PLUGIN_VERSION,
					'has_pro'     => defined( 'POPUP_BUILDER_BLOCK_PRO_PLUGIN_VERSION' ),
					'activeTheme' => wp_get_theme()->get( 'Name' ),
					'hasWoocommerce' => class_exists( 'WooCommerce' ) ? true : false,
					'hasEasyDigitalDownloads' => class_exists( 'Easy_Digital_Downloads' ) ? true : false,
				)
			);
		}

		if ( $hook === 'toplevel_page_popupkit' ) {
			$assets = include POPUP_BUILDER_BLOCK_PLUGIN_DIR . 'build/admin/dashboard/index.asset.php';

			if ( isset( $assets['version'] ) ) {
				// Enqueue the stylesheet
				wp_enqueue_style(
					'popup-builder-block-dashboard',
					POPUP_BUILDER_BLOCK_PLUGIN_URL . 'build/admin/dashboard/index.css',
					array( 'wp-components' ),
					$assets['version']
				);

				// Enqueue the JavaScript
				wp_enqueue_script(
					'popup-builder-block-dashboard',
					POPUP_BUILDER_BLOCK_PLUGIN_URL . 'build/admin/dashboard/index.js',
					$assets['dependencies'],
					$assets['version'],
					true
				);

				wp_localize_script(
					'popup-builder-block-dashboard',
					'popupBuilderBlock',
					array(
						'adminUrl' => esc_url( admin_url( '/' ) ),
						'has_pro'  => defined( 'POPUP_BUILDER_BLOCK_PRO_PLUGIN_VERSION' ),
						'version'     => POPUP_BUILDER_BLOCK_PLUGIN_VERSION,
						'pro_version' => defined('POPUP_BUILDER_BLOCK_PRO_PLUGIN_VERSION') ? POPUP_BUILDER_BLOCK_PRO_PLUGIN_VERSION : '1.0.0',
					)
				);
			}

			// Google Heebo Font
			wp_enqueue_style(
				'popupkit-google-fonts',
				'https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&display=swap',
			);
		}
	}
}
