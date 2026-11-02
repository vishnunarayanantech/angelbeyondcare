<?php

namespace PopupBuilderBlock\Config;

defined( 'ABSPATH' ) || exit;

class BlockList {

	public static function get_block_list() {
		$list = apply_filters(
			'popup-builder-block/blocks/list',
			array(
				'popup-builder'      => array(
					'slug'     => 'popup-builder',
					'title'    => 'Popup Builder',
					'package'  => 'free',
					'category' => 'general',
					'status'   => 'active',
				),
				'button'             => array(
					'slug'     => 'button',
					'title'    => 'Button',
					'package'  => 'free',
					'category' => 'general',
					'status'   => 'active',
				),
				'form'               => array(
					'slug'     => 'form',
					'title'    => 'Form',
					'package'  => 'free',
					'category' => 'general',
					'status'   => 'active',
				),
				'advanced-paragraph' => array(
					'slug'     => 'advanced-paragraph',
					'title'    => 'Advanced Paragraph',
					'package'  => 'free',
					'category' => 'general',
					'status'   => 'active',
				),
				'advanced-image'     => array(
					'slug'     => 'advanced-image',
					'title'    => 'Advanced Image',
					'package'  => 'free',
					'category' => 'general',
					'status'   => 'active',
				),
				'icon'               => array(
					'slug'     => 'icon',
					'title'    => 'Icon',
					'package'  => 'free',
					'category' => 'general',
					'status'   => 'active',
				),
				'container'          => array(
					'slug'     => 'container',
					'title'    => 'Container',
					'package'  => 'free',
					'category' => 'general',
					'status'   => 'active',
				),
				'heading'            => array(
					'slug'     => 'heading',
					'title'    => 'Heading',
					'package'  => 'free',
					'category' => 'general',
					'status'   => 'active',
				),
			)
		);

		return $list;
	}
}
