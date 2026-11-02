<?php
namespace Elementor;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class HTMega_Elementor_Widget_VideoPlayer extends Widget_Base {

    public function get_name() {
        return 'htmega-videoplayer-addons';
    }
    public function get_title() {
        return esc_html__( 'Video Player', 'htmega-addons' );
    }

    public function get_icon() {
        return 'htmega-icon eicon-play';
    }

    public function get_style_depends() {
        return [
            'ytplayer',
            'magnific-popup'
        ];
    }
    public function get_script_depends() {
        return [
            'ytplayer',
            'magnific-popup'
        ];
    }
    public function get_categories() {
        return [ 'htmega-addons' ];
    }
    public function get_keywords() {
        return ['htmega', 'ht mega', 'video', 'video player', 'button', 'addons','widget'];
    }

    public function get_help_url() {
        return 'https://wphtmega.com/docs/general-widgets/video-player-widget/';
    }
    protected function is_dynamic_content():bool {
		return false;
	}
    protected function register_controls() {
        $this->start_controls_section(
            'videoplayer_content',
            [
                'label' => esc_html__( 'Video Player', 'htmega-addons' ),
            ]
        );

            $this->add_control(
                'videocontainer',
                [
                    'label' => esc_html__( 'Video Container', 'htmega-addons' ),
                    'type' => Controls_Manager::SELECT,
                    'default' => 'self',
                    'options' => [
                        'self'         => esc_html__( 'Self', 'htmega-addons' ),
                        'popup'         => esc_html__( 'Pop Up', 'htmega-addons' ),
                    ],
                ]
            );
            $this->add_control(
                'video_url',
                [
                    'label'     => esc_html__( 'Video Url', 'htmega-addons' ),
                    'type'      => Controls_Manager::TEXT,
                    'default'   => esc_url( 'https://www.youtube.com/watch?v=z_9Z9VWhaEQ' ),
                    'placeholder' => esc_url( 'https://www.youtube.com/watch?v=z_9Z9VWhaEQ' ),
                ]
            );

            $this->add_control(
                'buttontext',
                [
                    'label'     => esc_html__( 'Button Text', 'htmega-addons' ),
                    'type'      => Controls_Manager::TEXT,
                    'default'   => esc_html__( 'Pop Up Button', 'htmega-addons' ),
                    'condition' =>[
                        'videocontainer' =>'popup',
                    ],
                ]
            );
            $this->add_control(
                'buttonicon_type',
                [
                    'label' => esc_html__( 'Play Button Icon', 'htmega-addons' ),
                    'type' => Controls_Manager::SELECT,
                    'default' => 'icon',
                    'options' => [
                        'icon' => esc_html__( 'Icon', 'htmega-addons' ),
                        'image' => esc_html__( 'Image', 'htmega-addons' ),
                    ],
                    'condition' =>[
                        'videocontainer' =>'popup',
                    ],             
                ]
            );

            $this->add_control(
                'buttonicon_image',
                [
                    'label' => esc_html__( 'Icon Image', 'htmega-addons' ),
                    'type' => Controls_Manager::MEDIA,
                    'default' => [
                        'url' => Utils::get_placeholder_image_src(),
                    ],
                    'condition' => [
                        'buttonicon_type' => 'image',
                        'videocontainer' =>'popup',
                    ]
                ]
            );
            $this->add_control(
                'buttonicon',
                [
                    'label' => esc_html__( 'Button Icon', 'htmega-addons' ),
                    'type' => Controls_Manager::ICONS,
                    'condition' => [
                        'buttonicon_type' => 'icon',
                        'videocontainer' =>'popup',
                    ]
                ]
            );
            $this->add_control(
                'icon_position',
                [
                    'label' => __('Icon Position', 'htmega-addons'),
                    'type' => Controls_Manager::CHOOSE,
                    'options' => [
                        'row' => [
                            'title' => __('Before', 'htmega-addons'),
                            'icon' => 'eicon-h-align-left',
                        ],
                        'row-reverse' => [
                            'title' => __('After', 'htmega-addons'),
                            'icon' => 'eicon-h-align-right',
                        ],
                    ],
                    'default' => 'row',
                    'toggle' => false,
                    'selectors' => [
                        '{{WRAPPER}} .htmega-player-container a' => 'flex-direction: {{VALUE}};justify-content:center',
                    ],
                    'condition' =>[
                        'videocontainer' =>'popup',
                    ],
                ]
            );
            $this->add_control(
                'controleranimation',
                [
                    'label' => esc_html__( 'Button Infinity Animation', 'htmega-addons' ),
                    'type' => Controls_Manager::SWITCHER,
                    'yes' => esc_html__( 'Yes', 'htmega-addons' ),
                    'no' => esc_html__( 'No', 'htmega-addons' ),
                    'return_value' => 'yes',
                    'default' => 'no',
                    'condition' =>[
                        'videocontainer' =>'popup',
                    ],
                ]
            );
            $this->add_control(
                'disable_animation',
                [
                    'label' => esc_html__( 'Disable Hover Animation', 'htmega-addons' ),
                    'type' => Controls_Manager::SWITCHER,
                    'yes' => esc_html__( 'Yes', 'htmega-addons' ),
                    'no' => esc_html__( 'No', 'htmega-addons' ),
                    'return_value' => '1',
                    'default' => '1.2',
                    'selectors' => [
                        '{{WRAPPER}} .htmega-player-container a:hover' => 'transform: scale({{{VALUE}});',
                    ],
                    'condition' =>[
                        'videocontainer' =>'popup',
                    ],
                ]
            );
            $this->add_control(
                'video_image',
                [
                    'label' => esc_html__( 'Video Image', 'htmega-addons' ),
                    'type' => Controls_Manager::MEDIA,
                    'default' => [
                        'url' => Utils::get_placeholder_image_src(),
                    ],
                    'condition' =>[
                        'videocontainer' =>'self',
                    ],
                ]
            );

        $this->end_controls_section();

        // Video Options
        $this->start_controls_section(
            'videoplayer_options',
            [
                'label' => esc_html__( 'Video Options', 'htmega-addons' ),
                'condition' =>[
                    'videocontainer' =>'self',
                ],
            ]
        );
            $this->add_control(
                'autoplay',
                [
                    'label' => esc_html__( 'Auto Play', 'htmega-addons' ),
                    'type' => Controls_Manager::SWITCHER,
                    'label_on' => esc_html__( 'Yes', 'htmega-addons' ),
                    'label_off' => esc_html__( 'No', 'htmega-addons' ),
                    'return_value' => 'yes',
                    'default' => 'no',
                ]
            );

            $this->add_control(
                'soundmute',
                [
                    'label' => esc_html__( 'Sound Mute', 'htmega-addons' ),
                    'type' => Controls_Manager::SWITCHER,
                    'label_on' => esc_html__( 'Yes', 'htmega-addons' ),
                    'label_off' => esc_html__( 'No', 'htmega-addons' ),
                    'return_value' => 'yes',
                    'default' => 'no',
                ]
            );

            $this->add_control(
                'repeatvideo',
                [
                    'label' => esc_html__( 'Repeat Video', 'htmega-addons' ),
                    'type' => Controls_Manager::SWITCHER,
                    'label_on' => esc_html__( 'Yes', 'htmega-addons' ),
                    'label_off' => esc_html__( 'No', 'htmega-addons' ),
                    'return_value' => 'yes',
                    'default' => 'no',
                ]
            );

            $this->add_control(
                'controlerbutton',
                [
                    'label' => esc_html__( 'Show Controller Button', 'htmega-addons' ),
                    'type' => Controls_Manager::SWITCHER,
                    'label_on' => esc_html__( 'Yes', 'htmega-addons' ),
                    'label_off' => esc_html__( 'No', 'htmega-addons' ),
                    'return_value' => 'yes',
                    'default' => 'yes',
                ]
            );

            $this->add_control(
                'videosourselogo',
                [
                    'label' => esc_html__( 'Show video source Logo', 'htmega-addons' ),
                    'type' => Controls_Manager::SWITCHER,
                    'label_on' => esc_html__( 'Yes', 'htmega-addons' ),
                    'label_off' => esc_html__( 'No', 'htmega-addons' ),
                    'return_value' => 'yes',
                    'default' => 'yes',
                ]
            );
            $this->add_control(
                'videostarttime',
                [
                    'label' => esc_html__( 'Video Start Time', 'htmega-addons' ),
                    'type' => Controls_Manager::NUMBER,
                    'default' => 5,
                ]
            );

        $this->end_controls_section();

        // Style tab section
        $this->start_controls_section(
            'htmega_video_style_section',
            [
                'label' => esc_html__( 'Video Box Style', 'htmega-addons' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'htmega_video_background',
                'label' => esc_html__( 'Background', 'htmega-addons' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .htmega-player-container',
            ]
        );
        $this->add_responsive_control(
            'htmega_video_padding',
            [
                'label' => esc_html__( 'Padding', 'htmega-addons' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%', 'em' ],
                'selectors' => [
                    '{{WRAPPER}} .htmega-player-container' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'htmega_video_border',
                'label' => esc_html__( 'Border', 'htmega-addons' ),
                'selector' => '{{WRAPPER}} .htmega-player-container',
                'separator' => 'before',
            ]
        );
        $this->add_responsive_control(
            'htmega_video_border_radius',
            [
                'label' => esc_html__( 'Border Radius', 'htmega-addons' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%', 'em' ],
                'selectors' => [
                    '{{WRAPPER}} .htmega-player-container' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_group_control(
            Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'htmega_videoshadow',
                'label' => esc_html__( 'Box Shadow', 'htmega-addons' ),
                'selector' => '{{WRAPPER}} .htmega-player-container',
            ]
        );

            $this->add_responsive_control(
                'video_style_align',
                [
                    'label' => esc_html__( 'Alignment', 'htmega-addons' ),
                    'type' => Controls_Manager::CHOOSE,
                    'options' => [
                        'left' => [
                            'title' => esc_html__( 'Left', 'htmega-addons' ),
                            'icon' => 'eicon-text-align-left',
                        ],
                        'center' => [
                            'title' => esc_html__( 'Center', 'htmega-addons' ),
                            'icon' => 'eicon-text-align-center',
                        ],
                        'right' => [
                            'title' => esc_html__( 'Right', 'htmega-addons' ),
                            'icon' => 'eicon-text-align-right',
                        ],
                    ],
                    'selectors' => [
                        '{{WRAPPER}} .htmega-player-container' => 'text-align: {{VALUE}};',
                    ],
                    'default' => 'center',
                    'separator' =>'before',
                    'condition'=>[
                        'videocontainer' =>'popup', 
                    ]
                ]
            );

        $this->end_controls_section();

        // Style Button section
        $this->start_controls_section(
            'video_button_style',
            [
                'label' => esc_html__( 'Button', 'htmega-addons' ),
                'tab' => Controls_Manager::TAB_STYLE,
                'condition' =>[
                    'videocontainer' =>'popup',
                ],
            ]
        );
            $this->add_responsive_control(
                'video_button_height',
                [
                    'label' => esc_html__( 'Height', 'htmega-addons' ),
                    'type' => Controls_Manager::NUMBER,
                    'default' => '',
                    'selectors' => [
                        '{{WRAPPER}} .htmega-player-container .magnify-video-active' => 'height: {{VALUE}}px;',
                    ],
                ]
            );
            
            $this->add_responsive_control(
                'video_button_width',
                [
                    'label' => esc_html__( 'Width', 'htmega-addons' ),
                    'type' => Controls_Manager::NUMBER,
                    'default' => '',
                    'selectors' => [
                        '{{WRAPPER}} .htmega-player-container .magnify-video-active' => 'width: {{VALUE}}px;',
                    ],
                ]
            );
            $this->add_responsive_control(
                'video_button_fontsize',
                [
                    'label' => esc_html__( 'Icon Size', 'htmega-addons' ),
                    'type' => Controls_Manager::SLIDER,
                    'size_units' => [ 'px', '%' ],
                    'range' => [
                        'px' => [
                            'min' => 0,
                            'max' => 100,
                            'step' => 1,
                        ],
                        '%' => [
                            'min' => 0,
                            'max' => 100,
                        ],
                    ],
                    'default' => [
                        'unit' => 'px',
                        'size' => 40,
                    ],
                    'selectors' => [
                        '{{WRAPPER}} .htmega-player-container .magnify-video-active' => 'font-size: {{SIZE}}{{UNIT}};',
                        '{{WRAPPER}} .htmega-player-container .magnify-video-active svg' => 'width: {{SIZE}}{{UNIT}};',
                    ],
                    'condition' => [
                        'buttonicon_type' => 'icon',
                        'videocontainer' =>'popup',
                    ]
                    
                ]
            );
            $this->add_group_control(
                Group_Control_Typography::get_type(),
                [
                    'name' => 'button_typography',
                    'label' => esc_html__( 'Typography', 'htmega-addons' ),
                    'selector' => '{{WRAPPER}} .htmega-player-container .magnify-video-active',
                    'condition' => [
                        'buttontext!' => '',
                    ]
                ]
            );

            $this->add_responsive_control(
                'video_button_margin',
                [
                    'label' => esc_html__( 'Margin', 'htmega-addons' ),
                    'type' => Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em' ],
                    'selectors' => [
                        '{{WRAPPER}} .htmega-player-container .magnify-video-active' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                        '{{WRAPPER}} .htmega-player-container .magnify-video-active svg' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                    'separator' =>'before',
                ]
            );

            $this->add_responsive_control(
                'video_button_padding',
                [
                    'label' => esc_html__( 'Padding', 'htmega-addons' ),
                    'type' => Controls_Manager::DIMENSIONS,
                    'size_units' => [ 'px', '%', 'em' ],
                    'selectors' => [
                        '{{WRAPPER}} .htmega-player-container .magnify-video-active' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                    ],
                    'separator' =>'before',
                ]
            );


            $this->add_control(
                'color_border_heading',
                [
                    'label' => esc_html__( 'Colors and Border', 'htmega-addons' ),
                    'type' => Controls_Manager::HEADING,
                    'separator' => 'before',
                ]
            );
            $this->start_controls_tabs('video_button_style_tabs');
                $this->start_controls_tab(
                    'video_button_style_normal_tab',
                    [
                        'label' => esc_html__( 'Normal', 'htmega-addons' ),
                    ]
                );

                $this->add_control(
                    'video_button_color',
                    [
                        'label' => esc_html__( 'Color', 'htmega-addons' ),
                        'type' => Controls_Manager::COLOR,
                        'default' => '#18012c',
                        'selectors' => [
                            '{{WRAPPER}} .htmega-player-container .magnify-video-active' => 'color: {{VALUE}};',
                            '{{WRAPPER}} .htmega-player-container .magnify-video-active svg path' => 'fill: {{VALUE}};',
                        ],
                    ]
                );

                $this->add_group_control(
                    Group_Control_Background::get_type(),
                    [
                        'name' => 'video_button_background',
                        'label' => esc_html__( 'Background', 'htmega-addons' ),
                        'types' => [ 'classic', 'gradient' ],
                        'selector' => '{{WRAPPER}} .htmega-player-container .magnify-video-active',
                    ]
                );

                $this->add_group_control(
                    Group_Control_Border::get_type(),
                    [
                        'name' => 'video_button_border',
                        'label' => esc_html__( 'Border', 'htmega-addons' ),
                        'selector' => '{{WRAPPER}} .htmega-player-container .magnify-video-active',
                    ]
                );
                $this->add_responsive_control(
                    'video_button_border_radius',
                    [
                        'label' => esc_html__( 'Border Radius', 'htmega-addons' ),
                        'type' => Controls_Manager::DIMENSIONS,
                        'selectors' => [
                            '{{WRAPPER}} .htmega-player-container .magnify-video-active' => 'border-radius: {{TOP}}px {{RIGHT}}px {{BOTTOM}}px {{LEFT}}px;',
                        ],
                    ]
                );
                
            $this->end_controls_tab();// Normal Tab

            // Hover Tab
            $this->start_controls_tab(
                'video_button_style_hover_tab',
                [
                    'label' => esc_html__( 'Hover', 'htmega-addons' ),
                ]
            );
                $this->add_group_control(
                    Group_Control_Border::get_type(),
                    [
                        'name' => 'video_button_hover_border',
                        'label' => esc_html__( 'Border', 'htmega-addons' ),
                        'selector' => '{{WRAPPER}} .htmega-player-container .magnify-video-active:hover',
                    ]
                );
                $this->add_responsive_control(
                    'video_button_border_hover_radius',
                    [
                        'label' => esc_html__( 'Border Radius', 'htmega-addons' ),
                        'type' => Controls_Manager::DIMENSIONS,
                        'selectors' => [
                            '{{WRAPPER}} .htmega-player-container .magnify-video-active:hover' => 'border-radius: {{TOP}}px {{RIGHT}}px {{BOTTOM}}px {{LEFT}}px;',
                        ],
                    ]
                );
                $this->add_control(
                    'video_button_hover_color',
                    [
                        'label' => esc_html__( 'Color', 'htmega-addons' ),
                        'type' => Controls_Manager::COLOR,
                        'default' => '#ffffff',
                        'selectors' => [
                            '{{WRAPPER}} .htmega-player-container .magnify-video-active:hover' => 'color: {{VALUE}};',
                            '{{WRAPPER}} .htmega-player-container .magnify-video-active:hover svg path' => 'fill: {{VALUE}};',
                        ],
                    ]
                );
                $this->add_group_control(
                    Group_Control_Background::get_type(),
                    [
                        'name' => 'video_button_hover_background',
                        'label' => esc_html__( 'Background', 'htmega-addons' ),
                        'types' => [ 'classic', 'gradient' ],
                        'selector' => '{{WRAPPER}} .htmega-player-container .magnify-video-active:hover',
                    ]
                );

            $this->end_controls_tabs(); // Hover tab end
        $this->end_controls_section();
        // Button animation style
        $this->start_controls_section(
            'video_button_animate_style',
            [
                'label' => esc_html__( 'Button Animation', 'htmega-addons' ),
                'tab' => Controls_Manager::TAB_STYLE,
                'condition' =>[
                    'videocontainer' =>'popup',
                    'controleranimation' =>'yes',
                ],
            ]
        );
        $this->add_control(
            'video_button_animation_color',
            [
                'label' => esc_html__( 'Border Color', 'htmega-addons' ),
                'type' => Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} .htmega-video-mark .htmega-wave-pulse::after, {{WRAPPER}} .htmega-video-mark .htmega-wave-pulse::before' => 'border-color: {{VALUE}};',
                ],
            ]
        );
        $this->add_responsive_control(
            'video_animate_circle_range',
            [
                'label' => esc_html__( 'Circle Range', 'htmega-addons' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                        'step' => 1,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 200,
                ],
                'selectors' => [
                    '{{WRAPPER}} .htmega-video-mark .htmega-wave-pulse::after, 
                    {{WRAPPER}} .htmega-video-mark .htmega-wave-pulse::before' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->end_controls_section();
    }

    protected function render( $instance = [] ) {

        $settings   = $this->get_settings_for_display();
        $buttonicon_type =  isset( $settings['buttonicon_type'] ) ? esc_attr( $settings['buttonicon_type'] ) : 'icon';
        $buttonicon_image =  isset( $settings['buttonicon_image']['url'] ) ? esc_url( $settings['buttonicon_image']['url'] ) : '';
        $controleranimation =  !empty( $settings['controleranimation'] ) ? $settings['controleranimation'] : 'no';

        $this->add_render_attribute( 'htmega_button', 'class', 'htmega-button' );

        if( $settings['videocontainer'] == 'self' ){
            $player_options_settings = [
                'videoURL'          => !empty( $settings['video_url'] ) ? esc_url( $settings['video_url'] ) : 'https://www.youtube.com/watch?v=z_9Z9VWhaEQ',
                'coverImage'        => !empty( $settings['video_image']['url'] ) ? esc_url( $settings['video_image']['url'] ) : '',
                'autoPlay'          => ( $settings['autoplay'] == 'yes' ) ? true : false,
                'mute'              => ( $settings['soundmute'] == 'yes' ) ? true : false,
                'loop'              => ( $settings['repeatvideo'] == 'yes' ) ? true : false,
                'showControls'      => ( $settings['controlerbutton'] == 'yes' ) ? true : false,
                'showYTLogo'        => ( $settings['videosourselogo'] == 'yes' ) ? true : false,
                'startAt'           => floatval( $settings['videostarttime'] ),
                'containment'       => 'self',
                'opacity'           => 1,
                'optimizeDisplay'   => true,
                'realfullscreen'    => true,
            ];
        }
        $videocontainer = [
            'videocontainer' => isset( $settings['videocontainer'] ) ? esc_attr( $settings['videocontainer'] ) : '',
        ];
        
        $animation_markup = '';
        if( 'no' == $controleranimation ) {
            $animation_markup = "";
        } else { 
            $animation_markup = '<div class="htmega-video-mark">
                <div class="htmega-wave-pulse wave-pulse-1"></div>
                <div class="htmega-wave-pulse wave-pulse-2"></div>
                </div>';
            }
        ?>
            <div class="htmega-player-container" data-videotype="<?php echo esc_attr( wp_json_encode( $videocontainer ) ); ?>">
                <?php if($settings['videocontainer'] == 'self'): ?>
                    <div class="htmega-video-player" data-property="<?php echo esc_attr( wp_json_encode( $player_options_settings ) ); ?> "></div>
                <?php else:
                    if( 'icon' == $buttonicon_type && $settings['buttonicon']['value'] != '' ){
                        echo sprintf('<a class="magnify-video-active" href="%1$s">%2$s %3$s %4$s</a>',esc_url( $settings['video_url'] ),HTMega_Icon_manager::render_icon( $settings['buttonicon'], [ 'aria-hidden' => 'true' ] ), htmega_kses_title($settings['buttontext'] ), $animation_markup );
                    } elseif ('image' == $buttonicon_type && $buttonicon_image != '' ){
                        
                        echo sprintf( '<a class="magnify-video-active" href="%1$s"><img src="%2$s" alt="htmega-addons"> %3$s %4$s </a>', esc_url( $settings['video_url'] ), $buttonicon_image, htmega_kses_title( $settings['buttontext'] ), $animation_markup );

                    } else {
                        echo sprintf('<a class="magnify-video-active" href="%1$s">%2$s %3$s</a>', esc_url( $settings['video_url'] ), htmega_kses_title( $settings['buttontext'] ), $animation_markup );
                    }
                ?>
                <?php endif;?>
            </div>
        <?php
    }
}