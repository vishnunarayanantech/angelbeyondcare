<?php

defined('ABSPATH') || exit;

$settings = \MetForm\Core\Admin\Base::instance()->get_settings_option();

include __DIR__ . "/icons.php";
include __DIR__ . "/integrations.php";



if (!function_exists('mf_dummy_simple_input')) {
	/**
	 * Renders a simple input field with a label, placeholder and description
	 *
	 * @param string $label The label for the input field
	 * @param string $placeholder The placeholder text for the input field
	 * @param string $description The description for the input field
	 */
	function mf_dummy_simple_input($label = 'Label', $placeholder = 'Placeholder', $description = 'Description')
	{
?>
		<div class="mf-setting-input-group">
			<label class="mf-setting-label mf-setting-input-heading"><?php echo esc_html($label); ?></label>
			<div class="mf-setting-disabled-input-wrapper">
				<input disabled type="text" class="mf-setting-input attr-form-control mf-setting-disabled-input" placeholder="<?php echo esc_attr($placeholder); ?>">
			</div>
			<p class="description">
				<?php echo esc_html($description); ?>
			</p>
		</div>
	<?php
	}
}

function mf_pro_freemium_badge($isPro = false)
{
	if ($isPro) {
		return '<svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 3a3 3 0 0 1 3-3h28a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3z" fill="#E81454"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.384 13q-.75 0-1.432-.22a3.2 3.2 0 0 1-1.202-.695 3.25 3.25 0 0 1-.815-1.223q-.297-.76-.297-1.807v-.22q0-1.014.297-1.741a3.2 3.2 0 0 1 .816-1.19 3.3 3.3 0 0 1 1.2-.684Q23.635 5 24.385 5q.77 0 1.444.22.672.22 1.19.684.518.462.815 1.19.298.728.298 1.74v.221q0 1.047-.298 1.807-.297.75-.815 1.223a3.2 3.2 0 0 1-1.19.695q-.672.22-1.444.22m-.01-1.653q.45 0 .837-.198.385-.21.617-.694.242-.497.242-1.4v-.22q0-.86-.242-1.334-.232-.474-.617-.66a1.9 1.9 0 0 0-.838-.188q-.43 0-.815.187-.387.187-.628.661-.243.473-.243 1.334v.22q0 .903.242 1.4.243.484.629.694.386.198.815.198m-11.123 1.51V5.143h3.361q.97 0 1.609.32.65.32.98.892.331.573.331 1.367 0 .826-.396 1.421-.387.585-1.168.86l1.785 2.854h-2.204l-1.499-2.645h-.815v2.645zm1.984-4.188h.936q.795 0 1.08-.231.297-.243.298-.716 0-.474-.298-.705-.285-.243-1.08-.243h-.936zM5.87 5.143v7.714h1.983V10.41H9.01q1.079 0 1.774-.31.694-.318 1.024-.914.342-.595.342-1.41 0-.827-.341-1.41-.33-.595-1.025-.904-.694-.32-1.774-.32zM8.79 8.78h-.937V6.774h.936q.76 0 1.07.254.308.253.308.749 0 .495-.309.75-.309.252-1.069.253" fill="#fff"/></svg>';
	} else {
		return '<svg width="74" height="18" viewBox="0 0 74 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 3a3 3 0 0 1 3-3h68a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3z" fill="#3970FF"/><path d="M5.5 4.722v8.4h2.16v-3.24h3.42v-1.56H7.66V6.378h3.78V4.722z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.637 13.122v-8.4h3.66q1.056 0 1.752.348.708.348 1.068.972t.36 1.488q0 .9-.432 1.548-.42.636-1.272.936l1.944 3.108h-2.4l-1.632-2.88h-.888v2.88zm2.16-4.56h1.02q.864 0 1.176-.252.324-.264.324-.78t-.324-.768q-.312-.264-1.176-.264h-1.02z" fill="#fff"/><path d="M20.98 4.722v8.4h6.12v-1.656h-3.96V9.582h3.6v-1.56h-3.6V6.378h3.96V4.722zm7.5 8.4v-8.4h6.12v1.656h-3.96v1.644h3.6v1.56h-3.6v1.884h3.96v1.656zm7.5-8.4v8.4h2.16V8.31l1.74 3.192h1.2l1.74-3.192v4.812h2.16v-8.4h-2.16l-2.303 4.26-2.329-4.26zm10.796 8.4v-8.4h2.16v8.4zm5.554-.228q.828.384 1.944.384 1.14 0 1.956-.384a2.85 2.85 0 0 0 1.26-1.176q.444-.792.444-1.956v-5.04h-2.16v4.8q0 .96-.324 1.464-.324.492-1.176.492-.828 0-1.164-.492-.336-.504-.336-1.476V4.722h-2.16v5.04q0 1.164.444 1.956.456.78 1.272 1.176m7.17-8.172v8.4h2.16V8.31l1.74 3.192h1.2l1.74-3.192v4.812h2.16v-8.4h-2.16l-2.304 4.26-2.328-4.26z" fill="#fff"/></svg>';
	}
}

