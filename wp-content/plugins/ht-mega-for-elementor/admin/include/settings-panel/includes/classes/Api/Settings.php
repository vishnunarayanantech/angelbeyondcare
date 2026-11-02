<?php
namespace HTMegaOpt\Api;

use WP_REST_Controller;
use HTMegaOpt\SanitizeTrail\Sanitize_Trait;

if ( !class_exists( '\HTMegaOpt\Admin\Options_Field'  ) ) {
    require_once HTMEGAOPT_INCLUDES . '/classes/Admin/Options_field.php';
}

if ( !class_exists( 'HTMega_AI_Integration' ) ) {
    require_once HTMEGA_ADDONS_PL_PATH . '/includes/ai/htmega-ai-integration.php';
}

/**
 * REST_API Handler
 */
class Settings extends WP_REST_Controller {

    use Sanitize_Trait;

    protected $namespace;
    protected $rest_base;
    protected $slug;
    protected $errors;

    /**
	 * All registered settings.
	 *
	 * @var array
	 */
	protected $settings;

    /**
     * [__construct Settings constructor]
     */
    public function __construct() {
        $this->slug      = 'htmega_';
        $this->namespace = 'htmegaopt/v1';
        $this->rest_base = 'settings';
        $this->errors    = new \WP_Error();
        $this->settings  = \HTMegaOpt\Admin\Options_Field::instance()->get_registered_settings();

        add_filter( $this->slug . '_settings_sanitize', [ $this, 'sanitize_settings' ], 3, 10 );

    }

    /**
     * Register the routes
     *
     * @return void
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/'.$this->rest_base,
            [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'get_items' ],
                    'permission_callback' => [ $this, 'permissions_check' ],
                    'args'                => $this->get_collection_params(),
                ],

                [
                    'methods'             => \WP_REST_Server::CREATABLE,
                    'callback'            => [ $this, 'create_items' ],
                    'permission_callback' => [ $this, 'permissions_check' ],
                    'args'                => $this->get_collection_params(),
                ]
            ]
        );

    }

    /**
     * Checks if a given request has access to read the items.
     *
     * @param  WP_REST_Request $request Full details about the request.
     *
     * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
     */
    public function permissions_check( $request ) {

        if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error( 'rest_forbidden', 'HTMEGA OPT: Permission Denied.', [ 'status' => 401 ] );
		}

