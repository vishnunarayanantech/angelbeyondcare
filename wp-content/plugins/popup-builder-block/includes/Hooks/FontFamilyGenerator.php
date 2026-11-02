<?php

namespace PopupBuilderBlock\Hooks;

defined('ABSPATH') || exit;

use PopupBuilderBlock\Helpers\Utils;

class FontFamilyGenerator{


    /**
     * Defining fonts
     */
    protected $fonts = array();

    /**
     * Initialize the class and hook into WordPress.
     */
    public function __construct(){
        add_action('wp_ajax_pbb_trigger_font_gathering', array($this, 'ajax_trigger_font_gathering'));

        add_action( 'save_post', array($this, 'on_save_post'), 10, 3);
        add_action( 'wp_resource_hints', array( $this, 'add_resource_hints' ), 10, 2 );
        add_action( 'enqueue_block_assets', array($this, 'block_assets'), 10);

        add_action( 'admin_enqueue_scripts', array($this, 'load_editor_assets'));
        add_action( 'wp_pbb_gathering_fonts', array($this, 'on_save_post'), 10, 3); 
        
    }

    /**
     * Filters an array of blocks and returns only those where the block name contains 'popup-builder-block'.
     *
     * @param array $blocks An array of blocks. Each block is an associative array that must contain a 'blockName' key. Default is an empty array.
     * @return array Returns an array of blocks where the block name contains 'popup-builder-block'. If no such blocks are found, or if the input is not an array, an empty array is returned.
     */
    public function filter_blocks($blocks = array()){
        $filtered_blocks = [];

        foreach ($blocks as $block) {
            if (isset($block['blockName']) && strpos($block['blockName'], 'popup-builder-block/') !== false) {
                $filtered_blocks[] = $block;
            }

            if (!empty($block['innerBlocks'])) {
                $filtered_blocks = array_merge($filtered_blocks, $this->filter_blocks($block['innerBlocks']));
            }
        }

        return $filtered_blocks;
    }

    /**
     * Handles the save_post action to google fonts generate CSS for popup campaigns.
     *
     * @param int      $post_id The post ID.
     * @param \WP_Post $post The post object.
     * @param bool     $update Whether this is an update or a new post.
     */
    public function on_save_post($post_id, $post, $update){
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        $is_post_type = Utils::post_type();
        if (!$update || !in_array($post->post_type, $is_post_type)) {
            return;
        }
        // Parse block attributes and generate CSS
        $blocks = parse_blocks($post->post_content);
        $parse_blocks = $this->filter_blocks(parse_blocks($post->post_content));
        if ($parse_blocks) {
            $this->set_fonts($post_id, $parse_blocks);
        }
    }

    protected function set_fonts($post_id, $blocks){
        $fonts = [];

        foreach ($blocks as $block) {
            if (isset($block['attrs'])) {
                $typographies = array_filter(
                    $block['attrs'],
                    function ($key) {
                        return str_contains(strtolower($key), 'typography');
                    },
                    ARRAY_FILTER_USE_KEY
                );

                if (! empty($typographies)) {
                    foreach ($typographies as $typography) {
                        $font_weight = ! empty($typography['fontWeight']['value']) ? $typography['fontWeight']['value'] : 400;
                        ! empty($typography['fontFamily']['value']) ? $fonts[$typography['fontFamily']['value']][] = $font_weight : '';
                    }
                }
            }
        }

        // updating fonts
        if (!empty($fonts)) {
            update_post_meta($post_id, 'pbb_posts_fonts', $fonts);
        } else {
            delete_post_meta($post_id, 'pbb_posts_fonts');
        }
    }

    /**
     * Add preconnect for Google Fonts.
     *
     * @param array  $urls URLs to print for resource hints.
     * @param string $relation_type The relation type the URLs are printed.
     * @return array
     */
    public function add_resource_hints($urls, $relation_type){
        if (wp_style_is('pbb-google-fonts', 'queue') && 'preconnect' === $relation_type) {
            $urls[] = array(
                'href' => 'https://fonts.gstatic.com',
                'crossorigin',
            );
        }

        return $urls;
    }
    /**
     * Generate Google Font URL
     * Combine multiple google font in one URL
     *
     * @return string|bool
     */
    protected function generate_fonts_url($fonts_data){
        if (! empty($fonts_data)) {
            $font_families = array();
            $font_url      = 'https://fonts.googleapis.com/css2?family=';

            // Remove duplicate values and sort the arrays
            $all_fonts = array_map(function ($arr) {
                $arr = array_unique($arr);
                sort($arr);
                return $arr;
            }, $fonts_data);

            foreach ($all_fonts as $font => $weights) {
                $weights = array_map(function ($weight) {
                    $invalid_list = array('normal', 'inherit', 'initial');
                    if (in_array($weight, $invalid_list)) {
                        return '400';
                    }
                    return $weight;
                }, $weights);
                sort($weights);
                $font_families[] = str_replace(' ', '+', $font) . ':wght@' . implode(';', array_unique($weights));
            }

            $font_url .= implode('&family=', $font_families);
            $font_url .= '&display=swap';
            return $font_url;
        }

        return false;
    }
    /**
     * Enqueues the block assets, including Google Fonts.
     *
     * @return void
     */
    public function block_assets(){
        $post_id = get_the_ID();
        if ($post_id) {
            $fonts_data = get_post_meta($post_id, 'pbb_posts_fonts', true);
            $fonts_url = $this->generate_fonts_url($fonts_data);
            if ($fonts_url) {
                $style_version = false ? POPUP_BUILDER_BLOCK_PLUGIN_VERSION : null;
                wp_enqueue_style('pbb-google-fonts', $fonts_url, array(), $style_version);
            }
        }
    }

    /**
     * AJAX handler to trigger font gathering.
     */
    public function ajax_trigger_font_gathering(){
        check_ajax_referer('pbb_font_gather_nonce', 'security');

        $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
        if (! $post_id) {
            wp_send_json_error(array('message' => 'Missing Post ID.'));
            return;
        }

        $post = get_post($post_id);
        if (! $post || ! in_array($post->post_type, Utils::post_type())) {
            wp_send_json_error(array('message' => 'Invalid Post or Post Type.'));
            return;
        }

        if (! current_user_can('edit_post', $post_id)) {
            wp_send_json_error(array('message' => 'Permission Denied.'));
            return;
        }

        // Trigger the existing action hook
        // We pass true for 'update' as this is likely happening after initial creation/load
        do_action('wp_pbb_gathering_fonts', $post_id, $post, true);

        wp_send_json_success(array('message' => 'Font gathering triggered successfully for post ' . $post_id));
        wp_die();
    }

    public function load_editor_assets(): void{
        $editor_script_handle = 'popup-builder-block-dashboard';

        // Check if the script is already enqueued or registered before localizing
        if (wp_script_is($editor_script_handle, 'registered') || wp_script_is($editor_script_handle, 'enqueued')) {
            wp_localize_script(
                $editor_script_handle,
                'pbbFontAjax',
                array(
                    'ajax_url' => admin_url('admin-ajax.php'),
                    'nonce'    => wp_create_nonce('pbb_font_gather_nonce'), 
                    'action'   => 'pbb_trigger_font_gathering',
                )
            );
        }
    }
}
