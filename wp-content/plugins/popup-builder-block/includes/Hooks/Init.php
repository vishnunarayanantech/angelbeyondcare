<?php
namespace PopupBuilderBlock\Hooks;

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
		new Cpt();
		new Enqueue();
		new AssetGenerator();
		new Preview();
		new PopupGenerator();
		new AnalyticsExpiry();
		new FontFamilyGenerator();

		// TODO: will be removed in the future
		new DataMigration();
	}
}
 