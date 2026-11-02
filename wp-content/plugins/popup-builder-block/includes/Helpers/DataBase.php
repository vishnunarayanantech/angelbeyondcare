<?php

namespace PopupBuilderBlock\Helpers;

defined( 'ABSPATH' ) || exit;

/**
 * Global helper class.
 *
 * @since 1.0.0
 */

class DataBase {

	private static $LOGS_TABLE        = 'pbb_logs';
	private static $SUBSCRIBERS_TABLE = 'pbb_subscribers';
	private static $COUNTRIES_TABLE   = 'pbb_countries';
	private static $BROWSERS_TABLE  = 'pbb_browsers';
	private static $REFERRERS_TABLE   = 'pbb_referrers';
	private static $LOG_COUNTRIES = 'pbb_log_countries';
	private static $LOG_BROWSERS = 'pbb_log_browsers';
	private static $LOG_REFERRERS = 'pbb_log_referrers';


	private static $DATABASE_VERSION  = '1.0.0';
	/**
	 * Create the database table.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public static function createDB() {
		global $wpdb;
	
		$charset_collate = $wpdb->get_charset_collate();
	
		// Table names with prefix
		$logs_table        = $wpdb->prefix . self::$LOGS_TABLE;
		$subscribers_table  = $wpdb->prefix . self::$SUBSCRIBERS_TABLE;
		$countries_table   = $wpdb->prefix . self::$COUNTRIES_TABLE;
		$browsers_table    = $wpdb->prefix . self::$BROWSERS_TABLE;
		$referrers_table   = $wpdb->prefix . self::$REFERRERS_TABLE;
		$log_countries     = $wpdb->prefix . self::$LOG_COUNTRIES;
		$log_browsers      = $wpdb->prefix . self::$LOG_BROWSERS;
		$log_referrers     = $wpdb->prefix . self::$LOG_REFERRERS;
	
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
	
		// Main logs table
		$sql = "CREATE TABLE IF NOT EXISTS $logs_table (
			id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			campaign_id BIGINT UNSIGNED NOT NULL,
			views INT DEFAULT 0,
			converted INT DEFAULT 0,
			date DATE NOT NULL,
	
			device_desktop INT DEFAULT 0,
			device_tablet INT DEFAULT 0,
			device_mobile INT DEFAULT 0,
	
			KEY campaign_id (campaign_id),
			KEY date (date),
			KEY campaign_date (campaign_id, date)
		) $charset_collate;";
		dbDelta($sql);
	
		// Countries table
		$sql = "CREATE TABLE IF NOT EXISTS $countries_table (
			id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			country_name VARCHAR(2) NOT NULL
		) $charset_collate;";
		dbDelta($sql);
	
		// Browsers table
		$sql = "CREATE TABLE IF NOT EXISTS $browsers_table (
			id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			browser_name VARCHAR(100) NOT NULL
		) $charset_collate;";
		dbDelta($sql);
	
		// Referrers table
		$sql = "CREATE TABLE IF NOT EXISTS $referrers_table (
			id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			referrer_name TEXT NOT NULL
		) $charset_collate;";
		dbDelta($sql);
	
		// Pivot: Logs x Countries
		$sql = "CREATE TABLE IF NOT EXISTS $log_countries (
			id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			log_id BIGINT UNSIGNED NOT NULL,
			country_id INT UNSIGNED NOT NULL,
			count INT NOT NULL DEFAULT 0,
			FOREIGN KEY (log_id) REFERENCES $logs_table(id) ON DELETE CASCADE,
			FOREIGN KEY (country_id) REFERENCES $countries_table(id) ON DELETE CASCADE,
			KEY log_country (log_id, country_id)
		) $charset_collate;";
		dbDelta($sql);
	
		// Pivot: Logs x Browsers
		$sql = "CREATE TABLE IF NOT EXISTS $log_browsers (
			id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			log_id BIGINT UNSIGNED NOT NULL,
			browser_id INT UNSIGNED NOT NULL,
			count INT NOT NULL DEFAULT 0,
			FOREIGN KEY (log_id) REFERENCES $logs_table(id) ON DELETE CASCADE,
			FOREIGN KEY (browser_id) REFERENCES $browsers_table(id) ON DELETE CASCADE,
			KEY log_browser (log_id, browser_id)
		) $charset_collate;";
		dbDelta($sql);
	
		// Pivot: Logs x Referrers
		$sql = "CREATE TABLE IF NOT EXISTS $log_referrers (
			id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			log_id BIGINT UNSIGNED NOT NULL,
			referrer_id INT UNSIGNED NOT NULL,
			count INT NOT NULL DEFAULT 0,
			FOREIGN KEY (log_id) REFERENCES $logs_table(id) ON DELETE CASCADE,
			FOREIGN KEY (referrer_id) REFERENCES $referrers_table(id) ON DELETE CASCADE,
			KEY log_referrer (log_id, referrer_id)
		) $charset_collate;";
		dbDelta($sql);

		// Create the subscribers table
		$sql        = "CREATE TABLE IF NOT EXISTS $subscribers_table (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            campaign_id BIGINT UNSIGNED NOT NULL,
			campaign_title VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            name VARCHAR(100) NOT NULL,
            date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            form_data TEXT NOT NULL,
            user_data VARCHAR(100) NOT NULL,
            PRIMARY KEY (id),
            KEY campaign_id (campaign_id),
            KEY date (date),
            KEY campaign_date (campaign_id, date)
        ) $charset_collate;";
		dbDelta( $sql );

		// Save the database version
		add_option( 'pbb_db_version', self::$DATABASE_VERSION );
	}

	/**
	 * Insert or update log entry.
	 *
	 * @param int    $campaign_id  Campaign ID.
	 * @param string $date         Date of the log entry.
	 * @param string $device_type  Device type (desktop, mobile, tablet).
	 * 
	 * @return bool
	 * @since 1.0.0
	 */
	public static function insertOrUpdateLog($campaign_id, $date, $device_type = null) {
		global $wpdb;
	
		$table = esc_sql( $wpdb->prefix . 'pbb_logs' );
	
		// Check if log already exists for this campaign + date
		$existing = $wpdb->get_row(
			$wpdb->prepare(
				"SELECT * FROM $table WHERE campaign_id = %d AND date = %s", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$campaign_id,
				$date
			)
		);

		$device = $device_type ? "device_$device_type" : false;
	
		if ($existing) {
			$fields = ['views' => $existing->views + 1];
			
			if($device) {
				$fields[$device] = $existing->{"$device"} + 1;
			}
	
			$wpdb->update($table, $fields, ['id' => $existing->id]);
			return $existing->id;
		} else {
			$fields = [
				'campaign_id' => $campaign_id,
				'date' => $date,
				'views' => 1,
			];

			if($device) {
				$fields[$device] = 1;
			}

			$wpdb->insert($table, $fields);
			return $wpdb->insert_id;
		}
	}

