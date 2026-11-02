<?php

namespace PopupBuilderBlock\Helpers;

defined( 'ABSPATH' ) || exit;

use PopupBuilderBlock\Config\SettingsList;

/**
 * Global helper class.
 *
 * @since 1.0.0
 */

class Utils {

	/**
	 * Returns an array of allowed HTML tags and attributes for SVG elements.
	 *
	 * @return array The array of allowed HTML tags and attributes.
	 */
	public static function svg_allowed_html() {
		$allowed_svg_tags = array(
			'svg'            => array(
				'xmlns'               => true,
				'width'               => true,
				'height'              => true,
				'viewBox'             => true,
				'viewbox'             => true,
				'fill'                => true,
				'class'               => true,
				'aria-hidden'         => true,
				'aria-labelledby'     => true,
				'role'                => true,
				'preserveaspectratio' => true,
				'version'             => true,
			),
			'title'          => array( 'title' => true ),
			'g'              => array(
				'transform' => true,
				'style'     => true,
				'id'        => true,
			),
			'path'           => array(
				'd'                 => true,
				'fill'              => true,
				'fill-rule'         => true,
				'transform'         => true,
				'style'             => true,
				'opacity'           => true,
				'stroke'            => true,
				'stroke-width'      => true,
				'stroke-miterlimit' => true,
				'stroke-linecap'    => true,
				'stroke-linejoin'   => true,
				'fill-opacity'      => true,
			),
			'circle'         => array(
				'cx'           => true,
				'cy'           => true,
				'r'            => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
			),
			'ellipse'        => array(
				'cx'           => true,
				'cy'           => true,
				'rx'           => true,
				'ry'           => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
			),
			'line'           => array(
				'x1'           => true,
				'y1'           => true,
				'x2'           => true,
				'y2'           => true,
				'stroke'       => true,
				'stroke-width' => true,
			),
			'polygon'        => array(
				'points'       => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
			),
			'polyline'       => array(
				'points'       => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
			),
			'rect'           => array(
				'x'            => true,
				'y'            => true,
				'width'        => true,
				'height'       => true,
				'fill'         => true,
				'stroke'       => true,
				'stroke-width' => true,
			),
			'text'           => array(
				'x'           => true,
				'y'           => true,
				'dx'          => true,
				'dy'          => true,
				'text-anchor' => true,
				'style'       => true,
			),
			'tspan'          => array(
				'x'           => true,
				'y'           => true,
				'dx'          => true,
				'dy'          => true,
				'text-anchor' => true,
				'style'       => true,
			),
			'defs'           => array(),
			'lineargradient' => array(
				'id'            => true,
				'x1'            => true,
				'y1'            => true,
				'x2'            => true,
				'y2'            => true,
				'gradientunits' => true,
			),
			'stop'           => array(
				'offset'       => true,
				'style'        => true,
				'stop-color'   => true,
				'stop-opacity' => true,
			),
			'radialgradient' => array(
				'id'                => true,
				'cx'                => true,
				'cy'                => true,
				'r'                 => true,
				'gradientunits'     => true,
				'gradienttransform' => true,
			),
		);

		return apply_filters( 'pbb_allowed_svg_attrs_tags', $allowed_svg_tags );
	}

