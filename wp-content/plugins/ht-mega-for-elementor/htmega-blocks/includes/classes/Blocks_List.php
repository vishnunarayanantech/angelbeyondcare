<?php
namespace HtMegaBlocks;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Manage Blocks
 */
class Blocks_List
{

    /**
     * Block List
     * @return array
     */
    public static function get_block_list()
    {
        $blockList = [
            'accordion' => [
                'label' => 'Accordion',
                'name' => 'htmega/accordion',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('accordion', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'accordion-card' => [
                'label' => 'Accordion Card',
                'name' => 'htmega/accordion-card',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('accordion', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'brand' => [
                'label' => 'Brand Logo',
                'name' => 'htmega/brand',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('brand', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'buttons' => [
                'label' => 'Buttons',
                'name' => 'htmega/buttons',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('buttons', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'button' => [
                'label' => 'Button',
                'name' => 'htmega/button',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('button', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'cta' => [
                'label' => 'Call To Action',
                'name' => 'htmega/cta',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('cta', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'image-grid' => [
                'label' => 'Image Grid',
                'name' => 'htmega/image-grid',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('image-grid', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'info-box' => [
                'label' => 'Info Box',
                'name' => 'htmega/info-box',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('info-box', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'section-title' => [
                'label' => 'Section Title',
                'name' => 'htmega/section-title',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('section-title', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'tab' => [
                'label' => 'Tab',
                'name' => 'htmega/tab',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('tab', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'tab-content' => [
                'label' => 'Tab Content',
                'name' => 'htmega/tab-content',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('tab', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'team' => [
                'label' => 'Team',
                'name' => 'htmega/team',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('team', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
            'testimonial' => [
                'label' => 'Testimonial',
                'name' => 'htmega/testimonial',
                'server_side_render' => true,
                'type' => 'common',
                'active' => htmegaBlocks_get_option('testimonial', 'htmega_gutenberg_tabs', 'off') === 'on' ? true : false,
            ],
        ];
        return apply_filters('htmega_block_list', $blockList);
    }

    /**
     * Get translated block list
     * @return array
     */
    public static function get_translated_block_list()
    {
        $blocks = self::get_block_list();
        
        foreach ($blocks as $key => &$block) {
            if (isset($block['label'])) {
                $block['label'] = __($block['label'], 'htmega-addons');
            }
        }
        
        return $blocks;
    }
}
