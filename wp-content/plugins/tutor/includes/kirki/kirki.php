<?php
defined( 'ABSPATH' ) || exit;

use TutorLMSKirki\Backend;
use TutorLMSKirki\Frontend;
use TutorLMSKirki\Helper;

// Prevent loading when the old Kirki plugin is active.
if ( ! class_exists( 'KirkiProMain' ) ) {
	return;
}

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '../../../classes/Input.php'; // Input helper class not loaded, thats why we need to include it manually.

/**
 * Kirki element source and filter hook will use using this prefix.
 * this prefix value is same as javascript APP_PREFIX variable.
 */
define( 'TDE_APP_PREFIX', 'tde' );
define( 'TDE_APP_VERSION', '1.0.2' );
define( 'TDE_BASE', home_url() );
define( 'TDE_PLUGIN_ROOT_BASE', plugin_dir_url( __FILE__ ) );

/**
 * Tutor Kirki Elements
 *
 * @package     tutor-kirki-elements
 */
class TutorKirkiElements {
	/**
	 * Initializes a singleton instance
	 *
	 * @return \Kirki
	 */
	public static function init() {
		static $instance = false;

		if ( ! $instance ) {
			$instance = new self();
		}

		register_activation_hook( __FILE__, array( new Helper(), 't_d_e_activate' ) );

		new Backend();
		new Frontend();

		return $instance;
	}
}

TutorKirkiElements::init();