	/**
	 * Returns an array of allowed JSON attribute tags.
	 *
	 * This function defines an array of allowed JSON attribute tags and their corresponding properties.
	 * The array includes tags such as 'object', 'array', 'string', 'number', 'integer', 'boolean', 'null',
	 * 'enum', 'const', 'oneOf', 'allOf', 'anyOf', 'not', 'if', 'then', 'else', and 'format'.
	 *
	 * @return array The array of allowed JSON attribute tags.
	 */
	public static function allowed_json_attrs_tags() {
		$allowed_json_tags = array(
			'object'      => array(
				'type'                 => true,
				'properties'           => true,
				'required'             => true,
				'additionalProperties' => true,
				'propertyNames'        => true,
				'dependencies'         => true,
				'minProperties'        => true,
				'maxProperties'        => true,
			),
			'array'       => array(
				'type'        => true,
				'items'       => true,
				'minItems'    => true,
				'maxItems'    => true,
				'uniqueItems' => true,
			),
			'string'      => array(
				'type'             => true,
				'minLength'        => true,
				'maxLength'        => true,
				'pattern'          => true,
				'format'           => true,
				'contentEncoding'  => true,
				'contentMediaType' => true,
			),
			'number'      => array(
				'type'             => true,
				'minimum'          => true,
				'maximum'          => true,
				'exclusiveMinimum' => true,
				'exclusiveMaximum' => true,
				'multipleOf'       => true,
			),
			'integer'     => array(
				'type'             => true,
				'minimum'          => true,
				'maximum'          => true,
				'exclusiveMinimum' => true,
				'exclusiveMaximum' => true,
			),
			'boolean'     => array(
				'type' => true,
			),
			'null'        => array(
				'type' => true,
			),
			'enum'        => array(
				'type' => true,
				'enum' => true,
			),
			'const'       => array(
				'type'  => true,
				'const' => true,
			),
			'oneOf'       => array(
				'type'  => true,
				'oneOf' => true,
			),
			'allOf'       => array(
				'type'  => true,
				'allOf' => true,
			),
			'anyOf'       => array(
				'type'  => true,
				'anyOf' => true,
			),
			'not'         => array(
				'type' => true,
				'not'  => true,
			),
			'if'          => array(
				'type' => true,
				'if'   => true,
			),
			'then'        => array(
				'type' => true,
				'then' => true,
			),
			'else'        => array(
				'type' => true,
				'else' => true,
			),
			'format'      => array(
				'type'   => true,
				'format' => true,
			),
			'title'       => true,
			'description' => true,
			'default'     => true,
			'examples'    => true,
			'$ref'        => true,
			'$id'         => true,
			'$schema'     => true,
			// Adding Lottie-specific keys
			'v'           => true,
			'meta'        => true,
			'fr'          => true,
			'ip'          => true,
			'op'          => true,
			'w'           => true,
			'h'           => true,
			'nm'          => true,
			'ddd'         => true,
			'assets'      => true,
			'layers'      => true,
			'markers'     => true,
		);

		return apply_filters( 'pbb_allowed_json_attrs_tags', $allowed_json_tags );
	}

	public static function iframe_allowed_html() {
		return array(
			'iframe' => array(
				'src'             => true,
				'name'            => true,
				'sandbox'         => true,
				'width'           => true,
				'height'          => true,
				'marginheight'    => true,
				'marginwidth'     => true,
				'scrolling'       => true,
				'allowfullscreen' => true,
				'frameborder'     => true,
				'title'           => true,
				'id'              => true,
				'class'           => true,
				'style'           => true,
				'tabindex'        => true,
				'allow'           => true,
			),
		);
	}

	public static function gdc_allowed_html() {
		return array(
			'gdc' => array(
				'selectedpath'            => true,
				'class'                   => true,
				'id'                      => true,
				'fallback'                => true,
				'postcustomfield'         => true,
				'postcustomfieldkey'      => true,
				'postdatetype'            => true,
				'dateformat'              => true,
				'customdateformat'        => true,
				'excerptlength'           => true,
				'tagindex'                => true,
				'timetype'                => true,
				'timeformat'              => true,
				'customtimeformat'        => true,
				'categoryindex'           => true,
				'nocomment'               => true,
				'singlecomment'           => true,
				'multicomments'           => true,
				'currentdateformat'       => true,
				'customcurrentdateformat' => true,
				'currenttimeformat'       => true,
				'customcurrenttimeformat' => true,
				'authorinfo'              => true,
				'currentuserinfo'         => true,
				'acfgroup'                => true,
				'acffield'                => true,
			),
		);
	}

	/**
	 * Returns the allowed HTML tags and attributes for the img element.
	 *
	 * @return array The allowed HTML tags and attributes.
	 */
	public static function img_allowed_html() {
		return array(
			'img' => array(
				'alt'    => true,
				'src'    => true,
				'srcset' => true,
				'class'  => true,
				'height' => true,
				'width'  => true,
			),
		);
	}