		return true;
    }

    /**
     * Retrieves the query params for the items collection.
     *
     * @return array Collection parameters.
     */
    public function get_collection_params() {
        return [];
    }

    /**
     * Retrieves a collection of items.
     *
     * @param WP_REST_Request $request Full details about the request.
     *
     * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
     */
    public function get_items( $request ) {
        $items = [];

        $section = (string) $request['section'];
        if( !empty( $section ) ){
            $items = get_option( $section, true );
        }
        
        $response = rest_ensure_response( $items );
        return $response;
    }

    /**
     * Create item response
     */
    public function create_items( $request ) {

        if ( ! wp_verify_nonce( $request['settings']['verifynonce'], 'htmegaopt_verifynonce' ) ) {
            return;
        }

        if ( ! current_user_can( 'manage_options' ) ) {
            return;
        }

        $section            = ( !empty( $request['section'] ) ? sanitize_text_field( $request['section'] ) : '' );
        $sub_section        = ( !empty( $request['subsection'] ) ? sanitize_text_field( $request['subsection'] ) : '' );
        $settings_received  = ( !empty( $request['settings'] ) ? htmegaopt_data_clean( $request['settings'] ) : '' );
        $settings_reset     = ( !empty( $request['reset'] ) ? rest_sanitize_boolean( $request['reset'] ) : '' );

        // Data reset
        if( $settings_reset == true ){

            if( !empty( $sub_section ) ) {
                $reseted = delete_option( $sub_section );
            } else{
                $reseted = delete_option( $section );
            }
            
            return rest_ensure_response( $reseted );
        }

        if( empty( $section ) || empty( $settings_received ) ){
            return;
        }

        $get_settings = $this->settings[$section];
        $data_to_save = [];

        if ( is_array( $get_settings ) && ! empty( $get_settings ) ) {
            $get_settings = isset($get_settings['blocks']) ? $get_settings['blocks'] : $get_settings;
			foreach ( $get_settings as $setting ) {

                // Skip if no setting type.
                if ( ! $setting['type'] ) {
                    continue;
                }

                // Skip if setting type is html.
                if ( $setting['type'] === 'html' ) {
                    continue;
                }

                // Skip if setting field is pro.
                if ( isset( $setting['is_pro'] ) && $setting['is_pro'] ) {
                    continue;
                }

                // Skip if the ID doesn't exist in the data received.
                if ( !isset($settings_received['blocks']) && ! array_key_exists( $setting['id'], $settings_received ) ) {
                    continue;
                }

                // Sanitize the input.
                $setting_type = $setting['type'];
                $output       = apply_filters( $this->slug . '_settings_sanitize', isset($settings_received['blocks']) ? $settings_received['blocks'][ $setting['id'] ] : $settings_received[ $setting['id'] ], $this->errors, $setting );
                $output       = apply_filters( $this->slug . '_settings_sanitize_' . $setting['id'], $output, $this->errors, $setting );

                if ( $setting_type == 'checkbox' && $output == false ) {
                    continue;
                }

                // Add the option to the list of ones that we need to save.
                if ( ! empty( $output ) && ! is_wp_error( $output ) ) {
                    if(isset($settings_received['blocks'])) {
                        $data_to_save['blocks'][ $setting['id'] ] = $output;
                    } else {
                        $data_to_save[ $setting['id'] ] = $output;
                    }
                }

            }
        }
        // check AI assistent API  validation
        if (($section === 'htmega_ai_features_tabs')){
            $ai_enable = isset($data_to_save['htmega_ai_enable']) ? $data_to_save['htmega_ai_enable'] : '';
            $ai_engine = isset($data_to_save['htmega_ai_engine']) ? $data_to_save['htmega_ai_engine'] : '';
            $openai_api_key = isset($data_to_save['htmega_openai_api_key']) ? $data_to_save['htmega_openai_api_key'] : '';
            $openai_model = isset($data_to_save['htmega_openai_model']) ? $data_to_save['htmega_openai_model'] : '';
            $claude_api_key = isset($data_to_save['htmega_claude_api_key']) ? $data_to_save['htmega_claude_api_key'] : '';
            $claude_model = isset($data_to_save['htmega_claude_model']) ? $data_to_save['htmega_claude_model'] : '';
            $google_api_key = isset($data_to_save['htmega_google_api_key']) ? $data_to_save['htmega_google_api_key'] : '';
            $google_model = isset($data_to_save['htmega_google_model']) ? $data_to_save['htmega_google_model'] : '';

            if($ai_enable == 'on' && $ai_engine == 'openai'){
                $test_connection = $this->test_connection($ai_engine, $openai_api_key, $openai_model);
                if($test_connection !== true) {
                    return new \WP_REST_Response([
                        'message' => is_string($test_connection) ? $test_connection : 'Invalid OpenAI API key or connection failed',
                        'status' => 'error'
                    ], 401);
                }
            }
            if($ai_enable == 'on' && $ai_engine == 'claude'){
                $test_connection = $this->test_connection($ai_engine, $claude_api_key, $claude_model);
                if($test_connection !== true) {
                    return new \WP_REST_Response([
                        'message' => is_string($test_connection) ? $test_connection : 'Invalid Claude API key or connection failed',
                        'status' => 'error'
                    ], 401);
                }
            }
            if($ai_enable == 'on' && $ai_engine == 'google'){
                if(empty($google_api_key)){
                    return new \WP_REST_Response([
                        'message' => 'Google API Key is required',
                        'status' => 'error'
                    ], 401);
                }
                $test_connection = $this->test_connection($ai_engine, $google_api_key, $google_model);
                if($test_connection !== true) {
                    return new \WP_REST_Response([
                        'message' => is_string($test_connection) ? $test_connection : 'Invalid Google API key or connection failed',
                        'status' => 'error'
                    ], 401);
                }
            }
        }

        if ( ! empty( $this->errors->get_error_codes() ) ) {
			return new \WP_REST_Response( $this->errors, 422 );
		}
        if( ! empty( $sub_section ) ){
		    update_option( $sub_section, $data_to_save );
            
        } else {
            update_option( $section, $data_to_save );
        }

		return rest_ensure_response( $data_to_save );
        
    }

    /**
     * test connection
     * 
     * @return bool|string Returns true if connection successful, error message string if failed
     */
    public function test_connection($ai_engine, $api_key, $model) {
        try {
            if (!class_exists('\HTMega_AI_Integration')) {
                return 'HTMega AI Integration class not found';
            }
            
            // Use fully qualified class name with leading backslash to reference global namespace
            $ai_instance = \HTMega_AI_Integration::instance();
            
            // Test connection based on AI engine
            switch ($ai_engine) {
                case 'openai':
                    return $ai_instance->validate_openai_key($api_key, $model);
                case 'claude':
                    return $ai_instance->validate_claude_key($api_key, $model);
                case 'google':
                    return $ai_instance->validate_google_key($api_key, $model);
                default:
                    return 'Invalid AI engine specified';
            }
        } catch (\Exception $e) {
            return 'Error: ' . $e->getMessage();
        }
    }

    /**
     * Sanitize callback for Settings Data
     *
     * @return mixed
     */
    public function sanitize_settings( $setting_value, $errors, $setting ){

        if ( ! empty( $setting['sanitize_callback'] ) && is_callable( $setting['sanitize_callback'] ) ) {
            $setting_value = call_user_func( $setting['sanitize_callback'], $setting_value );
        } else {
            $setting_value = $this->default_sanitizer( $setting_value, $errors, $setting );
        }

        return $setting_value;

    }

    /**
     * If no Sanitize callback function from option field.
     *
     * @return mixed
     */
    public function default_sanitizer( $setting_value, $errors, $setting ){

        switch ( $setting['type'] ) {
            case 'text':
            case 'radio':
            case 'select':
                $finalvalue = $this->sanitize_text_field( $setting_value, $errors, $setting );
                break;

            case 'textarea':
                $finalvalue = $this->sanitize_textarea_field( $setting_value, $errors, $setting );
                break;

            case 'checkbox':
            case 'switcher':
            case 'element':
                $finalvalue = $this->sanitize_checkbox_field( $setting_value, $errors, $setting );
                break;

            case 'multiselect':
            case 'multicheckbox':
                $finalvalue = $this->sanitize_multiple_field( $setting_value, $errors, $setting );
                break;

            case 'file':
                $finalvalue = $this->sanitize_file_field( $setting_value, $errors, $setting );
                break;
            
            default:
                $finalvalue = sanitize_text_field( $setting_value );
                break;
        }

        return $finalvalue;

    }

}