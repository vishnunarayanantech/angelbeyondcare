<?php

defined('ABSPATH') || exit;

include __DIR__ . "/icons.php";

$pro_exists = class_exists('\MetForm_Pro\Base\Package');

$aweber_btn_text = $code ? 'Re Connect Aweber' : 'Connect Aweber';
$aweber_connect_url = "https://api.wpmet.com/public/aweber-auth/auth.php?redirect_url=". get_admin_url() . "admin.php?page=metform-menu-settings&state=" . wp_create_nonce() . "&section_id=mf-newsletter_integration";

$news_letter_integrations = array(
	'mailchimp' => array(
		'label' => 'MailChimp',
		'description' => 'Integrate MetForm with Mailchimp to establish seamless email marketing with automation.',
		'doc_url' => 'https://wpmet.com/doc/integration/',
		'icon' => $icons['mailchimp'],
		'button_text' => 'Save',
		'status' => 'free',
		'form_fields' => array(
			array(
				'name' => 'mf_mailchimp_api_key',
				'label' => 'API Key:',
				'placeholder' => 'Mailchimp API key',
				'help_text' => 'Enter here your Mailchimp API key.',
				'help_url' => 'https://admin.mailchimp.com/',
			),
		),
	),
	'aweber' => array(
		'label' => 'Aweber',
		'description' => 'Streamline your customer relationship with automated email marketing by linking AWeber with MetForm.',
		'doc_url' => 'https://wpmet.com/doc/aweber-integration/',
		'icon' => $icons['aweber'],
		'status'        => 'pro',
		'redirect_url' => 'https://www.aweber.com/',
		'button_text' => $aweber_btn_text,
		'button_url' => $aweber_connect_url,
	),
	'activecampaign' => array(
		'label' => 'ActiveCampaign',
		'description' => 'Connect MetForm with ActiveCampaign for powerful email automation and incredible customer experiences.',
		'doc_url' => 'https://wpmet.com/doc/activecampaign/',
		'icon' => $icons['activecampaign'],
		'button_text' => 'Save',
		'status' => 'pro',
		'form_fields' => array(
			array(
				'name' => 'mf_active_campaign_url',
				'label' => 'API URL:',
				'placeholder' => 'ActiveCampaign API URL',
				'help_text' => 'Enter here your ActiveCampaign API URL.',
				'help_url' => 'https://www.activecampaign.com/',
			),
			array(
				'name' => 'mf_active_campaign_api_key',
				'label' => 'API Key:',
				'placeholder' => 'ActiveCampaign API key',
				'help_text' => 'Enter here your ActiveCampaign API key.',
				'help_url' => 'https://www.activecampaign.com/',
			),
		),
	),
	'getresponse' => array(
		'label' => 'GetResponse',
		'description' => 'Capture leads and launch targeted email campaigns with MetForm and GetResponse integration.',
		'doc_url' => 'https://wpmet.com/doc/getresponse-integration/',
		'icon' => $icons['getresponse'],
		'button_text' => 'Save',
		'status' => 'pro',
		'form_fields' => array(
			array(
				'name' => 'mf_get_reponse_api_key',
				'label' => 'API Key:',
				'placeholder' => 'GetResponse API key',
			),
		),
	),
	'convertkit' => array(
		'label' => 'ConvertKit',
		'description' => 'Reinforce MetForm with ConvertKit to simplify email marketing and boost audience growth.',
		'doc_url' => 'https://wpmet.com/doc/convertkit-integration/',
		'icon' => $icons['convertkit'],
		'button_text' => 'Save',
		'status' => 'pro',
		'form_fields' => array(
			array(
				'name' => 'mf_ckit_api_key',
				'label' => 'API Key:',
				'placeholder' => 'ConvertKit API key',
				'help_text' => 'Enter here your ConvertKit API key.',
				'help_url' => 'https://app.convertkit.com/users/login',

			),
			array(
				'name' => 'mf_ckit_sec_key',
				'label' => 'Secret Key:',
				'placeholder' => 'ConvertKit API secret',
				'help_text' => 'Enter here your ConvertKit API secret.',
				'help_url' => 'https://app.convertkit.com/users/login',
			),
		),
	),
);