	/**
	 * Returns the allowed HTML tags and attributes for the style element.
	 *
	 * @return array The allowed HTML tags and attributes.
	 */
	public static function style_allowed_html() {
		return array(
			'style' => array(
				'class' => true,
				'id'    => true,
			),
		);
	}

	public static function get_device_list() {
		$default_device_list = array(
			array(
				'label'      => 'Desktop',
				'slug'       => 'Desktop',
				'value'      => 'base',
				'direction'  => 'max',
				'isActive'   => true,
				'isRequired' => true,
			),
			array(
				'label'      => 'Tablet',
				'slug'       => 'Tablet',
				'value'      => '1024',
				'direction'  => 'max',
				'isActive'   => true,
				'isRequired' => true,
			),
			array(
				'label'      => 'Mobile',
				'slug'       => 'Mobile',
				'value'      => '767',
				'direction'  => 'max',
				'isActive'   => true,
				'isRequired' => true,
			),
		);

		return $default_device_list;
	}

	/**
	 * Adds class to SVG
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public static function add_class_to_svg( $svg ) {
		$originalString = $svg;
		$substringToAdd = "class='gkit-icon' ";

		$position = strpos( $originalString, '<svg' );

		if ( $position !== false ) {
			$svg = substr_replace( $originalString, $substringToAdd, $position + 5, 0 );
			return $svg;
		}

		return $svg;
	}

	/**
	 * Check if the block is a Popup Builder block.
	 *
	 * @param string $attrs
	 * @return bool
	 */
	public static function is_popup_block( $block_content, $parsed_block, $attrs = '', $attrs2 = '' ) {
		// Check if $block_content is not empty
		$hasBlockContent = ! empty( $block_content );

		// Check if $block['blockName'] is not empty and contains 'popup-builder-block'
		$hasValidBlockName = ! empty( $parsed_block['blockName'] ) && strpos( $parsed_block['blockName'], 'popup-builder-block' ) !== false;

		// Check if $block['attrs']['blockClass'] is not empty
		$hasBlockClass = ! empty( $attrs ) && ! empty( $attrs2 )
			? ! empty( $parsed_block['attrs'][ $attrs ][ $attrs2 ] )
			: ! empty( $parsed_block['attrs'][ $attrs ] ?? '' );

		if ( empty( $attrs ) && empty( $attrs2 ) ) {
			$hasBlockClass = true;
		}

		// Return true if all conditions are met
		return $hasBlockContent && $hasValidBlockName && $hasBlockClass;
	}

	/**
	 * Extends the allowed HTML tags for post content.
	 *
	 * @return array The extended array of allowed HTML tags.
	 */
	public static function post_kses_extend_allowed_html() {
		$default_post_allowed_html = wp_kses_allowed_html( 'post' );

		$post_allowed_html = array_merge( $default_post_allowed_html, self::svg_allowed_html(), self::iframe_allowed_html(), self::gdc_allowed_html(), self::style_allowed_html() );

		return $post_allowed_html;
	}

	/**
	 * Retrieves the settings from the specified key in the options table.
	 *
	 * @param string $key The key of the settings in the options table.
	 * @param string $list Optional. The specific list within the settings to retrieve.
	 * @param string $option Optional. The specific option within the list to retrieve.
	 * @return mixed The retrieved settings, or false if the list or option is not found.
	 */
	public static function get_settings( $key = '', $field = 'status', $inner_field = '' ) {
		$settings = get_option( 'pbb-settings-tabs' );

		if ( empty( $settings ) ) {
			$settings = SettingsList::pbb_settings_list();
		}

		// check if $key & $field both empty
		if ( empty( $key ) && empty( $field ) ) {
			return $settings;
		}

		// check for primary key
		if ( ! empty( $key ) && ! empty( $settings[ $key ] ) ) {
			$settings = $settings[ $key ];
		}

		// check for primary field
		if ( ! empty( $field ) ) {
			if ( $field === 'status' && ! empty( $settings[ $field ] ) ) {
				return ( $settings[ $field ] === 'active' ) ? true : false;
			} else {
				$settings = ! empty( $settings[ $field ] ) ? $settings[ $field ] : false;
			}
		}

		// check for inner field
		if ( ! empty( $inner_field ) ) {
			if ( isset( $settings[ $inner_field ]['value'] ) ) {
				$settings = $settings[ $inner_field ]['value'];
			} else {
				$settings = ! empty( $settings[ $inner_field ] ) ? $settings[ $inner_field ] : false;
			}
		}

		return $settings;
	}

