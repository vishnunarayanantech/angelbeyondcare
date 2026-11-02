<?php
/**
 * Preview script for html markup generator
 *
 * @package tutor-kirki-elements
 */

namespace TutorLMSKirki;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Forntend
 */
class Frontend {

	/**
	 * Class constructor
	 */
	public function __construct() {
		new Ajax();
	}
}