	private static function insertOrUpdateTable($table, $name, $value) {
		global $wpdb;
	
		$table_name = $wpdb->prefix . $table;
	
		// Check if the name already exists in the table
		$id = $wpdb->get_var(
			$wpdb->prepare("SELECT id FROM $table_name WHERE $name = %s", $value) // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
		);
	
		if (!$id) {
			$wpdb->insert($table_name, [$name => $value]);
			return $wpdb->insert_id;
		}
	
		return $id;
	}

	private static function insertOrUpdatePivotTable($pivot_table, $id_name, $log_id, $id) {
		global $wpdb;

		$table_name = $wpdb->prefix . $pivot_table;
	
		// Check if the log_id and id already exist in the pivot table
		$row = $wpdb->get_row(
			$wpdb->prepare("SELECT id, count FROM $table_name WHERE log_id = %d AND $id_name = %d", $log_id, $id) // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
		);
	
		if ($row) {
			$wpdb->update($table_name, ['count' => $row->count + 1], ['id' => $row->id]);
		} else {
			$wpdb->insert($table_name, [
				'log_id' => $log_id,
				$id_name => $id,
				'count' => 1
			]);
		}
	}
	

	public static function insertOrUpdateBrowser($log_id, $browser_name) {
		$id = self::insertOrUpdateTable('pbb_browsers', 'browser_name', $browser_name);
		self::insertOrUpdatePivotTable('pbb_log_browsers', 'browser_id', $log_id, $id);
	}
	

	public static function insertOrUpdateCountry($log_id, $country_name) {
		$id = self::insertOrUpdateTable('pbb_countries', 'country_name', $country_name);
		self::insertOrUpdatePivotTable('pbb_log_countries', 'country_id', $log_id, $id);
	}

