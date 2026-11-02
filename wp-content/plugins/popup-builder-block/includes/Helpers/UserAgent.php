<?php

namespace PopupBuilderBlock\Helpers;

defined( 'ABSPATH' ) || exit;

use PopupKitScopedDependencies\foroco\BrowserDetection;

class UserAgent {
	private static $browser_detector;
	private static $user_agent;

	/**
	 * Initialize Browser Detection
	 */
	private static function init() {
		if ( ! isset( self::$browser_detector ) ) {
			self::$browser_detector = new BrowserDetection();
			self::$user_agent       = isset( $_SERVER['HTTP_USER_AGENT'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_USER_AGENT'] ) ) : ''; // Get user agent
		}
	}

	/**
	 * Get Operating System
	 *
	 * @return string
	 */
	public static function get_os() {
		self::init();
		return self::$browser_detector->getOS( self::$user_agent )['os_name'] ?? 'Unknown OS';
	}

	/**
	 * Get Browser Name
	 *
	 * @return string
	 */
	public static function get_browser() {
		self::init();
		return self::$browser_detector->getBrowser( self::$user_agent )['browser_name'] ?? 'Unknown Browser';
	}

	/**
	 * Get Device Type (Mobile, Tablet, Desktop)
	 *
	 * @return string
	 */
	public static function get_device() {
		self::init();
		$tabletRegex = '/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i';
        $mobileRegex = '/(mobile|iphone|ipod|android.*mobile|blackberry|nokia|opera mini|windows phone)/i';

		$device = 'desktop';
        if (preg_match($tabletRegex, self::$user_agent )) {
            $device = 'tablet';
        } elseif (preg_match($mobileRegex, self::$user_agent )) {
            $device = 'mobile';
        }
		
		return $device;
	}
}