	/**
	 * parse css
	 *
	 * @param string $css
	 * @return string
	 */
	public static function parse_css( $raw_css ) {

		$styles      = array();
		$device_list = array( 'desktop', 'tablet', 'mobile' );

		foreach ( $device_list as $device ) {
			$deviceStyles = $raw_css[ $device ] ?? array();

			$styles[ $device ] = array_map(
				function ( $style ) {
					if ( ! is_array( $style ) || ! isset( $style['selector'] ) ) {
						return '';
					}

					$selector  = $style['selector'];
					$cssValues = array_filter(
						$style,
						function ( $value, $key ) {
							return $key !== 'selector' && $value !== null && $value !== '' && ! is_numeric( $value ) && ! in_array( $value, array( 'px', 'em', 'rem', '%', 'vh', 'vw' ) ) && strpos( $value, 'undefined' ) === false;
						},
						ARRAY_FILTER_USE_BOTH
					);

					if ( empty( $cssValues ) ) {
						return '';
					}

					return "{$selector} { " . implode(
						' ',
						array_map(
							function ( $key, $value ) {
								return "{$key}: {$value};";
							},
							array_keys( $cssValues ),
							$cssValues
						)
					) . ' }';
				},
				$deviceStyles
			);
		}

		$device_styles = array_map(
			function ( $style ) {
				return implode( "\n", $style );
			},
			$styles
		);

		return $device_styles;
	}

	/**
	 * Retrieves the link attributes based on the provided attribute array.
	 *
	 * @param array $attribute The attribute array containing the link data.
	 * @return string The generated link attributes as a string.
	 */
	public static function get_link_attributes( $attribute ) {
		if ( empty( $attribute['url'] ) ) {
			return '';
		}

		$link_data = array();

		$link_data['href'] = esc_url( $attribute['url'], wp_allowed_protocols() );

		( isset( $attribute['newTab'] ) && $attribute['newTab'] ) ? $link_data['target'] = '_blank' : '';

		( isset( $attribute['noFollow'] ) && $attribute['noFollow'] ) ? $link_data['rel'] = 'nofollow' : '';

		if ( isset( $attribute['customAttributes'] ) && gettype( $attribute['customAttributes'] ) == 'array' ) {
			foreach ( $attribute['customAttributes'] as $key => $value ) {
				if ( ! empty( $value ) ) {
					$attr_key_value = explode( '|', $value );

					$attr_key = mb_strtolower( $attr_key_value[0] );

					// Not allowed characters are removed.
					preg_match( '/[-_a-z0-9]+/', $attr_key, $attr_key_matches );

					if ( empty( $attr_key_matches[0] ) ) {
						continue;
					}

					$attr_key = $attr_key_matches[0];

					// Javascript events and unescaped href are avoided.
					if ( 'href' === $attr_key || 'on' === substr( $attr_key, 0, 2 ) ) {
						continue;
					}

					if ( isset( $attr_key_value[1] ) ) {
						$attr_value = trim( $attr_key_value[1] );
					} else {
						$attr_value = '';
					}

					$link_data[ $attr_key ] = $attr_value;
				}
			}
		}

		$link_attributes = '';
		foreach ( $link_data as $key => $value ) {
			$link_attributes .= sprintf( '%s="%s" ', $key, esc_attr( $value ) );
		}

		return $link_attributes;
	}

	public static function status() {

		$cached = wp_cache_get( 'pbb__license_status' );

		if ( false !== $cached ) {
			return $cached;
		}

		$oppai  = get_option( '__pbb_oppai__', '' );
		$key    = get_option( '__pbb_license_key__', '' );
		$status = 'invalid';

		if ( $oppai != '' && $key != '' ) {
			$status = 'valid';
		}

		wp_cache_set( 'pbb__license_status', $status );

		return $status;
	}

