<?php

namespace PopupBuilderBlock\Routes;

class ProcessDownload extends Api {

	protected function get_routes(): array {
		return [
			[
				'endpoint'            => '/download',
				'methods'             => 'POST',
				'callback'            => 'process_download_nonce',
				'permission_callback' => function () {
					return current_user_can( 'upload_files' );
				},
			]
		];
	}

	/**
	 * Processes the download request with nonce verification and user permission checks.
	 *
	 * @param WP_REST_Request $request The request object.
	 *
	 * @return WP_REST_Response|WP_Error The response object or WP_Error on failure.
	 */
	public function process_download_nonce( $request ) {

		if ( ! wp_verify_nonce( $request->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
			return rest_ensure_response(
				array(
					'status'  => 'fail',
					'message' => 'Nonce mismatch.',
				)
			);
		}

		if ( ! is_user_logged_in() || ! current_user_can( 'manage_options' ) ) {
			return rest_ensure_response(
				array(
					'status'  => 'fail',
					'message' => 'Access denied.',
				)
			);
		}

		// Get raw content from the request
		$rawContent = $request->get_param( 'rawContent' );
		if ( empty( $rawContent ) ) {
			return new \WP_Error( 'invalid_content', 'No content provided', array( 'status' => 400 ) );
		}

		// Process the content and replace image URLs
		$result = $this->process_download( $rawContent );
		if ( is_wp_error( $result ) ) {
			return $result;
		}

		return rest_ensure_response( array( 'updatedContent' => $result ) );
	}


	/**
	 * Processes the download of images within the provided HTML content.
	 *
	 * This function parses the given HTML content, identifies all <img> tags, and processes each image.
	 * It validates the image URLs, checks if they already exist in the media library, and if not, downloads
	 * and uploads the images to the media library. The function then replaces the old image URLs with the new ones.
	 *
	 * @param string $rawContent The raw HTML content containing <img> tags.
	 * @return string|\WP_Error The updated HTML content with new image URLs or a WP_Error object on failure.
	 */
	private function process_download( $rawContent ) {
		$doc = new \DOMDocument();
		libxml_use_internal_errors( true );
		$doc->loadHTML( $rawContent, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD );
		libxml_clear_errors();
		$imgTags        = $doc->getElementsByTagName( 'img' );
		$updatedContent = $rawContent;

		foreach ( $imgTags as $img ) {
			$src = $img->getAttribute( 'src' );

			// Validate the image URL and extension
			if ( ! $this->is_valid_image( $src ) ) {
				return new \WP_Error( 'invalid_image', "Unsupported image type: $src" );
			}

			// Check if the image already exists in the media library
			$existing_url = $this->get_existing_attachment_url( $src );
			if ( $existing_url ) {
				$updatedContent = str_replace( $src, $existing_url, $updatedContent );
				continue;
			}

			// Download and upload the image
			$upload_result = $this->download_and_upload_image( $src );
			if ( is_wp_error( $upload_result ) ) {
				return $upload_result;
			}

			// Replace the old URL with the new one
			$updatedContent = str_replace( $src, $upload_result, $updatedContent );
		}

		// Process background images
		$updatedContent = $this->process_background_images( $updatedContent );

		return $updatedContent;
	}

	/**
	 * Checks if the provided image URL has a valid extension.
	 *
	 * This method validates the image URL by checking its extension against a list of allowed extensions.
	 *
	 * @param string $src The URL of the image to validate.
	 * @return bool Returns true if the image URL has a valid extension, false otherwise.
	 */
	private function is_valid_image( $src ) {
		$allowed_extensions = array( 'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg' );
		$path_info          = pathinfo( parse_url( $src, PHP_URL_PATH ) );
		$ext                = strtolower( $path_info['extension'] ?? '' );
		return in_array( $ext, $allowed_extensions );
	}

	/**
	 * Retrieves the URL of an existing attachment in the media library by its source URL.
	 *
	 * This function checks if an image already exists in the WordPress media library
	 * by its source URL. If the image exists, it returns the URL of the attachment.
	 * If the image does not exist, it returns false.
	 *
	 * @param string $src The source URL of the image to check.
	 * @return string|false The URL of the existing attachment if found, or false if not found.
	 */
	private function get_existing_attachment_url( $src ) {
		$attachment_id = $this->get_attachment_by_url( $src );
		if ( $attachment_id ) {
			return wp_get_attachment_url( $attachment_id );
		}
		return false;
	}

	/**
	 * Downloads the image from the given URL and uploads it to the media library.
	 *
	 * @param string $src The URL of the image to download.
	 * @return string|\WP_Error The URL of the uploaded image on success, or a WP_Error object on failure.
	 */
	private function download_and_upload_image( $src ) {
		$response = wp_remote_get( $src, array( 'timeout' => 10 ) );
		if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) !== 200 ) {
			return new \WP_Error( 'image_download_failed', "Failed to download image: $src" );
		}