	public static function insertOrUpdateReferrer($log_id, $referrer_name) {
		$id = self::insertOrUpdateTable('pbb_referrers', 'referrer_name', $referrer_name);
		self::insertOrUpdatePivotTable('pbb_log_referrers', 'referrer_id', $log_id, $id);
	}

	public static function get_devices($campaign_id, $start_date, $end_date) {
		global $wpdb;
	
		$table_name = $wpdb->prefix . self::$LOGS_TABLE;
		$campaign = $campaign_id ? " AND campaign_id = $campaign_id" : '';
	
		return $wpdb->get_results(
			$wpdb->prepare("SELECT SUM(device_desktop) as desktop, 
				SUM(device_tablet) as tablet, 
				SUM(device_mobile) as mobile 
				FROM $table_name WHERE date BETWEEN %s AND %s $campaign", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$start_date,
				$end_date,
			)
		);
	}

	private static function get_data($campaign_id, $start_date, $end_date, $table, $log_table, $column, $id) {
		global $wpdb;
	
		$table_name = $wpdb->prefix . self::$LOGS_TABLE;
		$table = $wpdb->prefix . $table;
		$log_table = $wpdb->prefix . $log_table;
		$campaign = $campaign_id ? "AND campaign_id = $campaign_id " : '';
	
		return $wpdb->get_results(
			$wpdb->prepare("SELECT t.$column, SUM(lt.count) AS total_count FROM $table_name logs JOIN $log_table lt ON lt.log_id = logs.id JOIN $table t ON t.id = lt.$id WHERE logs.date BETWEEN %s AND %s $campaign GROUP BY t.$column ORDER BY total_count DESC;", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$start_date,
				$end_date,
			)
		);
	}

	public static function get_countries($campaign_id, $start_date, $end_date) {
		return self::get_data($campaign_id, $start_date, $end_date, 'pbb_countries', 'pbb_log_countries', 'country_name', 'country_id');
	}

	public static function get_browsers($campaign_id, $start_date, $end_date) {
		return self::get_data($campaign_id, $start_date, $end_date, 'pbb_browsers', 'pbb_log_browsers', 'browser_name', 'browser_id');
	}

	public static function get_referrers($campaign_id, $start_date, $end_date) {
		return self::get_data($campaign_id, $start_date, $end_date, 'pbb_referrers', 'pbb_log_referrers', 'referrer_name', 'referrer_id');
	}

	public static function get_campaigns($campaign_id, $start_date, $end_date) {
		global $wpdb;
	
		$table_name = $wpdb->prefix . self::$LOGS_TABLE;
		$campaign = $campaign_id ? "AND campaign_id = $campaign_id " : '';
	
		return $wpdb->get_results(
			$wpdb->prepare("SELECT 
				campaign_id,
				SUM(converted) as count
				FROM $table_name WHERE date BETWEEN %s AND %s $campaign GROUP BY campaign_id  ORDER BY count DESC;", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$start_date,
				$end_date,
			)
		);
	}
	
	/**
	 * Drop the database table.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public static function dropDB() {
		global $wpdb;

		$tables = array(
			'log_countries' => self::$LOG_COUNTRIES,
			'log_browsers'  => self::$LOG_BROWSERS,
			'log_referrers' => self::$LOG_REFERRERS,
			'logs'        => self::$LOGS_TABLE,
			'subscribers' => self::$SUBSCRIBERS_TABLE,
			'browsers'    => self::$BROWSERS_TABLE,
			'countries'   => self::$COUNTRIES_TABLE,
			'referrers'   => self::$REFERRERS_TABLE,
		);

		foreach ( $tables as $table ) {
			$table_name = $wpdb->prefix . $table;
			$sql        = "DROP TABLE IF EXISTS $table_name;";
			$wpdb->query( $sql ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
		}
		
		// Delete the database version option
		delete_option( 'pbb_db_version' );
	}

	/**
	 * Insert into database table.
	 *
	 * @return bool
	 * @since 1.0.0
	 */
	public static function insertDB( $table, $data ) {
		global $wpdb;

		$table_name = $wpdb->prefix . $table;
		$wpdb->insert( $table_name, $data );
		return $wpdb->insert_id;
	}

