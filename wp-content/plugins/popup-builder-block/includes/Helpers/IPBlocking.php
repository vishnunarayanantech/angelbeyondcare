<?php

namespace PopupBuilderBlock\Helpers;

defined('ABSPATH') || exit;
class IPBlocking{
    public static $is_ip_blocked = false;
    /**
     * Blocks IP addresses based on a range or a list of specific IPs.
     *
     * @return void
     */
    public function block_ip($post_meta, $id){
        if (empty($post_meta['ipBlocking'])) {
            return self::$is_ip_blocked = false;
        }
        // Get the visitor's IP address
        $visitor_ip = $this->get_visitor_ip();
        $ip_settings = $post_meta['ipBlocking'];
       
        if (
            $ip_settings['enable'] &&
            $this->is_ip_blocked($visitor_ip, $ip_settings['blockedRanges'] ?? [], $ip_settings['blockedIPs'] ?? [])
        ) {
            return self::$is_ip_blocked = true;
        }
        return self::$is_ip_blocked = false;
    }

    /**
     * Gets the visitor's IP address.
     *
     * @return string The visitor's IP address.
     */
    public function get_visitor_ip(){
        if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
            $client_ip = sanitize_text_field( wp_unslash( $_SERVER['HTTP_CLIENT_IP'] ) );
            return $client_ip;
        } elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
            $forwarded_ips = sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) );
            $ips = explode( ',', $forwarded_ips );
            return trim( $ips[0] );
        } elseif ( ! empty( $_SERVER['REMOTE_ADDR'] ) ) {
            $remote_addr = sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
            return $remote_addr;
        } else {
            return '';
        }        
    }

    /**
     * Checks if the visitor's IP is blocked.
     *
     * @param string $ip The visitor's IP address.
     * @param array $ranges Array of IP ranges to block.
     * @param array $specific_ips Array of specific IPs to block.
     * @return bool True if the IP is blocked, otherwise false.
     */
    public function is_ip_blocked($ip, $ranges, $specific_ips){
        // Convert IP to long for comparison
        $ip_long = ip2long($ip);

        // Check against ranges
        foreach ($ranges as $range) {
            $from_long = ip2long($range['from']);
            $to_long = ip2long($range['to']);
            if ($ip_long >= $from_long && $ip_long <= $to_long) {
                return true;
            }
        }

        if (in_array($ip, array_column($specific_ips, 'ip'))) {
            return true;
        }

        return false;
    }
}

