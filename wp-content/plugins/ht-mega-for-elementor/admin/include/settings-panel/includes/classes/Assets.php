<?php
namespace HTMegaOpt;

/**
 * Scripts and Styles Class
 */
class Assets {

    function __construct() {
        if ( is_admin() ) {
            add_action( 'admin_enqueue_scripts', [ $this, 'register' ], 5 );
            add_action( 'admin_enqueue_scripts', [ $this, 'htmega_enqueue_scripts' ], 5 );
        }
    }

    /**
     * Register our app scripts and styles
     *
     * @return void
     */
    public function register() {
        $this->register_styles( $this->get_styles() );
    }

    /**
     * Register scripts
     *
     * @param  array $scripts
     *
     * @return void
     */
    private function register_scripts( $scripts ) {
        foreach ( $scripts as $handle => $script ) {
            $deps      = isset( $script['deps'] ) ? $script['deps'] : false;
            $in_footer = isset( $script['in_footer'] ) ? $script['in_footer'] : false;
            $version   = isset( $script['version'] ) ? $script['version'] : '1.0.0';

            wp_register_script( $handle, $script['src'], $deps, $version, $in_footer );
        }
    }

    /**
     * Register styles
     *
     * @param  array $styles
     *
     * @return void
     */
    public function register_styles( $styles ) {
        foreach ( $styles as $handle => $style ) {
            $deps = isset( $style['deps'] ) ? $style['deps'] : false;

            wp_register_style( $handle, $style['src'], $deps, HTMEGA_VERSION );
        }
    }

    /**
     * Enqueue admin scripts
     */
    function htmega_enqueue_scripts($hook) {
        // Get the current page from $_GET
        $page = isset($_GET['page']) ? $_GET['page'] : '';
        
        // Only load on HTMega settings pages
        if ('htmega-addons' != $page) {
            return;
        }
        // Enqueue other scripts and styles
        wp_enqueue_script('htmegaopt-admin', HTMEGAOPT_ASSETS . '/admin.js', array(), HTMEGA_VERSION, true);
        
        // Add the type="module" attribute
        add_filter('script_loader_tag', function($tag, $handle) {
            if ('htmegaopt-admin' === $handle) {
                return str_replace('src', 'type="module" src', $tag);
            }
            return $tag;
        }, 10, 2);
    }

    /**
     * Get registered styles
     *
     * @return array
     */
    public function get_styles() {

        $styles = [
            'htmegaopt-style' => [
                'src' =>  HTMEGAOPT_ASSETS . '/main.css'
            ],
        ];

        return $styles;
    }

}