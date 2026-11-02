<?php
namespace PopupBuilderBlock\Hooks;

defined( 'ABSPATH' ) || exit;


use PopupBuilderBlock\Helpers\Utils;

class Enqueue {
	/**
	 * class constructor.
	 * private for singleton
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'load_editor_assets' ) );
		add_action( 'enqueue_block_assets', array( $this, 'load_frontend_assets' ) );
	}

	/**
	 * Loads scripts and styles for the block editor.
	 */
	public function load_editor_assets(): void {
		if ( ! in_array( get_post_type(), Utils::post_type() ) ) {
			return;
		}

		$this->enqueue_scripts(
			array(
				'components' => 'popup/components.js',
				'helpers'    => 'popup/helpers.js',
				'global'     => 'popup/global.js',
			)
		);

		$this->enqueue_styles(
			array(
				'components' => 'popup/components.css',
				'global'     => 'popup/global.css',
			)
		);
	}

	/**
	 * Loads frontend styles for blocks.
	 */
	public function load_frontend_assets(): void {
		$this->enqueue_styles(
			array(
				'global' => 'popup/global.css',
			)
		);

		// Check if the script should load only on single popup campaign pages and not in an iframe
		if ( is_singular( Utils::post_type() ) && ! Utils::is_iframe() ) {
			wp_enqueue_script(
				'popup-builder-block-single-script',
				POPUP_BUILDER_BLOCK_PLUGIN_URL . 'includes/Templates/assets/script.js',
				array(),
				POPUP_BUILDER_BLOCK_PLUGIN_VERSION,
				array(
					'in_footer' => true,
				)
			);

			wp_enqueue_style(
				'popup-builder-block-single-style',
				POPUP_BUILDER_BLOCK_PLUGIN_URL . 'includes/Templates/assets/style.css',
				array(),
				POPUP_BUILDER_BLOCK_PLUGIN_VERSION
			);

			// Add inline styles
			$inline_css = '
				body {
					background: #fff;
					background-image: radial-gradient(#999 5%, transparent 0);
					background-size: 35px 35px;
				}
			';

			wp_add_inline_style(
				'popup-builder-block-single-style',
				apply_filters( 'popup-builder-block/custom_styles', $inline_css )
			);
		}

		// Check if the script should load only on single popup campaign pages
		if ( is_singular( Utils::post_type() ) ) {
			// Dequeue styles and scripts that are not needed for the preview
			wp_dequeue_style( 'admin-bar' );
			wp_dequeue_style( 'dashicons' );

			// Enqueue the block CSS file for the preview
			$upload_dir = wp_upload_dir();
			$post_id    = get_the_ID();
			$css_file   = $upload_dir['basedir'] . "/popupkit/$post_id.css";
			if ( file_exists( $css_file ) ) {
				wp_enqueue_style(
					"popup-builder-block-$post_id",
					$upload_dir['baseurl'] . "/popupkit/$post_id.css",
					array(),
					filemtime( $css_file )
				);
			}
		}
	}

	/**
	 * Helper method to enqueue scripts dynamically.
	 *
	 * @param array $scripts Associative array of script handles and paths.
	 */
	private function enqueue_scripts( array $scripts ): void {
		foreach ( $scripts as $handle => $path ) {
			$asset_file = POPUP_BUILDER_BLOCK_PLUGIN_DIR . "build/popup/$handle.asset.php";
			if ( file_exists( $asset_file ) ) {
				$asset = include_once $asset_file;
				wp_enqueue_script(
					"popup-builder-block-$handle",
					POPUP_BUILDER_BLOCK_PLUGIN_URL . "build/$path",
					$asset['dependencies'],
					$asset['version'],
					array( 'in_footer' => false )
				);
			}
		}
	}

	/**
	 * Helper method to enqueue styles dynamically.
	 *
	 * @param array $styles Associative array of style handles and paths.
	 */
	private function enqueue_styles( array $styles ): void {
		foreach ( $styles as $handle => $path ) {
			wp_enqueue_style(
				"popup-builder-block-$handle",
				POPUP_BUILDER_BLOCK_PLUGIN_URL . "build/$path",
				array(),
				POPUP_BUILDER_BLOCK_PLUGIN_VERSION
			);
		}
	}
}
