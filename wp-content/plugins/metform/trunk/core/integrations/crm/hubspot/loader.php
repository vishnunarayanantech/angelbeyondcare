<?php

namespace MetForm\Core\Integrations\Crm\Hubspot;

use MetForm\Traits\Singleton;
use MetForm\Utils\Render;

defined('ABSPATH') || exit;

class Integration
{
	use Singleton;

	/**
	 * @var mixed
	 */
	private $tab_id;
	/**
	 * @var mixed
	 */
	private $tab_title;
	/**
	 * @var mixed
	 */
	private $tab_sub_title;
	/**
	 * @var mixed
	 */
	private $sub_tab_id;
	/**
	 * @var mixed
	 */
	private $sub_tab_title;

	public function init()
	{
		/**
		 *
		 * Create a new tab in admin settings tab
		 *
		 */
		$this->tab_id        = 'mf_crm';
		$this->tab_title     = esc_html__('CRM & Marketing', 'metform');
		$this->tab_sub_title = esc_html__('All CRM and Marketing integrations info here', 'metform');
		$this->sub_tab_id    = 'hub';
		$this->sub_tab_title = esc_html__('HubSpot', 'metform');

		add_action('metform_settings_tab', [$this, 'settings_tab']);

		add_action('metform_settings_content', [$this, 'settings_tab_content']);

		add_action('metform_settings_subtab_' . $this->tab_id, [$this, 'sub_tab']);

		add_action('metform_settings_subtab_content_' . $this->tab_id, [$this, 'sub_tab_content']);

		add_action('metform_after_store_form_data', [$this, 'hubspot_action'], 10, 4);
	}

	public function settings_tab()
	{
		Render::tab($this->tab_id, $this->tab_title, $this->tab_sub_title);
	}

	public function settings_tab_content()
	{
		Render::tab_content($this->tab_id, $this->tab_title);
	}

	public function sub_tab()
	{
		Render::sub_tab($this->sub_tab_title, $this->sub_tab_id, 'active');

		// Check if MetForm Pro is not installed and show dummy content for pro awareness
		if (!class_exists('\MetForm_Pro\Base\Package')) {
			Render::sub_tab('Zoho', 'zoho');
			Render::sub_tab('HelpScout', 'helpscout');
		}
	}

	/**
	 * Zoho dummy content for pro awareness
	 * 
	 * @access public
	 * @return void
	 */
	public function zoho_contents()
	{
?>
		<div class="mf-pro-missing-wrapper">
			<div class="mf-pro-missing">
				<div class="mf-pro-alert">
					<div class="pro-content">
						<h5 class="alert-heading">You are currently using MetForm free version.</h5>
						<p class="alert-description">Get full access to premium features by upgrading today.</p>
					</div>
					<div class="pro-btn">
						<a href="https://wpmet.com/plugin/metform/pricing/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
								<path d="M10.6 6.40002H2.2C1.53726 6.40002 1 6.93728 1 7.60002V11.8C1 12.4628 1.53726 13 2.2 13H10.6C11.2627 13 11.8 12.4628 11.8 11.8V7.60002C11.8 6.93728 11.2627 6.40002 10.6 6.40002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M3.40039 6.4V4C3.40039 3.20435 3.71646 2.44129 4.27907 1.87868C4.84168 1.31607 5.60474 1 6.40039 1C7.19604 1 7.9591 1.31607 8.52171 1.87868C9.08432 2.44129 9.40039 3.20435 9.40039 4V6.4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg> Upgrade to Pro</a>
					</div>
				</div>
				<div class="attr-row" style="padding: 0 24px;">
					<div class="mf-setting-input-group">
						<p class="description">
							<a href="#" class="button-primary mf-setting-btn btn-tst"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
									<path d="M7.08663 6.21467L7.21077 6.09053C8.39799 4.90326 10.3229 4.90326 11.5101 6.09053C12.6974 7.27775 12.6974 9.20267 11.5101 10.3899L9.79041 12.1096C8.60319 13.2969 6.67827 13.2969 5.49102 12.1096C4.30378 10.9224 4.30378 8.99747 5.49102 7.81025L5.76963 7.53167" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
									<path d="M11.8312 6.46841L12.1097 6.18983C13.297 5.00257 13.297 3.07768 12.1097 1.89043C10.9225 0.70319 8.99759 0.70319 7.81037 1.89043L6.09065 3.61019C4.90338 4.79743 4.90338 6.72233 6.09065 7.90955C7.27787 9.09683 9.20279 9.09683 10.39 7.90955L10.5141 7.78541" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
									<path d="M1.00049 4.60008L2.80049 5.20008M1.60049 7.90008L2.80049 7.00008M2.50049 2.20007L3.40049 3.40007" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>  <?php esc_html_e('Connect Zoho ', 'metform'); ?> </a>
						</p>
					</div>
				</div>
			</div>
		</div>
	<?php
	}

