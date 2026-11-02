<?php

namespace PopupBuilderBlock\Routes;

defined( 'ABSPATH' ) || exit;

use PopupBuilderBlock\Helpers\DataBase;
use PopupBuilderBlock\Helpers\UserAgent;
use PopupBuilderBlock\Helpers\GeoLocation;

class Popup extends Api {

	protected function get_routes(): array {
        return [
            [
                'endpoint'            => '/popup/campaigns',
                'methods'             => 'GET',
                'callback'            => 'get_campaigns',
            ],
            [
                'endpoint'            => '/popup/date',
                'methods'             => 'GET',
                'callback'            => 'get_date',
            ],
            [
                'endpoint'            => '/popup/logs',
                'methods'             => 'GET',
                'callback'            => 'get_logs',
            ],
            [
                'endpoint'            => '/popup/logs',
                'methods'             => 'POST',
                'callback'            => 'insert_logs',
                'permission_callback' => '__return_true',
            ],
            [
                'endpoint'            => '/popup/logs',
                'methods'             => 'PUT',
                'callback'            => 'update_logs',
                'permission_callback' => '__return_true',
            ],
        ];
    }

	public function get_campaigns() {
		// Fetch all campaigns from the database
		$args = array(
			'post_type'      => 'popupkit-campaigns',
			'posts_per_page' => -1,
			'post_status'    => 'publish',
		);
		$posts = get_posts( $args );

		if ( empty( $posts ) ) {
			return array(
				'status'  => 'error',
				'message' => 'No campaigns found',
			);
		}

		$campaigns = array();
		foreach ( $posts as $post ) {
			$campaigns[] = array(
				'id'    => $post->ID,
				'title' => $post->post_title,
				'date'  => $post->post_date,
			);
		}

		return array(
			'status'     => 'success',
			'data'  => $campaigns,
			'message'    => 'Campaigns fetched successfully',
		);
	}

	public function get_date( $request ) {
		global $wpdb;
		$table = $request['cat'] ?? '';

		if ( empty( $table ) ) {
			return array(
				'status'  => 'error',
				'message' => 'Invalid table name',
			);
		};

		$table_name = $wpdb->prefix . "pbb_$table";
		$data	= $wpdb->get_results(
			$wpdb->prepare("SELECT 
				date
				FROM $table_name LIMIT 1;" // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			)
		);

		if ( empty( $data ) ) {
			return array(
				'status'  => 'error',
				'message' => 'No data found',
			);
		}

		return array(
			'status'  => 'success',
			'data'    => $data,
			'message' => 'Data fetched successfully',
		);
	}

	public function get_logs( $request ) {
		// Validate the request parameters
		$campaign_id = $request['campaignId'] ?? '';
		$start_date  = $request['startDate'] ?? '';
		$end_date    = $request['endDate'] ?? '';
		$method	  = isset($request['type']) ? 'get_' . $request['type'] : '';

		if ( empty( $start_date ) || empty( $end_date ) || empty( $method ) ) {
			return array(
				'status'  => 'error',
				'message' => 'Invalid parameters',
			);
		}

		if ( ! method_exists( DataBase::class, $method ) ) {
			return array(
				'status'  => 'error',
				'message' => 'Invalid type provided',
			);
		}

		// Call the appropriate method dynamically
		$data = DataBase::$method( $campaign_id, $start_date, $end_date );

		if ( empty( $data ) ) {
			return array(
				'status'  => 'error',
				'message' => 'Data not found',
			);
		}

		return array(
			'status'  => 'success',
			'data'    => $data,
			'message' => 'Data fetched successfully',
		);
	}

	public function insert_logs( $request ) {
		$campaign_id = $request['postId'];

		$geoplugin = new GeoLocation();
		$location = ! empty( $geoplugin->city ) ? $geoplugin->city . ', ' . $geoplugin->countryCode : '';
		$browser = UserAgent::get_browser() ?? '';
		$device = UserAgent::get_device();
	

		$user_details = array(
			'browser' => $browser,
			'device'  => $device,
			'country' => $location,
		);


		$current_date = date( 'Y-m-d' );
		$log_id = DataBase::insertOrUpdateLog($campaign_id, $current_date, $device);

		if(!empty($browser)) DataBase::insertOrUpdateBrowser($log_id, $browser);
		if(!empty($location)) DataBase::insertOrUpdateCountry($log_id, $geoplugin->countryCode);

		return array(
			'status'  => 'success',
			'data'    => array(
				'logId' => $log_id,
				'userDetails'	=> $user_details,
			),
			'message' => 'Logs inserted successfully',
		);
	}

	public function update_logs( $request ) {
		if ( ! isset( $request['id'] ) ) {
			return rest_ensure_response(
				array(
					'status'  => 'error',
					'message' => 'Invalid log ID',
				)
			);
		}

		$id   = $request['id'];

		$logs = DataBase::getDB( "*", 'pbb_logs', 'id = ' . $id );

		if ( empty( $logs ) ) {
			return rest_ensure_response(
				array(
					'status'  => 'error',
					'message' => 'Log not found',
				)
			);
		}

		$data = array(
			'converted' => isset( $request['converted'] ) ? $logs[0]->converted + 1 : $logs[0]->converted,
		);

		$updated = DataBase::updateDB( 'pbb_logs', $data, array( 'id' => $id ) );
		DataBase::insertOrUpdateReferrer($id, $request['refferer'] ?? '');

		if ( ! $updated ) {
			return array(
				'status'  => 'error',
				'message' => 'Failed to update logs',
			);
		}

		return array(
			'status'  => 'success',
			'data'    => $updated,
			'message' => 'Logs updated successfully',
		);
	}
}
