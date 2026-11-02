<?php

namespace PopupBuilderBlock\Config;

defined( 'ABSPATH' ) || exit;

class PostMeta {
	// class initilizer method
	public function __construct() {
		add_action( 'init', array( $this, 'register_custom_post_meta' ) );
	}

	/**
	 * Register custom post meta.
	 */
	public function register_custom_post_meta() {
		$meta_fields = $this->get_meta_fields();

		if ( ! empty( $meta_fields ) ) {
			foreach ( $meta_fields as $meta_key => $meta_args ) {
				register_post_meta( 'popupkit-campaigns', $meta_key, $meta_args );
			}
		}
	}

	/**
	 * Retrieves the meta fields.
	 *
	 * @return array An associative array containing the meta fields.
	 */
	public static function get_meta_fields() {
		$meta_list = array(
			'status'                   => array(
				'type'         => 'boolean',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => false,
			),
			'openTrigger'              => array(
				'type'         => 'string',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => 'page-load',
			),
			'displayDevice'            => array(
				'type'         => 'array',
				'single'       => true,
				'show_in_rest' => array(
					'schema' => array(
						'type'  => 'array',
						'items' => array(
							'type' => 'string',
						),
					),
				),
				'default'      => array( 'desktop', 'tablet', 'mobile' ),
			),
			'displayConditions'        => array(
				'type'         => 'array',
				'description'  => 'Conditions for displaying content.',
				'single'       => true,
				'show_in_rest' => array(
					'schema' => array(
						'type'    => 'array',
						'default' => array(), // Provide a default value
						'items'   => array(
							'type'                 => 'object',
							'additionalProperties' => true,
						),
					),
				),
				'default'      => array(
					array(
						'condition'              => 'include',
						'pageType'               => 'entire-site',
						'archive'                => 'archive-all',
						'archive-author'         => 'all',
						'archive-category'       => 'all',
						'archive-tag'            => 'all',
						'chosen'                 => false,
						'singular'               => 'singular-front-page',
						'singular-page'          => array(),
						'singular-page-child'    => array(),
						'singular-page-template' => 'all',
						'singular-post'          => array(),
						'singular-post-cat'      => array(),
						'singular-post-tag'      => array(),
					),
				),
			),
			'ipBlocking' => array(
				'type' => 'object',
				'single' => true,
				'show_in_rest' => array(
					'schema' => array(
						'type'       => 'object',
						'properties' => [
							'enable' => ['type' => 'boolean'],
							'blockedRanges' => [
								'type' => 'array',
								'items' => [
									'type' => 'object',
									'properties' => [
										'from' => ['type' => 'string'],
										'to' => ['type' => 'string'],
									],
									'additionalProperties' => true,
								],
							],
							'blockedIPs' => [
								'type' => 'array',
								'items' => [
									'type' => 'object',
									'properties' => [
										'ip' => ['type' => 'string'],
									],
									'additionalProperties' => true,
								],
							],
						],
					)
				),
				'default' => [
					'enable' => false,
					'blockedRanges' => [],
					'blockedIPs' => [],
				],
			),
			'campaignType'             => array(
				'type'         => 'string',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => 'popup',
			),
			'displayFrequency'         => array(
				'type'         => 'string',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => 'once-a-day',
			),
			'displayVisitor'           => array(
				'type'         => 'string',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => 'everyone',
			),
			'displayVisitorConvertion' => array(
				'type'         => 'boolean',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => true,
			),
			'displayFrequencyVisits'   => array(
				'type'         => 'number',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => 2,
			),
			'returningVisitorDays'     => array(
				'type'         => 'number',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => 2,
			),
			'displayFrequencyDays'     => array(
				'type'         => 'number',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => 2,
			),
			'newVisitorDays'           => array(
				'type'         => 'number',
				'single'       => true,
				'show_in_rest' => true,
				'default'      => 2,
			),
		);

		return apply_filters( 'pbb/post_meta_fields', $meta_list );
	}
}
