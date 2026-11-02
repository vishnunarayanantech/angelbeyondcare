<?php

/**
 * Preview script for html markup generator
 *
 * @package tutor-droip-elements
 */

namespace TutorLMSDroip\ElementGenerator;

use TUTOR\Course;
use TutorPro\Subscription\Models\PlanModel;
use TutorPro\Subscription\Subscription;

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Class ActionsGenerator
 * This class is used to define all helper functions.
 *
 * @package TutorLMSDroip\ElementGenerator
 */
trait PriceGenerator
{

	/**
	 * Generate actionbox markup
	 *
	 * @return string
	 */
	private function generate_price_markup()
	{
		$course_id = isset($this->options['post']) ? $this->options['post']->ID : get_the_ID();
		$type      = isset($this->properties['type']) ? $this->properties['type'] : 'free';
		if (! $course_id) {
			return '';
		}

		$selling_option = Course::get_selling_option($course_id);

		$is_membership_only_mode_enabled = apply_filters( 'tutor_membership_only_mode', false );

		if(!$selling_option){
			$selling_option = Course::SELLING_OPTION_ALL;
		}

		switch ($type) {
			case 'free': {
					if (! $this->isPaidCourse($course_id)  && !$is_membership_only_mode_enabled) {
						return $this->generate_common_element();
					}
					return "";
				}
			case 'paid': {
					if ($selling_option === Course::SELLING_OPTION_ALL || $selling_option === Course::SELLING_OPTION_ONE_TIME || $selling_option === Course::SELLING_OPTION_BOTH) {
						if ($this->isPaidCourse($course_id) && !$is_membership_only_mode_enabled) {
							return $this->generate_common_element();
						}
					}
					return '';
				}
			case 'subscription': {
					if ($selling_option === Course::SELLING_OPTION_ALL || $selling_option === Course::SELLING_OPTION_SUBSCRIPTION || $selling_option === Course::SELLING_OPTION_BOTH) {
						if (tutor()->has_pro && Subscription::is_enabled() && !$is_membership_only_mode_enabled) {
							$plan_model = new PlanModel();
							$active_subscription_plans = $plan_model->get_subscription_plans($course_id, PlanModel::STATUS_ACTIVE);
							if ($this->isPaidCourse($course_id) && count($active_subscription_plans) > 0) {
								return $this->generate_common_element('', '', 'data-type="subscription"');
							}
						}
					}
					return "";
				}
			default: {
					return '';
				}
		}
		return '';
	}
	private function generate_price_value_markup()
	{
		$course_id = isset($this->options['post']) ? $this->options['post']->ID : get_the_ID();
		$type      = isset($this->properties['type']) ? $this->properties['type'] : 'sale';
		if (! $course_id || ! $this->isPaidCourse($course_id)) {
			return '';
		}

		$sale_price   = self::get_course_meta('sale_price', $course_id, $this->options);
		$course_price = self::get_course_meta('course_price', $course_id, $this->options);

		switch ($type) {
			case 'sale': {
					if ($sale_price) {
						return $this->generate_common_element(false, $sale_price);
					} else {
						return $this->generate_common_element(false, $course_price);
					}
					break;
				}
			case 'regular': {
					if ($sale_price) {
						return $this->generate_common_element(false, $course_price);
					}
					break;
				}
			default: {
					return '';
				}
		}
		return '';
	}

	private function isPaidCourse($course_id)
	{
		$is_paid_course = tutor_utils()->is_course_purchasable($course_id);
		return $is_paid_course;
	}
}
