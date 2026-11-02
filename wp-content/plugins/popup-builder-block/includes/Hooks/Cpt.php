<?php

namespace PopupBuilderBlock\Hooks;

defined( 'ABSPATH' ) || exit;

use PopupBuilderBlock\Helpers\DataBase;

class Cpt {
	/**
	 * class constructor.
	 * private for singleton
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'admin_init', array( $this, 'assign_capabilities' ) );
		add_action( 'init', array( $this, 'popup_builder_cpt' ) );

		// For Adding Views Column in Popup Builder Block
		add_filter( 'manage_popupkit-campaigns_posts_columns', array( $this, 'add_campaign_custom_column' ) );
		add_action( 'manage_popupkit-campaigns_posts_custom_column', array( $this, 'set_campaign_custom_column_value' ), 10, 2 );
	}

	/**
	 * Registers the 'popupkit-campaigns' custom post type for the PopupKit.
	 *
	 * @since 1.0.0
	 */
	public static function popup_builder_cpt() {
		$labels = array(
			'name'          => esc_html__( 'Campaigns', 'popup-builder-block' ),
			'singular_name' => esc_html__( 'Campaign', 'popup-builder-block' ),
			'all_items'     => esc_html__( 'Campaigns', 'popup-builder-block' ),
			'add_new'       => esc_html__( 'Create Blank', 'popup-builder-block' ),
			'add_new_item'  => esc_html__( 'Create Blank', 'popup-builder-block' ),
			'edit_item'     => esc_html__( 'Edit Campaign', 'popup-builder-block' ),
			'menu_name'     => esc_html__( 'Campaigns', 'popup-builder-block' ),
			'search_items'  => esc_html__( 'Search Campaign', 'popup-builder-block' ),
		);

		$args = array(
			'labels'              => $labels,
			'hierarchical'        => false,
			'description'         => esc_html__( 'organize and manage popup campaigns', 'popup-builder-block' ),
			'taxonomies'          => array(),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => false,
			'show_in_admin_bar'   => true,
			'menu_position'       => 101,
			'menu_icon'           => 'dashicons-admin-page',
			'show_in_nav_menus'   => false,
			'publicly_queryable'  => true,
			'exclude_from_search' => true,
			'has_archive'         => false,
			'query_var'           => true,
			'can_export'          => true,
			'rewrite'             => true,
			'capability_type'     => 'post',
			'show_in_rest'        => true,
			'rest_namespace'      => 'pbb/v1',
			// TODO: details rnd on capabilities
			'capabilities'        => array(
				'publish_posts'      => 'publish_popup',
				'edit_posts'         => 'edit_popup',
				'delete_posts'       => 'delete_popup',
				'read_private_posts' => 'read_private_popup',
				'edit_post'          => 'edit_popup',
				'delete_post'        => 'delete_popup',
				'read_post'          => 'read_popup',
				'edit_page'          => 'edit_popup',
			),
			'template'            => array(
				array( 'popup-builder-block/popup-builder' ),
			),
			'template_lock'       => 'insert',
			'supports'            => array( 'title', 'editor', 'author', 'custom-fields', 'revisions' ),
		);

		register_post_type( 'popupkit-campaigns', $args );
	}

	/**
	 * Assigns popup capabilities to the administrator role.
	 *
	 * This function adds specific capabilities to the administrator role, allowing them to perform
	 * actions related to popups. The capabilities added include publishing, editing, deleting, and
	 * reading popups.
	 *
	 * @return void
	 */
	public function assign_capabilities() {
		$roles = array( 'administrator' );
		foreach ( $roles as $the_role ) {
			$role = get_role( $the_role );
			$role->add_cap( 'publish_popup' );
			$role->add_cap( 'edit_popup' );
			$role->add_cap( 'delete_popup' );
			$role->add_cap( 'read_private_popup' );
			$role->add_cap( 'edit_popup' );
			$role->add_cap( 'delete_popup' );
			$role->add_cap( 'read_popup' );
		}
	}
	/**
	 * Adds custom columns to the campaign post type in the admin list table.
	 *
	 * This function modifies the columns displayed in the admin list table for the campaign post type.
	 * It adds custom columns for Status, Views, Conversion, and Conversion Rate, while retaining the
	 * default columns for Checkbox, Title, Author, and Date.
	 *
	 * @param array $columns An array of existing columns.
	 * @return array $new_columns An array of modified columns with custom columns added.
	 */
	public function add_campaign_custom_column( $columns ) {
		$new_columns                    = array();
		$new_columns['cb']              = $columns['cb'];
		$new_columns['title']           = $columns['title'];
		$new_columns['status']          = esc_html__( 'Status', 'popup-builder-block' );
		$new_columns['views']           = esc_html__( 'Views', 'popup-builder-block' );
		$new_columns['conversion']      = esc_html__( 'Conversion', 'popup-builder-block' );
		$new_columns['conversion_rate'] = esc_html__( 'Conversion Rate', 'popup-builder-block' );

		// Append the remaining default columns
		if ( isset( $columns['author'] ) ) {
			$new_columns['author'] = $columns['author'];
		}
		if ( isset( $columns['date'] ) ) {
			$new_columns['date'] = $columns['date'];
		}

		return $new_columns;
	}

	/**
	 * Populate the custom columns with post meta values.
	 *
	 * @param string $column  The name of the column to display.
	 * @param int    $post_id The ID of the current post.
	 *
	 * @return void
	 */
	public function set_campaign_custom_column_value( $column, $post_id ) {
		if ( $column === 'views' ) {
			$views = DataBase::getDB( 'campaign_id, SUM(views) AS total_views', 'pbb_logs', "campaign_id = $post_id GROUP BY campaign_id;" );
			echo esc_attr( empty($views) ? 0 : $views[0]->{'total_views'} );
		}

		if ( $column === 'status' ) {
			$status = get_post_meta( $post_id, 'status', true );

			if ( get_post_status( $post_id ) !== 'publish' ) {
				$status = esc_html__( 'Popup not published', 'popup-builder-block' );
			} else {
				$is_checked = $status ? 'checked' : '';
				$status     =
				"<div class='pbb-toggle-button'>
					<input id='pbb-toggle-{$post_id}' type='checkbox' {$is_checked} class='pbb-toggle-checkbox' data-popup-id={$post_id}>
					<label for='pbb-toggle-{$post_id}' aria-label='Switch to enable or disable popup'></label>
				</div>";
			}

			echo $status; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		if ( $column === 'conversion' ) {
			$conversion = DataBase::getDB( 'campaign_id, SUM(converted) AS total_converted', 'pbb_logs', "campaign_id = $post_id GROUP BY campaign_id;" );
			echo esc_attr( empty($conversion) ? 0 : $conversion[0]->{'total_converted'} );
		}

		if ( $column === 'conversion_rate' ) {
			$views = DataBase::getDB( 'campaign_id, SUM(views) AS total_views', 'pbb_logs', "campaign_id = $post_id GROUP BY campaign_id;" );
			$views = empty($views) ? 0 : $views[0]->{'total_views'};
			$conversion = DataBase::getDB( 'campaign_id, SUM(converted) AS total_converted', 'pbb_logs', "campaign_id = $post_id GROUP BY campaign_id;" );
			$conversion = empty($conversion) ? 0 : $conversion[0]->{'total_converted'};

			$conversion_rate = $views > 0 ? round( ( $conversion / $views ) * 100, 2 ) : 0;

			echo esc_attr( $conversion_rate ) . '%';
		}
	}
}
