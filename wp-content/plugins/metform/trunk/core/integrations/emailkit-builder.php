<?php
namespace MetForm\Core\Integrations;

defined( 'ABSPATH' ) || exit;

class Emailkit_Builder {

    use \MetForm\Traits\Singleton;

    /**
     * Initialize the class
     * 
     * @return void
     */
    public function init() {
        
        add_action('wp_ajax_check_built_template', [$this, 'form_id_for_emailkit']); 
    }

    /**
     * Get the form ID associated with the first EmailKit template.
     * 
     * @return int|false The form ID or false if not found.
     */
    public function form_id_for_emailkit( ){

         if ( ! isset($_GET['rest_nonce']) || ! wp_verify_nonce( $_GET['rest_nonce'], 'metform_emailkit_nonce' ) ) {
            return [
                'status' => 'fail',
                'message' => [__('Nonce mismatch.', 'metform')]
            ];
        }

        if (!is_user_logged_in() || !current_user_can('publish_posts')) {
            return [
                'status' => 'fail',
                'message' => [__('Access denied.', 'metform')]
            ];
        }

        $template_ids = get_posts([
            'post_type'      => 'emailkit',
            'meta_query'     => [
                [
                    'key' => 'emailkit_template_type',
                    'value' => 'metform_form_',
                    'compare' => 'LIKE'
                ]
            ],
            'posts_per_page' => 1,
            'fields'         => 'ids',
            'orderby'        => 'ID',
            'order'          => 'ASC'
        ]);

        if(!empty($template_ids)){

            $template_id = $template_ids[0];
            $template_type = get_post_meta($template_id, 'emailkit_template_type', true);
            $form_id = str_replace('metform_form_', '', $template_type);

            wp_send_json_success( $form_id );
        }

        return false;
    }
}