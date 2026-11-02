<?php
namespace HTMegaOpt\Admin;
/**
 * HTMega Onboarding Class
 */

class Onboarding {
    /**
     * Instance of this class
     */
    private static $_instance = null;

    /**
     * Current step
     */
    private $current_step = 'welcome';

    /**
     * Steps array
     */
    private $steps = array();

    /**
     * Get instance of this class
     */
    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * Constructor
     */
    public function __construct() {
        if (defined('DOING_AJAX') && DOING_AJAX) {
            add_action('wp_ajax_htmega_onboarding_step', array($this, 'handle_step_ajax'));
            return; // Don't initialize other hooks for AJAX requests
        }
        
        // Initialize steps on init hook after translations are loaded
        add_action('init', array($this, 'initialize_steps'), 15);
    }

    /**
     * Initialize steps after translations are loaded
     */
    public function initialize_steps() {
        // Initialize steps
        $this->steps = $this->get_steps();
        // Set current step
        if (isset($_GET['step']) && array_key_exists($_GET['step'], $this->steps)) {
            $this->current_step = sanitize_text_field($_GET['step']);
        }
    }

    /**
     * Get steps
     */
    private function get_steps() {
        return array(
            'welcome'   => esc_html__('Welcome', 'htmega-addons'),
            'elements'  => esc_html__('Elements', 'htmega-addons'),
            'modules'   => esc_html__('Modules', 'htmega-addons'),
            'gopro'      => esc_html__('Go Pro', 'htmega-addons'),
            'templates' => esc_html__('Templates', 'htmega-addons'),
            'finalize' => esc_html__('Finalize', 'htmega-addons'),
        );
    }

    /**
     * Get list of elements for the onboarding
     */
    public function get_elements_list() {
        $elements_all_settings = Options_Field::instance()->get_registered_settings();
        $elements_all_settings = $elements_all_settings['htmega_element_tabs'];
        $elements = $this->extractElementData($elements_all_settings);
        $defaults = array_column($elements, 'default', 'key');
        return $defaults;
    }
  /**
     * Get list of modules for the onboarding
     */
    public function get_modules_list() {
        $module_all_settings = Options_Field::instance()->get_registered_settings();
        $module_all_settings = $module_all_settings['htmega_advance_element_tabs'];
        $modules = $this->extractElementData($module_all_settings);
        $defaults = array_column($modules, 'default', 'key');
        return $defaults;
    }
    /**
     * Update modules settings
     */
    public function update_modules_setting_by_id($id, $value = 'off') {
        $module_all_settings = Options_Field::instance()->get_registered_settings();
        $module_all_settings = $module_all_settings['htmega_advance_element_tabs'];
        if (!is_array($module_all_settings)) {
            return null;
        }
        
        $filtered = array_values(array_filter($module_all_settings, function($item) use ($id) {
            return isset($item['id']) && $item['id'] === $id;
        }));

        if ( !isset($filtered[0]['setting_fields']) && empty($filtered[0]['setting_fields'])) {
            return null;
        }

        $settings_fileds = $filtered[0]['setting_fields'] ?? [];
        $modules = $this->extractElementData($settings_fileds);
        $defaults = array_column($modules, 'default', 'key');

        // Update the first element
        $firstKey = key($defaults);
        $defaults[$firstKey] = $value;
        $settings_to_store = array(
            $id => json_encode($defaults)
          );

        update_option( $filtered[0]['section'], $settings_to_store);
    }

    /**
     * Send JSON response
     */
    private function send_json_response($success, $data) {
        // Clean any existing output
        while (ob_get_level()) {
            ob_end_clean();
        }

        // Set headers
        nocache_headers();
        header('Content-Type: application/json; charset=utf-8');

        // Prepare response
        $response = array(
            'success' => $success,
            'data' => $data
        );

        // Send response
        echo json_encode($response);
        exit;
    }