	/**
	 * Get data from database table.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public static function getDB( $columns, $table, $where = '', $limit = 0, $count = false, $order_by = '' ) {
		global $wpdb;

		$table_name = $wpdb->prefix . $table;
		$sql        = "SELECT $columns FROM $table_name";

		if ( $count ) {
			$sql = "SELECT COUNT($columns) FROM $table_name";
		}
		if ( $where ) {
			$sql .= " WHERE $where";
		}
		if ( $limit ) {
			$sql .= " LIMIT $limit";
		}
		if ( $order_by ) {
			$sql .= " ORDER BY $order_by";
		}

		return $wpdb->get_results( $sql ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
	}

	public static function get_convertion( $campaign_id, $start_date, $end_date ) {
		global $wpdb;

		$table_name = $wpdb->prefix . self::$LOGS_TABLE;
		$sum_sql = "SUM(views) AS totalViews, SUM(converted) AS totalConverted FROM $table_name  WHERE";
		$sql        = "SELECT DATE(date) AS dateLog, $sum_sql";
		$second_sql = "SELECT $sum_sql";

		if ( $start_date && $end_date ) {
			$date_sql = " DATE(date) BETWEEN '$start_date' AND '$end_date'";
			$sql .= $date_sql;
			$second_sql .= $date_sql;
		}

		if ( $campaign_id ) {
			$campaign_sql = " AND campaign_id = $campaign_id";
			$sql .= $campaign_sql;
			$second_sql .= $campaign_sql;
		}
		
		$sql .= " GROUP BY DATE(date);";

		$grouped_data = $wpdb->get_results( $sql ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
		$total_data   = $wpdb->get_results( $second_sql ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared

		return array(
			'group' => $grouped_data,
			'total'   => $total_data,
		);
	}

	/**
	 * Update data in database table.
	 *
	 * @param string $table
	 * @param array  $data
	 * @param array  $where
	 * @return bool
	 * @since 1.0.0
	 */
	public static function updateDB( $table, $data, $where ) {
		global $wpdb;

		$table_name = $wpdb->prefix . $table;
		return $wpdb->update( $table_name, $data, $where );
	}


	/**
	 * Delete data from database table.
	 *
	 * @param string    $table
	 * @param int|array $id
	 * @param string    $where
	 * @return bool
	 * @since 1.0.0
	 */
	public static function deleteDB( $table, $id ) {
		global $wpdb;

		if ( ! isset( $id ) ) {
			return false;
		}

		// If id is array then delete multiple rows and if id is integer then delete single row
		$table_name = $wpdb->prefix . $table;
		if ( is_array( $id ) ) {
			$ids = implode( ',', $id );
			$sql = "DELETE FROM $table_name WHERE id IN ($ids)";
		} else {
			$sql = "DELETE FROM $table_name WHERE id = $id";
		}

		return $wpdb->query( $sql ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
	}

	public static function deleteExpiredData($time) {
		global $wpdb;
		
		$data_tables = array(
			self::$LOG_COUNTRIES, // Delete from pivot tables first (foreign key constraints)
			self::$LOG_BROWSERS,
			self::$LOG_REFERRERS,
			self::$LOGS_TABLE, // Delete from main logs table
		);
	
		$date_limit = date('Y-m-d', strtotime("-$time years"));
	
		// Step 1: Get old log IDs
		$logs_table = $wpdb->prefix . self::$LOGS_TABLE;
		$old_log_ids = $wpdb->get_col(
			$wpdb->prepare(
				"SELECT id FROM $logs_table WHERE date < %s", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$date_limit
			)
		);
	
		if (empty($old_log_ids)) {
			return; // No old logs to delete
		}
	
		$placeholders = implode(',', array_fill(0, count($old_log_ids), '%d'));

		foreach ($data_tables as $table) {
			$table_name = $wpdb->prefix . $table;
	
			$wpdb->query(
				$wpdb->prepare(
					"DELETE FROM $table_name WHERE log_id IN ($placeholders)", // phpcs:ignore WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare, WordPress.DB.PreparedSQL.InterpolatedNotPrepared
					...$old_log_ids // phpcs:ignore WordPress.DB.PreparedSQLPlaceholders.UnfinishedPrepare
				)
			);
		}
	}	
}