		$image_data        = wp_remote_retrieve_body( $response );
		$path_info         = pathinfo( parse_url( $src, PHP_URL_PATH ) );
		$original_filename = $path_info['basename'] ?? '';

		// Generate a unique filename and upload the image
		$uploads_dir = wp_get_upload_dir();
		$filename    = wp_unique_filename( $uploads_dir['path'], $original_filename );
		$upload      = wp_upload_bits( $filename, null, $image_data );
		if ( $upload['error'] ) {
			return new \WP_Error( 'image_upload_failed', 'Failed to upload image' );
		}

		// Insert into the media library and return the new URL
		$new_url = $this->insert_into_media_library( $upload['file'], $filename, $upload['url'] );
		return is_wp_error( $new_url ) ? $new_url : $new_url;
	}

	/**
	 * Inserts the uploaded file into the media library and returns its URL.
	 *
	 * @param string $file_path The path to the file on the server.
	 * @param string $filename The name of the file.
	 * @param string $file_url The URL of the file.
	 *
	 * @return string|WP_Error The URL of the attachment or a WP_Error object on failure.
	 */
	private function insert_into_media_library( $file_path, $filename, $file_url ) {
		$filetype   = wp_check_filetype( $filename );
		$attachment = array(
			'guid'           => $file_url,
			'post_mime_type' => $filetype['type'],
			'post_title'     => sanitize_file_name( $filename ),
			'post_content'   => '',
			'post_status'    => 'inherit',
		);

		$attach_id = wp_insert_attachment( $attachment, $file_path );
		if ( is_wp_error( $attach_id ) ) {
			return $attach_id;
		}

		// Generate and update attachment metadata
		require_once ABSPATH . 'wp-admin/includes/image.php';
		$attach_data = wp_generate_attachment_metadata( $attach_id, $file_path );
		wp_update_attachment_metadata( $attach_id, $attach_data );

		return wp_get_attachment_url( $attach_id );
	}

	/**
	 * Check if an attachment already exists in the WordPress Media Library by its URL.
	 *
	 * @param string $url The image URL to search for.
	 * @return int|false The attachment ID if found, or false if not found.
	 */
	private function get_attachment_by_url( $url ) {
		global $wpdb;
		$path     = parse_url( $url, PHP_URL_PATH );
		$filename = basename( $path );

		// Query the media library to check if the image URL or filename already exists
		$attachment_id = $wpdb->get_var(
			$wpdb->prepare(
				"SELECT ID FROM $wpdb->posts WHERE guid LIKE %s OR post_title LIKE %s AND post_type = 'attachment'",
				'%' . $wpdb->esc_like( $url ) . '%',
				'%' . $wpdb->esc_like( $filename ) . '%'
			)
		);

		return $attachment_id ?: false;
	}


	/**
	 * Processes background images within inline styles or CSS content.
	 *
	 * This function identifies all `background: url(...)` patterns in the provided content,
	 * downloads and uploads the images to the media library, and replaces the URLs with new ones.
	 *
	 * @param string $content The content containing inline styles or CSS with background images.
	 * @return string|\WP_Error The updated content with new image URLs or a WP_Error object on failure.
	 */
	private function process_background_images( $content ) {
		$updatedContent = $content;
		preg_match_all( '/background:\s*url\((.*?)\)/', $content, $matches );
		if ( ! empty( $matches[1] ) ) {
			foreach ( $matches[1] as $background_url ) {
				$background_url = trim( $background_url, "'\"" ); // Clean the URL

				// Validate the background image URL
				if ( ! $this->is_valid_image( $background_url ) ) {
					continue;
				}

				// Check if the image already exists in the media library
				$existing_url = $this->get_existing_attachment_url( $background_url );
				if ( $existing_url ) {
					$updatedContent = str_replace( $background_url, $existing_url, $updatedContent );
					continue;
				}

				// Download and upload the background image
				$upload_result = $this->download_and_upload_image( $background_url );
				if ( is_wp_error( $upload_result ) ) {
					return $upload_result;
				}

				// Replace the original URL with the new one
				$updatedContent = str_replace( $background_url, $upload_result, $updatedContent );
			}
		}

		return $updatedContent;
	}
}