if (!function_exists('mf_dummy_checkbox_input')) {
	/**
	 * Renders a simple checkbox input field with a label and description
	 *
	 * @param string $label The label for the checkbox field
	 * @param string $description The description for the checkbox field
	 */
	function mf_dummy_checkbox_input($label = 'Label', $description = 'Description')
	{
	?>
		<div class="attr-row" style="margin: 0 -10px;">
			<div class="attr-col-lg-12">
				<div class="mf-setting-input-group">
					<label class="mf-setting-label mf-setting-switch mf-setting-input-heading">
						<div class="mf-setting-disabled-input-wrapper">
							<input disabled type="checkbox" class="attr-form-control" />
							<span><?php echo esc_html($label); ?></span>
						</div>
					</label>
				</div>
			</div>
		</div>
		<p class="description ts-tf">
			<?php echo esc_html($description); ?>
		</p>
<?php
	}
}
?>
<div class="wrap mf-settings-dashboard">
	<div class="attr-row">
		<div class="attr-col-lg-3 attr-col-sm-4 mf-setting-sidebar-column">
			<div class="mf-setting-sidebar">
				<div class="mf_setting_logo">
					<img src="<?php echo esc_url(plugin_dir_url(__FILE__) . '../images/metform_logo.png'); ?>">
				</div>
				<div class="mf-settings-tab">
					<ul class="nav-tab-wrapper">
						<li><a href="#" class="mf-setting-nav-link mf-setting-nav-hidden"></a></li>

						<li>
							<a href="#mf-dashboard_options" class="mf-setting-nav-link">
								<div class="mf-setting-tab-content">
									<span class="mf-setting-title"><?php echo esc_html__('Welcome', 'metform'); ?></span>
									<span class="mf-setting-subtitle"><?php echo esc_html__('All dashboard info here', 'metform'); ?></span>
								</div>
								<div>
									<span class="mf-setting-tab-icon"><?php \MetForm\Utils\Util::metform_content_renderer( $icons['dashboard'] ); ?></span>
								</div>
							</a>
						</li>

						<li>
							<a href="#mf-general_options" class="mf-setting-nav-link">
								<div class="mf-setting-tab-content">
									<span class="mf-setting-title"><?php echo esc_html__('General', 'metform'); ?></span>
									<span class="mf-setting-subtitle"><?php echo esc_html__('All General info here', 'metform'); ?></span>
								</div>
								<div>
									<span class="mf-setting-tab-icon"><?php \MetForm\Utils\Util::metform_content_renderer( $icons['general'] ); ?></span>
								</div>
							</a>
						</li>

						<li>
							<a href="#mf-payment_options" class="mf-setting-nav-link">
								<div class="mf-setting-tab-content">
									<span class="mf-setting-title"><?php echo esc_html__('Payment', 'metform'); ?></span>
									<span class="mf-setting-subtitle"><?php echo esc_html__('All payment info here', 'metform'); ?></span>
								</div>
								<div>
									<span class="mf-setting-tab-icon"><?php \MetForm\Utils\Util::metform_content_renderer( $icons['payment'] ); ?></span>
								</div>
							</a>
						</li>
						<li>
							<a href="#mf-newsletter_integration" class="mf-setting-nav-link">
								<div class="mf-setting-tab-content">
									<span class="mf-setting-title"><?php echo esc_html__('Newsletter Integration', 'metform'); ?></span>
									<span class="mf-setting-subtitle"><?php echo esc_html__('All newsletter integration info here', 'metform'); ?></span>
								</div>
								<div>
									<span class="mf-setting-tab-icon"><?php \MetForm\Utils\Util::metform_content_renderer( $icons['newsletter_integration'] ); ?></span>
								</div>
							</a>
						</li>
						<li>
							<a href="#mf-google_sheet_integration" class="mf-setting-nav-link">
								<div class="mf-setting-tab-content">
									<span class="mf-setting-title"><span><?php echo esc_html__('Google Sheet Integration', 'metform'); ?></span></span>
									<span class="mf-setting-subtitle"><?php echo esc_html__('All sheets info here', 'metform'); ?></span>
								</div>
								<div>
									<span class="mf-setting-tab-icon"><?php \MetForm\Utils\Util::metform_content_renderer( $icons['google_sheet_integration'] ); ?></span>
								</div>
							</a>
						</li>
						<?php do_action('metform_settings_tab'); ?>

						<li><a href="#" class="mf-setting-nav-link mf-setting-nav-hidden"></a></li>
					</ul>
				</div>
			</div>
		</div>

		<div class="attr-col-lg-9 attr-col-sm-8 mf-setting-main-content-column">
			<div class="metform-admin-container">
				<div class="attr-card-body metform-admin-container--body">
					<div class="form-group mf-admin-input-text mf-admin-input-text--metform-license-key">

						<!-- Welcome Tab -->
						<div class="mf-settings-section" id="mf-dashboard_options">
							<div class="mf-settings-single-section list-item">
								<div class="tab-header">
									<h4 class="list-item-header"><?php esc_html_e('Welcome', 'metform') ?></h4>
								</div>

								<div class="mf-setting-dashboard-banner">
									<img src="<?php echo esc_url(plugin_dir_url(__FILE__) . '../images/dashboard-banner.jpg'); ?>" class="mf-admin-dashboard-banner" style="border-radius: 4px;">
								</div>

								<div class="mf-set-dash-section">
									<div class="mf-setting-dash-section-heading">
										<h2 class="mf-setting-dash-section-heading--title">
											<?php esc_html_e('Top Notch', 'metform'); ?>
											<strong><?php esc_html_e('Features', 'metform'); ?></strong>
										</h2>
										<span class="mf-setting-dash-section-heading--subtitle"><?php esc_html_e('features', 'metform'); ?></span>
										<div class="mf-setting-dash-section-heading--content">
											<p><?php esc_html_e('Get started by spending some time with the documentation to get familiar with ElementsKit.', 'metform') ?>
											</p>
										</div>
									</div> <!-- ./End Section heading -->

									<div class="mf-set-dash-top-notch">
										<div class="mf-set-dash-top-notch--item" data-count="01">
											<h3 class="mf-set-dash-top-notch--item__title">
												<?php esc_html_e('Easy to use', 'metform'); ?></h3>
											<p class="mf-set-dash-top-notch--item__desc">
												<?php esc_html_e('Get started by spending some time with the documentation to get familiar with MetForm', 'metform'); ?>
											</p>
										</div>
										<div class="mf-set-dash-top-notch--item" data-count="02">
											<h3 class="mf-set-dash-top-notch--item__title">
												<?php esc_html_e('Moden Typography', 'metform'); ?></h3>
											<p class="mf-set-dash-top-notch--item__desc">
												<?php esc_html_e('Get started by spending some time with the documentation to get familiar with MetForm', 'metform'); ?>
											</p>
										</div>
										<div class="mf-set-dash-top-notch--item" data-count="03">
											<h3 class="mf-set-dash-top-notch--item__title">
												<?php esc_html_e('Perfectly Match', 'metform'); ?></h3>
											<p class="mf-set-dash-top-notch--item__desc">
												<?php esc_html_e('Get started by spending some time with the documentation to get familiar with MetForm', 'metform'); ?>
											</p>
										</div>
										<div class="mf-set-dash-top-notch--item" data-count="04">
											<h3 class="mf-set-dash-top-notch--item__title">
												<?php esc_html_e('Dynamic Forms', 'metform'); ?></h3>
											<p class="mf-set-dash-top-notch--item__desc">
												<?php esc_html_e('Get started by spending some time with the documentation to get familiar with MetForm', 'metform'); ?>
											</p>
										</div>
										<div class="mf-set-dash-top-notch--item" data-count="05">
											<h3 class="mf-set-dash-top-notch--item__title">
												<?php esc_html_e('Create Faster', 'metform'); ?></h3>
											<p class="mf-set-dash-top-notch--item__desc">
												<?php esc_html_e('Get started by spending some time with the documentation to get familiar with MetForm', 'metform'); ?>
											</p>
										</div>
										<div class="mf-set-dash-top-notch--item" data-count="06">
											<h3 class="mf-set-dash-top-notch--item__title">
												<?php esc_html_e('Awesome Layout', 'metform'); ?></h3>
											<p class="mf-set-dash-top-notch--item__desc">
												<?php esc_html_e('Get started by spending some time with the documentation to get familiar with MetForm', 'metform'); ?>
											</p>
										</div>
									</div> <!-- ./End Section heading -->
								</div> <!-- setting top notch section -->

								<!-- Welcome setting free and pro -->
								<div id="mf-set-dash-free-pro" class="mf-set-dash-section">
									<div class="mf-setting-dash-section-heading">
										<h2 class="mf-setting-dash-section-heading--title">
											<?php esc_html_e('What included with Free &', 'metform'); ?>
											<strong><?php esc_html_e('PRO', 'metform'); ?></strong>
										</h2>
										<span class="mf-setting-dash-section-heading--subtitle"><?php esc_html_e('features', 'metform'); ?></span>
										<div class="mf-setting-dash-section-heading--content">
											<p><?php esc_html_e('Get started by spending some time with the documentation to get familiar with ElementsKit.', 'metform') ?>
											</p>
										</div>
									</div> <!-- ./End Section heading -->

									<div class="mf-set-dash-free-pro-content">
										<ul class="attr-nav attr-nav-tabs" id="myTab" role="tablist">
											<li class="attr-nav-item attr-active">
												<a class="attr-nav-link" data-toggle="tab" href="#mf-set-feature-1"><span class="mf-icon mf mf-document"></span><?php esc_html_e('Easy to use', 'metform'); ?><span class="mf-set-dash-badge"><?php esc_html_e('Pro', 'metform'); ?></span></a>
											</li>
											<li class="attr-nav-item">
												<a class="attr-nav-link" data-toggle="tab" href="#mf-set-feature-2"><span class="mf-icon mf mf-document"></span><?php esc_html_e('Modern Typography', 'metform'); ?><span class="mf-set-dash-badge"><?php esc_html_e('Pro', 'metform'); ?></span></a>
											</li>
											<li class="attr-nav-item">
												<a class="attr-nav-link" id="contact-tab" data-toggle="tab" href="#mf-set-feature-3"><span class="mf-icon mf mf-document"></span><?php esc_html_e('Perfectly Match', 'metform'); ?><span class="mf-set-dash-badge"><?php esc_html_e('Pro', 'metform'); ?></span></a>
											</li>
										</ul>

										<div class="attr-tab-content" id="myTabContent">
											<div class="attr-tab-pane attr-fade attr-active attr-in" id="mf-set-feature-1">
												<div class="mf-set-dash-tab-img">
													<img src="<?php echo esc_url(plugin_dir_url(__FILE__) . '../images/feature-preview.png'); ?>" class="">
												</div>
												<p><?php esc_html_e('Get started by spending some time with the documentation to get familiar with MetForm Get started by spending some time with the documentation to get notification in real time.', 'metform'); ?>
												</p>
												<ul>
													<li><?php esc_html_e('Success Message', 'metform'); ?></li>
													<li><?php esc_html_e('Required Login', 'metform'); ?></li>
													<li><?php esc_html_e('Hide Form After Submission', 'metform'); ?>
													</li>
													<li><?php esc_html_e('Store Entries', 'metform'); ?></li>
												</ul>

												<a href="#" class="mf-admin-setting-btn medium"><span class="mf mf-icon-checked-fillpng"></span><?php esc_html_e('View Details', 'metform'); ?></a>
											</div>
											<div class="attr-tab-pane attr-fade" id="mf-set-feature-2">
												<div class="mf-set-dash-tab-img">
													<img src="<?php echo esc_url(plugin_dir_url(__FILE__) . '../images/feature-preview.png'); ?>" class="">
												</div>
												<p><?php esc_html_e('Get started by spending some time with the documentation to get familiar with MetForm Get started by spending some time with the documentation to get notification in real time.', 'metform'); ?>
												</p>
												<ul>
													<li><?php esc_html_e('Success Message', 'metform'); ?></li>
													<li><?php esc_html_e('Required Login', 'metform'); ?></li>
													<li><?php esc_html_e('Hide Form After Submission', 'metform'); ?>
													</li>
													<li><?php esc_html_e('Store Entries', 'metform'); ?></li>
												</ul>
											</div>
											<div class="attr-tab-pane attr-fade" id="mf-set-feature-3">
												<div class="mf-set-dash-tab-img">
													<img src="<?php echo esc_url(plugin_dir_url(__FILE__) . '../images/feature-preview.png'); ?>" class="">
												</div>
												<p><?php esc_html_e('Get started by spending some time with the documentation to get familiar with MetForm Get started by spending some time with the documentation to get notification in real time.', 'metform'); ?>
												</p>
												<ul>
													<li><?php esc_html_e('Success Message', 'metform'); ?></li>
													<li><?php esc_html_e('Required Login', 'metform'); ?></li>
													<li><?php esc_html_e('Hide Form After Submission', 'metform'); ?>
													</li>
													<li><?php esc_html_e('Store Entries', 'metform'); ?></li>
												</ul>
											</div>
										</div>
									</div>
								</div> <!-- Welcome setting free and pro -->

								<!-- Welcome setting faq -->
								<div id="mf-set-dash-faq" class="mf-set-dash-section">
									<div class="mf-setting-dash-section-heading">
										<h2 class="mf-setting-dash-section-heading--title">
											<?php esc_html_e('General Knowledge Base', 'metform'); ?></h2>
										<span class="mf-setting-dash-section-heading--subtitle"><?php esc_html_e('FAQ', 'metform'); ?></span>
										<div class="mf-setting-dash-section-heading--content">
											<p><?php esc_html_e('Get started by spending some time with the documentation to get familiar with ElementsKit.', 'metform') ?>
											</p>
										</div>
									</div> <!-- ./End Section heading -->

									<div class="mf-admin-accordion">
										<div class="mf-admin-single-accordion">
											<h2 class="mf-admin-single-accordion--heading">
												<?php esc_html_e('1. How to create a Invitation Form using MetForm?', 'metform'); ?>
											</h2>
											<div class="mf-admin-single-accordion--body">
												<div class="mf-admin-single-accordion--body__content">
													<p><?php esc_html_e('You will get 20+ complete homepages and total 450+ blocks in our layout library and we’re continuously updating the numbers there.', 'metform') ?>
													</p>
												</div>
											</div>
										</div>
										<div class="mf-admin-single-accordion">
											<h2 class="mf-admin-single-accordion--heading">
												<?php esc_html_e('2. How to translate language with WPML?', 'metform'); ?>
											</h2>
											<div class="mf-admin-single-accordion--body">
												<div class="mf-admin-single-accordion--body__content">
													<p><?php esc_html_e('You will get 20+ complete homepages and total 450+ blocks in our layout library and we’re continuously updating the numbers there.', 'metform') ?>
													</p>
												</div>
											</div>
										</div>
										<div class="mf-admin-single-accordion">
											<h2 class="mf-admin-single-accordion--heading">
												<?php esc_html_e('3. How to add custom css in specific section shortcode?', 'metform'); ?>
											</h2>
											<div class="mf-admin-single-accordion--body">
												<div class="mf-admin-single-accordion--body__content">
													<p><?php esc_html_e('You will get 20+ complete homepages and total 450+ blocks in our layout library and we’re continuously updating the numbers there.', 'metform') ?>
													</p>
												</div>
											</div>
										</div>
									</div>

									<a href="#" class="mf-admin-setting-btn fatty active"><span class="mf mf-question"></span><?php esc_html_e('View all faq’s', 'metform'); ?></a>
								</div> <!-- Welcome setting faq -->

								<!-- Welcome setting rate now -->
								<div class="mf-dash-content">
									<div class="ekit-admin-section ekit-admin-dual-layout ekit-admin-documentation-section">
										<div class="ekit-admin-left-thumb" style="margin-right: 50px;">
											<img src="<?php echo esc_url(plugin_dir_url(__FILE__) . '../images/documentation-thumb.png'); ?>" alt="<?php esc_attr_e('Documentation Thumb', 'metform'); ?>">
										</div>
										<div class="ekit-admin-right-content">
											<div class="ekit-admin-right-content--heading">
												<h2>Easy Documentation</h2>
												<span class="ekit-admin-right-content--heading__sub-title">Docs</span>
											</div>
											<p>Check out the docs and start building awesome forms with MetForm!</p>
											<div class="ekit-admin-right-content--button">
												<a target="_blank" href="https://wpmet.com/doc/metform/" class="attr-btn attr-btn-primary ekit-admin-right-content--link"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
														<path d="M3.5 10.125H8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M3.5 7.625H6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
														<path d="M11 12V5.125L6.625 0.75H2.25C1.55964 0.75 1 1.30964 1 2V12C1 12.6904 1.55964 13.25 2.25 13.25H9.75C10.4404 13.25 11 12.6904 11 12Z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"></path>
														<path d="M6.625 0.75V3.875C6.625 4.56536 7.18463 5.125 7.875 5.125H11" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"></path>
													</svg> Get started</a>
											</div>
										</div>
									</div>
									<!-- Support  -->
									<div class="ekit-admin-section ekit-admin-dual-layout ekit-admin-support-section">
										<div class="ekit-admin-right-content" style="margin-right: 50px;">
											<div class="ekit-admin-right-content--heading">
												<h2>Top-notch &amp; Friendly Support</h2>
												<span class="ekit-admin-right-content--heading__sub-title">Support</span>
											</div>
											<p>Stuck somewhere? Feel free to open a ticket for getting Pro support.</p>
											<div class="ekit-admin-right-content--button">
												<a target="_blank" href="https://wpmet.com/support-ticket-form/" class="attr-btn attr-btn-primary ekit-admin-right-content--link"><span class="mf mf-question"></span>Join support forum</a>
											</div>
										</div>

										<div class="ekit-admin-left-thumb">
											<img src="<?php echo esc_url(plugin_dir_url(__FILE__) . '../images/suport-thumb.png'); ?>" alt="<?php esc_attr_e('Support Thumb', 'metform'); ?>">
										</div>

									</div>
									<!-- Support  -->
									<!-- Feature Request  -->
									<div class="ekit-admin-section ekit-admin-dual-layout ekit-admin-feature-request-section ekit-admin-except-title">
										<div class="ekit-admin-left-thumb" style="margin-right: 50px;">
											<img src="<?php echo esc_url(plugin_dir_url(__FILE__) . '../images/featured-request-thumb.png'); ?>" alt="<?php esc_attr_e('Feature Request Thumb', 'metform'); ?>">
										</div>
										<div class="ekit-admin-right-content two">

											<p>Maybe we’re missing something you can’t live without.</p>
											<div class="ekit-admin-right-content--button">
												<a target="_blank" href="https://wpmet.com/plugin/metform/roadmaps/#ideas" class="attr-btn attr-btn-primary ekit-admin-right-content--link"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
														<path d="M3.5 10.125H8.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
														<path d="M3.5 7.625H6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
														<path d="M11 12V5.125L6.625 0.75H2.25C1.55964 0.75 1 1.30964 1 2V12C1 12.6904 1.55964 13.25 2.25 13.25H9.75C10.4404 13.25 11 12.6904 11 12Z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" />
														<path d="M6.625 0.75V3.875C6.625 4.56536 7.18463 5.125 7.875 5.125H11" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" />
													</svg></span> Request a Feature</a>
											</div>
										</div>
									</div>


									<!-- Feature Request  -->
									<div id="mf-set-dash-rate-now" class="mf-set-dash-section ekit-admin-section " style="margin: 60px 120px 0 120px;">
										<div class="mf-admin-right-content">

											<div class="mf-setting-dash-section-heading">
												<h2 class="mf-setting-dash-section-heading--title">
													<strong><?php esc_html_e('Satisfied?', 'metform'); ?></strong><br><?php esc_html_e('Don\'t forget to rate MetForm!', 'metform'); ?>
												</h2>
												<span class="mf-setting-dash-section-heading--subtitle"><?php esc_html_e('review', 'metform'); ?></span>
												<div class="mf-setting-dash-section-heading--content">
													<p></p>
												</div>
											</div> <!-- ./End Section heading -->
											<div class="mf-admin-right-content--button">
												<a target="_blank" href="https://wordpress.org/support/plugin/metform/reviews/?rate=5#new-post" class="mf-admin-setting-btn mf-admin-setting-rate fatty"><span class="mf mf-star-1"></span><?php esc_html_e('Rate it now', 'metform'); ?></a>
											</div>

										</div>

										<div class="mf-admin-left-thumb">
											<img src="<?php echo esc_url(plugin_dir_url(__FILE__) . '../images/rate-now-thumb.png'); ?>" alt="<?php esc_attr_e('Rate Now Thumb', 'metform'); ?>">
										</div>
									</div>

								</div>
							</div>
						</div>


						<!-- General Tab -->
						<form action="" method="post" class="mf-settings-form-common mf-general-tab-form" id="mf-general-form">
							<div class="mf-settings-section" id="mf-general_options">
								<div class="mf-settings-single-section">
									<div class="recaptha-tab list-item">
										<div class="tab-header">
											<h4 class="list-item-header"><?php esc_attr_e('ReCaptcha Settings', 'metform') ?></h4>
										</div>
										<div class="attr-row" style="margin: 0 -10px;">
											<div class="attr-col-lg-6">
												<div class="mf-setting-input-group">
													<label class="mf-setting-label" for="captcha-method"><?php esc_html_e('Select version:', 'metform'); ?></label>
													<div class="mf-setting-select-container">
														<select name="mf_recaptcha_version" class="mf-setting-input attr-form-control mf-recaptcha-version" id="captcha-method">
															<option <?php echo esc_attr((isset($settings['mf_recaptcha_version']) && ($settings['mf_recaptcha_version'] == 'recaptcha-v2')) ? 'Selected' : ''); ?> value="recaptcha-v2">
																<?php esc_html_e('reCAPTCHA V2', 'metform'); ?>
															</option>
															<option <?php echo esc_attr((isset($settings['mf_recaptcha_version']) && ($settings['mf_recaptcha_version'] == 'recaptcha-v3')) ? 'Selected' : ''); ?> value="recaptcha-v3">
																<?php esc_html_e('reCAPTCHA V3', 'metform'); ?>
															</option>
														</select>
													</div>
													<p class="description">
														<?php esc_html_e('Select google reCaptcha version which one want to use.', 'metform'); ?>
													</p>
												</div>
											</div>
										</div>

										<div class="attr-row" style="margin: 0 -5px;">
											<div class="attr-col-lg-12">
												<div class="mf-recaptcha-settings-wrapper">
													<div class="mf-recaptcha-settings" id="mf-recaptcha-v2">
														<div class="attr-row">
															<div class="attr-col-lg-6">
																<div class="mf-setting-input-group">
																	<label class="mf-setting-label"><?php esc_html_e('Site key:', 'metform'); ?>
																	</label>
																	<input type="text" name="mf_recaptcha_site_key" value="<?php echo esc_attr((isset($settings['mf_recaptcha_site_key'])) ? $settings['mf_recaptcha_site_key'] : ''); ?>" class="mf-setting-input attr-form-control mf-recaptcha-site-key" placeholder="<?php esc_html_e('Insert site key', 'metform'); ?>">
																	<p class="description">
																		<?php esc_html_e('Create google reCaptcha site key from reCaptcha admin panel. ', 'metform'); ?><a target="__blank" class="mf-setting-btn-link" href="<?php echo esc_url('https://www.google.com/recaptcha/admin/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																	</p>
																</div>
															</div>
															<div class="attr-col-lg-6">
																<div class="mf-setting-input-group">
																	<label class="mf-setting-label"><?php esc_html_e('Secret key:', 'metform'); ?>
																	</label>
																	<input type="text" name="mf_recaptcha_secret_key" value="<?php echo esc_attr((isset($settings['mf_recaptcha_secret_key'])) ? $settings['mf_recaptcha_secret_key'] : ''); ?>" class="mf-setting-input attr-form-control mf-recaptcha-secret-key" placeholder="<?php esc_html_e('Insert secret key', 'metform'); ?>">
																	<p class="description">
																		<?php esc_html_e('Create google reCaptcha secret key from reCaptcha admin panel. ', 'metform'); ?><a target="__blank" class="mf-setting-btn-link" href="<?php echo esc_url('https://www.google.com/recaptcha/admin/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																	</p>
																</div>
															</div>
														</div>
													</div>

													<div class="mf-recaptcha-settings" id="mf-recaptcha-v3">
														<div class="attr-row">
															<div class="attr-col-lg-6">
																<div class="mf-setting-input-group">
																	<label class="mf-setting-label"><?php esc_html_e('Site key:', 'metform'); ?>
																	</label>
																	<input type="text" name="mf_recaptcha_site_key_v3" value="<?php echo esc_attr((isset($settings['mf_recaptcha_site_key_v3'])) ? $settings['mf_recaptcha_site_key_v3'] : ''); ?>" class="mf-setting-input attr-form-control mf-recaptcha-site-key" placeholder="<?php esc_html_e('Insert site key', 'metform'); ?>">
																	<p class="description">
																		<?php esc_html_e('Create google reCaptcha site key from reCaptcha admin panel. ', 'metform'); ?><a target="__blank" class="mf-setting-btn-link" href="<?php echo esc_url('https://www.google.com/recaptcha/admin/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																	</p>
																</div>
															</div>
															<div class="attr-col-lg-6">
																<div class="mf-setting-input-group">
																	<label class="mf-setting-label"><?php esc_html_e('Secret key:', 'metform'); ?>
																	</label>
																	<input type="text" name="mf_recaptcha_secret_key_v3" value="<?php echo esc_attr((isset($settings['mf_recaptcha_secret_key_v3'])) ? $settings['mf_recaptcha_secret_key_v3'] : ''); ?>" class="mf-setting-input attr-form-control mf-recaptcha-secret-key" placeholder="<?php esc_html_e('Insert secret key', 'metform'); ?>">
																	<p class="description">
																		<?php esc_html_e('Create google reCaptcha secret key from reCaptcha admin panel. ', 'metform'); ?><a target="__blank" class="mf-setting-btn-link" href="<?php echo esc_url('https://www.google.com/recaptcha/admin/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<?php if (class_exists('\MetForm_Pro\Base\Package')) : ?>
										<div class="map-tab list-item">
											<div class="tab-header">
												<h4 class="list-item-header"><?php esc_html_e('Map', 'metform') ?></h4>
											</div>
											<div class="mf-setting-input-group">
												<label class="mf-setting-label"><?php esc_html_e('API:', 'metform'); ?>
												</label>
												<input type="text" name="mf_google_map_api_key" value="<?php echo esc_attr((isset($settings['mf_google_map_api_key'])) ? $settings['mf_google_map_api_key'] : ''); ?>" class="mf-setting-input attr-form-control mf-google-map-api-key" placeholder="<?php esc_html_e('Insert map API key', 'metform'); ?>">
												<p class="description">
													<?php esc_html_e('Create google map API key from google developer console. ', 'metform'); ?><a target="__blank" class="mf-setting-btn-link" href="<?php echo esc_url('https://console.cloud.google.com/google/maps-apis/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
												</p>
											</div>
										</div>
									<?php else : ?>
										<div class="mf-pro-missing-wrapper" id="mf-map-tab">
											<div class="mf-pro-missing">
												<div class="map-tab list-item">
													<div class="tab-header">
														<h4 class="list-item-header"><?php esc_html_e('Map', 'metform') ?></h4>
													</div>
													<div class="mf-pro-alert">
														<div class="pro-content">
															<h5 class="alert-heading"><?php esc_html_e('Map is a premium feature—get Pro to use it!', 'metform') ?></h5>
															<p class="alert-description"><?php esc_html_e('Get full access to premium features by upgrading today.', 'metform') ?></p>
														</div>
														<div class="pro-btn">
															<a href="https://wpmet.com/plugin/metform/pricing/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
																	<path d="M10.6 6.40002H2.2C1.53726 6.40002 1 6.93728 1 7.60002V11.8C1 12.4628 1.53726 13 2.2 13H10.6C11.2627 13 11.8 12.4628 11.8 11.8V7.60002C11.8 6.93728 11.2627 6.40002 10.6 6.40002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																	<path d="M3.40039 6.4V4C3.40039 3.20435 3.71646 2.44129 4.27907 1.87868C4.84168 1.31607 5.60474 1 6.40039 1C7.19604 1 7.9591 1.31607 8.52171 1.87868C9.08432 2.44129 9.40039 3.20435 9.40039 4V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																</svg> Upgrade to Pro </a>
														</div>
													</div>
													<div class="attr-row">
														<div class="attr-col-lg-12">
															<?php
															mf_dummy_simple_input('API:', 'Insert map API key', 'Create google map API key from google developer console');
															?>
														</div>
													</div>
												</div>
											</div>
										</div>
									<?php endif; ?>
									<?php if (class_exists('\MetForm_Pro\Base\Package')) : ?>
										<div class="other-tab list-item">
											<div class="tab-header">
												<h4 class="list-item-header"><?php esc_html_e('Smart Form Settings', 'metform') ?></h4>
											</div>
											<div class="tab-pane" id="mf-other-tab">
												<div class="info-list">
													<div class="attr-row">
														<div class="attr-col-lg-12">
															<div class="mf-setting-input-group">
																<label class="mf-setting-label mf-setting-switch">
																	<input type="checkbox" name="mf_save_progress" value="1" class="attr-form-control" <?php echo esc_attr((isset($settings['mf_save_progress'])) ? 'Checked' : ''); ?> />
																	<span><?php esc_html_e('Save Form Progress ?', 'metform'); ?></span>
																</label>
															</div>
														</div>
													</div>
													<p class="description">
														<?php esc_html_e('Turn this feature on if you want partial submissions to be saved for a form so that the user can complete the form submission later. ', 'metform'); ?>
														<span class="description-highlight"><?php esc_html_e('Please note ', 'metform') ?></span> <br> <?php esc_html_e('that the submissions will be saved for 2 hours, after which the form submissions will be reset. ', 'metform'); ?>
													</p>
												</div>
												<div class="info-list">
													<div class="attr-row" style="margin-top:18px">
														<div class="attr-col-lg-12">
															<div class="mf-setting-input-group">
																<label class="mf-setting-label mf-setting-switch">
																	<input type="checkbox" name="mf_field_name_show" value="1" class="attr-form-control" <?php echo esc_attr((isset($settings['mf_field_name_show'])) ? 'Checked' : ''); ?> />
																	<span><?php esc_html_e('Display Input Field Name Alongside Value ', 'metform'); ?></span>

																</label>
															</div>
														</div>
													</div>
													<p class="description">
														<?php esc_html_e('Turn this feature on if you want the input field title to be shown along with the value. By default, only the value is displayed. This feature works for', 'metform'); ?> <br> <?php esc_html_e('widgets like radio buttons, multi-select, select, image select, toggle select, checkboxes, and simple repeater.', 'metform'); ?>
													</p>
												</div>
											</div>
										</div>
									<?php else : ?>
										<div class="mf-pro-missing-wrapper">
											<div class="mf-pro-missing">
												<div class="list-item">
													<div class="tab-header">
														<h4 class="list-item-header"><?php esc_html_e('Smart Form Settings', 'metform') ?></h4>
													</div>

													<div class="mf-pro-alert">
														<div class="pro-content">
															<h5 class="alert-heading"><?php esc_html_e('Smart Form is a premium feature—get Pro to use it!', 'metform') ?></h5>
															<p class="alert-description"><?php esc_html_e('Get full access to premium features by upgrading today.', 'metform') ?></p>
														</div>
														<div class="pro-btn">
															<a href="https://wpmet.com/plugin/metform/pricing/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
																	<path d="M10.6 6.40002H2.2C1.53726 6.40002 1 6.93728 1 7.60002V11.8C1 12.4628 1.53726 13 2.2 13H10.6C11.2627 13 11.8 12.4628 11.8 11.8V7.60002C11.8 6.93728 11.2627 6.40002 10.6 6.40002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																	<path d="M3.40039 6.4V4C3.40039 3.20435 3.71646 2.44129 4.27907 1.87868C4.84168 1.31607 5.60474 1 6.40039 1C7.19604 1 7.9591 1.31607 8.52171 1.87868C9.08432 2.44129 9.40039 3.20435 9.40039 4V6.4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																</svg> Upgrade to Pro</a>
														</div>
													</div>

													<div class="info-list">
														<?php
														mf_dummy_checkbox_input('Save Form Progress ?', 'Turn this feature on if you want partial submissions to be saved for a form so that the user can complete the form submission later. Please note that the submissions will be saved for 2 hours, after which the form submissions will be reset.');
														?>
													</div>

													<div class="info-list">
														<?php
														mf_dummy_checkbox_input('Display Input Field Name Alongside Value', 'Turn this feature on if you want the input field title to be shown along with the value. By default, only the value is displayed. This feature works for widgets like radio buttons, multi-select, select, image select, toggle select, checkboxes, and simple repeater.');
														?>
													</div>
												</div>
											</div>
										</div>
									<?php endif; ?>

									<div class="mf-setting-header">
										<button type="submit" name="submit" id="mf-general-submit" class="mf-settings-form-submit-btn mf-admin-setting-btn active">
											<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M6.00024 12C2.68654 12 0.000244141 9.31373 0.000244141 6C0.000244141 2.68629 2.68654 0 6.00024 0C9.31397 0 12.0002 2.68629 12.0002 6C12.0002 9.31373 9.31397 12 6.00024 12ZM7.81269 3.73358L5.1368 6.65269L4.15367 5.66953L3.36434 6.4589L5.17191 8.26644L8.63556 4.48788L7.81269 3.73358Z" fill="white" />
											</svg> <?php esc_attr_e('Save Changes', 'metform'); ?>
										</button>
									</div>
								</div>
							</div>
							<?php wp_nonce_field('metform-settings-page', 'metform-settings-page'); ?>
						</form>
						<!-- ./End General Tab -->

						<!-- Payment Tab -->
						<form action="" method="post" class="mf-settings-form-common mf-payment-tab-form" id="mf-payment-form">
							<div class="mf-settings-section" id="mf-payment_options">
								<div class="mf-settings-single-section">
									<div class="list-item">
										<div class="tab-header">
											<h4 class="list-item-header"><?php esc_html_e('Payment', 'metform') ?></h4>
										</div>

										<div class="mf-setting-tab-nav">
											<ul class="attr-nav attr-nav-tabs" id="nav-tab" role="attr-tablist">
												<li class="attr-active attr-in">
													<a class="attr-nav-item attr-nav-link" id="mf-paypal-tab-label" data-toggle="tab" href="#mf-paypal-tab" role="tab"><?php esc_attr_e('Paypal', 'metform'); ?></a>
												</li>
												<li>
													<a class="attr-nav-item attr-nav-link" id="mf-stripe-tab-label" data-toggle="tab" href="#attr-stripe-tab" role="tab" aria-controls="nav-profile" aria-selected="false"><?php esc_html_e('Stripe', 'metform'); ?></a>
												</li>
											</ul>
										</div>

										<div class="attr-form-group-wrap">
											<div class="attr-tab-content" id="nav-tabContent">
												<?php if (class_exists('\MetForm_Pro\Core\Integrations\Payment\Paypal')) : ?>
													<div class="attr-tab-pane attr-fade attr-active attr-in" id="mf-paypal-tab" role="tabpanel" aria-labelledby="mf-paypal-tab-label">
														<div class="attr-row" style="margin: 0 -10px;">
															<div class="attr-col-lg-12">
																<div class="mf-setting-input-group">
																	<label class="mf-setting-label mf-setting-input-heading"><?php esc_html_e('Paypal email:', 'metform'); ?></label>
																	<input type="email" name="mf_paypal_email" value="<?php echo esc_attr((isset($settings['mf_paypal_email'])) ? $settings['mf_paypal_email'] : ''); ?>" class="mf-setting-input mf-paypal-email attr-form-control" placeholder="<?php esc_html_e('Paypal email', 'metform'); ?>">
																	<p class="description">
																		<?php esc_html_e('Enter here your paypal email. ', 'metform'); ?><a class="mf-setting-btn-link" target="__blank" href="<?php echo esc_url('https://www.paypal.com/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																	</p>
																</div>

																<div class="mf-setting-input-group">
																	<label class="mf-setting-label mf-setting-input-heading"><?php esc_html_e('Paypal token:', 'metform'); ?></label>
																	<input type="text" name="mf_paypal_token" value="<?php echo esc_attr((isset($settings['mf_paypal_token'])) ? $settings['mf_paypal_token'] : ''); ?>" class="mf-setting-input mf-paypal-token attr-form-control" placeholder="<?php esc_html_e('Paypal token', 'metform'); ?>">
																	<p class="description">
																		<?php esc_html_e('Enter here your paypal token. This is optional. ', 'metform'); ?><a class="mf-setting-btn-link" target="__blank" href="<?php echo esc_url('https://www.paypal.com/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																	</p>
																</div>

																<div class="mf-setting-input-group">
																	<label class="mf-setting-label mf-setting-input-heading"><?php esc_html_e('Enable sandbox mode:', 'metform'); ?>
																		<input type="checkbox" value="1" name="mf_paypal_sandbox" <?php echo esc_attr((isset($settings['mf_paypal_sandbox'])) ? 'Checked' : ''); ?> class="mf-admin-control-input input-paypal_sandbox">
																	</label>
																	<p class="description">
																		<?php esc_html_e('Enable this for testing payment method. ', 'metform'); ?>
																	</p>
																</div>
															</div>
														</div>
													</div>
												<?php else : ?>
													<div class="mf-pro-missing-wrapper attr-tab-pane attr-fade attr-active attr-in" id="mf-paypal-tab" role="tabpanel" aria-labelledby="mf-paypal-tab-label">
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
															<div class="attr-row" style="margin: 0 -10px;">
																<div class="attr-col-lg-12">
																	<?php
																	mf_dummy_simple_input('Paypal email:', 'Paypal email', 'Enter here your paypal email.');
																	mf_dummy_simple_input('Paypal token:', 'Paypal token', 'Enter here your paypal token. This is optional.');
																	mf_dummy_checkbox_input('Enable sandbox mode:', 'Enable this for testing payment method.');
																	?>
																</div>
															</div>
														</div>
													</div>
												<?php endif; ?>

												<?php if (class_exists('\MetForm_Pro\Core\Integrations\Payment\Stripe')) : ?>
													<div class="attr-tab-pane attr-fade" id="attr-stripe-tab" role="tabpanel" aria-labelledby="mf-stripe-tab-label">
														<div class="attr-row" style="margin: 0 -10px;">
															<div class="attr-col-lg-12">
																<div class="mf-setting-input-group">
																	<label for="attr-input-label" class="mf-setting-label attr-input-label mf-setting-input-heading"><?php esc_html_e('Image url:', 'metform'); ?></label>
																	<input type="text" name="mf_stripe_image_url" value="<?php echo esc_attr((isset($settings['mf_stripe_image_url'])) ? $settings['mf_stripe_image_url'] : ''); ?>" class="mf-setting-input mf-stripe-image-url attr-form-control" placeholder="<?php esc_html_e('Stripe image url', 'metform'); ?>">
																	<p class="description">
																		<?php esc_html_e('Enter here your stripe image url. This image will show on stripe payment pop up modal. ', 'metform'); ?>
																	</p>
																</div>

																<div class="mf-setting-input-group">
																	<label for="attr-input-label" class="mf-setting-label attr-input-label mf-setting-input-heading"><?php esc_html_e('Live publishiable key:', 'metform'); ?></label>
																	<input type="text" name="mf_stripe_live_publishiable_key" value="<?php echo esc_attr((isset($settings['mf_stripe_live_publishiable_key'])) ? $settings['mf_stripe_live_publishiable_key'] : ''); ?>" class="mf-setting-input mf-stripe-live-publishiable-key attr-form-control" placeholder="<?php esc_html_e('Stripe live publishiable key', 'metform'); ?>">
																	<p class="description">
																		<?php esc_html_e('Enter here your stripe live publishiable key. ', 'metform'); ?><a class="mf-setting-btn-link" target="__blank" href="<?php echo esc_url('https://stripe.com/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																	</p>
																</div>

																<div class="mf-setting-input-group">
																	<label for="attr-input-label" class="mf-setting-label attr-input-label mf-setting-input-heading"><?php esc_html_e('Live secret key:', 'metform'); ?></label>
																	<input type="text" name="mf_stripe_live_secret_key" value="<?php echo esc_attr((isset($settings['mf_stripe_live_secret_key'])) ? $settings['mf_stripe_live_secret_key'] : ''); ?>" class="mf-setting-input mf-stripe-live-secret-key attr-form-control" placeholder="<?php esc_html_e('Stripe live secret key', 'metform'); ?>">
																	<p class="description">
																		<?php esc_html_e('Enter here your stripe live secret key. ', 'metform'); ?><a target="__blank" class="mf-setting-btn-link" href="<?php echo esc_url('https://stripe.com/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																	</p>
																</div>

																<div class="mf-setting-input-group">
																	<label class="mf-setting-label attr-input-label mf-setting-input-heading">
																		<?php esc_html_e('Enable sandbox mode:', 'metform'); ?>
																		<input type="checkbox" value="1" name="mf_stripe_sandbox" <?php echo esc_attr((isset($settings['mf_stripe_sandbox'])) ? 'Checked' : ''); ?> class="mf-admin-control-input input-stripe_sandbox">
																	</label>
																	<p class="description">
																		<?php esc_html_e('Enable this for testing your payment system. ', 'metform'); ?>
																	</p>
																</div>

																<div class="mf-form-modalinput-stripe_sandbox_keys">
																	<div class="mf-setting-input-group">
																		<label for="attr-input-label" class="mf-setting-label attr-input-label mf-setting-input-heading"><?php esc_html_e('Test publishiable key:', 'metform'); ?></label>
																		<input type="text" name="mf_stripe_test_publishiable_key" value="<?php echo esc_attr((isset($settings['mf_stripe_test_publishiable_key'])) ? $settings['mf_stripe_test_publishiable_key'] : ''); ?>" class="mf-setting-input mf-stripe-test-publishiable-key attr-form-control" placeholder="<?php esc_html_e('Stripe test publishiable key', 'metform'); ?>">
																		<p class="description">
																			<?php esc_html_e('Enter here your test publishiable key. ', 'metform'); ?><a class="mf-setting-btn-link" target="__blank" href="<?php echo esc_url('https://stripe.com/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																		</p>
																	</div>
																	<div class="mf-setting-input-group">
																		<label for="attr-input-label" class="mf-setting-label attr-input-label mf-setting-input-heading"><?php esc_html_e('Test secret key:', 'metform'); ?></label>
																		<input type="text" name="mf_stripe_test_secret_key" value="<?php echo esc_attr((isset($settings['mf_stripe_test_secret_key'])) ? $settings['mf_stripe_test_secret_key'] : ''); ?>" class="mf-setting-input mf-stripe-test-secret-key attr-form-control" placeholder="<?php esc_html_e('Stripe test secret key', 'metform'); ?>">
																		<p class="description">
																			<?php esc_html_e('Enter here your test secret key. ', 'metform'); ?><a target="__blank" class="mf-setting-btn-link" href="<?php echo esc_url('https://stripe.com/'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																		</p>
																	</div>
																</div>

															</div>
														</div>
													</div>
												<?php else : ?>
													<div class="mf-pro-missing-wrapper attr-tab-pane attr-fade" id="attr-stripe-tab" role="tabpanel" aria-labelledby="mf-stripe-tab-label">
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
														<div class="mf-pro-missing">
															<div class="attr-row" style="margin: 0 -10px;">
																<div class="attr-col-lg-12">
																	<?php
																	mf_dummy_simple_input('Image url:', 'Stripe image url', 'Enter here your stripe image url. This image will show on stripe payment pop up modal.');
																	mf_dummy_simple_input('LIve publishable key:', 'Stripe test publishable key', 'Enter here your publishable key.');
																	mf_dummy_simple_input('Live secret key:', 'Stripe live secret key', 'Enter here your stripe live secret key.');
																	mf_dummy_checkbox_input('Enable sandbox mode:', 'Enable this for testing your payment system.');
																	mf_dummy_simple_input('Test publishable key:', 'Stripe test publishable key', 'Enter here your test publishable key.');
																	mf_dummy_simple_input('Test secret key:', 'Stripe test secret key', 'Enter here your test secret key.');
																	?>
																</div>
															</div>
														</div>
													</div>
												<?php endif; ?>
											</div>
										</div>
									</div>

									<div class="list-item">
										<div class="tab-header">
											<h4 class="list-item-header"><?php esc_html_e('Redirect Page Settings ', 'metform') ?></h4>
										</div>

										<div class="attr-row" style="margin: 0 -10px;">
											<div class="attr-col-lg-12">
												<?php
												if (!class_exists('\MetForm_Pro\Base\Package')) { ?>
													<div class="mf-pro-alert">
														<div class="pro-content">
															<h5 class="alert-heading">Redirect Page is a premium feature—get Pro to use it!</h5>
															<p class="alert-description">Get full access to premium features by upgrading today.</p>
														</div>
														<div class="pro-btn">
															<a href="https://wpmet.com/plugin/metform/pricing/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
																	<path d="M10.6 6.40002H2.2C1.53726 6.40002 1 6.93728 1 7.60002V11.8C1 12.4628 1.53726 13 2.2 13H10.6C11.2627 13 11.8 12.4628 11.8 11.8V7.60002C11.8 6.93728 11.2627 6.40002 10.6 6.40002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																	<path d="M3.40039 6.4V4C3.40039 3.20435 3.71646 2.44129 4.27907 1.87868C4.84168 1.31607 5.60474 1 6.40039 1C7.19604 1 7.9591 1.31607 8.52171 1.87868C9.08432 2.44129 9.40039 3.20435 9.40039 4V6.4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																</svg> Upgrade to Pro</a>
														</div>
													</div>
												<?php
												} ?>
											</div>
											<div class="attr-col-lg-6">
												<!-- Thank you page section -->
												<?php if (class_exists('\MetForm_Pro\Base\Package')) : ?>
													<div class="attr-tab-pane" id="mf-thankyou-tab">
														<div class="mf-setting-input-group">
															<h3 class="mf-setting-input-heading"><?php esc_html_e('Select Thank You Page :', 'metform'); ?></h3>
															<?php $page_ids = get_all_page_ids(); ?>
															<select name="mf_thank_you_page" class="mf-setting-input attr-form-control">
																<option value=""><?php esc_html_e('Select a page', 'metform'); ?></option>
																<?php foreach ($page_ids as $page) : ?>
																	<option <?php
																			if (isset($settings['mf_thank_you_page'])) {
																				if ($settings['mf_thank_you_page'] == $page) {
																					echo esc_attr('selected');
																				}
																			}
																			?> value="<?php echo esc_attr($page); ?>"> <?php echo esc_html(get_the_title($page)); ?>
																	<?php endforeach; ?>
															</select>
															<br><br>
															<p class="info-description"><?php echo wp_kses_post(__('Handle successful payment redirection page. Learn more about Thank you page. ', 'metform') . '<a href="https://help.wpmet.com/docs/thank-you-page/" target="_blank">' . __('Here', 'metform') . '</a>'); ?></p>
															<a class="mf-setting-btn-link btn-link-two" target="_blank" href="<?php echo esc_url(get_admin_url() . 'post-new.php?post_type=page'); ?>"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
																	<path d="M6.368 2.265H2.193A1.193 1.193 0 0 0 1 3.458v8.35A1.193 1.193 0 0 0 2.193 13h8.35a1.193 1.193 0 0 0 1.192-1.193V7.633" stroke="#54565C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																	<path d="M10.84 1.37a1.265 1.265 0 0 1 1.79 1.79L6.964 8.825l-2.385.597.596-2.386 5.666-5.665z" stroke="#54565C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																</svg> <?php esc_html_e('Create Thank You Page', 'metform'); ?> </a>
														</div>
													</div>
												<?php else : ?>
													<div class="mf-pro-missing-wrapper attr-tab-pane" id="mf-thankyou-tab" role="tabpanel" aria-labelledby="mf-thankyou-tab-label">
														<div class="mf-pro-missing">
															<?php
															mf_dummy_simple_input('Select Thank You Page :', 'Select a page', 'Handle successfull payment redirection page. Learn more about Thank you page.');
															?>
															<a class="mf-setting-btn-link btn-link-two disable" href="#">
																<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
																	<path d="M6.368 2.265H2.193A1.193 1.193 0 0 0 1 3.458v8.35A1.193 1.193 0 0 0 2.193 13h8.35a1.193 1.193 0 0 0 1.192-1.193V7.633" stroke="#54565C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																	<path d="M10.84 1.37a1.265 1.265 0 0 1 1.79 1.79L6.964 8.825l-2.385.597.596-2.386 5.666-5.665z" stroke="#54565C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																</svg>
																<?php esc_html_e('Create Thank You Page', 'metform'); ?></a>
														</div>
													</div>
												<?php endif; ?>
											</div>
											<div class="attr-col-lg-6">
												<!-- Cancel page section -->
												<?php if (class_exists('\MetForm_Pro\Base\Package')) : ?>
													<div class="attr-tab-pane" id="mf-cancel-tab">
														<div class="mf-setting-input-group">
															<h3 class="mf-setting-input-heading"><?php esc_html_e('Select Cancel Page :', 'metform'); ?></h3>
															<?php $page_ids = get_all_page_ids(); ?>
															<select name="mf_cancel_page" class="mf-setting-input attr-form-control">
																<option value=""><?php esc_html_e('Select a page', 'metform'); ?></option>
																<?php foreach ($page_ids as $page) :
																?>
																	<option <?php
																			if (isset($settings['mf_cancel_page'])) {
																				if ($settings['mf_cancel_page'] == $page) {
																					echo esc_attr('selected');
																				}
																			}
																			?> value="<?php echo esc_attr($page); ?>"> <?php echo esc_html(get_the_title($page)); ?>
																	<?php endforeach; ?>
															</select>
															<br><br>
															<p class="info-description"><?php esc_html_e('Handle canceled payment redirection page. Learn more about cancel page.', 'metform'); ?></p>
															<a class="mf-setting-btn-link btn-link-two" href="<?php echo esc_url(get_admin_url() . 'post-new.php?post_type=page'); ?>">
																<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
																	<path d="M6.368 2.265H2.193A1.193 1.193 0 0 0 1 3.458v8.35A1.193 1.193 0 0 0 2.193 13h8.35a1.193 1.193 0 0 0 1.192-1.193V7.633" stroke="#54565C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																	<path d="M10.84 1.37a1.265 1.265 0 0 1 1.79 1.79L6.964 8.825l-2.385.597.596-2.386 5.666-5.665z" stroke="#54565C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																</svg>
																<?php esc_html_e('Create Cancel Page', 'metform'); ?></a>
														</div>
													</div>
												<?php else : ?>
													<div class="mf-pro-missing-wrapper attr-tab-pane" id="mf-cancel-tab" role="tabpanel" aria-labelledby="mf-cancel-tab-label">
														<div class="mf-pro-missing">
															<?php
															mf_dummy_simple_input('Select Cancel Page :', 'Select a page', 'Handle canceled payment redirection page. Learn more about cancel page.');
															?>
															<a class="mf-setting-btn-link btn-link-two disable" href="#">
																<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
																	<path d="M6.368 2.265H2.193A1.193 1.193 0 0 0 1 3.458v8.35A1.193 1.193 0 0 0 2.193 13h8.35a1.193 1.193 0 0 0 1.192-1.193V7.633" stroke="#54565C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																	<path d="M10.84 1.37a1.265 1.265 0 0 1 1.79 1.79L6.964 8.825l-2.385.597.596-2.386 5.666-5.665z" stroke="#54565C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																</svg>
																<?php esc_html_e('Create Cancel Page', 'metform'); ?></a>
														</div>
													</div>
												<?php endif; ?>
											</div>
										</div>
									</div>

									<div class="mf-setting-header">
										<button type="submit" name="submit" id="mf-payment-submit" class="mf-settings-form-submit-btn mf-admin-setting-btn active">
											<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
												<path fill-rule="evenodd" clip-rule="evenodd" d="M6.00024 12C2.68654 12 0.000244141 9.31373 0.000244141 6C0.000244141 2.68629 2.68654 0 6.00024 0C9.31397 0 12.0002 2.68629 12.0002 6C12.0002 9.31373 9.31397 12 6.00024 12ZM7.81269 3.73358L5.1368 6.65269L4.15367 5.66953L3.36434 6.4589L5.17191 8.26644L8.63556 4.48788L7.81269 3.73358Z" fill="white" />
											</svg> <?php esc_attr_e('Save Changes', 'metform'); ?>
										</button>
									</div>
								</div>
							</div>
						</form>
						<!-- ./End Payment Tab -->

						<!-- newsletter Integration Tab -->
						<div class="mf-settings-section" id="mf-newsletter_integration">
							<div class="mf-settings-single-section">
								<div class="list-item">
									<?php if (class_exists('\MetForm\Core\Integrations\Mail_Chimp')) : ?>
										<div class="tab-header">
											<h4 class="list-item-header"><?php esc_html_e('Newsletter Integration', 'metform') ?></h4>
										</div>

										<div class="mf-dashboard__settings-api-wrapper">
											<?php $news_letter_integration_function($settings); ?>
										</div>
									<?php endif; ?>
								</div>
							</div>
						</div>
						<!-- ./End Mail Integration Tab -->
						<!-- google sheet Integration Tab -->
						<form action="" method="post" class="mf-settings-form-common mf-google-sheet-tab-form" id="mf-google-sheet-form">
							<div class="mf-settings-section" id="mf-google_sheet_integration">
								<div class="mf-settings-single-section list-item">
									<div class="tab-header">
										<h4 class="list-item-header"><?php esc_html_e('Google Sheet Integration', 'metform'); ?></h4>
									</div>
									<div class="attr-form-group-dt">
										<div class="attr-tab-content" id="nav-tabContent">
											<?php if (class_exists('\MetForm_Pro\Core\Integrations\Google_Sheet\WF_Google_Sheet')) : ?>
												<div class="attr-tab-pane attr-active attr-in" id="mf-google-sheet-tab" role="tabpanel" aria-labelledby="nav-home-tab">
													<div class="attr-row">

														<div class="attr-col-lg-6">
															<div class="mf-setting-input-group">
																<label for="attr-input-label" class="mf-setting-label mf-setting-label attr-input-label"><?php esc_html_e('Google Client Id:', 'metform'); ?></label>
																<input type="text" name="mf_google_sheet_client_id" value="<?php echo esc_attr(isset($settings['mf_google_sheet_client_id']) ? $settings['mf_google_sheet_client_id'] : ''); ?>" class="mf-setting-input mf-google-sheet-api-key attr-form-control" placeholder="<?php esc_html_e('Google OAuth Client Id', 'metform'); ?>">
																<p class="description">
																	<?php esc_html_e('Enter here your google client id. ', 'metform'); ?><a class="mf-setting-btn-link" target="__blank" href="<?php echo esc_url('https://console.cloud.google.com'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																</p>
															</div>
														</div>
														<div class="attr-col-lg-6">
															<div class="mf-setting-input-group">
																<label for="attr-input-label" class="mf-setting-label mf-setting-label attr-input-label"><?php esc_html_e('Google Client Secret:', 'metform'); ?></label>
																<input type="text" name="mf_google_sheet_client_secret" value="<?php echo esc_attr(isset($settings['mf_google_sheet_client_secret']) ? $settings['mf_google_sheet_client_secret'] : ''); ?>" class="mf-setting-input mf-google-sheet-api-key attr-form-control" placeholder="<?php esc_html_e('Google OAuth Client Secret', 'metform'); ?>">
																<p class="description">
																	<?php esc_html_e('Enter here your google secret id. ', 'metform'); ?><a class="mf-setting-btn-link" target="__blank" href="<?php echo esc_url('https://console.cloud.google.com'); ?>"><?php esc_html_e('Create from here', 'metform'); ?></a>
																</p>
															</div>
														</div>
													</div>
													<?php $google = new \MetForm_Pro\Core\Integrations\Google_Sheet\Google_Access_Token; ?>
													<ol class="xs_social_ol">
														<li><span class="pointer">1</span><?php echo esc_html__('Check how to create App/Project On Google developer account', 'metform') ?> - <a class="mf-setting-btn-link" href="https://help.wpmet.com/docs/google-sheet-integration" target="_blank">Documentation</a></li>
														<li><span class="pointer">2</span><?php echo esc_html__('Must add the following URL to the "Valid OAuth redirect URIs" field:', 'metform') ?> <strong style="font-weight:500;"><?php echo esc_url(admin_url('admin.php?page=metform-menu-settings')) ?></strong></li>
														<li><span class="pointer">3</span><?php echo esc_html__('After getting the App ID & App Secret, put those information', 'metform') ?></li>
														<li><span class="pointer">4</span><?php echo esc_html__('Click on "Save Changes"', 'metform') ?></li>
														<li><span class="pointer">5</span><?php echo esc_html__('Click on "Generate Access Token"', 'metform') ?></li>
													</ol>
													<a class="mf-setting-btn-link round-btn" href="<?php echo esc_url($google->get_code()); ?>"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="none">
															<path d="M1 4.85V2.4A1.4 1.4 0 0 1 2.4 1h11.2c.773 0 1.4.628 1.4 1.401V10.8a1.4 1.4 0 0 1-1.4 1.401H2.4A1.4 1.4 0 0 1 1 10.8V8.35a1.75 1.75 0 0 0 0-3.5zM10.1 6.6h2.1M7.3 9.4h4.9" stroke="#9D9EA1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
														</svg> <?php esc_attr_e('Generate Access Token', 'metform'); ?></a>
												</div>
												<p class="mf-set-dash-top-notch--item__desc">
													<?php esc_html_e("Note: After 200 days your token will be expired, before the expiration of your token, generate a new token.", 'metform'); ?>
												</p>
											<?php else : ?>
												<div class="mf-pro-missing-wrapper attr-tab-pane attr-fade attr-active attr-in" id="mf-google-sheet-tab" role="tabpanel" aria-labelledby="nav-home-tab">
													<div class="mf-pro-missing">
														<div class="mf-pro-alert">
															<div class="pro-content">
																<h5 class="alert-heading"><?php esc_html_e('Google Sheet Integration is a premium feature—get Pro to use it!', 'metform') ?></h5>
																<p class="alert-description"><?php esc_html_e('Get full access to premium features by upgrading today.', 'metform') ?></p>
															</div>
															<div class="pro-btn">
																<a href="https://wpmet.com/plugin/metform/pricing/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
																		<path d="M10.6 6.40002H2.2C1.53726 6.40002 1 6.93728 1 7.60002V11.8C1 12.4628 1.53726 13 2.2 13H10.6C11.2627 13 11.8 12.4628 11.8 11.8V7.60002C11.8 6.93728 11.2627 6.40002 10.6 6.40002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																		<path d="M3.40039 6.4V4C3.40039 3.20435 3.71646 2.44129 4.27907 1.87868C4.84168 1.31607 5.60474 1 6.40039 1C7.19604 1 7.9591 1.31607 8.52171 1.87868C9.08432 2.44129 9.40039 3.20435 9.40039 4V6.4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
																	</svg> Upgrade to Pro</a>
															</div>
														</div>
														<div class="attr-row">
															<div class="attr-col-lg-6">
																<?php
																mf_dummy_simple_input('Google Client Id:', 'Google Client Id', 'Enter here your google client id.');
																?>
															</div>
															<div class="attr-col-lg-6">
																<?php
																mf_dummy_simple_input('Google Client Secret:', 'Google Client Secret', 'Enter here your google client secret.');
																?>
															</div>
														</div>
														<ol class="xs_social_ol">
															<li><span class="pointer">1</span><?php echo esc_html__('Check how to create App/Project On Google developer account', 'metform') ?> - <a class="mf-setting-btn-link" href="https://help.wpmet.com/docs/google-sheet-integration" target="_blank">Documentation</a></li>
															<li><span class="pointer">2</span><?php echo esc_html__('Must add the following URL to the "Valid OAuth redirect URIs" field:', 'metform') ?> <strong style="font-weight:500;"><?php echo esc_url(admin_url('admin.php?page=metform-menu-settings')) ?></strong></li>
															<li><span class="pointer">3</span><?php echo esc_html__('After getting the App ID & App Secret, put those information', 'metform') ?></li>
															<li><span class="pointer">4</span><?php echo esc_html__('Click on "Save Changes"', 'metform') ?></li>
															<li><span class="pointer">5</span><?php echo esc_html__('Click on "Generate Access Token"', 'metform') ?></li>
														</ol>
														<a class="mf-setting-btn-link achor-style round-btn disabled" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="none">
																<path d="M1 4.85V2.4A1.4 1.4 0 0 1 2.4 1h11.2c.773 0 1.4.628 1.4 1.401V10.8a1.4 1.4 0 0 1-1.4 1.401H2.4A1.4 1.4 0 0 1 1 10.8V8.35a1.75 1.75 0 0 0 0-3.5zM10.1 6.6h2.1M7.3 9.4h4.9" stroke="#0D1427" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
															</svg> <?php esc_attr_e('Generate Access Token', 'metform'); ?></a>
														<p class="mf-set-dash-top-notch--item__desc">
															<?php esc_html_e("Note: After 200 days your token will be expired, before the expiration of your token, generate a new token.", 'metform'); ?>
														</p>
													</div>
												</div>
											<?php endif; ?>
										</div>
									</div>
								</div>
								<button type="submit" name="submit" id="mf-google-sheet-submit" class="mf-settings-form-submit-btn mt-8 mf-admin-setting-btn active"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M6.00024 12C2.68654 12 0.000244141 9.31373 0.000244141 6C0.000244141 2.68629 2.68654 0 6.00024 0C9.31397 0 12.0002 2.68629 12.0002 6C12.0002 9.31373 9.31397 12 6.00024 12ZM7.81269 3.73358L5.1368 6.65269L4.15367 5.66953L3.36434 6.4589L5.17191 8.26644L8.63556 4.48788L7.81269 3.73358Z" fill="white" />
									</svg><?php esc_attr_e('Save Changes', 'metform'); ?></button>
							</div>
						</form>
						<!-- Integrations settings action -->

						<?php do_action('metform_settings_content'); ?>

						<!-- Integrations settings action end -->

						<input type="hidden" name="mf_settings_page_action" value="save">
						<?php wp_nonce_field('metform-settings-page', 'metform-settings-page'); ?>
						<input type="hidden" id="mf_wp_rest_nonce" value="<?php echo esc_attr(wp_create_nonce('wp_rest')); ?>">

					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<!-- pro newsletter integration modal  -->

