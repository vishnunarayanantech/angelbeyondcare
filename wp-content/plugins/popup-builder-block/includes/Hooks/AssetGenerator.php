<?php
namespace PopupBuilderBlock\Hooks;

defined( 'ABSPATH' ) || exit;

use PopupBuilderBlock\Helpers\Utils;

class AssetGenerator {

	/**
	 * Initialize the class and hook into WordPress.
	 */
	public function __construct() {
		add_action( 'save_post', array( $this, 'on_save_post' ), 10, 3 );
	}

	/**
	 * Handles the save_post action to generate CSS for popup campaigns.
	 *
	 * @param int      $post_id The post ID.
	 * @param \WP_Post $post The post object.
	 * @param bool     $update Whether this is an update or a new post.
	 */
	public function on_save_post( $post_id, $post, $update ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

		$is_post_type = Utils::post_type();
		if ( ! $update || ! in_array( $post->post_type, $is_post_type ) ) {
			return;
		}

		// Parse block attributes and generate CSS
		$blocks    = parse_blocks( $post->post_content );
		$block_css = $this->parse_block_css( $blocks );

		if ( $block_css ) {
			$css = $this->generate_css( $block_css );
			if ( $css ) {
				$this->generate_css_file( $post_id, $css );
			}
		}
	}

	/**
	 * Extract CSS from block attributes.
	 */
	private function parse_block_css( array $blocks, &$count = 0 ): array {
		$block_data = array();

		foreach ( $blocks as $block ) {
			if ( empty( $block['blockName'] ) || strpos( $block['blockName'], 'popup-builder-block/' ) !== 0 ) {
				continue;
			}

			if ( empty( $block['attrs']['blocksCSS'] ) || ! is_array( $block['attrs']['blocksCSS'] ) ) {
				continue;
			}

			// Merge CSS for different devices
			foreach ( $block['attrs']['blocksCSS'] as $device => $css ) {
				$block_data[ $device ] = ( $block_data[ $device ] ?? '' ) . $css . ' ';
			}

			// Recursively process inner blocks
			if ( ! empty( $block['innerBlocks'] ) ) {
				$inner_data = $this->parse_block_css( $block['innerBlocks'], $count );
				foreach ( $inner_data as $device => $css ) {
					$block_data[ $device ] = ( $block_data[ $device ] ?? '' ) . $css . ' ';
				}
			}

			++$count;
		}

		return $block_data;
	}

	/**
	 * Generate combined CSS with media queries dynamically.
	 */
	private function generate_css( array $block_css ): string {
		// TODO: breakpoints should be dynamic here or pull from settings
		$breakpoints = array(
			'desktop'         => null, // No media query for desktop (default)
			'tablet'          => 1024,
			'tablet_portrait' => 880,
			'mobile'          => 768,
			'watch'           => 300,
		);

		$css = '';

		foreach ( $breakpoints as $device => $max_width ) {
			if ( ! empty( $block_css[ $device ] ) ) {
				$device_css = trim( $block_css[ $device ] );
				$css       .= $max_width ? "@media (max-width: {$max_width}px) { $device_css } " : "$device_css ";
			}
		}

		return $css;
	}

	/**
	 * Save CSS content into a file.
	 */
	private function generate_css_file( int $post_id, string $css ): bool {
		if ( ! $css ) {
			return false;
		}

		$upload_dir = wp_upload_dir();
		$dir        = trailingslashit( $upload_dir['basedir'] ) . 'popupkit/';

		if ( ! is_dir( $dir ) && ! wp_mkdir_p( $dir ) ) {
			return false;
		}

		return file_put_contents( $dir . $post_id . '.css', $css ) !== false;
	}
}
