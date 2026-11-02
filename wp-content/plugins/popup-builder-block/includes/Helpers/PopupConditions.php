<?php
namespace PopupBuilderBlock\Helpers;

defined( 'ABSPATH' ) || exit;

class PopupConditions {
	private $current_post_id;
	private $popup_id;
	private $post_type = 'popupkit-campaigns';
	private $post_meta;

	public function __construct( $popup_id, $current_post_id ) {
		$this->popup_id        = $popup_id;
		$this->current_post_id = $current_post_id;
		$this->post_meta       = $this->get_clean_post_meta( $popup_id );
	}

	/**
	 * Get all post meta with single unserialized values.
	 *
	 * @param int $post_id The post ID.
	 * @return array Associative array of meta key => value.
	 */
	private function get_clean_post_meta( $post_id ) {
		$raw_meta = get_post_meta( $post_id );
		$clean_meta = [];

		foreach ( $raw_meta as $key => $values ) {
			// WordPress stores meta as arrays even for single values, so we take the first
			$clean_meta[ $key ] = maybe_unserialize( $values[0] );
		}

		return $clean_meta;
	}


	public function display_conditions() {
		$display_conditions = new DisplayConditions( $this->post_meta, $this->current_post_id, $this->post_type, $this->popup_id );
		return $display_conditions::$is_popup_opened;
	}

	public function freequency_settings() {
		$freequency_settings = new FrequencySettings( $this->post_meta, $this->popup_id );
		return $freequency_settings::$is_frequency_matched;
	}

	public function ip_blocking() {
		$ip_blocking = new IPBlocking();
		$ip_blocking->block_ip($this->post_meta, $this->popup_id );
		return $ip_blocking::$is_ip_blocked;
	}

	public function geolocation_targeting() {
		return apply_filters( 'pbb/geolocation/targeting', true, $this->post_meta );
	}
}
