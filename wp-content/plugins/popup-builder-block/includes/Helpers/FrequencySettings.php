<?php

namespace PopupBuilderBlock\Helpers;

defined( 'ABSPATH' ) || exit;

class FrequencySettings {
	public static $is_frequency_matched = false;

	public function __construct( $post_meta, $popup_id ) {
		self::$is_frequency_matched = $this->frequency_settings( $post_meta, $popup_id );
	}

	private function getCookie( string $name ) {
		return isset( $_COOKIE[ $name ] ) ? sanitize_text_field( wp_unslash( $_COOKIE[ $name ] ) ) : null;
	}

	private function checkFrequency( string $displayFrequency, $popup_id ) {
		switch ( $displayFrequency ) {
			case 'once-a-day':
				if ( $this->getCookie( "pbb_viewed_{$popup_id}" ) !== 'true' ) {
					return true;
				}
				return false;
			case 'every-visit':
				return true;
			case 'every-session':
				if ( $this->getCookie( "pbb_viewed_session_{$popup_id}" ) !== 'true' ) {
					return true;
				}
				return false;
			case 'once-every-few-days':
				if ( $this->getCookie( "pbb_viewed_days_{$popup_id}" ) !== 'true' ) {
					return true;
				}
				return false;
			case 'once-every-few-visits':
				return true;
			default:
				break;
		}
	}

	private function frequency_settings( $post_meta, $popup_id ) {
		$displayFrequency         = $post_meta['displayFrequency'] ?? 'once-a-day';
		$displayVisitor           = $post_meta['displayVisitor'] ?? 'everyone';
		$displayVisitorConvertion = $post_meta['displayVisitorConvertion'] ?? 0;

		if ( $displayVisitorConvertion && $this->getCookie( "pbb_conversion_{$popup_id}" ) == 'true' ) {
			return false;
		}

		switch ( $displayVisitor ) {
			case 'new':
				if ( $this->getCookie( 'pbb_new_visitor' ) !== 'true' && $this->getCookie( 'pbb_old_visitor' ) !== 'true' ) {
					return true;
				}
				return false;

			case 'return':
				if ( $this->getCookie( 'pbb_old_visitor' ) !== 'true' ) {
					return false;
				}
				return $this->checkFrequency( $displayFrequency, $popup_id );

			default:
				return $this->checkFrequency( $displayFrequency, $popup_id );
		}
	}
}
