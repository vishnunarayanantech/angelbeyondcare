<?php

namespace PopupBuilderBlock\Routes;

use PopupBuilderBlock\Config\SettingsList;

defined( 'ABSPATH' ) || exit;

class SettingsData extends Api {

	protected function get_routes(): array {
		return [
			[
				'endpoint'            => '/settings',
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => 'action_get_settings',
				'permission_callback' => '__return_true',
			],
			[
				'endpoint'            => '/settings',
				'methods'             => \WP_REST_Server::EDITABLE,
				'callback'            => 'action_edit_settings',
				'permission_callback' => '__return_true',
			],
		];
	}

	public function action_get_settings( $request ) {
		/**
		* turn on this section when fully functional from frontend and need Nonce check Permission check
		*/
		if ( ! wp_verify_nonce( $request->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
			return array(
				'status'  => 'fail',
				'message' => array( 'Nonce mismatch.' ),
			);
		}

		if ( ! is_user_logged_in() || ! current_user_can( 'manage_options' ) ) {
			return array(
				'status'  => 'fail',
				'message' => array( 'Access denied.' ),
			);
		}

		$staticsettings = SettingsList::pbb_settings_list();
		$result_data    = get_option( 'pbb-settings-tabs' );

		// Check if $result_data is a valid array
		if ( is_array( $result_data ) ) {
			foreach ( $result_data as $key => $value ) {
				if ( isset( $staticsettings[ $key ] ) ) {
					$staticsettings[ $key ]['status'] = $result_data[ $key ]['status'];
				}
				if ( isset( $result_data[ $key ]['value'] ) ) {
					$staticsettings[ $key ]['value'] = $result_data[ $key ]['value'];
				}
			}
		} else {
			$result_data = array();
		}

		return array(
			'status'   => 'success',
			'settings' => $staticsettings,
			'message'  => array(
				'Settings list has been fetched successfully.',
			),
		);
	}
	public function action_edit_settings( $request ) {
		/**
		* turn on this section when fully functional from frontend and need Nonce check Permission check
		*/
		if ( ! wp_verify_nonce( $request->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
			return array(
				'status'  => 'fail',
				'message' => array( 'Nonce mismatch.' ),
			);
		}

		if ( ! is_user_logged_in() || ! current_user_can( 'manage_options' ) ) {
			return array(
				'status'  => 'fail',
				'message' => array( 'Access denied.' ),
			);
		}

		$req_data = $request->get_json_params();
		// Process the request data to extract only _id, slug, and status
		$processed_data = array();
		if ( isset( $req_data['settings'] ) && is_array( $req_data['settings'] ) ) {
			foreach ( $req_data['settings'] as $key => $setting ) {
				if ( isset( $setting['_id'], $setting['slug'], $setting['status'] ) ) {
					$processed_data[ $key ] = array(
						'_id'    => $setting['_id'],
						'slug'   => $setting['slug'],
						'status' => $setting['status'],
					);
					if ( isset( $setting['value'] ) ) {
						$processed_data[ $key ]['value'] = $setting['value'];
					}
				}
			}
		}

		// Update the option with the processed data
		$update_result = update_option( 'pbb-settings-tabs', $processed_data );
		if ( $update_result ) {
			return array(
				'status'   => 'success',
				'settings' => $processed_data,
				'message'  => array(
					'Settings list has been updated successfully.',
				),
			);
		} else {
			return array(
				'status'  => 'fail',
				'message' => array(
					'Failed to update settings.',
				),
			);
		}
	}
}
