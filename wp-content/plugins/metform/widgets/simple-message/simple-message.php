<?php

namespace Elementor;

defined( 'ABSPATH' ) || exit;

Class MetForm_Simple_Message extends Widget_Base{

	use \MetForm\Traits\Conditional_Controls;
	use \MetForm\Widgets\Widget_Notice;

    public function get_name() {
		return 'mf-simple-message';
    }

	public function get_icon() {
		return 'mf-widget-icon icon-metform_message';
	}
    
	public function get_title() {
		return esc_html__( 'Simple Message', 'metform' );
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::$instance->experiments->is_feature_active('e_optimized_markup');
	}
	
	public function show_in_panel() {
        return 'metform-form' == get_post_type();
	}

	public function get_categories() {
		return [ 'metform' ];
	}

	public function get_keywords() {
        return ['metform', 'message', 'simple', 'text'];
	}

	public function get_help_url() {
        return 'https://wpmet.com/doc/form-widgets/#simple-message';
    }
	
    protected function register_controls() {
        
        $this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'metform' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);
        $this->add_control(
            'mf_simple_message_text', [
                'label' => esc_html__( 'Message', 'metform' ),
                'type' => Controls_Manager::TEXTAREA,
                'rows' => 4,
                'default' => \MetForm\Utils\Util::kses( "This is your simple message." , 'metform' ),
				'label_block' => true,
            ]
        );
        $this->end_controls_section();

		if(class_exists('\MetForm_Pro\Base\Package')){
			$this->input_conditional_control();
		}

        $this->start_controls_section(
			'label_section',
			[
				'label' => esc_html__( 'Message', 'metform' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_control(
			'text_align',
			[
				'label' => esc_html__( 'Alignment', 'metform' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'metform' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'metform' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'metform' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'left',
				'toggle' => true,
				'selectors' => [
					'{{WRAPPER}} .mf-simple-message-wrapper p.mf-simple-message-text' => 'text-align: {{VALUE}};',
				],
			]
		);
		$this->add_control(
			'mf_gdpr_consent_option_color',
			[
				'label' => esc_html__( 'Color', 'metform' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => \Elementor\Core\Kits\Documents\Tabs\Global_Colors::COLOR_PRIMARY,
				],
				'selectors' => [
					'{{WRAPPER}} .mf-simple-message-wrapper p.mf-simple-message-text' => 'color: {{VALUE}}',
				],
				'default' => '#000000',
			]
		);
		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'mf_simple_message_typgraphy_text',
				'label' => esc_html__( 'Typography', 'metform' ),
				'selector' => '{{WRAPPER}} .mf-simple-message-wrapper p.mf-simple-message-text',
			]
        );
		$this->add_responsive_control(
			'mf_gdpr_consent__label_padding',
			[
				'label' => esc_html__( 'Padding', 'metform' ),
				'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .mf-simple-message-wrapper p.mf-simple-message-text' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		$this->add_responsive_control(
			'mf_gdpr_consent__label_margin',
			[
				'label' => esc_html__( 'Margin', 'metform' ),
				'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .mf-simple-message-wrapper p.mf-simple-message-text' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
        $this->end_controls_section();
        $this->insert_pro_message();
	}

    protected function render($instance = []){

		$settings = $this->get_settings_for_display();
		?>
		<div class="mf-simple-message-wrapper">
			<p class="mf-simple-message-text">
				<?php
					if ( ! empty( $settings['mf_simple_message_text'] ) ) {
						echo esc_html( $settings['mf_simple_message_text'] );
					}
				?>
			</p>
		</div>
		<?php
    }
}
