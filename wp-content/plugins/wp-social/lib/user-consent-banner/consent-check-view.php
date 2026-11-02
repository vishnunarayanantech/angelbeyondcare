
<style>
	.wp-social-user-consent-for-banner{
		margin: 0 0 15px 0!important;
        width: 842px;
		max-width: 1350px;
	}
	.wp-social-success-notice {
		position: fixed;
		top: 50px;
		right: 20px;
		background-color: #14c87c;
		color: white;
		padding: 10px;
		border-radius: 5px;
		display: none;
	}

</style>
<script>
	jQuery(document).ready(function ($) {
		"use strict";
		$('#wp-social-admin-switch__wp-social-user-consent-for-banner').on('change', function(){
			let val = ($(this).prop("checked") ? $(this).val() : 'no');
			let data = {
				'wp_social_user_consent_for_promotional_content' : val, 
				'nonce': "<?php echo esc_html(wp_create_nonce( 'ajax-nonce' )); ?>"
			};

			$.post( ajaxurl + '?action=wp_social_admin_consent_action', data, function( data ) {
				$('#success-notice').fadeIn().delay(1000).slideUp(); 
            });
		});
	}); // end ready function
</script>


<div id="success-notice" class="wp-social-success-notice">Success! Your action was completed.</div>
<div class="wp-social-user-consent-for-banner notice notice-error">
	<p>
		<input type="checkbox" <?php echo ( get_option( 'wp_social_user_consent_for_promotional_content', 'yes' ) == 'yes' ? esc_html( 'checked' ) : '' ); ?>  value="yes" class="wp-social-admin-control-input" name="wp-social-user-consent-for-banner" id="wp-social-admin-switch__wp-social-user-consent-for-banner">
		<label for="wp-social-admin-switch__wp-social-user-consent-for-banner"><?php esc_html_e( 'Show update & fix related important messages, essential tutorials and promotional images on WP Dashboard', 'wp-social' ); ?></label>
	</p>
</div>

