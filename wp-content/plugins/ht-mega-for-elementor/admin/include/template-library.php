<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

class HTMega_Template_Library{

    const TRANSIENT_KEY = 'htmega_template_info';
    public static $buylink = null;

    public static $endpoint     = 'https://library.wphtmega.com/wp-json/htmega/v1/templates';
    public static $templateapi  = 'https://library.wphtmega.com/wp-json/htmega/v1/templates/%s';

    public static $api_args = [];

    private static $_instance = null;
    public static function instance(){
        if( is_null( self::$_instance ) ){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    function __construct(){
        self::$buylink = isset( HTMega_Addons_Elementor::$template_info['pro_link'] ) ? HTMega_Addons_Elementor::$template_info['pro_link'] : '#';
        if ( is_admin() ) {
            add_action( 'admin_menu', [ $this, 'admin_menu' ], 225 );
            add_action( 'wp_ajax_htmega_ajax_request', [ $this, 'templates_ajax_request' ] );
            add_action( 'wp_ajax_nopriv_htmega_ajax_request', [ $this, 'templates_ajax_request' ] );
            add_action( 'wp_ajax_htmega_get_templates', [ $this, 'get_templates_ajax' ] );

            add_action( 'wp_ajax_htmega_ajax_get_required_plugin', [ $this, 'ajax_plugin_data' ] );
            add_action( 'wp_ajax_htmega_ajax_plugin_activation', [ $this, 'ajax_plugin_activation' ] );
            add_action( 'wp_ajax_htmega_ajax_theme_activation', [ $this, 'ajax_theme_activation' ] );
        }
        self::$api_args = [
            'plugin_version' => HTMEGA_VERSION,
            'url'            => home_url(),
        ];

    }

    /**
     * AJAX endpoint for fetching templates
     */
    public function get_templates_ajax() {
        check_ajax_referer('htmega_actication_verifynonce', 'nonce');
        
        // Check last request time and clear transients if needed
        $stror_time = (int) get_option('htmega_api_last_req');
        if ($stror_time) {
            if (time() > $stror_time + 604800) {
                update_option('htmega_api_last_req', time());
                delete_transient('htmega_template_info');
                delete_transient('htmega_template_request_pending');
                delete_transient('htmega_severdown_request_pending');
            }
        } else {
            update_option('htmega_api_last_req', time());
            delete_transient('htmega_template_info');
            delete_transient('htmega_template_request_pending');
            delete_transient('htmega_severdown_request_pending');
        }

        // Get fresh template info
        $template_info = $this->get_templates_info();
        
        if ($template_info) {
            wp_send_json_success($template_info);
        } else {
            wp_send_json_error(['message' => __('No templates found', 'htmega-addons')]);
        }
    }

    // Setter Endpoint
    function set_api_endpoint( $endpoint ){
        self::$endpoint = $endpoint;
    }
    
    // Setter Template API
    function set_api_templateapi( $templateapi ){
        self::$templateapi = $templateapi;
    }

    // Get Endpoint
    public static function get_api_endpoint(){
        if( is_plugin_active('htmega-pro/htmega_pro.php') && function_exists('htmega_pro_template_endpoint') ){
            self::$endpoint = htmega_pro_template_endpoint();
        }
        return self::$endpoint;
    }
    
    // Get Template API
    public static function get_api_templateapi(){
        if( is_plugin_active('htmega-pro/htmega_pro.php') && function_exists('htmega_pro_template_url') ){
            self::$templateapi = htmega_pro_template_url();
        }
        return self::$templateapi;
    }

    // Plugins Library Register
    function admin_menu() {
        add_submenu_page(
            'htmega-addons', 
            esc_html__( 'Templates Library', 'htmega-addons' ),
            esc_html__( 'Templates Library', 'htmega-addons' ), 
            'manage_options', 
            'htmega-addons#/templates', 
            [ $this, 'library_render_html' ] 
        );
    }
    function library_render_html(){
        if( apply_filters( 'htmega_use_vue_template_library', true ) ) {
            // Add wrapper div with specific class for styling
            echo '<div class="wrap htmega-template-admin-page">';
            echo '<div id="htmega-template-library-app" class="htmega-template-library-wrapper"></div>';
            echo '</div>';
            return;
        }

        $template_data = HTMega_Addons_Elementor::$template_info;
        if(is_array($template_data) && isset($template_data['templates'])){
            require_once HTMEGA_ADDONS_PL_PATH . 'admin/include/templates_list.php';
        }else{
            ?>
                <div class="htmega-template-library">
                  <div class="htmega-library-warning-image">
                      <img src="<?php echo esc_url( HTMEGA_ADDONS_PL_URL.'admin/assets/images/warning-icon.png' ); ?>">
                  </div>
                  <h2>
                    <?php echo esc_html__( 'No data found','htmega-addons' ); ?>
                  </h2>
                  <p><?php echo esc_html__( 'Please wait a few moments, this may be the causes of server issues.','htmega-addons' ); ?></p>
                </div> 
            <?php
        }
    }

    // Get Buy Now link
    function get_pro_link(){
        return self::$buylink;
    }

    public static function request_remote_templates_info( $force_update ) {
        global $wp_version;
        if ($force_update) {
            delete_transient('htmega_severdown_request_pending');
        } 
        // Check server down status only if not forcing update
        else if (get_transient('htmega_severdown_request_pending')) {
            return [];
        }


        $timeout = ( $force_update ) ? 25 : 8;
        $request = wp_remote_get(
            self::get_api_endpoint(),
            [
                'timeout'    => $timeout,
                'user-agent' => 'WordPress/' . $wp_version . '; ' . home_url()
            ]
        );

        if ( is_wp_error( $request ) || 200 !== (int) wp_remote_retrieve_response_code( $request ) ) {
            set_transient('htmega_severdown_request_pending', 'Pending request for server down', 60 * MINUTE_IN_SECONDS);
            return [];
        }
        // Clear server down status on successful request
        delete_transient('htmega_severdown_request_pending');
        $response = json_decode( wp_remote_retrieve_body( $request ), true );
        return $response;

    }

    /**
     * Retrieve template library and save as a transient.
     */
    public static function set_templates_info( $force_update = false ) {

        $transient = get_transient( self::TRANSIENT_KEY );
        if ( ! $transient || $force_update ) {
            $info = self::request_remote_templates_info( $force_update );
            set_transient( self::TRANSIENT_KEY, $info, 30 * DAY_IN_SECONDS );
        }
    }

    /**
     * Get template info.
     */
    public function get_templates_info( $force_update = false ) {
        if ( ! get_transient( self::TRANSIENT_KEY ) || $force_update ) {
            self::set_templates_info( true );
        }
        return get_transient( self::TRANSIENT_KEY );
    }
    /**
     * Ajax request.
     */
    function templates_ajax_request(){
        
        //file_put_contents( __DIR__.'/log.txt', print_r( $_REQUEST, true ) );
        check_ajax_referer('htmega_actication_verifynonce', 'plgactivenonce');

        if ( isset( $_REQUEST ) ) {

            $template_id        = sanitize_text_field( $_REQUEST['httemplateid'] );
            $template_parentid  = sanitize_text_field( $_REQUEST['htparentid'] );
            $template_title     = sanitize_text_field( $_REQUEST['httitle'] );
            $page_title         = sanitize_text_field( $_REQUEST['pagetitle'] );

            $templateurl    = sprintf( self::get_api_templateapi(), $template_id );
            $response_data  = $this->templates_get_content_remote_request( $templateurl );
            $defaulttitle   = ucfirst( $template_parentid ) .' -> '.$template_title;

            $args = [
                'post_type'    => !empty( $page_title ) ? 'page' : 'elementor_library',
                'post_status'  => !empty( $page_title ) ? 'draft' : 'publish',
                'post_title'   => !empty( $page_title ) ? $page_title : $defaulttitle,
                'post_content' => '',
            ];

            $new_post_id = wp_insert_post( $args );

            if ( isset( $response_data['content']['content'] ) ) {
                update_post_meta( $new_post_id, '_elementor_data', $response_data['content']['content'] );
            }
            if ( isset( $response_data['type'] ) ) {
                update_post_meta( $new_post_id, '_elementor_template_type', $response_data['type'] );
            }
           
            update_post_meta( $new_post_id, '_elementor_edit_mode', 'builder' );
            
            if( isset( $response_data['page_settings'] ) ){
                update_post_meta( $new_post_id, '_elementor_page_settings', $response_data['page_settings'] );
            }

            if ( $new_post_id && ! is_wp_error( $new_post_id ) ) {
                update_post_meta( $new_post_id, '_wp_page_template', !empty( $response_data['page_template'] ) ? $response_data['page_template'] : 'elementor_canvas' );
            }

            echo wp_json_encode(
                array( 
                    'id'      => $new_post_id,
                    'edittxt' => !empty( $page_title ) ? esc_html__( 'Edit Page', 'htmega-addons' ) : esc_html__( 'Edit Template', 'htmega-addons' )
                )
            );
        }

        wp_die();
    }

    /*
    * Remote data
    */
    public function templates_get_content_remote_request( $templateurl ){
        global $wp_version;

        $response = wp_remote_get( $templateurl, array(
            'timeout'    => 25,
            'user-agent' => 'WordPress/' . $wp_version . '; ' . home_url()
        ) );

        if ( is_wp_error( $response ) || 200 !== (int) wp_remote_retrieve_response_code( $response ) ) {
            return [];
        }

        $result = json_decode( wp_remote_retrieve_body( $response ), true );
        return $result;

    }

    /*
    * Ajax response required data
    */
    public function ajax_plugin_data(){
        check_ajax_referer('htmega_actication_verifynonce', 'plgactivenonce');
        
        $response = array(
            'success' => false,
            'data' => array(
                'free' => array(),
                'pro' => array()
            )
        );

        if ( isset( $_POST ) ) {
            $freeplugins = !empty($_POST['freeplugins']) ? explode( ',', sanitize_text_field($_POST['freeplugins']) ) : array();
            $proplugins = !empty($_POST['proplugins']) ? explode( ',', sanitize_text_field($_POST['proplugins']) ) : array();
            
            if(!empty($freeplugins)){
                $response['data']['free'] = $this->required_plugins( $freeplugins, 'free' );
            }
            if(!empty($proplugins)){ 
                $response['data']['pro'] = $this->required_plugins( $proplugins, 'pro' );
            }
            
            $response['success'] = true;
        }

        wp_send_json($response);
        wp_die();
    }

    /*
    * Required Plugins
    */
    public function required_plugins( $plugins, $type ) {
        $plugin_data = array();
        foreach ( $plugins as $key => $plugin ) {

            $plugindata = explode( '//', $plugin );
            $data = array(
                'slug'      => isset( $plugindata[0] ) ? $plugindata[0] : '',
                'location'  => isset( $plugindata[1] ) ? $plugindata[0].'/'.$plugindata[1] : '',
                'name'      => isset( $plugindata[2] ) ? $plugindata[2] : '',
                'pllink'    => isset( $plugindata[3] ) ? 'https://'.$plugindata[3] : '#',
            );

            if ( ! is_wp_error( $data ) ) {

                // Installed but Inactive.
                if ( file_exists( WP_PLUGIN_DIR . '/' . $data['location'] ) && is_plugin_inactive( $data['location'] ) ) {
                    $data['status'] = 'inactive';
                    $data['button_text'] = __( 'Activate', 'htmega-addons' );
                // Not Installed.
                } elseif ( ! file_exists( WP_PLUGIN_DIR . '/' . $data['location'] ) ) {
                    $data['status'] = 'not-installed';
                    $data['button_text'] = __( 'Install Now', 'htmega-addons' );
                // Active.
                } else {
                    $data['status'] = 'active';
                    $data['button_text'] = __( 'Activated', 'htmega-addons' );
                }
                
                $data['type'] = $type;
                $plugin_data[] = $data;
            }
        }
        return $plugin_data;
    }

    /**
     * Ajax plugins activation request
     */
    public function ajax_plugin_activation() {
        check_ajax_referer('htmega_actication_verifynonce', 'plgactivenonce');

        if ( ! current_user_can( 'install_plugins' ) ) {
            wp_send_json_error(
                array(
                    'success' => false,
                    'message' => esc_html__( 'You do not have permission to install plugins', 'htmega-addons' ),
                )
            );
        }

        $plugin_data = isset( $_POST['plugindata'] ) ? json_decode( stripslashes( $_POST['plugindata'] ), true ) : array();
        error_log('Plugin activation request data: ' . print_r($plugin_data, true));

        if ( empty( $plugin_data['location'] ) ) {
            wp_send_json_error(
                array(
                    'success' => false,
                    'message' => esc_html__( 'Plugin location not provided', 'htmega-addons' ),
                )
            );
        }

        $plugin_file = $plugin_data['location'];
        $plugin_path = WP_PLUGIN_DIR . '/' . $plugin_file;
        error_log("Activating plugin at: {$plugin_path}");

        if ( ! file_exists( $plugin_path ) ) {
            wp_send_json_error(
                array(
                    'success' => false,
                    'message' => esc_html__( 'Plugin file not found', 'htmega-addons' ),
                )
            );
        }

        $activate = activate_plugin( $plugin_file, '', false, true );

        if ( is_wp_error( $activate ) ) {
            error_log('Plugin activation error: ' . $activate->get_error_message());
            wp_send_json_error(
                array(
                    'success' => false,
                    'message' => $activate->get_error_message(),
                )
            );
        }

        error_log('Plugin activated successfully: ' . $plugin_file);
        wp_send_json_success(
            array(
                'success' => true,
                'message' => esc_html__( 'Plugin Successfully Activated', 'htmega-addons' ),
            )
        );
    }

    /*
    * Required Theme
    */
    public function required_theme( $themes, $type ){
        foreach ( $themes as $key => $theme ) {
            $themedata = explode( '//', $theme );
            $data = array(
                'slug'      => isset( $themedata[0] ) ? $themedata[0] : '',
                'name'      => isset( $themedata[1] ) ? $themedata[1] : '',
                'prolink'   => isset( $themedata[2] ) ? $themedata[2] : '',
            );

            if ( ! is_wp_error( $data ) ) {

                $theme = wp_get_theme();

                // Installed but Inactive.
                if ( file_exists( get_theme_root(). '/' . $data['slug'] . '/functions.php' ) && ( $theme->stylesheet != $data['slug'] ) ) {

                    $button_classes = 'button themeactivate-now button-primary';
                    $button_text    = __( 'Activate', 'htmega-addons' );

                // Not Installed.
                } elseif ( ! file_exists( get_theme_root(). '/' . $data['slug'] . '/functions.php' ) ) {

                    $button_classes = 'button themeinstall-now';
                    $button_text    = __( 'Install Now', 'htmega-addons' );

                // Active.
                } else {
                    $button_classes = 'button disabled';
                    $button_text    = __( 'Activated', 'htmega-addons' );
                }

                ?>
                    <li class="htwptemplata-theme-<?php echo esc_attr( $data['slug'] ); ?>">
                        <h3><?php echo esc_html($data['name']); ?></h3>
                        <?php
                            if ( !empty( $data['prolink'] ) ) {
                                echo '<a class="button" href="'.esc_url( $data['prolink'] ).'" target="_blank">'.esc_html__( 'Buy Now', 'htmega-addons' ).'</a>';
                            }else{
                        ?>
                            <button class="<?php echo esc_attr($button_classes); ?>" data-themeopt='<?php echo wp_json_encode( $data ); ?>'><?php echo esc_html($button_text); ?></button>
                        <?php } ?>
                    </li>
                <?php
            }


        }

    }

    /*
    * Required Theme Activation Request
    */
    function ajax_theme_activation() {
        check_ajax_referer('htmega_actication_verifynonce', 'plgactivenonce');

        if ( ! current_user_can( 'install_themes' ) || ! isset( $_POST['themeslug'] ) || ! $_POST['themeslug'] ) {
            wp_send_json_error(
                array(
                    'success' => false,
                    'message' => esc_html__( 'Sorry, you are not allowed to install themes on this site.', 'htmega-addons' ),
                )
            );
        }

        $theme_slug = ( isset( $_POST['themeslug'] ) ) ? esc_attr( $_POST['themeslug'] ) : '';
        switch_theme( $theme_slug );

        wp_send_json_success(
            array(
                'success' => true,
                'message' => __( 'Theme Activated', 'htmega-addons' ),
            )
        );
    }


}

HTMega_Template_Library::instance();