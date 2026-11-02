<?php

namespace PopupBuilderBlock\Routes;

defined( 'ABSPATH' ) || exit;

class FetchDemo extends Api {

	protected function get_routes(): array {
        return [
            [
                'endpoint'            => '/live-preview',
                'methods'             => 'POST',
                'callback'            => 'fetch_external_content',
				'permission_callback' => '__return_true',
			],
			[
				'endpoint'            => '/live-preview',
				'methods'             => 'GET',
				'callback'            => 'get_popup_preview',
				'permission_callback' => '__return_true',
			]
        ];
    }

	public function fetch_external_content( \WP_REST_Request $request ) {
		$url = $request->get_param( 'url' );

		if ( ! filter_var( $url, FILTER_VALIDATE_URL ) ) {
			return new \WP_REST_Response( array( 'error' => 'Invalid URL' ), 400 );
		}

		// Fetch the content using wp_remote_get
		$new_url  = add_query_arg( 'preview', 'true', $url );
		$response = wp_remote_get( $new_url );
		if ( is_wp_error( $response ) ) {
			return new \WP_REST_Response( array( 'error' => 'Error fetching content' ), 500 );
		}
		// Return the fetched content
		$body = wp_remote_retrieve_body( $response );
		$body = preg_replace( '/type="[^"]+-text\/javascript"/', 'type="text/javascript"', $body );
		return new \WP_REST_Response( array( 'content' => $body ), 200 );
	}

	public function get_popup_preview(\WP_REST_Request $request) {
		$popup_id = $request->get_param( 'id' );
		if ( empty( $popup_id ) ) {
			return new \WP_REST_Response( array( 'error' => 'Invalid Popup ID' ), 400 );
		}

		$iframe = \PopupBuilderBlock\Hooks\PopupGenerator::iframe( $popup_id );
		 
		return new \WP_REST_Response( array( 'data' => $iframe ), 200 );
	}
}
