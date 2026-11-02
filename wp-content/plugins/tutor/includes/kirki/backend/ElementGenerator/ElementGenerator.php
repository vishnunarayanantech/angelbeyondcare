<?php
/**
 * Preview script for html markup generator
 *
 * @package tutor-kirki-elements
 */

namespace TutorLMSKirki\ElementGenerator;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class ElementGenerator
 *
 * This class is used to define all helper functions.
 */
class ElementGenerator {

	/**
	 * ElementGenerator constructor.
	 */
	public function __construct() {
		add_filter( 'kirki_element_generator_' . TDE_APP_PREFIX, array( $this, 'kirki_element_generator' ), 10, 2 );
	}

	/**
	 * Kirki element generator
	 * This function is used to generate the kirki elements
	 *
	 * @param string $string string.
	 * @param array  $props array. //this props contains all the attributes of the kirki element.
	 *
	 * @return string html.
	 */
	public function kirki_element_generator( $string, $props ) {
		$preview = new Preview( $props );
		return $preview->generate_elements();
	}
}
