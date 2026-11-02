<?php
// Exit if accessed directly
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}
// Get the uninstall setting value
$uninstall_data = get_option('pbb-settings-tabs', []);
$uninstral = $uninstall_data['uninstall-data'] ?? [];

// Check if 'status' is set to 'active'
if (isset($uninstral['status']) && $uninstral['status'] === 'active') {
    global $wpdb;

    // Define the options to delete
    $options_to_delete = [
        'pbb-settings-tabs',
        'pbb_settings_list',
        'pbb_db_version',
        'pbb_fse_fonts',
        '__pbb_oppai__',
        '__pbb_license_key__',
        'popup_builder_block_pro_installed_time',
        'popup_builder_block_pro_version',
    ];

    // Define the custom tables to drop
    $tables_to_delete = [
        $wpdb->prefix . 'pbb_log_browsers',
        $wpdb->prefix . 'pbb_log_countries',
        $wpdb->prefix . 'pbb_log_referrers',
        $wpdb->prefix . 'pbb_logs',
        $wpdb->prefix . 'pbb_subscribers',
        $wpdb->prefix . 'pbb_browsers',
        $wpdb->prefix . 'pbb_countries',
        $wpdb->prefix . 'pbb_referrers',
    ];

    // Define the usermeta keys to delete
    $usermeta_keys_to_delete = [
        // some usermeta keys
    ];

    // Define the postmeta keys to delete
    $postmeta_keys_to_delete = [
        'popup_builder_block_settings',
    ];

    // Define the transients to delete
    $transients_to_delete = [
        // some transients
    ];

    /** DELETE OPTIONS */
    foreach ($options_to_delete as $option) {
        delete_option($option);
        delete_site_option($option); // For multisite compatibility
    }

    /** DELETE CUSTOM TABLES */
    foreach ($tables_to_delete as $table) {
        $wpdb->query( sprintf( 'DROP TABLE IF EXISTS `%s`', esc_sql( $table ) ) );
    }

    /** DELETE TRANSIENTS */
    foreach ($transients_to_delete as $transient) {
        delete_transient($transient);
        delete_site_transient($transient); // For multisite
    }

    /** DELETE USERMETA */
    foreach ($usermeta_keys_to_delete as $meta_key) {
        $wpdb->query($wpdb->prepare("DELETE FROM {$wpdb->usermeta} WHERE meta_key = %s", $meta_key));
    }

    /** DELETE POSTMETA */
    foreach ($postmeta_keys_to_delete as $meta_key) {
        $wpdb->query($wpdb->prepare("DELETE FROM {$wpdb->postmeta} WHERE meta_key = %s", $meta_key));
    }
}
