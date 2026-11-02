<?php
namespace PopupBuilderBlock\Routes;

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue registrar.
 *
 * @since 1.0.0
 * @access public
 */
class Init {
	/**
	 * class constructor.
	 * private for singleton
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		new Subscribers();
		new FetchDemo();
		new Popup();
		new SettingsData();
		new ProcessDownload();
	}
}