	/**
	 *  HelpScout dummy content for pro awareness
	 * 
	 * @access public
	 * @return void
	 */
	public function helpscout_contents()
	{
	?>
		<div class="mf-pro-missing-wrapper">
			<div class="mf-pro-missing">
				<div class="mf-pro-alert">
					<div class="pro-content">
						<h5 class="alert-heading">You are currently using MetForm free version.</h5>
						<p class="alert-description">Get full access to premium features by upgrading today.</p>
					</div>
					<div class="pro-btn">
						<a href="https://wpmet.com/plugin/metform/pricing/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
								<path d="M10.6 6.40002H2.2C1.53726 6.40002 1 6.93728 1 7.60002V11.8C1 12.4628 1.53726 13 2.2 13H10.6C11.2627 13 11.8 12.4628 11.8 11.8V7.60002C11.8 6.93728 11.2627 6.40002 10.6 6.40002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M3.40039 6.4V4C3.40039 3.20435 3.71646 2.44129 4.27907 1.87868C4.84168 1.31607 5.60474 1 6.40039 1C7.19604 1 7.9591 1.31607 8.52171 1.87868C9.08432 2.44129 9.40039 3.20435 9.40039 4V6.4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg> Upgrade to Pro</a>
					</div>
				</div>
				<div class="attr-row" style="padding: 0 24px;">
					<div class="mf-setting-input-group">
						<label class="mf-setting-label">App ID</label>

						<div class="mf-setting-disabled-input-wrapper">
							<input disabled type="text" class="mf-setting-input attr-form-control" placeholder="Help Scout App ID">
						</div>
					</div>
					<div class="mf-setting-input-group">
						<label class="mf-setting-label">App Secret</label>

						<div class="mf-setting-disabled-input-wrapper">
							<input disabled type="text" class="mf-setting-input attr-form-control" placeholder="Help Scout App Secret">
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}

