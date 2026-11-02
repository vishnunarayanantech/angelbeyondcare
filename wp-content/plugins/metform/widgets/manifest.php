<?php
namespace MetForm\Widgets;
defined( 'ABSPATH' ) || exit;

Class Manifest{
	use \MetForm\Traits\Singleton;
	
	public function init() {

		add_action( 'elementor/elements/categories_registered', [ $this, 'add_metform_widget_categories' ]);
        add_filter('elementor/editor/localize_settings', [$this, 'promote_pro_widgets']);
		add_action( 'elementor/widgets/register', [ $this, 'register_widgets' ] );
	}

	/**
	 * Promote Pro Widgets
	 * 
	 * @param $settings
	 * @return void
	 */
	public function promote_pro_widgets( $settings ) {

		if( 'metform-form' != get_post_type() || class_exists( '\MetForm_Pro\Base\Package' ) ) {
			return $settings;
		}
		
		if(isset($settings['promotionWidgets']) && is_array($settings['promotionWidgets'])) {
			$promotion_widgets = $settings['promotionWidgets'];
		} else {
			$promotion_widgets = [];
		}

		$merged_metform_promotion_widgets = array_merge( $promotion_widgets, [
			[
				'name'       => 'mf-calculation',
				'title'      => esc_html__( 'Calculation', 'metform' ),
				'icon'       => 'icon-metform_calculation_field',
				'categories' => '["metform"]',
			],
			[
				'name'	 => 'mf-color-picker',
				'title' => esc_html__( 'Color Picker', 'metform' ),
				'icon' => 'icon-metform_color_picker',
				'categories' => '["metform"]',
			],
			[
				'name'	   => 'mf-credit-card',
				'title'      => esc_html__( 'Credit Card', 'metform' ),
				'icon'       => 'icon-metform_credit_card_field-1',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-image-select',
				'title'      => esc_html__( 'Image Select', 'metform' ),
				'icon'       => 'icon-metform_image_selector',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-like-dislike',
				'title'      => esc_html__( 'Like Dislike', 'metform' ),
				'icon'       => 'icon-metform_like_dislike',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-map-location',
				'title'      => esc_html__( 'Google Map Location', 'metform' ),
				'icon'       => 'icon-metform_map_location_picker',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-mobile',
				'title'      => esc_html__( 'Mobile Number', 'metform' ),
				'icon'       => 'icon-metform_mobile_number',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-next-step',
				'title'      => esc_html__( 'Next Step', 'metform' ),
				'icon'       => 'icon-metform_next_step',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-payment-method',
				'title'      => esc_html__( 'Payment Method', 'metform' ),
				'icon'       => 'icon-metform_payment_method',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-prev-step',
				'title'      => esc_html__( 'Prev Step', 'metform' ),
				'icon'       => 'icon-metform_previous_step',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-signature',
				'title'      => esc_html__( 'Signature', 'metform' ),
				'icon'       => 'icon-metform_signature_field',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-simple-repeater',
				'title'      => esc_html__( 'Simple Repeater', 'metform' ),
				'icon'       => 'icon-metform_simple_repeater',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-text-editor',
				'title'      => esc_html__( 'Text Editor', 'metform' ),
				'icon'       => 'icon-metform_text_editor',
				'categories' => '["metform"]',
			],
			[
				'name'       => 'mf-toggle-select',
				'title'      => esc_html__( 'Toggle Select', 'metform' ),
				'icon'       => 'icon-metform_toggle_switch',
				'categories' => '["metform"]',
			],
		]);
		
		$settings['promotionWidgets'] = $merged_metform_promotion_widgets;

		return $settings;
	}

	public function get_input_widgets(){
		
		$widget_list = [
			'mf-text',
			'mf-email',
			'mf-number',
			'mf-telephone',
			'mf-date',
			'mf-time',
			'mf-select',
			'mf-multi-select',
			'mf-textarea',
			'mf-checkbox',
			'mf-radio',
			'mf-switch',
			'mf-range',
			'mf-url',
			'mf-password',
			'mf-listing-fname',
			'mf-listing-lname',
			'mf-listing-optin',
			'mf-gdpr-consent',
			'mf-recaptcha',
			'mf-simple-captcha',
			'mf-rating',
			'mf-file-upload',
		];

		return apply_filters( 'metform/onload/input_widgets', $widget_list );
	}

	public function includes() {

		require_once plugin_dir_path(__FILE__) . 'form.php';
		require_once plugin_dir_path(__FILE__) . 'text/text.php';
		require_once plugin_dir_path(__FILE__) . 'email/email.php';
		require_once plugin_dir_path(__FILE__) . 'number/number.php';
		require_once plugin_dir_path(__FILE__) . 'telephone/telephone.php';
		require_once plugin_dir_path(__FILE__) . 'date/date.php';
		require_once plugin_dir_path(__FILE__) . 'time/time.php';
		require_once plugin_dir_path(__FILE__) . 'select/select.php';
		require_once plugin_dir_path(__FILE__) . 'multi-select/multi-select.php';
		require_once plugin_dir_path(__FILE__) . 'button/button.php';
		require_once plugin_dir_path(__FILE__) . 'textarea/textarea.php';
		require_once plugin_dir_path(__FILE__) . 'checkbox/checkbox.php';
		require_once plugin_dir_path(__FILE__) . 'radio/radio.php';
		require_once plugin_dir_path(__FILE__) . 'switch/switch.php';
		require_once plugin_dir_path(__FILE__) . 'range/range.php';
		require_once plugin_dir_path(__FILE__) . 'url/url.php';
		require_once plugin_dir_path(__FILE__) . 'password/password.php';
		require_once plugin_dir_path(__FILE__) . 'listing-fname/listing-fname.php';
		require_once plugin_dir_path(__FILE__) . 'listing-lname/listing-lname.php';
		require_once plugin_dir_path(__FILE__) . 'listing-optin/listing-optin.php';
		require_once plugin_dir_path(__FILE__) . 'gdpr-consent/gdpr-consent.php';
		require_once plugin_dir_path(__FILE__) . 'recaptcha/recaptcha.php';
		require_once plugin_dir_path(__FILE__) . 'simple-captcha/simple-captcha.php';
		require_once plugin_dir_path(__FILE__) . 'simple-message/simple-message.php';
		require_once plugin_dir_path(__FILE__) . 'rating/rating.php';
		require_once plugin_dir_path(__FILE__) . 'file-upload/file-upload.php';
		require_once plugin_dir_path(__FILE__) . 'summary/summary.php';
	}

	public function register_widgets() {

        $this->includes();

		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\Widget_Met_Form() );
		
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Button() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Text() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Email() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Number() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Telephone() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Date() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Time() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Select() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Multi_Select() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Textarea() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Checkbox() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Radio() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Switch() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Range() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Url() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Password() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Listing_Fname() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Listing_Lname() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Listing_Optin() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Gdpr_Consent() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Recaptcha() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Simple_Captcha() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Simple_Message() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Rating() );
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_File_Upload() );		
		\Elementor\Plugin::instance()->widgets_manager->register( new \Elementor\MetForm_Input_Summary() );			
	}

	public function add_metform_widget_categories( $elements_manager ) {

		$elements_manager->add_category(
			'metform',
			[
				'title' => esc_html__( 'Metform', 'metform' ),
				'icon' => 'fa fa-plug',
			]
		);
	}

}

