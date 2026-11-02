<?php
namespace PopupBuilderBlock\Hooks;

defined( 'ABSPATH' ) || exit;

use PopupBuilderBlock\Helpers\Utils;

class Preview {
	/**
	 * Class constructor.
	 * Initializes hooks for template override and redirection.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		add_filter( 'template_include', array( $this, 'pbb_preview_campaign' ) );
		add_filter( 'template_redirect', array( $this, 'redirect_to_popup_template' ) );
	}

	/**
	 * Overrides the template for single posts of the 'popup-campaign' custom post type.
	 *
	 * @param string $template The path to the template file.
	 * @return string The path to the custom template file if it exists, otherwise the original template.
	 */
	public function pbb_preview_campaign( $template ) {
		// Early return if not a singular post of the desired type
		if ( ! is_singular( Utils::post_type() ) ) {
			return $template;
		}

		// Remove actions that are not needed for the preview
		$this->remove_actions();

		// Specify the path to the custom template file in your plugin
		$custom_template = apply_filters(
			'popup-builder-block/template_path',
			POPUP_BUILDER_BLOCK_INC_DIR . 'Templates/SinglePopup.php'
		);

		// Check if the custom template file exists and return it
		return file_exists( $custom_template ) ? $custom_template : $template;
	}

	/**
	 * Redirects to the home URL if the user is not logged in and not in preview mode.
	 *
	 * @return void
	 */
	public function redirect_to_popup_template() {
		// Redirect if it's a singular post of the desired type
		if (
			is_singular( Utils::post_type() )
			&& ! is_user_logged_in()
			&& ! Utils::is_preview()
			&& ! Utils::is_iframe()
		) {
			wp_safe_redirect( home_url() );
			exit;
		}
	}

	/**
	 * Remove actions that are not needed for the preview
	 *
	 * @return void
	 */
	private function remove_actions() {
		add_filter( 'show_admin_bar', '__return_false' );
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );
		remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
		remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
		remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
		add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
		add_filter( 'wp_resource_hints', array( $this, 'disable_emojis_remove_dns_prefetch' ), 10, 2 );
	}

	/**
	 * Remove emoji CDN hostname from DNS prefetching hints.
	 *
	 * @param array  $urls URLs to print for resource hints.
	 * @param string $relation_type The relation type the URLs are printed for.
	 * @return array Difference betwen the two arrays.
	 */
	public function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
		if ( 'dns-prefetch' == $relation_type ) {
			/** This filter is documented in wp-includes/formatting.php */
			$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );

			$urls = array_diff( $urls, array( $emoji_svg_url ) );
		}

		return $urls;
	}
}