    /**
     * Handle AJAX step navigation
     */
    public function handle_step_ajax() {
        // Disable error output
        @error_reporting(0);
        @ini_set('display_errors', 0);

        // Clean any existing output
        while (ob_get_level()) {
            ob_end_clean();
        }
        try {
            // Verify nonce
            if (!isset($_POST['security']) || !wp_verify_nonce($_POST['security'], 'htmegaopt_verifynonce')) {
                throw new Exception('Invalid security token');
            }

            // Check user permissions
            if (!current_user_can('manage_options')) {
                throw new Exception('Permission denied');
            }

            // Get and validate step
            $step = isset($_POST['step']) ? sanitize_text_field($_POST['step']) : 'welcome';
            if (!in_array($step, array('welcome', 'elements','modules', 'gopro', 'templates', 'finalize', 'congrats','skip'))) {
                throw new Exception('Invalid step');
            }

            if ( $step === 'skip' ) {
                update_option('htmega_onboarding_completed', true);
                $this->send_json_response(true, array(
                    'redirect' => admin_url('admin.php?page=htmega-addons')
                ));
               die();
            }

            if ( $step === 'congrats' ) {
                // Check if settings are provided in the request
                $this->handle_save_changes($_POST);
            }

        } catch (Exception $e) {
            if (ob_get_length()) {
                ob_end_clean();
            }
            wp_send_json_error([
                'message' => $e->getMessage()
            ]);
        }

        die();
    }

    /**
     * Extract element data from an array
     */
    public function extractElementData($array) {
        $result = [];
    
        // Loop through each element in the array
        foreach ($array as $item) {
            // Initialize default values for each item
            $key = $item['key'] ?? $item['id'] ?? '';
            $name = $item['name'] ?? $item['name'] ?? '';
            $status =  $item['is_pro'] ?? $item['is_pro'] ?? false;
            $default =  $item['default'] ?? $item['default'] ?? false;
    
            // Add the processed item to the result array
            $result[] = [
                'key' => $key,
                'name' => $name,
                'is_pro' => $status,
                'default' => $default,
            ];
        }
    
        return $result;
    }
    
    /**
     * Handle save changes button click
     */
    public function handle_save_changes($settings) {
        // Get existing options
        $element_tabs = $this->get_elements_list();
        $advance_element_tabs = $this->get_modules_list();

        if (isset($settings['settings'])) {
            // Decode JSON data into PHP array
            $onboarding_state = json_decode(stripslashes($settings['settings']), true);

            if (isset($onboarding_state['elements']) && is_array($onboarding_state['elements'])) {
                $turn_on_elements = array_values( $onboarding_state['elements'] );
                foreach ($element_tabs as $key => $value) {
                    if (in_array($key, $turn_on_elements)) {
                        $element_tabs[$key] = "on";
                    } else {
                        $element_tabs[$key] = "off";
                    }
                }
            }

            if (isset($onboarding_state['modules']) && is_array($onboarding_state['modules'])) {
                
                $turn_on_modules = array_values( $onboarding_state['modules'] );
                foreach ($advance_element_tabs as $key => $value) {
                    if (in_array($key, $turn_on_modules)) {

                        $this->update_modules_setting_by_id($key, 'on');
                        $advance_element_tabs[$key] = "on";
                    } else {
                        $this->update_modules_setting_by_id($key, 'off');
                        $advance_element_tabs[$key] = "off";
                    }
                }
            }
        }

        // Save updated options
        update_option('htmega_element_tabs', $element_tabs);
        update_option('htmega_advance_element_tabs', $advance_element_tabs);
        update_option('htmega_onboarding_completed', true);

        if (isset($onboarding_state['permitionStatus']) && $onboarding_state['permitionStatus'] === true) {

            $diagnostic_nonce = wp_create_nonce('htmega-diagonstic-data-ajax-request');
            do_action('htmega_collect_diagnostic_data', $diagnostic_nonce);
        }

        $this->send_json_response(true, array(
            'redirect' => admin_url('admin.php?page=htmega-addons')
        ));
    }
}

// Initialize the onboarding
Onboarding::instance();