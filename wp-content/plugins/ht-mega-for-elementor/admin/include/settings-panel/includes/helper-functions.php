<?php
/**
 * [htmegaopt_data_clean] clean array data
 *
 * @param [array] $var
 * @return void
 */
if ( ! function_exists( 'htmegaopt_data_clean' ) ) {
function htmegaopt_data_clean( $var ) {
    if ( is_array( $var ) ) {
        return array_map( 'htmegaopt_data_clean', $var );
    } else {
        return is_scalar( $var ) ? sanitize_text_field( $var ) : $var;
    }
}
}

/**
 * Get Options Value
 *
 * @param [type] $key
 * @param [type] $section
 * @param boolean $default
 * @return void
 */
if ( ! function_exists( 'htmegaopt_get_option' ) ) {
function htmegaopt_get_option( $key, $section, $default = false ){
    $options = get_option( $section );
    if ( isset( $options['blocks'] ) && isset( $options['blocks'][$key] ) ) {
        $value = $options['blocks'][$key];
    }elseif ( isset( $options[$key] ) ) {
        $value = $options[$key];
    }else{
        $value = $default;
    }
    return apply_filters( 'htmegaopt' . '_get_option_' . $key, $value, $key, $default );
}
}

/**
 * Get Option value Section wise
 *
 * @param [array] $registered_settings
 * @return void
 */
if ( ! function_exists( 'htmegaopt_get_options' ) ) {
function htmegaopt_get_options( $registered_settings = [] ) {
    if( ! is_array( $registered_settings ) ){
        return;
    }
    $settings = [];
    $options = [];
    foreach ( $registered_settings as $section_key => $setting_section ) {
        foreach ( $setting_section as $key => $setting ) {
            if( $key === 'blocks' ) {
                foreach ( $setting as $block ) {
                    $default                   = $block['default'];
                    $options['blocks'][$block['id']] = htmegaopt_get_option( $block['id'], $section_key, $default );
                }
            } else {

                if( isset( $setting['section'] ) ){
                    $options2 = [];
                    foreach ($setting['setting_fields'] as $key => $sub_setting ) {
                        $default = isset( $sub_setting['std'] ) ? $sub_setting['std'] : ( isset( $sub_setting['default'] ) ? $sub_setting['default'] : '' );
                        $options2[ $sub_setting['id']] = htmega_get_module_option( $setting['section'], $setting['id'], $sub_setting['id'], $default );
                    } 
    
                    $settings[$setting['section']] = $options2;
                    $options2 = [];
                }else{
                    $default                   = isset( $setting['std'] ) ? $setting['std'] : ( isset( $setting['default'] ) ? $setting['default'] : '' );
                    $options[ $setting['id'] ] = htmegaopt_get_option( $setting['id'], $section_key, $default );
                }
            }
        }
        $settings[$section_key] = $options;
        $options = [];
    }
    return apply_filters( 'htmegaopt' . '_get_settings', $settings );

}
}
/**
 * Get list of elements for the onboarding
 */
if ( ! function_exists( 'get_elements_list' ) ) {
    function get_elements_list() {
        $elements_all_settings = Options_Field::instance()->get_registered_settings();
        $elements_all_settings = $elements_all_settings['htmega_element_tabs'];
        $elements = $this->extractElementData($elements_all_settings);
        $defaults = array_column($elements, 'default', 'key');
        return $defaults;
    }
}
/**
 * Get list of modules for the onboarding
 */
if ( ! function_exists( 'get_modules_list' ) ) {
function get_modules_list() {
    $module_all_settings = Options_Field::instance()->get_registered_settings();
    $module_all_settings = $module_all_settings['htmega_advance_element_tabs'];
    $modules = $this->extractElementData($module_all_settings);
    $defaults = array_column($modules, 'default', 'key');
    return $defaults;
}
}

/**
 * Extract element data from an array
 */
if ( ! function_exists( 'extractElementData' ) ) {
function extractElementData($array) {
    $result = [];

    // Loop through each element in the array
    foreach ($array as $item) {
        // Initialize default values for each item
        $key = $item['key'] ?? $item['id'] ?? '';
        $name = $item['name'] ?? $item['name'] ?? '';
        $status =  $item['is_pro'] ?? $item['is_pro'] ?? false;
        $default =  $item['default'] ?? $item['default'] ?? false;
        $result[] = [
            'key' => $key,
            'name' => $name,
            'is_pro' => $status,
            'default' => $default,
        ];
    }

    return $result;
}
}
add_action( 'wp_ajax_htmega_get_sidebar_content', 'get_sidebar_content' );
    /**
     * AJAX handler for getting sidebar banner content
     */
     function get_sidebar_content() {
        try {
            // Prevent any unwanted output
            @error_reporting(0);
            @ini_set('display_errors', 0);

            if (!current_user_can('manage_options')) {
                wp_send_json_error(array('message' => 'Unauthorized access'));
                return;
            }

            // Include required dependencies
            if (!function_exists('is_plugin_active')) {
                require_once ABSPATH . 'wp-admin/includes/plugin.php';
            }

            // Start output buffering
            ob_start();
            
            // Include the template
            $template_path = HTMEGA_ADDONS_PL_PATH . 'admin/include/settings-panel/includes/templates/sidebar-banner.php';
            
            if (!file_exists($template_path)) {
                wp_send_json_error(array('message' => esc_html__('Template file not found', 'htmega-addons')));
                return;
            }

            // Include template and get content
            include $template_path;
            $content = ob_get_clean();

            // Clean any unwanted output
            while (ob_get_level()) {
                ob_end_clean();
            }

            if (empty($content)) {
                wp_send_json_error(array('message' => esc_html__('Empty content', 'htmega-addons')));
                return;
            }

            // Send JSON response
            wp_send_json_success(array(
                'content' => $content
            ));

        } catch (Exception $e) {
            wp_send_json_error(array('message' => $e->getMessage()));
        }
    }