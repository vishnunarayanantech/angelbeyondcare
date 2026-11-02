<?php

namespace PopupBuilderBlock\Hooks;

defined('ABSPATH') || exit;

/**
 * Enqueue registrar.
 *
 * @since 1.0.0
 * @access public
 */
class DataMigration
{
	/**
	 * Class constructor.
	 * private for singleton
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct()
	{
		add_action('init', array($this, 'migrate_old_popups'));
	}

	/**
	 * Migrate old blocks to new format.
	 *
	 * @return void
	 */
	public function migrate_old_popups() {
		if ( version_compare( POPUP_BUILDER_BLOCK_PLUGIN_VERSION, '1.0.5', '<=' ) ) {
			return;
		}
	
		// Prevent re-running
		if ( get_option( 'popup_builder_block_migration_done' ) ) {
			return;
		}
	
		// Check if the old popups exist
		$args = array(
			'post_type'      => 'gutenkit-popup',
			'post_status'    => 'publish',
			'posts_per_page' => -1,
		);

		$old_popups = get_posts( $args );

		// If no old popups, return
		if ( empty( $old_popups ) ) {
			return;
		}

		// Create database if it doesn't exist
		if(method_exists('PopupBuilderBlock\Helpers\DataBase', 'createDB')) {
			\PopupBuilderBlock\Helpers\DataBase::createDB();
		}
	
		// Loop through old popups and migrate
		foreach ( $old_popups as $old_popup ) {
			$old_settings = get_post_meta( $old_popup->ID, 'gutenkit_popup_settings', true );
	
			if ( get_post_meta( $old_popup->ID, 'is_migrated', true ) || ! is_array( $old_settings ) ) {
				continue;
			}
	
			update_post_meta( $old_popup->ID, 'is_migrated', true );
	
			$new_post_id = wp_insert_post( array(
				'post_title'   => $old_popup->post_title,
				'post_content' => '' ,
				'post_status' => 'publish',
				'post_type'   => 'popupkit-campaigns',
			) );
	
			if ( is_wp_error( $new_post_id ) ) {
				continue;
			}
	
			// === Copy content ===
			$updated_content = str_replace(
				[
					'wp:gutenkit-pro/popup-builder',
				],
				[
					'wp:popup-builder-block/popup-builder',
				],
				$old_popup->post_content
			);
		
			if ($updated_content !== $old_popup->post_content) {
				$updated_content = str_replace(
					['gutenkit-popup', 'gutenkit-pro'],
					['popup-builder', 'popup-builder-block'],
					$updated_content
				);
				$post = get_post($new_post_id);
				$post->post_content = $updated_content;
				wp_update_post($post);
			}
	
			// === Prepare meta fields ===
			update_post_meta( $new_post_id, 'status', true );
			update_post_meta( $new_post_id, 'openTrigger', $old_settings['openTrigger'] ?? 'page-load' );
			update_post_meta( $new_post_id, 'displayDevice', array( 'desktop', 'tablet', 'mobile' ) );
	
			$display_condition = $old_settings['displayCondition'][0] ?? array();
			$new_conditions = array(
				array(
					'condition'              => $display_condition['condition'] ?? 'include',
					'pageType'               => $display_condition['pageType'] ?? 'entire-site',
					'archive'                => $display_condition['archive'] ?? 'archive-all',
					'archive-author'         => $display_condition['archive-author'] ?? 'all',
					'archive-category'       => $display_condition['archive-category'] ?? 'all',
					'archive-tag'            => $display_condition['archive-tag'] ?? 'all',
					'chosen'                 => $display_condition['chosen'] ?? false,
					'singular'               => $display_condition['singular'] ?? 'singular-front-page',
					'singular-page'          => $display_condition['singular-page'] ?? array(),
					'singular-page-child'    => $display_condition['singular-page-child'] ?? array(),
					'singular-page-template' => $display_condition['singular-page-template'] ?? 'all',
					'singular-post'          => $display_condition['singular-post'] ?? array(),
					'singular-post-cat'      => $display_condition['singular-post-cat'] ?? array(),
					'singular-post-tag'      => $display_condition['singular-post-tag'] ?? array(),
				),
			);
			update_post_meta( $new_post_id, 'displayConditions', $new_conditions );
	
			update_post_meta( $new_post_id, 'ipBlocking', array(
				'enable'        => false,
				'blockedRanges' => array(),
				'blockedIPs'    => array(),
			) );
	
			update_post_meta( $new_post_id, 'campaignType', 'popup' );
			update_post_meta( $new_post_id, 'displayFrequency', 'once-a-day' );
			update_post_meta( $new_post_id, 'displayVisitor', 'everyone' );
			update_post_meta( $new_post_id, 'displayVisitorConvertion', true );
			update_post_meta( $new_post_id, 'displayFrequencyVisits', 2 );
			update_post_meta( $new_post_id, 'returningVisitorDays', 2 );
			update_post_meta( $new_post_id, 'displayFrequencyDays', 2 );
			update_post_meta( $new_post_id, 'newVisitorDays', 2 );
		}

		// Mark as migrated
		update_option( 'popup_builder_block_migration_done', true );
	}
}