?>

<?php $news_letter_integration_function = function ($settings) use ($news_letter_integrations, $pro_exists) {

	foreach ($news_letter_integrations as $integration_key => $integration) : ?>
		<div class="mf-dashboard__settings-api">
			<div class="mf-dashboard__settings-api__header">
				<div class="mf-dashboard__settings-api__header-title">
					<div class="icon-wrapper">
						<span>
							<?php \MetForm\Utils\Util::metform_content_renderer($integration['icon']); ?>
						</span>
						<div class="mf-dashboard__settings-api__header-action-button <?php echo esc_attr( (! $pro_exists && $integration['status'] == 'pro' ) ? 'disable' : '' ); ?>">
							<button class="manage-btn mf-modal-<?php echo esc_attr($integration_key); ?>-integration">
								<span> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
										<path d="M7.63674 8.90702C8.68995 8.90702 9.54374 8.05323 9.54374 7.00002C9.54374 5.94681 8.68995 5.09302 7.63674 5.09302C6.58353 5.09302 5.72974 5.94681 5.72974 7.00002C5.72974 8.05323 6.58353 8.90702 7.63674 8.90702Z" stroke="#181A26" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
										<path d="M1.28003 7.55939V6.44061C1.28003 5.77952 1.82035 5.23285 2.4878 5.23285C3.63836 5.23285 4.10875 4.41919 3.53029 3.42119C3.19974 2.84909 3.3968 2.10536 3.97526 1.77482L5.07496 1.14551C5.57714 0.846741 6.22552 1.02473 6.52428 1.52691L6.59421 1.64768C7.16631 2.64568 8.1071 2.64568 8.68555 1.64768L8.75548 1.52691C9.05424 1.02473 9.70262 0.846741 10.2048 1.14551L11.3045 1.77482C11.883 2.10536 12.08 2.84909 11.7495 3.42119C11.171 4.41919 11.6414 5.23285 12.792 5.23285C13.4531 5.23285 13.9997 5.77316 13.9997 6.44061V7.55939C13.9997 8.22048 13.4594 8.76715 12.792 8.76715C11.6414 8.76715 11.171 9.58081 11.7495 10.5788C12.08 11.1573 11.883 11.8946 11.3045 12.2252L10.2048 12.8545C9.70262 13.1533 9.05424 12.9753 8.75548 12.4731L8.68555 12.3523C8.11345 11.3543 7.17267 11.3543 6.59421 12.3523L6.52428 12.4731C6.22552 12.9753 5.57714 13.1533 5.07496 12.8545L3.97526 12.2252C3.3968 11.8946 3.19974 11.1509 3.53029 10.5788C4.10875 9.58081 3.63836 8.76715 2.4878 8.76715C1.82035 8.76715 1.28003 8.22048 1.28003 7.55939Z" stroke="#181A26" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
									</svg> Manage</span>
							</button>
						</div>
					</div>
					<div class="mf-dashboard__settings-api__header-wrap">
						<h2 class="integration-label"><?php echo esc_html($integration['label']); ?></h2>
						<?php if ($integration['status'] == 'pro') : ?>
							<div class="badge pro">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16" fill="none">
									<path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V12C32 14.2091 30.2091 16 28 16H4C1.79086 16 0 14.2091 0 12V4Z" fill="#F8174B"></path>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M23.3841 12C22.8845 12 22.407 11.9265 21.9516 11.7796C21.4961 11.6327 21.0957 11.4013 20.7505 11.0854C20.4052 10.7695 20.1334 10.3618 19.935 9.86226C19.7367 9.35537 19.6375 8.75298 19.6375 8.0551V7.83471C19.6375 7.15886 19.7367 6.57851 19.935 6.09366C20.1334 5.60882 20.4052 5.21212 20.7505 4.90358C21.0957 4.59504 21.4961 4.36731 21.9516 4.22039C22.407 4.07346 22.8845 4 23.3841 4C23.8983 4 24.3795 4.07346 24.8276 4.22039C25.2757 4.36731 25.6724 4.59504 26.0177 4.90358C26.363 5.21212 26.6348 5.60882 26.8331 6.09366C27.0315 6.57851 27.1306 7.15886 27.1306 7.83471V8.0551C27.1306 8.75298 27.0315 9.35537 26.8331 9.86226C26.6348 10.3618 26.363 10.7695 26.0177 11.0854C25.6724 11.4013 25.2757 11.6327 24.8276 11.7796C24.3795 11.9265 23.8983 12 23.3841 12ZM23.3731 10.3471C23.6742 10.3471 23.9534 10.281 24.2105 10.1488C24.4676 10.0092 24.6733 9.77778 24.8276 9.45455C24.9892 9.12397 25.07 8.65748 25.07 8.0551V7.83471C25.07 7.26171 24.9892 6.81726 24.8276 6.50138C24.6733 6.18549 24.4676 5.96511 24.2105 5.84022C23.9534 5.71534 23.6742 5.65289 23.3731 5.65289C23.0866 5.65289 22.8147 5.71534 22.5576 5.84022C22.3005 5.96511 22.0911 6.18549 21.9295 6.50138C21.7679 6.81726 21.6871 7.26171 21.6871 7.83471V8.0551C21.6871 8.65748 21.7679 9.12397 21.9295 9.45455C22.0911 9.77778 22.3005 10.0092 22.5576 10.1488C22.8147 10.281 23.0866 10.3471 23.3731 10.3471Z" fill="white"></path>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2512 11.8568V4.14326H15.6121C16.2585 4.14326 16.7948 4.24978 17.2209 4.46282C17.6543 4.67586 17.9812 4.97338 18.2016 5.35538C18.422 5.73738 18.5322 6.19284 18.5322 6.72177C18.5322 7.27273 18.4 7.74656 18.1355 8.14326C17.8784 8.5326 17.489 8.81911 16.9675 9.00276L18.7526 11.8568H16.5487L15.0501 9.21213H14.2347V11.8568H12.2512ZM14.2347 7.66943H15.1713C15.7002 7.66943 16.0602 7.59229 16.2512 7.43802C16.4495 7.27641 16.5487 7.03765 16.5487 6.72177C16.5487 6.40588 16.4495 6.1708 16.2512 6.01653C16.0602 5.85492 15.7002 5.77411 15.1713 5.77411H14.2347V7.66943Z" fill="white"></path>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M4.86914 4.14326V11.8568H6.85261V9.41047H8.00964C8.72956 9.41047 9.32093 9.30763 9.78374 9.10193C10.2466 8.88889 10.5881 8.58403 10.8085 8.18733C11.0363 7.79064 11.1501 7.32048 11.1501 6.77687C11.1501 6.2259 11.0363 5.75574 10.8085 5.3664C10.5881 4.9697 10.2466 4.66851 9.78374 4.46282C9.32093 4.24978 8.72956 4.14326 8.00964 4.14326H4.86914ZM7.78925 7.77962H6.85261V5.77411H7.78925C8.29614 5.77411 8.65243 5.85859 8.85812 6.02755C9.06381 6.19652 9.16666 6.44629 9.16666 6.77687C9.16666 7.10744 9.06381 7.35721 8.85812 7.52618C8.65243 7.69514 8.29614 7.77962 7.78925 7.77962Z" fill="white"></path>
								</svg>
							</div>
						<?php endif; ?>
					</div>
				</div>
				<p class="mf-dashboard__settings-api__header-description"><?php echo esc_html($integration['description']); ?></p>
			</div>
			<div class="mf-dashboard__settings-api__footer">
				<div class="mf-dashboard__settings-api__footer-switch">
					<?php
					if ( ! $pro_exists && $integration['status'] == 'pro' ) { ?>
						<a class="mf-dashboard__settings-api__footer-pro-btn" href="https://wpmet.com/plugin/metform/pricing/" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
								<path d="M10.6 6.40002H2.2C1.53726 6.40002 1 6.93728 1 7.60002V11.8C1 12.4628 1.53726 13 2.2 13H10.6C11.2627 13 11.8 12.4628 11.8 11.8V7.60002C11.8 6.93728 11.2627 6.40002 10.6 6.40002Z" stroke="#3970FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M3.40039 6.4V4C3.40039 3.20435 3.71646 2.44129 4.27907 1.87868C4.84168 1.31607 5.60474 1 6.40039 1C7.19604 1 7.9591 1.31607 8.52171 1.87868C9.08432 2.44129 9.40039 3.20435 9.40039 4V6.4" stroke="#3970FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							Upgrade to Pro
						</a>
					<?php
					} else { ?>
						<a class="mf-dashboard__settings-api__footer-pro-btn" href="<?php echo esc_url($integration['doc_url']); ?>" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
								<path d="M3.5 10.125H8.5" stroke="#3970FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M3.5 7.625H6" stroke="#3970FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M11 12V5.125L6.625 0.75H2.25C1.55964 0.75 1 1.30964 1 2V12C1 12.6904 1.55964 13.25 2.25 13.25H9.75C10.4404 13.25 11 12.6904 11 12Z" stroke="#3970FF" stroke-width="1.5" stroke-linejoin="round" />
								<path d="M6.625 0.75V3.875C6.625 4.56536 7.18463 5.125 7.875 5.125H11" stroke="#3970FF" stroke-width="1.5" stroke-linejoin="round" />
							</svg>
							Documentation
						</a>
					<?php } ?>
				</div>
			</div>
		</div>
		<!-- pro newsletter integration modal  -->
		<div class="attr-modal mf-api-modal mf-api-modal-animate" id="metform_<?php echo esc_attr($integration_key); ?>_modal" tabindex="-1" role="dialog" aria-labelledby="metform_<?php echo esc_attr($integration_key); ?>_modalLabel" style="display:none;">
			<form action="" method="post" id="<?php echo esc_attr($integration_key); ?>">
				<div class="attr-modal-dialog mf-api-modal-dialog" role="document">
					<div class="attr-modal-content">
						<div class="mf-api-modal-close-btn" data-dismiss="modal" aria-label="Close Modal">
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13 1 1 13M1 1l12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
						<div class="mf-dashboard__settings-api__content ">
							<div class="mf-dashboard__settings-api__content-header">
								<h2>Add <?php echo esc_html($integration['label']); ?> Integrations</h2>
							</div>
							<div class="mf-dashboard__settings-api__lists-content">
								<div class="mf-dashboard__settings-api__content-input">
									<?php if (isset($integration['form_fields'])) {
										foreach ($integration['form_fields'] as $field_key => $field) {
									?>
											<h4 class="field-key"><?php echo esc_html($field['label']); ?></h4>
											<input name="<?php echo esc_attr($field['name']); ?>" type="text" placeholder="<?php echo esc_attr($field['placeholder']); ?>" value="<?php echo esc_attr((isset($settings[$field['name']])) ? $settings[$field['name']] : ''); ?>">
											<?php if (isset($field['help_text']) && isset($field['help_url'])): ?>
												<p class="help-text"><?php echo esc_html($field['help_text']); ?> <a href="<?php echo esc_url($field['help_url']); ?>">Get API</a></p>
											<?php endif; ?>
										<?php } ?>
										<button type="button" data-dismiss="modal" class="components-button mf-settings-form-submit-btn save-btn"> <?php echo esc_html(! empty($integration['button_text']) ? $integration['button_text'] : 'Save'); ?> </button>
										<button type="button" class="components-button cancel-btn" data-dismiss="modal">Cancel</button>
									<?php } ?>
									<?php if (isset($integration['redirect_url'])):  ?>
										<label for="attr-input-label" class="mf-setting-label mf-setting-label attr-input-label">Redirect url:</label>
										<p class="description"><?php echo esc_html($integration['redirect_url']); ?></p>
										<a href="<?php echo esc_attr($integration['button_url']); ?>" target="_blank" type="button" class="components-button save-btn"><?php echo esc_html($integration['button_text']); ?></a>
									<?php endif; ?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
		<!-- pro modal  -->
<?php endforeach;
} ?>