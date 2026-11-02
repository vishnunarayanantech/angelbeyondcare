<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

class HTMegaBuilder_Admin_Settings {
    private $settings_api;
    function __construct() {

        $this->settings_api = new HTMega_Settings_API();
        add_action( 'admin_init', [ $this, 'admin_init' ] );
        add_action( 'wsa_form_bottom_htmegabuilder_templatebuilder_tabs', [ $this, 'popup_box' ] );
    }

    // Admin Initialize
    function admin_init() {
        add_filter( 'htmega_admin_fields_sections', [ $this, 'fields_section' ], 10, 1 );

        //initialize settings
        $this->settings_api->admin_init();
    }

    /**
     * Admin Fields Section Route
     *
     * @param [array] $sections
     * @return void
     */
    public function fields_section( $sections ){

        $sections['themebuilder'] = array(
            'id'    => 'htmega_themebuilder_element_tabs',
            'title' => esc_html__( 'Theme Builder', 'htmega-addons' ),
            'icon'  => '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.21454 1.25H3.03936C2.05113 1.25 1.25 2.08947 1.25 3.125V5.4625C1.25 6.49803 2.05113 7.3375 3.03936 7.3375H7.21454C8.20278 7.3375 9.00391 6.49803 9.00391 5.4625V3.125C9.00391 2.08947 8.20278 1.25 7.21454 1.25Z" fill="#7D8087"/> <path d="M7.21454 9H3.03936C2.05113 9 1.25 9.78749 1.25 10.7589V16.9913C1.25 17.9627 2.05113 18.7502 3.03936 18.7502H7.21454C8.20278 18.7502 9.00391 17.9627 9.00391 16.9913V10.7589C9.00391 9.78749 8.20278 9 7.21454 9Z" fill="#7D8087"/> <path d="M16.875 12.6621H12.5C11.4645 12.6621 10.625 13.5016 10.625 14.5371V16.8746C10.625 17.9101 11.4645 18.7496 12.5 18.7496H16.875C17.9105 18.7496 18.75 17.9101 18.75 16.8746V14.5371C18.75 13.5016 17.9105 12.6621 16.875 12.6621Z" fill="#7D8087"/> <path d="M16.875 1.25H12.5C11.4645 1.25 10.625 2.03779 10.625 3.00957V9.24433C10.625 10.2161 11.4645 11.0039 12.5 11.0039H16.875C17.9105 11.0039 18.75 10.2161 18.75 9.24433V3.00957C18.75 2.03779 17.9105 1.25 16.875 1.25Z" fill="#7D8087"/> </svg>',
            'content' => [
                'column' => 3,
                'title' => __( 'Theme Builder Widget List', 'htmega-addons' ),
                'desc'  => __( 'Freely use these elements to create your site. You can enable which you are not using, and, all associated assets will be disable to improve your site loading speed.', 'htmega-addons' ),
            ]
        );

        return $sections;

    }

    // Pop up Box
    function popup_box(){
        ob_start();
        ?>
            <div id="htmega-dialog" title="<?php echo esc_attr( 'Go Premium' ); ?>" style="display: none;">
                <div class="htmega-content">
                    <span><i class="dashicons dashicons-warning"></i></span>
                    <p>
                        <?php
                            echo esc_html__('Purchase our','htmega-addons').' <strong><a href="'.esc_url( 'https://wphtmega.com/pricing/' ).'" target="_blank" rel="nofollow">'.esc_html__( 'premium version', 'htmega-addons' ).'</a></strong> '.esc_html__('to unlock these pro elements!','htmega-addons');
                        ?>
                    </p>
                </div>
            </div>
            <script type="text/javascript">
                ( function( $ ) {
                    
                    $(function() {
                        $( '.htmega_table_row.pro,.htmegapro label' ).click(function() {
                            $( "#htmega-dialog" ).dialog({
                                modal: true,
                                minWidth: 500,
                                buttons: {
                                    Ok: function() {
                                      $( this ).dialog( "close" );
                                    }
                                }
                            });
                        });
                        $(".htmega_table_row.pro input[type='checkbox'],.htmegapro select").attr("disabled", true);
                    });

                } )( jQuery );
            </script>
        <?php
        echo ob_get_clean(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }

    // Admin Menu Page Render
    function plugin_page() {

        echo '<div class="wrap">';
            echo '<h2>'.esc_html__( 'HT Builder Settings','htmega-addons' ).'</h2>';
            $this->save_message();
            $this->settings_api->show_navigation();
            $this->settings_api->show_forms();
        echo '</div>';

    }

    // Save Options Message
    function save_message() {
        if( isset($_GET['settings-updated']) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended ?>
            <div class="updated notice is-dismissible"> 
                <p><strong><?php esc_html_e('Successfully Settings Saved.', 'htmega-addons') ?></strong></p>
            </div>
            <?php
        }
    }
}

new HTMegaBuilder_Admin_Settings();