<div class="attr-modal mf-api-modal mf-api-modal-animate" id="metform_pro_modal" tabindex="-1" role="dialog" aria-labelledby="metform_pro_modalLabel" style="display:none;">
	<div class="attr-modal-dialog mf-api-modal-dialog" role="document">
		<div class="attr-modal-content">
			<div class="mf-api-modal-close-btn" data-dismiss="modal" aria-label="Close Modal">
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13 1 1 13M1 1l12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
			<div class="mf-dashboard__settings-api__content ">
				<div class="mf-dashboard__settings-api__content-header">
					<h2>Add MailChimp Integrations</h2>
				</div>
				<div class="mf-dashboard__settings-api__lists-content">
					<div class="mf-dashboard__settings-api__content-input">
						<h4 class="field-key">Mailchimp API Key:</h4>
						<input type="text" placeholder="Enter your API Key" id="apikey" value="">
						<p class="help-text">Enter here your Mailchimp API key. <a href="#">Get API</a></p>
					</div>
					<button type="button" class="components-button save-btn">Connect MailChimp Integration</button><button type="button" class="components-button cancel-btn" data-dismiss="modal">Cancel</button>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- pro modal  -->

<div class="changes-toaster" id="changes-toaster">
	<div class="toaster-wrapper">
		<!-- <div class="toaster-cls-btn" data-dismiss="modal" aria-label="Close Modal">
			<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13 1 1 13M1 1l12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
			</svg>
		</div> -->
		<div class="toaster-content">
			<!-- <div class="warning-icon icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#F8174B" fill="none">
					<circle cx="12" cy="12" r="10" stroke="#F8174B" stroke-width="1.5"/>
					<path d="M11.992 15H12.001" stroke="#F8174B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M12 12L12 8" stroke="#F8174B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
			<div class="waring-info info">
				<span>Warning</span>
				<p class="toaster-message">Please fill all the required fields.</p>
			</div> -->
			<div class="success-icon icon">
				<svg xmlns="http://www.w3.org/2000/svg" fill="#14ae5c" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
					<path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z" />
				</svg>
			</div>
			<div class="info">
				<span>Success</span>
				<p class="toaster-message">Settings saved successfully!</p>
			</div>
		</div>
	</div>
</div>