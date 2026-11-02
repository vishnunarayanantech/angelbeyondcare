<?php
/**
 * HT Mega AI Integration Class
 * Supports OpenAI, Claude, and Google AI
 * File: admin/includes/htmega-ai-integration.php
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class HTMega_AI_Integration {
    
    /**
     * Single instance of this class
     */
    private static $instance = null;
    
    /**
     * Current AI engine
     */
    private $current_engine = 'openai';
    
    /**
     * Get single instance
     */
    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function __construct() {
        // Hook into your settings system
        add_action( 'admin_menu',  [ $this,'admin_sub_menu'], 226);
        add_filter('htmega_admin_fields_sections', [$this, 'add_ai_tab'], 99);
        add_filter('htmega_admin_fields', [$this, 'add_ai_settings'], 99);

        
        // Only continue if AI is enabled
        add_action('init', [$this, 'maybe_init_ai'], 15);
    }
    
    /**
     * Add AI sub menu
     */
    public function admin_sub_menu() {
        add_submenu_page(
            'htmega-addons', 
            esc_html__( 'AI Writer', 'htmega-addons' ),
            esc_html__( 'AI Writer', 'htmega-addons' ), 
            'manage_options', 
            'admin.php?page=htmega-addons#/htmega_ai', 
        );
    }
    /**
     * Add AI tab to settings
     */
    public function add_ai_tab($tabs) {
        $tabs['htmega_ai'] = [
            'id'    => 'htmega_ai_features_tabs',
            'title' => esc_html__('AI Writer', 'htmega-addons'),
            'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 22c-.25 0-.49-.09-.69-.26l-2.35-2.17c-.4-.35-.94-.52-1.49-.55-.2 0-.38 0-.57-.01a1.43 1.43 0 0 1-.94-.4 1.38 1.38 0 0 1 0-1.88l2.15-2.33c.35-.39.52-.89.56-1.36 0-.17.03-.34.07-.5.13-.46.39-.87.75-1.18a1.38 1.38 0 0 1 1.75 0c.36.31.62.72.75 1.18.04.16.06.33.07.5.03.47.21.97.56 1.36l2.15 2.33a1.38 1.38 0 0 1 0 1.88c-.26.25-.6.39-.95.4-.18 0-.36.01-.57.01-.55.03-1.09.2-1.49.55l-2.35 2.17c-.2.17-.44.26-.69.26ZM18 13.97a4.2 4.2 0 0 1-.75-1.51 4.2 4.2 0 0 1-1.38-.96 4.2 4.2 0 0 1 1.38-.96c.2-.63.5-1.2.75-1.51.2.31.55.88.75 1.51.53.21 1.02.54 1.38.96a4.2 4.2 0 0 1-1.38.96c-.2.63-.55 1.2-.75 1.51ZM6 13.97a4.2 4.2 0 0 1-.75-1.51 4.2 4.2 0 0 1-1.38-.96 4.2 4.2 0 0 1 1.38-.96c.2-.63.55-1.2.75-1.51.2.31.55.88.75 1.51.53.21 1.02.54 1.38.96a4.2 4.2 0 0 1-1.38.96c-.2.63-.55 1.2-.75 1.51ZM12 7.97c-.28-1.15-1.03-2.01-2.2-2.4 1.17-.43 1.92-1.29 2.2-2.4.28 1.15 1.03 2.01 2.2 2.4-1.17.43-1.92 1.29-2.2 2.4Z"/></svg>',
            'content' => [
                'enableall' => false,
                'title' => __('AI Writer Settings', 'htmega-addons'),
                'desc'  => __('Configure AI Writer for content generation in all widgets', 'htmega-addons'),
                'title' => __( 'AI Writer Settings', 'htmega-addons' ),
                'wrapper_class'  => 'htmega-integrarion-section',
            ],
        ];
        
        return $tabs;
    }
    
    /**
     * Add AI settings fields
     */
    public function add_ai_settings($fields) {

        $fields['htmega_ai_features_tabs'][] = [
            'id'        => 'htmega_ai_enable',
            'name'      => __('Enable AI Writer', 'htmega-addons'),
            'type'      => 'checkbox',
            'default'   => 'on',
            'label_on'  => __('On', 'htmega-addons'),
            'label_off' => __('Off', 'htmega-addons'),
            'desc'      => __('Enable AI Writer for content generation in all widgets.', 'htmega-addons'),
        ];
        
        $fields['htmega_ai_features_tabs'][] = [
            'id'      => 'htmega_ai_engine', 
            'name'    => __('AI Engine', 'htmega-addons'),
            'type'    => 'select',
            'default' => 'openai',
            'options' => array(
                'openai' => __('OpenAI', 'htmega-addons'),
                'claude' => __('Claude (Anthropic)', 'htmega-addons'),
                'google' => __('Google AI (Gemini)', 'htmega-addons'),
            ),
            'condition' => [ ['condition_key' => 'htmega_ai_enable', 'condition_value' => 'on'] ],
            'desc'      => __('Select the AI engine to use for content generation.', 'htmega-addons'),
        ];
        
        // OpenAI Settings
        $fields['htmega_ai_features_tabs'][] = [
            'id'      => 'htmega_openai_api_key', 
            'name'    => __('OpenAI API Key', 'htmega-addons'),
            'type'    => 'text',
            'default' => '',
            'placeholder' => 'sk-...',
            'desc'    => 'Get your API key from <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI Platform</a>.',
            'condition' => [ ['condition_key' => 'htmega_ai_enable', 'condition_value' => 'on'] , ['condition_key' => 'htmega_ai_engine', 'condition_value' => 'openai'] ],
            'secure' => true,
        ];
        
        $fields['htmega_ai_features_tabs'][] = [
            'id'      => 'htmega_openai_model',
            'name'    => __('OpenAI Model', 'htmega-addons'),
            'type'    => 'select',
            'default' => 'gpt-4o-mini',
            'options' => [
                'gpt-4o-mini' => __('GPT-4o Mini (Fast & Affordable)', 'htmega-addons'),
                'gpt-4o' => __('GPT-4o (Best Performance)', 'htmega-addons'),
                'gpt-3.5-turbo' => __('GPT-3.5 Turbo (Budget Friendly)', 'htmega-addons'),
            ],
            'condition' => [ ['condition_key' => 'htmega_ai_enable', 'condition_value' => 'on'] , ['condition_key' => 'htmega_ai_engine', 'condition_value' => 'openai'] ],
            'desc'      => __('Select the OpenAI model to use for content generation.', 'htmega-addons'),
        ];
        
        // Claude Settings
        $fields['htmega_ai_features_tabs'][] = [
            'id'      => 'htmega_claude_api_key', 
            'name'    => __('Claude API Key', 'htmega-addons'),
            'type'    => 'text',
            'default' => '',
            'placeholder' => 'sk-ant-...',
            'desc'    => 'Get your API key from <a href="https://console.anthropic.com/" target="_blank">Anthropic Console</a>.',
            'condition' => [ ['condition_key' => 'htmega_ai_enable', 'condition_value' => 'on'] , ['condition_key' => 'htmega_ai_engine', 'condition_value' => 'claude'] ],
            'secure' => true,
        ];
        
        $fields['htmega_ai_features_tabs'][] = [
            'id'      => 'htmega_claude_model',
            'name'    => __('Claude Model', 'htmega-addons'),
            'type'    => 'select',
            'default' => 'claude-3-5-sonnet-20241022',
            'options' => [
                'claude-3-5-sonnet-20241022' => __('Claude 3.5 Sonnet (Best Performance)', 'htmega-addons'),
                'claude-3-haiku-20240307' => __('Claude 3 Haiku (Fast & Affordable)', 'htmega-addons'),
                'claude-3-opus-20240229' => __('Claude 3 Opus (Most Capable)', 'htmega-addons'),
            ],
            'condition' => [ ['condition_key' => 'htmega_ai_enable', 'condition_value' => 'on'] , ['condition_key' => 'htmega_ai_engine', 'condition_value' => 'claude'] ],
            'desc'      => __('Select the Claude model to use for content generation.', 'htmega-addons'),
        ];
        
        // Google AI Settings
        $fields['htmega_ai_features_tabs'][] = [
            'id'      => 'htmega_google_api_key', 
            'name'    => __('Google AI API Key', 'htmega-addons'),
            'type'    => 'text',
            'default' => '',
            'placeholder' => 'AIza...',
            'desc'    => 'Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank">Google AI Studio</a>.',
            'condition' => [ ['condition_key' => 'htmega_ai_enable', 'condition_value' => 'on'] , ['condition_key' => 'htmega_ai_engine', 'condition_value' => 'google'] ],
            'secure' => true,
        ];
        
        $fields['htmega_ai_features_tabs'][] = [
            'id'      => 'htmega_google_model',
            'name'    => __('Google AI Model', 'htmega-addons'),
            'type'    => 'select',
            'default' => 'gemini-1.5-flash',
            'options' => [
                'gemini-1.5-flash' => __('Gemini 1.5 Flash (Fast & Efficient)', 'htmega-addons'),
                'gemini-1.5-pro' => __('Gemini 1.5 Pro (Best Performance)', 'htmega-addons'),
                'gemini-pro' => __('Gemini Pro (Balanced)', 'htmega-addons'),
            ],
            'condition' => [ ['condition_key' => 'htmega_ai_enable', 'condition_value' => 'on'] , ['condition_key' => 'htmega_ai_engine', 'condition_value' => 'google'] ],
            'desc'      => __('Select the Google AI model to use for content generation.', 'htmega-addons'),
        ];

        return $fields;
    }
    
    /**
     * Initialize AI features if enabled
     */
    public function maybe_init_ai() {
        if ($this->is_ai_enabled()) {
            $this->current_engine = $this->get_ai_option('htmega_ai_engine', 'openai');
            $this->init_ai_features();
        }
    }
    
    /**
     * Initialize AI features
     */
    private function init_ai_features() {
        // Enqueue AI scripts in Elementor editor
        add_action('elementor/editor/before_enqueue_scripts', [$this, 'enqueue_ai_scripts']);
        
        // Add AI button to widgets
        add_action('elementor/element/after_section_end', [$this, 'inject_ai_buttons'], 10, 2);
        
        // AJAX handlers
        add_action('wp_ajax_htmega_ai_generate', [$this, 'handle_ai_generation']);
        add_action('wp_ajax_htmega_ai_test_connection', [$this, 'test_api_connection']);
    }
    
    /**
     * Enqueue AI scripts for Elementor editor
     */
    public function enqueue_ai_scripts() {
        wp_enqueue_script(
            'htmega-ai-integration',
            HTMEGA_ADDONS_PL_URL . 'admin/assets/js/htmega-ai-integration.js',
            ['jquery'],
            HTMEGA_VERSION,
            true
        );
        
        wp_enqueue_style(
            'htmega-ai-integration',
            HTMEGA_ADDONS_PL_URL . 'admin/assets/css/htmega-ai-integration.css',
            [],
            HTMEGA_VERSION
        );
        
        // Localize script with AI settings
        wp_localize_script('htmega-ai-integration', 'htmegaAI', [
            'ajaxurl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('htmega_ai_nonce'),
            'api_key_set' => $this->is_api_key_configured(),
            'current_engine' => $this->current_engine,
            'admin_url' => admin_url(),
            'strings' => [
                'generating' => esc_html__('Generating...', 'htmega-addons'),
                'api_not_configured' => esc_html__('AI Engine not configured', 'htmega-addons'),
                'configure_api' => esc_html__('Please set up your AI Engine in the HT Mega settings before using this feature.', 'htmega-addons'),
                'go_to_settings' => esc_html__('Go to Settings', 'htmega-addons'),
                'error_occurred' => esc_html__('An error occurred. Please try again.', 'htmega-addons'),
                'write_with_ai' => esc_html__('Write with HT Mega AI', 'htmega-addons'),
            ]
        ]);
    }
    
    /**
     * Inject AI buttons into widgets
     */
    public function inject_ai_buttons($element, $section_id) {
        // Only add to content sections that likely have text controls
        $target_sections = ['section_content', 'content_section', 'section_title', 'section_button'];
        
        if (!in_array($section_id, $target_sections)) {
            return;
        }
        
        // Add AI button control (will be handled by JavaScript)
        $element->start_injection([
            'type' => 'section',
            'at' => 'end',
            'of' => $section_id,
        ]);
        
        $element->add_control(
            'htmega_ai_helper_' . $section_id,
            [
                'type' => \Elementor\Controls_Manager::RAW_HTML,
                'raw' => '<div class="htmega-ai-widget-helper" data-section="' . $section_id . '"></div>',
                'content_classes' => 'htmega-ai-control-wrapper',
            ]
        );
        
        $element->end_injection();
    }
    
    /**
     * Handle AI generation request
     */
    public function handle_ai_generation() {
        // Verify nonce
        if (!wp_verify_nonce($_POST['nonce'], 'htmega_ai_nonce')) {
            wp_send_json_error('Invalid security token');
        }
        
        // Check if AI is enabled
        if (!$this->is_ai_enabled()) {
            wp_send_json_error('AI integration is not enabled');
        }
        
        // Check API key
        if (!$this->is_api_key_configured()) {
            wp_send_json_error('API key not configured');
        }
        
        $prompt = sanitize_textarea_field($_POST['prompt']);
        $widget_type = sanitize_text_field($_POST['widget_type']);
        $control_name = sanitize_text_field($_POST['control_name']);
        $context = sanitize_textarea_field($_POST['context'] ?? '');
        
        if (empty($prompt)) {
            wp_send_json_error('Prompt is required');
        }
        
        try {
            $generated_content = $this->generate_ai_content($prompt, $widget_type, $control_name, $context);
            wp_send_json_success([
                'content' => $generated_content,
                'engine' => $this->current_engine
            ]);
        } catch (Exception $e) {
            wp_send_json_error('AI generation failed: ' . $e->getMessage());
        }
    }
    
    /**
     * Test API connection
     */
    public function test_api_connection() {
        if (!wp_verify_nonce($_POST['nonce'], 'htmega_ai_nonce')) {
            wp_send_json_error('Invalid security token');
        }
        
        try {
            $test_response = $this->generate_ai_content('Say "Connection successful!" in exactly those words.', 'test', 'test');
            
            wp_send_json_success([
                'message' => 'API connection is working perfectly!',
                'response' => $test_response,
                'engine' => $this->current_engine
            ]);
        } catch (Exception $e) {
            wp_send_json_error([
                'message' => $e->getMessage(),
                'suggestions' => $this->get_error_suggestions($e->getMessage()),
                'engine' => $this->current_engine
            ]);
        }
    }
    
    /**
     * Generate AI content based on current engine
     */
    private function generate_ai_content($prompt, $widget_type = '', $control_name = '', $context = '') {
        // Enhance prompt with context
        $enhanced_prompt = $this->enhance_prompt($prompt, $widget_type, $control_name, $context);
        
        // Route to appropriate AI service
        switch ($this->current_engine) {
            case 'claude':
                return $this->generate_claude_content($enhanced_prompt);
            case 'google':
                return $this->generate_google_content($enhanced_prompt);
            case 'openai':
            default:
                return $this->generate_openai_content($enhanced_prompt);
        }
    }
    
    /**
     * Generate content using OpenAI
     */
    private function generate_openai_content($prompt, $api_key = null, $model = null) {
        if( empty($api_key) ){
            $api_key = $this->get_ai_option('htmega_openai_api_key');
        }
        if( empty($model) ){
            $model = $this->get_ai_option('htmega_openai_model', 'gpt-4o-mini');
        }
        
        // Validate API key
        if (empty($api_key)) {
            throw new Exception('OpenAI API key is not configured');
        }
        
        $validation_result = $this->validate_openai_key($api_key);
        if ($validation_result !== true) {
            throw new Exception($validation_result);
        }
        
        // Prepare request body
        $body = [
            'model' => $model,
            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'You are a helpful assistant for creating website content. Provide clear, engaging, and professional content suitable for websites. Each response should be creative and engaging.'
                ],
                [
                    'role' => 'user',
                    'content' => $prompt
                ]
            ],
            'max_tokens' => 500,
            'temperature' => 0.8,
            'top_p' => 0.9,
            'frequency_penalty' => 0.3,
            'n' => 1
        ];
        
        $response = wp_remote_post('https://api.openai.com/v1/chat/completions', [
            'headers' => [
                'Authorization' => 'Bearer ' . $api_key,
                'Content-Type' => 'application/json',
                'User-Agent' => 'HT-Mega-AI/1.0',
            ],
            'body' => json_encode($body),
            'timeout' => 60,
            'sslverify' => true,
        ]);
        
        return $this->process_openai_response($response);
    }
    
    /**
     * Generate content using Claude
     */
    private function generate_claude_content($prompt, $api_key = null, $model = null) {
        $api_key = $this->get_ai_option('htmega_claude_api_key');
        $model = $this->get_ai_option('htmega_claude_model', 'claude-3-5-sonnet-20241022');
        
        // Validate API key
        if (empty($api_key)) {
            throw new Exception('Claude API key is not configured');
        }
        
        $validation_result = $this->validate_claude_key($api_key);
        if ($validation_result !== true) {
            throw new Exception($validation_result);
        }
        
        // Prepare request body
        $body = [
            'model' => $model,
            'max_tokens' => 500,
            'messages' => [
                [
                    'role' => 'user',
                    'content' => $prompt
                ]
            ],
            'system' => 'You are a helpful assistant for creating website content. Provide clear, engaging, and professional content suitable for websites. Each response should be creative and engaging.'
        ];
        
        $response = wp_remote_post('https://api.anthropic.com/v1/messages', [
            'headers' => [
                'x-api-key' => $api_key,
                'anthropic-version' => '2023-06-01',
                'Content-Type' => 'application/json',
                'User-Agent' => 'HT-Mega-AI/1.0',
            ],
            'body' => json_encode($body),
            'timeout' => 60,
            'sslverify' => true,
        ]);
        
        return $this->process_claude_response($response);
    }
    
    /**
     * Generate content using Google AI
     */
    private function generate_google_content($prompt, $api_key = null, $model = null) {
        $api_key = $this->get_ai_option('htmega_google_api_key');
        $model = $this->get_ai_option('htmega_google_model', 'gemini-1.5-flash');
        
        // Validate API key
        if (empty($api_key)) {
            throw new Exception('Google AI API key is not configured');
        }
        
        $validation_result = $this->validate_google_key($api_key, $model);
        if ($validation_result !== true) {
            throw new Exception($validation_result);
        }
        
        // Prepare request body
        $body = [
            'contents' => [
                [
                    'parts' => [
                        [
                            'text' => "You are a helpful assistant for creating website content. Provide clear, engaging, and professional content suitable for websites. Each response should be creative and engaging.\n\n" . $prompt
                        ]
                    ]
                ]
            ],
            'generationConfig' => [
                'temperature' => 0.8,
                'topP' => 0.9,
                'maxOutputTokens' => 500,
            ]
        ];
        
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$api_key}";
        
        $response = wp_remote_post($url, [
            'headers' => [
                'Content-Type' => 'application/json',
                'User-Agent' => 'HT-Mega-AI/1.0',
            ],
            'body' => json_encode($body),
            'timeout' => 60,
            'sslverify' => true,
        ]);
        
        return $this->process_google_response($response);
    }
    
    /**
     * Process OpenAI API response
     */
    private function process_openai_response($response) {
        // Check for WordPress HTTP errors
        if (is_wp_error($response)) {
            throw new Exception('API request failed: ' . $response->get_error_message());
        }
        
        $response_code = wp_remote_retrieve_response_code($response);
        $response_body = wp_remote_retrieve_body($response);
        
        if ($response_code !== 200) {
            $error_data = json_decode($response_body, true);
            $error_message = 'HTTP ' . $response_code;
            
            if (isset($error_data['error']['message'])) {
                $error_message = $error_data['error']['message'];
            }
            
            throw new Exception($error_message);
        }
        
        $data = json_decode($response_body, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('Invalid JSON response from OpenAI');
        }
        
        if (isset($data['error'])) {
            throw new Exception('OpenAI API error: ' . $data['error']['message']);
        }
        
        if (!isset($data['choices'][0]['message']['content'])) {
            throw new Exception('Invalid API response structure');
        }
        
        $generated_content = trim($data['choices'][0]['message']['content']);
        
        if (empty($generated_content)) {
            throw new Exception('Empty response from OpenAI API');
        }
        
        return $generated_content;
    }
    
    /**
     * Process Claude API response
     */
    private function process_claude_response($response) {
        if (is_wp_error($response)) {
            throw new Exception('API request failed: ' . $response->get_error_message());
        }
        
        $response_code = wp_remote_retrieve_response_code($response);
        $response_body = wp_remote_retrieve_body($response);
        
        if ($response_code !== 200) {
            $error_data = json_decode($response_body, true);
            $error_message = 'HTTP ' . $response_code;
            
            if (isset($error_data['error']['message'])) {
                $error_message = $error_data['error']['message'];
            }
            
            throw new Exception($error_message);
        }
        
        $data = json_decode($response_body, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('Invalid JSON response from Claude');
        }
        
        if (isset($data['error'])) {
            throw new Exception('Claude API error: ' . $data['error']['message']);
        }
        
        if (!isset($data['content'][0]['text'])) {
            throw new Exception('Invalid Claude API response structure');
        }
        
        $generated_content = trim($data['content'][0]['text']);
        
        if (empty($generated_content)) {
            throw new Exception('Empty response from Claude API');
        }
        
        return $generated_content;
    }
    
    /**
     * Process Google AI API response
     */
    private function process_google_response($response) {
        if (is_wp_error($response)) {
            throw new Exception('API request failed: ' . $response->get_error_message());
        }
        
        $response_code = wp_remote_retrieve_response_code($response);
        $response_body = wp_remote_retrieve_body($response);
        
        if ($response_code !== 200) {
            $error_data = json_decode($response_body, true);
            $error_message = 'HTTP ' . $response_code;
            
            if (isset($error_data['error']['message'])) {
                $error_message = $error_data['error']['message'];
            }
            
            throw new Exception($error_message);
        }
        
        $data = json_decode($response_body, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('Invalid JSON response from Google AI');
        }
        
        if (isset($data['error'])) {
            throw new Exception('Google AI error: ' . $data['error']['message']);
        }
        
        if (!isset($data['candidates'][0]['content']['parts'][0]['text'])) {
            throw new Exception('Invalid Google AI response structure');
        }
        
        $generated_content = trim($data['candidates'][0]['content']['parts'][0]['text']);
        
        if (empty($generated_content)) {
            throw new Exception('Empty response from Google AI');
        }
        
        return $generated_content;
    }
    
    /**
     * Enhance prompt with widget context
     */
    private function enhance_prompt($prompt, $widget_type, $control_name, $context) {
        $widget_contexts = [
            'heading' => [
                'title' => 'Create a compelling headline',
                'subtitle' => 'Write a supporting subtitle'
            ],
            'button' => [
                'text' => 'Generate call-to-action button text',
                'url' => 'Suggest relevant URL'
            ],
            'text-editor' => [
                'content' => 'Write engaging content'
            ],
        ];
        
        $context_prefix = '';
        if (isset($widget_contexts[$widget_type][$control_name])) {
            $context_prefix = $widget_contexts[$widget_type][$control_name] . ': ';
        } elseif ($widget_type) {
            $context_prefix = "For a {$widget_type} widget: ";
        }
        
        // System instruction for clean output
        $system_instruction = "IMPORTANT Note: Return ONLY the exact content to be inserted, with no additional text. DO NOT include any labels, prefixes, or descriptors such as 'Heading Text:', 'Content:', 'Button Text:', etc. DO NOT add quotes, explanations, or any other text. The response should contain ONLY the content that will be directly inserted into the field and no variation content at a time.";
        
        $enhanced_prompt = $prompt;
        if ($context) {
            $enhanced_prompt = $system_instruction . "\n\nTask: " . $enhanced_prompt . "\n\nCurrent Content: " . $context;
        } else {
            $enhanced_prompt = $system_instruction . "\n\nTask: " . $enhanced_prompt;
        }
        
        return $enhanced_prompt;
    }
    
    /**
     * Check if AI is enabled
     */
    private function is_ai_enabled() {
       // return true;
        $enable_option = $this->get_ai_option('htmega_ai_enable');
        if ( ! isset( $enable_option ) ) {
            return true;
        }
        return ($enable_option === 'on' || $enable_option === 'yes' || $enable_option === true);
    }
    
    /**
     * Check if API key is configured for current engine
     */
    private function is_api_key_configured() {
        switch ($this->current_engine) {
            case 'claude':
                $api_key = $this->get_ai_option('htmega_claude_api_key');
                return !empty($api_key);
            case 'google':
                $api_key = $this->get_ai_option('htmega_google_api_key');
                return !empty($api_key);
            case 'openai':
            default:
                $api_key = $this->get_ai_option('htmega_openai_api_key');
                return !empty($api_key);
        }
    }
    
    /**
     * Get AI option value using your existing system
     */
    private function get_ai_option($option_key, $default = null) {
        // Use your existing function to get options
        if (function_exists('htmega_get_option')) {
            return htmega_get_option($option_key, 'htmega_ai_features_tabs', $default);
        }
        
        // Fallback to direct option retrieval
        return get_option($option_key, $default);
    }
    
    /**
     * Get error suggestions based on AI engine
     */
    private function get_error_suggestions($error_message) {
        $suggestions = [];
        
        if (strpos($error_message, 'API key') !== false) {
            switch ($this->current_engine) {
                case 'claude':
                    $suggestions[] = 'Check that your Claude API key is correctly entered';
                    $suggestions[] = 'Ensure your Anthropic account has available credits';
                    break;
                case 'google':
                    $suggestions[] = 'Check that your Google AI API key is correctly entered';
                    $suggestions[] = 'Ensure the API key has proper permissions';
                    break;
                case 'openai':
                default:
                    $suggestions[] = 'Check that your OpenAI API key is correctly entered';
                    $suggestions[] = 'Ensure your OpenAI account has available credits';
                    break;
            }
        } elseif (strpos($error_message, 'quota') !== false || strpos($error_message, 'rate limit') !== false) {
            $suggestions[] = 'Check your usage limits and billing information';
            $suggestions[] = 'Try again in a few moments';
        } else {
            $suggestions[] = 'Check your internet connection';
            $suggestions[] = 'Try again in a few moments';
        }
        
        return $suggestions;
    }
    
    /**
     * Validate OpenAI API key
     * 
     * @param string $api_key The API key to validate
     * @return bool|string True if valid, error message if invalid
     */
    public function validate_openai_key($api_key, $model = 'gpt-3.5-turbo') {
        if (empty($api_key)) {
            return 'OpenAI API key is required';
        }

        $response = wp_remote_post('https://api.openai.com/v1/chat/completions', [
            'headers' => [
                'Authorization' => 'Bearer ' . $api_key,
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'model' => $model,
                'messages' => [
                    ['role' => 'user', 'content' => 'test']
                ],
                'max_tokens' => 5
            ]),
            'timeout' => 15
        ]);

        if (is_wp_error($response)) {
            return 'Connection error: ' . $response->get_error_message();
        }

        $response_code = wp_remote_retrieve_response_code($response);
        $response_body = wp_remote_retrieve_body($response);
        $response_data = json_decode($response_body, true);

        if ($response_code !== 200) {
            $error_msg = isset($response_data['error']['message']) ? $response_data['error']['message'] : 'Unknown error occurred';
            return 'OpenAI API error: ' . $error_msg;
        }

        return true;
    }

    /**
     * Validate Claude API key
     * 
     * @param string $api_key The API key to validate
     * @return bool|string True if valid, error message if invalid
     */
    public function validate_claude_key($api_key) {
        if (empty($api_key)) {
            return 'Claude API key is required';
        }

        $response = wp_remote_post('https://api.anthropic.com/v1/messages', [
            'headers' => [
                'x-api-key' => $api_key,
                'anthropic-version' => '2023-06-01',
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'model' => 'claude-3-haiku-20240307',
                'max_tokens' => 5,
                'messages' => [
                    ['role' => 'user', 'content' => 'test']
                ]
            ]),
            'timeout' => 15
        ]);

        if (is_wp_error($response)) {
            return 'Connection error: ' . $response->get_error_message();
        }

        $response_code = wp_remote_retrieve_response_code($response);
        $response_body = wp_remote_retrieve_body($response);
        $response_data = json_decode($response_body, true);

        if ($response_code !== 200) {
            $error_msg = isset($response_data['error']['message']) ? $response_data['error']['message'] : 'Unknown error occurred';
            return 'Claude API error: ' . $error_msg;
        }

        return true;
    }

    /**
     * Validate Google AI API key
     * 
     * @param string $api_key The API key to validate
     * @return bool|string True if valid, error message if invalid
     */
    public function validate_google_key($api_key, $model = 'gemini-2.0-flash-exp') {
        if (empty($api_key)) {
            return 'Google AI API key is required';
        }
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$api_key}";
        $response = wp_remote_post($url, [
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'contents' => [
                    ['parts' => [['text' => 'test']]]
                ]
            ]),
            'timeout' => 15
        ]);

        if (is_wp_error($response)) {
            return 'Connection error: ' . $response->get_error_message();
        }

        $response_code = wp_remote_retrieve_response_code($response);
        $response_body = wp_remote_retrieve_body($response);
        $response_data = json_decode($response_body, true);

        if ($response_code !== 200) {
            $error_msg = isset($response_data['error']['message']) ? $response_data['error']['message'] : 'Unknown error occurred';
            return 'Google AI API error: ' . $error_msg;
        }

        return true;
    }
}

// Initialize the AI integration only if needed
add_action('plugins_loaded', function() {
    if (class_exists('HTMega_AI_Integration')) {
        HTMega_AI_Integration::instance();
    }
}, 20);