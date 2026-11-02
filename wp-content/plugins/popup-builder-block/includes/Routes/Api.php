<?php

namespace PopupBuilderBlock\Routes;

defined('ABSPATH') || exit;

abstract class Api {

	protected $namespace = 'pbb/v1';

    public function __construct() {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    /**
     * Register REST routes (called by WordPress REST API).
     */
    public function register_routes() {
        $routes = $this->get_routes();
        foreach ($routes as $route) {
            register_rest_route(
                $this->namespace,
                $route['endpoint'],
                [
                    'methods'             => $route['methods'],
                    'callback'            => [$this, $route['callback']],
                    'permission_callback' => isset($route['permission_callback'])
                        ? $route['permission_callback']
                        : [$this, 'permission_callback'],
                ]
            );
        }
    }

    /**
     * Subclasses must define their routes.
     *
     * @return array Array of route definitions.
     */
    abstract protected function get_routes(): array;

    /**
     * Default permission callback for routes.
     *
     * @return bool Whether the user has permission.
     */
    public function permission_callback(): bool {
        return current_user_can('manage_options');
    }
}


