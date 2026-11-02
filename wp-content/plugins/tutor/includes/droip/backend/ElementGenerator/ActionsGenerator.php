<?php

/**
 * Preview script for html markup generator
 *
 * @package tutor-droip-elements
 */

namespace TutorLMSDroip\ElementGenerator;

use TUTOR\Course;
use TUTOR_CERT\Certificate;
use TutorPro\Subscription\Subscription;
use TutorPro\Subscription\Models\PlanModel;
use TutorPro\Subscription\Models\SubscriptionModel;
use Tutor\Ecommerce\CheckoutController;
use TutorPro\GiftCourse\GiftCourse;
use TutorPro\Subscription\Settings;

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Class ActionsGenerator
 * This class is used to define all helper functions.
 *
 * @package TutorLMSDroip\ElementGenerator
 */
trait ActionsGenerator
{

	/**
	 * Generate actionbox markup
	 *
	 * @return string
	 */
	private function generate_action_markup()
	{
		$course_id              = isset($this->options['post']) ? $this->options['post']->ID : get_the_ID();
		$ele_name               = $this->element['name'];
		$entry_box_button_logic = tutor_entry_box_buttons($course_id);
		$type                   = isset($this->properties['type']) ? $this->properties['type'] : 'enroll_btn';
		$extra_attributes       = "data-course_id='$course_id' data-action_type='$type'";

		$selling_option = Course::get_selling_option($course_id);
		if (!$selling_option) {
			$selling_option = Course::SELLING_OPTION_ALL;
		}

		switch ($type) {
			case 'wishlist_btn': {
					if (! is_user_logged_in()) {
						return '';
					}
					$is_wish_listed = tutor_utils()->is_wishlisted($course_id, get_current_user_id());
					if ($is_wish_listed) {
						return '';
					}

					return $this->generate_child_element_with_parent_droip_data($extra_attributes);
				}
			case 'wishlisted_btn': {
					if (! is_user_logged_in()) {
						return '';
					}
					$is_wish_listed = tutor_utils()->is_wishlisted($course_id, get_current_user_id());
					if (! $is_wish_listed) {
						return '';
					}

					return $this->generate_child_element_with_parent_droip_data($extra_attributes);
				}
		}

		$entry_box_button_logic = $this->update_entry_box_button_logic($entry_box_button_logic, $this->options);

		if (! isset($entry_box_button_logic->{'show_' . $type}) || (isset($entry_box_button_logic->{'show_' . $type}) && $entry_box_button_logic->{'show_' . $type} !== true)) {
			return '';
		}
		switch ($type) {
			case 'enroll_btn': {
					if (! $entry_box_button_logic->show_enroll_btn) {
						return '';
					}

					if (tutor()->has_pro && Subscription::is_enabled()) {
						$subscription_model = new SubscriptionModel();
						$tutor_subscription_enrollment = false;

						// For hybrid mode.
						if (Course::PRICE_TYPE_PAID === tutor_utils()->price_type($course_id) && $subscription_model->has_course_access($course_id)) {
							$tutor_subscription_enrollment = true;
						}

						// For membership only mode.
						if (Settings::membership_only_mode_enabled() && $subscription_model->has_course_access($course_id)) {
							$tutor_subscription_enrollment = true;
						}

						if ($tutor_subscription_enrollment) {
							$extra_attributes .= " data-tutor_subscription_enrollment='true'";
						}
					}


					return $this->generate_child_element_with_parent_droip_data($extra_attributes);
				}

			case 'add_to_cart_btn': {
					$is_course_in_user_cart = tutor_is_item_in_cart($course_id);
					if ($is_course_in_user_cart) {
						return '';
					}

					if ($selling_option === Course::SELLING_OPTION_ALL || $selling_option === Course::SELLING_OPTION_ONE_TIME || $selling_option === Course::SELLING_OPTION_BOTH) {
						return $this->generate_child_element_with_parent_droip_data($extra_attributes);
					}
					return "";
				}

			case 'remove_from_cart_btn': {
					$is_course_in_user_cart = tutor_is_item_in_cart($course_id);
					if (!$is_course_in_user_cart) {
						return '';
					}
					return $this->generate_child_element_with_parent_droip_data($extra_attributes);
				}

			case 'view_cart_btn': {
					$is_course_in_user_cart = tutor_is_item_in_cart($course_id);
					if (! $is_course_in_user_cart) {
						return '';
					}
					$extra_attributes .= " data-cart_url='" . tutor_get_cart_url() . "'";
					return $this->generate_child_element_with_parent_droip_data($extra_attributes);
				}

			case 'start_learning_btn': {
				if (!$entry_box_button_logic->show_start_learning_btn) {
					return '';
				}
				$is_course_completed = tutor_utils()->is_completed_course($course_id, get_current_user_id());
				if ($is_course_completed) {
					return '';
				}
				$lession_url = tutor_utils()->get_course_first_lesson($course_id);

				$is_public_course = get_post_meta($course_id, '_tutor_is_public_course', true);
				$extra_attributes .= " data-lession_url=$lession_url data-course_is_public=$is_public_course";
				return $this->generate_child_element_with_parent_droip_data($extra_attributes);
			}

			case 'continue_learning_btn': {
					if (! $entry_box_button_logic->show_continue_learning_btn) {
						return '';
					}
					$is_course_completed = tutor_utils()->is_completed_course($course_id, get_current_user_id());
					if ($is_course_completed) {
						return '';
					}
					$extra_attributes .= " data-continue_learning_url='" . tutor_utils()->get_course_first_lesson() . "'";
					return $this->generate_child_element_with_parent_droip_data($extra_attributes);
				}

			case 'complete_course_btn': {
					if (! $entry_box_button_logic->show_complete_course_btn) {
						return '';
					}
					$is_course_completed = tutor_utils()->is_completed_course($course_id, get_current_user_id());
					if ($is_course_completed) {
						return '';
					}

					return $this->generate_child_element_with_parent_droip_data($extra_attributes);
				}

			case 'retake_course_btn': {
					if ($entry_box_button_logic->show_retake_course_btn || ($entry_box_button_logic->show_certificate_view_btn && function_exists('TUTOR_CERT'))) {
						$extra_attributes .= " data-continue_learning_url='" . tutor_utils()->get_course_first_lesson() . "'";
						return $this->generate_child_element_with_parent_droip_data($extra_attributes);
					}

					return "";
				}
			case 'certificate_view_btn': {
					if (! function_exists('TUTOR_CERT')) {
						return '';
					}
					if (! $entry_box_button_logic->show_certificate_view_btn) {
						return '';
					}
					$is_course_completed = tutor_utils()->is_completed_course($course_id, get_current_user_id());

					if (! $is_course_completed) {
						return '';
					}
					if (! $course_id) {
						return '';
					}

					if (tutils()->is_addon_enabled(TUTOR_CERT()->basename)) {
						$has_course_certificate_template = (new Certificate(true))->has_course_certificate_template($course_id);
						if (!$has_course_certificate_template) {
							return "";
						}

						$certificate_url = '';
						$certificate_url = (new Certificate(true))->get_certificate($course_id);

						$extra_attributes .= " data-certificate_url='" . $certificate_url . "'";
						return $this->generate_child_element_with_parent_droip_data($extra_attributes);
					}

					return '';
				}

			case 'subscribe_now_btn': {
					$checkout_link = CheckoutController::get_page_url();


					if (is_user_logged_in()) {
						$extra_attributes .= " data-checkout_url='" . $checkout_link . "'";
					} else {
						$login_url = wp_login_url(wp_get_referer());

						$extra_attributes .= " data-login_url='" . $login_url . "'";
					}

					return $this->generate_child_element_with_parent_droip_data($extra_attributes);
				}

			case 'membership_btn': {
					$pricing_page = Settings::get_pricing_page_url();
					if ($pricing_page) {
						$extra_attributes .= " data-pricing_url='" . $pricing_page . "'";
						// if (is_user_logged_in()) { // removed to always direct to pricing page
						// } else {
						// 	$login_url = wp_login_url(wp_get_referer());

						// 	$extra_attributes .= " data-login_url='" . $login_url . "'";
						// }

						return $this->generate_child_element_with_parent_droip_data($extra_attributes);
					}

					return "";
				}

			case 'gift_course_btn': {
					if (is_user_logged_in()) {
						$modal_id = 'tutor-gift-this-course-modal-' . wp_generate_uuid4();
						$extra_attributes .= " data-tutor-modal-target='$modal_id'";

						$btn = $this->generate_child_element_with_parent_droip_data($extra_attributes);
						// Capture template output
						ob_start();
						tutor_load_template(
							'single.course.gift-this-course-modal',
							array('course_id' => $course_id, 'modal_id' => $modal_id),
							true
						);

						$modal_html = ob_get_clean();

						// Return button + modal
						return $btn . $modal_html;
					} else {
						// direct to login page if not logged in
						$login_url = wp_login_url(wp_get_referer());
						$extra_attributes .= " data-login_url='" . $login_url . "'";
						$btn = $this->generate_child_element_with_parent_droip_data($extra_attributes);

						// Return button + modal
						return $btn;
					}

					return "";
				}

			default: {
					return '';
				}
		}

		return '';
	}