	public static function is_local() {
		$valid_domains = array(
			'.academy',
			'.accountant',
			'.accountants',
			'.actor',
			'.adult',
			'.africa',
			'.agency',
			'.airforce',
			'.apartments',
			'.app',
			'.army',
			'.art',
			'.asia',
			'.associates',
			'.attorney',
			'.auction',
			'.audio',
			'.auto',
			'.baby',
			'.band',
			'.bar',
			'.bargains',
			'.beer',
			'.berlin',
			'.best',
			'.bid',
			'.bike',
			'.bingo',
			'.bio',
			'.biz',
			'.black',
			'.blackfriday',
			'.blog',
			'.blue',
			'.boston',
			'.boutique',
			'.build',
			'.builders',
			'.business',
			'.buzz',
			'.cab',
			'.cafe',
			'.cam',
			'.camera',
			'.camp',
			'.capital',
			'.car',
			'.cards',
			'.care',
			'.careers',
			'.cars',
			'.casa',
			'.cash',
			'.casino',
			'.catering',
			'.center',
			'.ceo',
			'.chat',
			'.cheap',
			'.christmas',
			'.church',
			'.city',
			'.claims',
			'.cleaning',
			'.click',
			'.clinic',
			'.clothing',
			'.cloud',
			'.club',
			'.coach',
			'.codes',
			'.coffee',
			'.college',
			'.com',
			'.community',
			'.company',
			'.computer',
			'.condos',
			'.construction',
			'.consulting',
			'.contact',
			'.contractors',
			'.cooking',
			'.cool',
			'.country',
			'.coupons',
			'.courses',
			'.credit',
			'.creditcard',
			'.cricket',
			'.cruises',
			'.cymru',
			'.cyou',
			'.dance',
			'.date',
			'.dating',
			'.day',
			'.deals',
			'.degree',
			'.delivery',
			'.democrat',
			'.dental',
			'.dentist',
			'.desi',
			'.design',
			'.dev',
			'.diamonds',
			'.diet',
			'.digital',
			'.direct',
			'.directory',
			'.discount',
			'.doctor',
			'.dog',
			'.domains',
			'.download',
			'.earth',
			'.eco',
			'.education',
			'.email',
			'.energy',
			'.engineer',
			'.engineering',
			'.enterprises',
			'.equipment',
			'.estate',
			'.events',
			'.exchange',
			'.expert',
			'.exposed',
			'.express',
			'.fail',
			'.faith',
			'.family',
			'.fans',
			'.farm',
			'.fashion',
			'.feedback',
			'.film',
			'.finance',
			'.financial',
			'.fish',
			'.fishing',
			'.fit',
			'.fitness',
			'.flights',
			'.florist',
			'.flowers',
			'.football',
			'.forsale',
			'.foundation',
			'.fun',
			'.fund',
			'.furniture',
			'.futbol',
			'.fyi',
			'.gallery',
			'.game',
			'.games',
			'.garden',
			'.gay',
			'.gdn',
			'.gift',
			'.gifts',
			'.gives',
			'.glass',
			'.global',
			'.gmbh',
			'.gold',
			'.golf',
			'.graphics',
			'.gratis',
			'.green',
			'.gripe',
			'.group',
			'.guide',
			'.guitars',
			'.guru',
			'.hamburg',
			'.haus',
			'.health',
			'.healthcare',
			'.help',
			'.hiphop',
			'.hockey',
			'.holdings',
			'.holiday',
			'.horse',
			'.host',
			'.hosting',
			'.house',
			'.how',
			'.icu',
			'.immo',
			'.immobilien',
			'.inc',
			'.industries',
			'.info',
			'.ink',
			'.institute',
			'.insure',
			'.international',
			'.investments',
			'.irish',
			'.jetzt',
			'.jewelry',
			'.juegos',
			'.kaufen',
			'.kim',
			'.kitchen',
			'.kiwi',
			'.krd',
			'.kyoto',
			'.land',
			'.lat',
			'.lawyer',
			'.lease',
			'.legal',
			'.lgbt',
			'.life',
			'.lighting',
			'.limited',
			'.limo',
			'.link',
			'.live',
			'.llc',
			'.loan',
			'.loans',
			'.lol',
			'.london',
			'.love',
			'.ltd',
			'.ltda',
			'.luxury',
			'.maison',
			'.management',
			'.market',
			'.marketing',
			'.mba',
			'.media',
			'.melbourne',
			'.memorial',
			'.men',
			'.menu',
			'.miami',
			'.mobi',
			'.moda',
			'.moe',
			'.mom',
			'.money',
			'.monster',
			'.mortgage',
			'.movie',
			'.nagoya',
			'.name',
			'.navy',
			'.net',
			'.network',
			'.new',
			'.news',
			'.ninja',
			'.nyc',
			'.observer',
			'.okinawa',
			'.one',
			'.onl',
			'.online',
			'.org',
			'.osaka',
			'.page',
			'.paris',
			'.partners',
			'.parts',
			'.party',
			'.photo',
			'.photography',
			'.photos',
			'.pics',
			'.pictures',
			'.pink',
			'.pizza',
			'.place',
			'.plumbing',
			'.plus',
			'.poker',
			'.porn',
			'.press',
			'.pro',
			'.productions',
			'.properties',
			'.property',
			'.protection',
			'.pub',
			'.racing',
			'.realty',
			'.recipes',
			'.red',
			'.rehab',
			'.reise',
			'.reisen',
			'.rent',
			'.rentals',
			'.repair',
			'.report',
			'.republican',
			'.rest',
			'.restaurant',
			'.review',
			'.reviews',
			'.rip',
			'.rocks',
			'.rodeo',
			'.run',
			'.ryukyu',
			'.sale',
			'.sarl',
			'.school',
			'.schule',
			'.science',
			'.security',
			'.services',
			'.sex',
			'.sexy',
			'.shiksha',
			'.shoes',
			'.shop',
			'.shopping',
			'.show',
			'.singles',
			'.site',
			'.ski',
			'.soccer',
			'.social',
			'.software',
			'.solar',
			'.solutions',
			'.soy',
			'.space',
			'.storage',
			'.store',
			'.stream',
			'.studio',
			'.study',
			'.style',
			'.sucks',
			'.supplies',
			'.supply',
			'.support',
			'.surf',
			'.surgery',
			'.sydney',
			'.systems',
			'.tattoo',
			'.tax',
			'.taxi',
			'.team',
			'.tech',
			'.technology',
			'.tel',
			'.tennis',
			'.theater',
			'.theatre',
			'.tienda',
			'.tips',
			'.tires',
			'.today',
			'.tokyo',
			'.tools',
			'.top',
			'.tours',
			'.town',
			'.toys',
			'.trade',
			'.training',
			'.travel',
			'.tube',
			'.university',
			'.uno',
			'.vacations',
			'.vegas',
			'.ventures',
			'.vet',
			'.viajes',
			'.video',
			'.villas',
			'.vin',
			'.vip',
			'.vision',
			'.vodka',
			'.vote',
			'.voting',
			'.voto',
			'.voyage',
			'.wales',
			'.watch',
			'.webcam',
			'.website',
			'.wedding',
			'.wiki',
			'.win',
			'.wine',
			'.work',
			'.works',
			'.world',
			'.wtf',
			'.xn--3ds443g',
			'.xn--6frz82g',
			'.xxx',
			'.xyz',
			'.yoga',
			'.yokohama',
			'.zone',
		);

		$host = isset( $_SERVER['HTTP_HOST'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_HOST'] ) ) : '';

		// get the domain
		$domain = explode( '.', $host );
		if ( count( $domain ) >= 2 ) {
			$domain = '.' . $domain[ count( $domain ) - 1 ];
		} else {
			$domain = null;
		}

		return ! in_array( $domain, $valid_domains );
	}

	public static function post_type() {
		$post_type = array(
			'popupkit-campaigns',
		);
		$result    = apply_filters( 'popup_builder_block/allow_post_type', $post_type );
		return $result;
	}

	public static function is_preview() {
		return filter_input( INPUT_GET, 'preview', FILTER_VALIDATE_BOOLEAN );
	}

	public static function is_iframe() {
		return filter_input( INPUT_GET, 'iframe', FILTER_VALIDATE_BOOLEAN );
	}
}
