<?php

namespace PopupBuilderBlock\Routes;

defined( 'ABSPATH' ) || exit;

use PopupBuilderBlock\Helpers\DataBase;

class Subscribers extends Api {

	protected function get_routes(): array {
        return [
            [
                'endpoint'            => '/subscribers',
                'methods'             => 'POST',
                'callback'            => 'increase_subscribers',
				'permission_callback' => '__return_true',
            ],
            [
                'endpoint'            => '/subscribers',
                'methods'             => 'GET',
                'callback'            => 'get_subscribers_data',
            ],
            [
                'endpoint'            => '/subscribers',
                'methods'             => 'DELETE',
                'callback'            => 'delete_subscribers_data',
            ]
        ];
    }

	public function increase_subscribers( $param ) {
		// Decode request body
		$data = json_decode($param->get_body(), true);
		// Sanitize inputs
		$campaign_id = sanitize_key($data['popup_id'] ?? '');
		$campaign_title = get_the_title($campaign_id);
		$email       = sanitize_email($data['email'] ?? '');
		$name        = sanitize_text_field($data['name'] ?? '');
		$form_data   = json_encode($data['form_data'] ?? []);
		$user_data   = $data['user_data'] ?? [];

		// Prepare data for database insertion
		$subscriber_data = compact('campaign_id', 'campaign_title', 'email', 'name', 'form_data', 'user_data');

		// Insert into the database
		if (!DataBase::insertDB('pbb_subscribers', $subscriber_data)) {
			return rest_ensure_response([
				'status'  => 'error',
				'message' => esc_html__('Failed to insert subscriber', 'popup-builder-block')
			]);
		}

		// Include Mailchimp data in the subscriber data before applying the filter
		if (isset($data['mailchimp'])) {
			$subscriber_data['mailchimp'] = $data['mailchimp'];
		}
		
		// Include fluentCRM data in the subscriber data before applying the filter
		if (isset($data['fluentCRM'])) {
			$subscriber_data['fluentCRM'] = $data['fluentCRM'];
		}

		// Include activeCampaign data in the subscriber data before applying the filter
		if (isset($data['activeCampaign'])) {
			$subscriber_data['activeCampaign'] = $data['activeCampaign'];
		}

		// Include zapier data in the subscriber data before applying the filter
		if (isset($data['zapier'])) {
			$subscriber_data['zapier'] = $data['zapier'];
		}

		// Include hubspot data in the subscriber data before applying the filter
		if (isset($data['hubspot'])) {
			$subscriber_data['hubspot'] = $data['hubspot'];
		}

		// Apply integration filter
		do_action('pbb_form_integration_submit', $subscriber_data);

		return rest_ensure_response([
			'status'  => 'success',
			'data'    => $subscriber_data,
			'message' => esc_html__('Form data submitted successfully', 'popup-builder-block')
		]);
	}

	public function get_subscribers_data( $param ) {
		$param = $param->get_params();
		$where = '';
		$limit = 0;
		$order_by = '';
		if ( isset( $param['start'] ) && isset( $param['end'] ) ) {
			$start = $param['start'];
			$end   = $param['end'];
			$where = "date BETWEEN '$start 00:00:00' AND '$end 23:59:59'";
		}

		if ( isset( $param['campaign_id'] ) ) {
			$campaign_id = $param['campaign_id'];
			$where      .= " AND campaign_id = $campaign_id";
		}

		if ( isset( $param['limit'] ) ) {
			$limit = $param['limit'];
		}

		if ( isset( $param['order_by'] ) ) {
			$order_by = $param['order_by'];
		}

		$data = DataBase::getDB( "*", 'pbb_subscribers', $where, $limit, false, $order_by );

		if ( ! $data ) {
			return array(
				'status'  => 'error',
				'message' => 'No data found',
			);
		}

		return rest_ensure_response(
			array(
				'status'  => 'success',
				'data'    => $data,
				'message' => esc_html__( 'Form data fetched successfully', 'popup-builder-block' ),
			)
		);
	}

	public function delete_subscribers_data( $param ) {
		$id = $param['id'];
		$id = json_decode( $id, true );

		$deleted = DataBase::deleteDB( 'pbb_subscribers', $id );

		if ( ! $deleted ) {
			return array(
				'status'  => 'error',
				'message' => 'Failed to delete subscribers',
			);
		}

		return rest_ensure_response(
			array(
				'status'  => 'success',
				'message' => esc_html__( 'Form data deleted successfully', 'popup-builder-block' ),
			)
		);
	}
}