	private function update_entry_box_button_logic($entry_box_button_logic, $options)
	{
		$course_id = isset($options['post']) ? $options['post']->ID : get_the_ID();

		$is_paid_course = tutor_utils()->is_course_purchasable($course_id);

		if (isset($options['relation_type']) && $options['relation_type'] === 'TUTOR_LMS_CART') {
			if ($entry_box_button_logic->show_view_cart_btn) {
				$entry_box_button_logic->show_remove_from_cart_btn = true;
			}
		}
		if (isset($options['relation_type']) && $options['relation_type'] === 'TUTOR_LMS_CART') {
			$entry_box_button_logic->show_view_cart_btn = false;
		}

		// Remove this part. These logic come from tutor_entry_box_buttons function.
		// if ($is_paid_course) {

		// 	if (tutor()->has_pro && Subscription::is_enabled() && $course_id) {

		// 		$plan_model = new PlanModel();
		// 		// Checking is course has subscription plan then show buy now button.
		// 		$selling_option = Course::get_selling_option($course_id);
		// 		if (!$selling_option) {
		// 			$selling_option = Course::SELLING_OPTION_ALL;
		// 		}
		// 		if ($selling_option === Course::SELLING_OPTION_SUBSCRIPTION || $selling_option === Course::SELLING_OPTION_BOTH || $selling_option === Course::SELLING_OPTION_ALL) {

		// 			$items = $plan_model->get_subscription_plans($course_id, PlanModel::STATUS_ACTIVE);

		// 			if (count($items) > 0) {
		// 				$entry_box_button_logic->show_subscribe_now_btn = true;
		// 			}
		// 		}

		// 		// Checking is course has membership plan enabled
		// 		$selling_option = Course::get_selling_option($course_id);
		// 		if (!$selling_option) {
		// 			$selling_option = Course::SELLING_OPTION_ALL;
		// 		}
		// 		if ($selling_option === Course::SELLING_OPTION_MEMBERSHIP || $selling_option === Course::SELLING_OPTION_ALL) {
		// 			$active_membership_plans     = $plan_model->get_membership_plans(PlanModel::STATUS_ACTIVE);
		// 			if (count($active_membership_plans) > 0) {
		// 				$entry_box_button_logic->show_membership_btn = true;
		// 			}
		// 		}
		// 	}

		// 	// Checking is course can be gifted then show gift course button.
		// 	if (class_exists('\TutorPro\GiftCourse\InitGift') && class_exists('TutorPro\GiftCourse\GiftCourse')) {
		// 		$init_gift = new \TutorPro\GiftCourse\InitGift();
		// 		if (tutor()->has_pro && $init_gift->is_enabled() && $course_id) {
		// 			$can_gift_this_course = GiftCourse::can_gift_course($course_id);

		// 			if ($can_gift_this_course) {
		// 				$entry_box_button_logic->show_gift_course_btn = true;
		// 			}
		// 		}
		// 	}
		// }

		return $entry_box_button_logic;
	}

	private function generate_child_element_with_parent_droip_data($extra_attributes)
	{
		$children_html = $this->generate_child_elements();
		// echo "<pre>";var_dump($this->element['parentId'], $this->elements[$this->element['parentId'] ]);die;
		if (isset($this->elements[$this->element['parentId']])) {
			$encoded_data   = $this->get_all_data_and_styles_from_element_id($this->element['parentId']);
			$encoded_data   = json_encode($encoded_data);
			$children_html .= "<textarea style='display: none'>$encoded_data</textarea>";
		}
		return $this->generate_common_element(false, $children_html, $extra_attributes);
	}
}
