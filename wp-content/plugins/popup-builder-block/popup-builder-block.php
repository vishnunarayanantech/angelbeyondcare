<?php

/**
 * Plugin Name: PopupKit
 * Description: Powerful Poup Builder block for Gutenberg block editor.
 * Requires at least: 6.1
 * Requires PHP: 7.4
 * Plugin URI: https://wpmet.com/plugin/popupkit
 * Author: Wpmet
 * Version: 2.0.4
 * Author URI: https://wpmet.com/
 * License: GPL-3.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 *
 * Text Domain: popup-builder-block
 * Domain Path: /languages
 *
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Final class for the Popup Builder Block plugin.
 *
 * @since 1.0.0
 */
final class PopupBuilderBlock {
	/**
	 * The version number of the Popup Builder Block plugin.
	 *
	 * @var string
	 */
	const VERSION = '2.0.4';

	/**
	 * \PopupKit class constructor.
	 * private for singleton
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		// Plugins helper constants
		$this->helper_constants();

		// Load after plugin activation
		register_activation_hook(__FILE__, array($this, 'activated_plugin'));

		// Load after plugin deactivation
		register_deactivation_hook(__FILE__, array($this, 'deactivated_plugin'));

		// Add popup link to the plugin action links
		add_filter('plugin_action_links', array( $this, 'add_popup_link'), 10, 2 );

		// Load the scoped vendor autoload file
		require_once POPUP_BUILDER_BLOCK_PLUGIN_DIR . 'scoped/vendor/scoper-autoload.php';

		// Plugin actions
		add_action( 'plugins_loaded', array( $this, 'plugins_loaded' ) );

		// Load the plugin text domain
		add_action( 'init', array( $this, 'load_textdomain' ) );
	}

	/**
	 * Helper method for plugin constants.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function helper_constants() {
		define('POPUP_BUILDER_BLOCK_PLUGIN_VERSION', self::VERSION);
		define('POPUP_BUILDER_BLOCK_PLUGIN_URL', trailingslashit(plugin_dir_url(__FILE__)));
		define('POPUP_BUILDER_BLOCK_PLUGIN_DIR', trailingslashit(plugin_dir_path(__FILE__)));
		define('POPUP_BUILDER_BLOCK_INC_DIR', POPUP_BUILDER_BLOCK_PLUGIN_DIR . 'includes/');
		define('POPUP_BUILDER_BLOCK_DIR', POPUP_BUILDER_BLOCK_PLUGIN_DIR . 'build/blocks/');
		define('POPUP_BUILDER_BLOCK_API_URL', 'https://wpmet.com/plugin/popupkit/wp-content/plugins/');
	}

	/**
	 * Add popup link to the plugin action links.
	 *
	 * @param array  $plugin_actions An array of plugin action links.
	 * @param string $plugin_file    Path to the plugin file relative to the plugins directory.
	 * @return array An array of plugin action links.
	 * @since 1.0.0
	 */
	public function add_popup_link($plugin_actions, $plugin_file) {
		$new_actions = array();
		$plugin_slug = 'popup-builder-block';
		$plugin_name = "{$plugin_slug}/{$plugin_slug}.php";

		if ( $plugin_name === $plugin_file ) {
			$menu_link = 'edit.php?post_type=popupkit-campaigns';
			$new_actions['met_settings'] = sprintf('<a href="%s">%s</a>', esc_url( $menu_link ), esc_html__('Build Popup', 'popup-builder-block'));
		}
	
		return array_merge( $new_actions, $plugin_actions );
	}

	/**
	 * Activated plugin method.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function activated_plugin() {
		\PopupBuilderBlock\Helpers\DataBase::createDB();
		
		flush_rewrite_rules();
	}

	/**
	 * Deactivated plugin method.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function deactivated_plugin() {
		$timestamp = wp_next_scheduled('pbb_daily_event');
    	if($timestamp) wp_unschedule_event($timestamp, 'pbb_daily_event');
		
		flush_rewrite_rules();
	}

	/**
	 * Plugins loaded method.
	 * loads our others classes and textdomain.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function plugins_loaded() {
		/**
		 * Fires before the initialization of the PopupKit plugin.
		 *
		 * This action hook allows developers to perform additional tasks before the PopupKit plugin has been initialized.
		 * @since 1.0.0
		 */
		do_action( 'pbb/before_init' );

		/**
		 * Loads the plugin text domain for the Poup Builder Block.
		 *
		 * @param string $domain   The text domain for the plugin.
		 * @param bool   $network  Whether the plugin is network activated.
		 * @param string $directory The directory where the translation files are located.
		 * @return bool True on success, false on failure.
		 * @since 1.0.0
		 */
		load_plugin_textdomain('popup-builder-block', false, POPUP_BUILDER_BLOCK_PLUGIN_DIR . 'languages/');

		/**
		 * Initializes the Popup Builder Block admin functionality.
		 *
		 * This function creates an instance of the PopupBuilderBlock\Admin\Admin class and initializes the admin functionality for the Popup Builder Block plugin.
		 *
		 * @since 1.0.0
		 */
		new PopupBuilderBlock\Admin\Admin();
		new PopupBuilderBlock\Config\Init();
		new PopupBuilderBlock\Hooks\Init();
		new PopupBuilderBlock\Routes\Init();
		new PopupBuilderBlock\Libs\Init();
	}

	/**
	 * Loads the plugin text domain for the Poup Builder Block.
	 *
	 * This function is responsible for loading the translation files for the plugin.
	 * It sets the text domain to 'popup-builder-block' and specifies the directory
	 * where the translation files are located.
	 *
	 * @param string $domain   The text domain for the plugin.
	 * @param bool   $network  Whether the plugin is network activated.
	 * @param string $directory The directory where the translation files are located.
	 * @return bool True on success, false on failure.
	 * @since 1.0.0
	 */
	public function load_textdomain() {
		load_plugin_textdomain('popup-builder-block', false, POPUP_BUILDER_BLOCK_PLUGIN_DIR . 'languages/');
	}
}

/**
 * Kickoff the plugin
 *
 * @since 1.0.0
 * 
 */
new PopupBuilderBlock();