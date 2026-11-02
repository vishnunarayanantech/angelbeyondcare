<?php

namespace PopupBuilderBlock\Config;

defined( 'ABSPATH' ) || exit;

use WP_Query;
use PopupBuilderBlock\Helpers\Utils;
use PopupBuilderBlock\Config\BlockList;

/**
 * Manages block registration, assets, and rendering modifications.
 *
 * @since 1.0.0
 */
class Blocks {
	/**
	 * List of available blocks.
	 *
	 * @var array
	 */
	private array $blocks_list = array();

	/**
	 * Constructor.
	 * Initializes hooks and loads the block list.
	 */
	public function __construct() {
		$this->blocks_list = BlockList::get_block_list();
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_action( 'block_categories_all', array( $this, 'add_category' ), 10, 2 );
		add_filter( 'render_block', array( $this, 'modify_block_markup' ), 10, 3 );
	}

	/**
	 * Registers block types based on the block list.
	 */
	public function register_blocks(): void {
		// Check if this is the intended custom post type
		// Register Gutenberg Blocks for Specific Type only
		if ( is_admin() ) {
			global $pagenow;
			$typenow = '';
			if ( 'post-new.php' === $pagenow ) {
				$post_type = isset($_REQUEST['post_type']) ? sanitize_text_field( wp_unslash( $_REQUEST['post_type'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
				if ( $post_type && in_array( $post_type, Utils::post_type() ) ) {
					$typenow = $post_type;
				}
			} elseif ( 'post.php' === $pagenow ) {
				$get_post = isset( $_GET['post'] ) ? sanitize_text_field( wp_unslash( $_GET['post'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			
				if ( $get_post ) {
					$post_id = (int) $get_post;
					$post    = get_post( $post_id );
					$typenow = $post->post_type;
				}
			}

			if ( ! in_array( $typenow, Utils::post_type() ) ) {
				return;
			}
		}

		$is_register = Utils::is_local() ? Utils::is_local() : Utils::status() === 'valid';

		foreach ( $this->blocks_list as $key => $block ) {
			$package  = $block['package'] ?? 'free';
			$base_dir = POPUP_BUILDER_BLOCK_DIR;

			if ( 'pro' === $package && $is_register ) {
				$base_dir = str_replace( 'popup-builder-block', 'popup-builder-block-pro', $base_dir );
			}

			$block_dir = $base_dir . $key;

			if ( file_exists( $block_dir ) ) {
				register_block_type( $block_dir, array() );
			}

			// Deregister the view script if not in an iframe, ensuring safe execution.
			if ( ! Utils::is_iframe() ) {
				wp_deregister_script( 'popup-builder-block-' . $key . '-view-script' );
			}
		}
	}

	/**
	 * Adds a custom category for popup builder blocks.
	 *
	 * @param array   $categories Existing block categories.
	 * @param WP_Post $post Current post object.
	 * @return array Updated block categories.
	 */
	public function add_category( array $block_categories, $block_editor_context ): array {
		return array_merge(
			array(
				array(
					'slug'  => 'popup-builder-block',
					'title' => __( 'PopupKit', 'popup-builder-block' )
				),
			),
			$block_categories
		);
	}

	/**
	 * Modifies the block output to add attributes and classes.
	 *
	 * @param string $content Rendered block content.
	 * @param array  $block Parsed block data.
	 * @param array  $instance Block instance.
	 * @return string Modified block content.
	 */
	public function modify_block_markup( string $content, array $block, \WP_Block $instance ): string {
		if ( empty( $content ) || ! Utils::is_popup_block( $content, $block, 'blockClass' ) ) {
			return $content;
		}

		$processor = new \WP_HTML_Tag_Processor( $content );
		$processor->next_tag();

		if ( empty( $processor->get_attribute( 'id' ) ) ) {
			$processor->set_attribute( 'id', 'block-' . $block['attrs']['blockID'] );
		}

		if ( empty( $processor->get_attribute( 'data-block' ) ) ) {
			$processor->set_attribute( 'data-block', $block['blockName'] );
		}

		$processor->add_class( $block['attrs']['blockClass'] );
		$processor->add_class( 'popupkit-block' );

		$beforeMarkup     = apply_filters( 'pbb/save_element_markup_before', '', $block );
		$afterMarkup      = apply_filters( 'pbb/save_element_markup_after', '', $block );
		$processedContent = apply_filters( 'pbb/save_element_markup', $processor, $block, $instance );

		if ( method_exists( $processedContent, 'get_updated_html' ) ) {
			$processedContent = $processedContent->get_updated_html();
		}

		return sprintf( '%s %s %s', $beforeMarkup, $processedContent, $afterMarkup );
	}
}
