<?php
namespace PopupBuilderBlock\Helpers;

defined( 'ABSPATH' ) || exit;

class DisplayConditions {
	public static $is_popup_opened = false;

	public function __construct( $post_meta, $current_post_id, $post_type, $popup_id ) {
		$this->display_conditions( $post_meta, $current_post_id, $post_type, $popup_id );
	}

	private function match_children_ids( $parent_ids, $current_post_id ) {
		$values    = array_column( $parent_ids, 'value' );
		$parent_id = wp_get_post_parent_id( $current_post_id );

		return in_array( $parent_id, $values );
	}

	private function match_category_ids( $cat_ids, $current_post_id ) {
		$post_categories = get_the_category( $current_post_id );

		// Extract the 'value' column from the cat_ids array
		$values = array_column( $cat_ids, 'value' );
		// Check if any 'cat_ID' from the post_categories matches a 'value' in the cat_ids
		$matchFound = false;

		foreach ( $post_categories as $term ) {
			if ( in_array( $term->cat_ID, $values ) ) {
				$matchFound = true;
				break;
			}
		}

		return $matchFound;
	}

	private function match_tag_ids( $tag_id, $current_post_id ) {
		$post_tags = get_the_tags( $current_post_id );

		// Extract the 'value' column from the tag_id array
		$values = array_column( $tag_id, 'value' );
		// Check if any 'term_id' from the post_tags matches a 'value' in the tag_id
		$matchFound = false;

		foreach ( $post_tags as $term ) {
			if ( in_array( $term->term_id, $values ) ) {
				$matchFound = true;
				break;
			}
		}

		return $matchFound;
	}

	private function display_conditions( $post_meta, $current_post_id, $post_type, $popup_id ) {
		$current_post_type  = get_post_type( $current_post_id );
		$display_conditions = $post_meta['displayConditions'] ?? array();

		if ( ! empty( $display_conditions ) ) {
			foreach ( $display_conditions as $cond ) {
				extract( $cond );
				$match = false;
				$flag  = 0;

				if ( $pageType === 'entire-site' && $current_post_type != $post_type ) {
					$match = true;
				} elseif ( $pageType === 'singular' ) {
					switch ( $singular ) {
						case 'singular-front-page':
							$match = is_front_page();
							break;
						case 'singular-page':
							$values = ! empty( $cond['singular-page'] ) ? array_column( $cond['singular-page'], 'value' ) : array();
							$match  = ( empty( $cond['singular-page'] ) && is_page() ) || in_array( $current_post_id, $values );
							break;
						case 'singular-page-child':
							$match = ( empty( $cond['singular-page-child'] ) && is_page() ) || $this->match_children_ids( $cond['singular-page-child'], $current_post_id );
							break;
						case 'singular-page-template':
							$match = ( $cond['singular-page-template'] === 'all' && is_page() ) || ( is_page() && $cond['singular-page-template'] === get_page_template_slug() );
							break;
						case 'singular-404':
							$match = is_404();
							break;
						case 'singular-post':
							$values = ! empty( $cond['singular-post'] ) ? array_column( $cond['singular-post'], 'value' ) : array();
							$match  = ( empty( $cond['singular-post'] ) && is_single() ) || in_array( $current_post_id, $values );
							break;
						case 'singular-post-cat':
							$match = ( empty( $cond['singular-post-cat'] ) && is_single() ) || ( is_single() && $this->match_category_ids( $cond['singular-post-cat'], $current_post_id ) );
							break;
						case 'singular-post-tag':
							$match = ( empty( $cond['singular-post-tag'] ) && is_single() ) || ( is_single() && $this->match_tag_ids( $cond['singular-post-tag'], $current_post_id ) );
							break;
					}
				} elseif ( $pageType === 'archive' ) {
					switch ( $archive ) {
						case 'archive-all':
							$match = is_archive();
							break;
						case 'archive-category':
							$match = ( empty( $cond['archive-category'] ) && is_category() ) || ( is_category() && $this->match_category_ids( $cond['archive-category'], $current_post_id ) );
							break;
						case 'archive-tag':
							$match = ( empty( $cond['archive-tag'] ) && is_tag() ) || ( is_tag() && $this->match_tag_ids( $cond['archive-tag'], $current_post_id ) );
							break;
						case 'archive-author':
							$match = ( $cond['archive-author'] === 'all' && is_author() ) || ( is_author() && $cond['archive-author'] == get_the_author_meta( 'ID' ) );
							break;
						case 'archive-date':
							$match = is_date();
							break;
						case 'archive-search':
							$match = is_search();
							break;
					}
				} elseif ( $pageType === 'woocommerce' && is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
					$match = apply_filters( 'pbb/woocommerce/display_conditions', $cond, $popup_id );
				}
				

				if ( $condition === 'include' && $match ) {
					$flag = 1;
				} elseif ( $condition === 'exclude' && $match ) {
					$flag = 0;
					break;
				}
			}

			if ( $flag === 1 ) {
				self::$is_popup_opened = true;
			}
		}
	}
}
