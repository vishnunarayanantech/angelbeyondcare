<?php
/**
 * The header for Zakra theme
 *
 * This is the template that displays all the <head> section and everything up until <div id="content">
 *
 * @link    https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package zakra
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<?php
/**
 * Functions hooked into zakra_action_doctype action
 *
 * @hooked zakra_doctype - 10
 */
do_action( 'zakra_action_doctype' );
?>

	<head>

		<?php
		/**
		 * Hook - zakra_action_head
		 *
		 * Functions hooked into zakra_action_head action
		 *
		 * @hooked zakra_head - 10
		 */
		do_action( 'zakra_action_head' );
		?>

		<?php wp_head(); ?>
	<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Angel Beyond Care" />
<meta property="og:description" content="Care Beyond Expectations" />
<meta property="og:image" content="https://angel-beyond-care.demoserver.work/" />
<meta property="og:url" content="https://angel-beyond-care.demoserver.work/" />
<meta property="og:type" content="website" />

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Angel Beyond Care" />
<meta name="twitter:description" content="Care Beyond Expectations" />
<meta name="twitter:image" content="https://angel-beyond-care.demoserver.work/" />

	</head>

<body <?php body_class(); ?>>

<?php
/**
 * WordPress function to load custom scripts after body.
 *
 * Introduced in WordPress 5.2.0
 *
 * @since Zakra 1.2.3
 */
if ( function_exists( 'wp_body_open' ) ) {

	wp_body_open();
}
?>

<?php
/**
 * Hook - zakra_action_before
 *
 * @hooked zakra_page_start - 10
 * @hooked zakra_skip_to_content - 15
 */
do_action( 'zakra_action_before' );
?>

<?php zakra_header(); ?>

<?php
/**
 * Hook - zakra_action_before_content.
 *
 * @hooked zakra_main_start - 10
 * @hooked zakra_content_start - 20
 */
do_action( 'zakra_action_before_content' );