	public function contents()
	{

		$data = [
			'lable' => esc_html__('Token', 'metform'),
			'name' => 'mf_hubsopt_token',
			'description' => '',
			'placeholder' => esc_html__('Enter HubSpot token here', 'metform'),
		];

		$section_id = 'mf_crm';
		$current_page = isset($_GET["page"]) ? admin_url("admin.php?page=" . sanitize_text_field(wp_unslash($_GET["page"]))) : '';
		$settings_option = \MetForm\Core\Admin\Base::instance()->get_settings_option();

		$build_redirect = [
			'redirect_url'  => $current_page,
			'section_id'    => $section_id,
			'state'         => wp_create_nonce('redirect_nonce_url')
		];

		if (isset($_GET['state']) && wp_verify_nonce(sanitize_text_field(wp_unslash($_GET['state'])), 'redirect_nonce_url')) {

			if (
				isset($_GET['refresh_token']) &&
				isset($_GET['token_type']) &&
				isset($_GET['access_token']) &&
				isset($_GET['expires_in'])
			) {

				$token_type    = sanitize_text_field(wp_unslash($_GET['token_type']));
				$refresh_token = sanitize_text_field(wp_unslash($_GET['refresh_token']));
				$access_token  = sanitize_text_field(wp_unslash($_GET['access_token']));
				$expires_in    = sanitize_text_field(wp_unslash($_GET['expires_in']));

				$settings_option['mf_hubsopt_token'] = $access_token;
				$settings_option['mf_hubsopt_refresh_token'] = $refresh_token;
				$settings_option['mf_hubsopt_token_type'] = $token_type;
				$settings_option['mf_hubsopt_expires_in'] = $expires_in;

				// Save the results in a transient named latest_5_posts
				set_transient('mf_hubsopt_token_transient', $access_token, $expires_in);

				// Update settings options
				update_option('metform_option__settings', $settings_option);

				echo '
                        <script type="text/javascript">
                            window.location.href = "' . esc_js($current_page) . '#mf_crm"
                        </script>
                    ';
			}
		}

		if (!empty($settings_option['mf_hubsopt_token'])) {
		?>
			<div class="mf-hubspot-hidden-input-field hidden">
				<?php
				$data = [
					'lable' => esc_html__('Token', 'metform'),
					'name' => 'mf_hubsopt_token',
					'description' => '',
					'placeholder' => esc_html__('Enter Hubsopt token here', 'metform'),
				];
				Render::textbox($data);

				$data = [
					'lable' => esc_html__('Refresh Token', 'metform'),
					'name' => 'mf_hubsopt_refresh_token',
					'description' => '',
					'placeholder' => esc_html__('Enter Hubsopt refresh token here', 'metform'),
				];
				Render::textbox($data);

				$data = [
					'lable' => esc_html__('Token Tyoe', 'metform'),
					'name' => 'mf_hubsopt_token_type',
					'description' => '',
					'placeholder' => esc_html__('Enter Hubsopt token type here', 'metform'),
				];
				Render::textbox($data);

				$data = [
					'lable' => esc_html__('Token Expires In', 'metform'),
					'name' => 'mf_hubsopt_expires_in',
					'description' => '',
					'placeholder' => esc_html__('Enter Hubsopt token expires in here', 'metform'),
				];
				Render::textbox($data);
				?>
			</div>
			<div class="mf-hubspot-settings-contents">
				<p><?php esc_html_e('Your HubSpot account is now connected with Metform! You can remove the access anytime using the below button.', 'metform') ?></p>
				<a href="#" id="mf-remove-hubspot-access" class="mf-admin-setting-btn fatty" data-nonce="<?php echo esc_attr(wp_create_nonce('wp_rest')); ?>"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
						<path d="M8.33333 1.06335C8.02867 1.02161 7.717 1 7.4 1C3.86538 1 1 3.68629 1 7C1 10.3137 3.86538 13 7.4 13C7.717 13 8.02867 12.9784 8.33333 12.9367" stroke="#f8174b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M11.3335 5.33333L13.0002 6.99999L11.3335 8.66666M6.3335 6.99999H12.5943" stroke="#f8174b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg> <?php esc_html_e('Disconnect HubSpot Account', 'metform'); ?></a>
			</div>

		<?php
		} else { ?>
			<div class="mf-hubspot-settings-contents">
				<p><?php esc_html_e('HubSpot is an all-in-one CRM and marketing platform that helps turn your website visitors into leads, leads into customers, and customers into raving fans.', 'metform'); ?></p>
				<p><?php esc_html_e('With MetForm, you can sync your form submissions seamlessly to HubSpot to build lists, email marketing campaigns and so much more.', 'metform'); ?></p>
				<p><?php esc_html_e('If you don\'t already have a HubSpot account, you can', 'metform'); ?> <a href="https://app.hubspot.com/signup-hubspot/marketing?utm_source=MetForm&utm_medium=Forms&utm_campaign=Plugin" target="_blank" class="mf-setting-btn-link"><?php esc_html_e('sign up for a free HubSpot account here.', 'metform'); ?></a></p>
				<a href="<?php echo esc_url('https://api.wpmet.com/public/hubspot-auth?' . http_build_query($build_redirect)); ?>" target="_blank" class="mf-admin-setting mf-admin-setting-rate"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
						<path d="M7.08663 6.21467L7.21077 6.09053C8.39799 4.90326 10.3229 4.90326 11.5101 6.09053C12.6974 7.27775 12.6974 9.20267 11.5101 10.3899L9.79041 12.1096C8.60319 13.2969 6.67827 13.2969 5.49102 12.1096C4.30378 10.9224 4.30378 8.99747 5.49102 7.81025L5.76963 7.53167" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M11.8312 6.46841L12.1097 6.18983C13.297 5.00257 13.297 3.07768 12.1097 1.89043C10.9225 0.70319 8.99759 0.70319 7.81037 1.89043L6.09065 3.61019C4.90338 4.79743 4.90338 6.72233 6.09065 7.90955C7.27787 9.09683 9.20279 9.09683 10.39 7.90955L10.5141 7.78541" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M1.00049 4.60008L2.80049 5.20008M1.60049 7.90008L2.80049 7.00008M2.50049 2.20007L3.40049 3.40007" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg><?php esc_html_e('Click Here To Connect Your HubSpot Account', 'metform'); ?></a>
			</div>
<?php }
	}

	public function sub_tab_content()
	{
		Render::sub_tab_content($this->sub_tab_id, [$this, 'contents'], 'active');

		// Check if MetForm Pro is not installed and show dummy content for pro awareness
		if (!class_exists('\MetForm_Pro\Base\Package')) {
			Render::sub_tab_content('zoho', [$this, 'zoho_contents']);
			Render::sub_tab_content('helpscout', [$this, 'helpscout_contents']);
		}
	}

	/**
	 * @param $form_id
	 * @param $form_data
	 * @param $form_settings
	 */
	public function hubspot_action($form_id, $form_data, $form_settings, $attributes)
	{
		$hubspot = new Hubspot;

		if (isset($form_settings['mf_hubspot']) && $form_settings['mf_hubspot'] == '1') {

			$hubspot->create_contact($form_data, $attributes);
		}

		if (isset($form_settings['mf_hubspot_forms']) && $form_settings['mf_hubspot_forms'] == '1') {

			$hubspot->submit_data($form_id, $form_data);
		}
	}
}

Integration::instance()->init();
