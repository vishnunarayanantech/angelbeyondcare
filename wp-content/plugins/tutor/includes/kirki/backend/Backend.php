<?php
/**
 * Preview script for html markup generator
 *
 * @package tutor-kirki-elements
 */

namespace TutorLMSKirki;

use TutorLMSKirki\ElementGenerator\ElementGenerator;
use TUTOR\Input;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Backend
 *
 * @package TutorLMSKirki
 */
class Backend {


	/**
	 * Backend constructor.
	 */
	public function __construct() {
		$this->run();
	}

	/**
	 * Run the backend
	 */
	public function run() {
		$action = Input::get( 'action' );
		if ( 'kirki' === $action ) {
			$load_for = Input::get( 'load_for' );
			if ( 'kirki-iframe' === $load_for ) {
				new Iframe();
			} else {
				new Editor();
			}
		}
		new ElementGenerator();
		new Pages();
		new Hooks();
	}
}
