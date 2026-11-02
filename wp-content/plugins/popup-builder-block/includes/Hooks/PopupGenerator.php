<?php
namespace PopupBuilderBlock\Hooks;

defined( 'ABSPATH' ) || exit;

use PopupBuilderBlock\Helpers\Utils;
use PopupBuilderBlock\Helpers\UserAgent;
use PopupBuilderBlock\Helpers\PopupConditions;

class PopupGenerator {

	private static $post_type = 'popupkit-campaigns';

	/**
	 * class constructor.
	 * private for singleton
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'wp_footer', array( $this, 'render_popup' ) );
	}

	/**
	 * Render the popup.
	 *
	 * @return void
	 */
	public function render_popup(): void {
		if ( is_singular( Utils::post_type() ) ) {
			return;
		}

		// Get the current post ID.
		$current_post_id = get_the_ID();

		$args = array(
			'post_type'      => self::$post_type,
			'posts_per_page' => -1,
			'post_status'    => 'publish',
			'meta_query'     => array(
				'relation' => 'AND',
				array(
					'key'     => 'status',
					'value'   => true,
					'compare' => '=',
				),
				array(
					'key'     => 'openTrigger',
					'value'   => 'none',
					'compare' => '!=',
				),
				array(
					'key'     => 'displayDevice',
					'value'   => UserAgent::get_device(), // Searching for a specific value in a serialized array of data
					'compare' => 'LIKE',
				),
			),
		);

		$posts = get_posts( $args );
		foreach ( $posts as $post ) {
			// Check if the popup should be displayed.
			$popup_conditions    = new PopupConditions( $post->ID, $current_post_id );
			$display_conditions  = $popup_conditions->display_conditions();
			$freequency_settings = $popup_conditions->freequency_settings();
			$ip_blocking         = $popup_conditions->ip_blocking();
			$geolocation_targeting = $popup_conditions->geolocation_targeting();
			
			if (! $display_conditions || ! $freequency_settings || $ip_blocking || ! $geolocation_targeting) {
				continue; // If any of the conditions are not met, skip to the next post.
			}

			// Outputs the popup iframe HTML.
			echo self::iframe( $post->ID ); /* phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped */
		}
	}

	public static function iframe( $post_id ) {
		flush_rewrite_rules();

		$iframe = sprintf(
			'<iframe class="popupkit" id="popupkit-%1$d" src="%2$s" style="%3$s"></iframe>',
			$post_id,
			add_query_arg( 'iframe', 'true', get_the_permalink( $post_id ) ),
			'display:none;',
		);

		return $iframe; 
	}
}
