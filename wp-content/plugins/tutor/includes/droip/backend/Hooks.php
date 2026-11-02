<?php

/**
 * Preview script for html markup generator
 *
 * @package tutor-droip-elements
 */

namespace TutorLMSDroip;

use Tutor\Ecommerce\CheckoutController;
use TutorLMSDroip\ElementGenerator\CourseMetaGenerator;
use TutorLMSDroip\ElementGenerator\ThumbnailGenerator;
use Tutor\Ecommerce\CartController;
use TutorPro\Subscription\Models\PlanModel;
use TutorPro\Subscription\Subscription;

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Class Forntend
 */
class Hooks
{

    use CourseMetaGenerator;
    use ThumbnailGenerator;

    public function __construct()
    {
        add_filter('droip_post_types', [$this, 'droip_post_types'], 10, 1);
        add_filter('droip_collection_TUTOR_LMS_COURSES', [$this, 'droip_collection_TUTOR_LMS_COURSES'], 10, 2);
        add_filter('droip_collection_TUTOR_LMS_CURRICULUM', [$this, 'droip_collection_TUTOR_LMS_CURRICULUM'], 10, 2);
        add_filter('droip_collection_TUTOR_LMS_CART', [$this, 'droip_collection_TUTOR_LMS_CART'], 10, 2);
        add_filter('droip_collection_TUTOR_LMS_MEMBERSHIP', [$this, 'droip_collection_TUTOR_LMS_MEMBERSHIP'], 10, 2);
        add_filter('droip_dynamic_content', [$this, 'droip_dynamic_content'], 10, 2);
        add_filter('droip_comment-TUTOR_LMS-tutor_q_and_a', [$this, 'modify_qna_comment_data']);
        add_filter('droip_comment-TUTOR_LMS-tutor_course_rating', [$this, 'modify_rating_comment_data']);
        add_filter('droip_comment_added-TUTOR_LMS-tutor_q_and_a', [$this, 'qna_comment_added']);
        add_filter('droip_comment_added-TUTOR_LMS-tutor_course_rating', [$this, 'rating_comment_added']);
        add_filter('droip_visibility_condition_fields', [VisibilityCondition::class, 'visibility_condition_fields'], 10, 2);
        add_filter('droip_visibility_condition_check_' . TDE_APP_PREFIX, [VisibilityCondition::class, 'element_visibility_condition_check'], 10, 3);

        add_filter('droip_dynamic_content_fields', [$this, 'modify_droip_dynamic_content_fields'], 10, 2);
        add_filter('droip_external_collection_options', [$this, 'modify_external_collection_options'], 10, 2);
        add_filter('droip_external_collection_item_type', [$this, 'get_tutor_item_types'], 10, 2);
        add_filter('droip_element_generator_radio-button', [$this, 'droip_element_generator_radio_buttons'], 10, 2);

        add_filter('droip_import_should_create_page', [$this, 'droip_import_should_create_page'], 10, 2);
        add_action('droip_import_page_created', [$this, 'droip_import_page_created'], 10, 2);

        // $show = apply_filters('droip_show_custom_section_' . $type, true);
        add_filter('droip_show_custom_section_header', [$this, 'show_droip_header'], 10, 1);
        add_filter('droip_show_custom_section_footer', [$this, 'show_droip_footer'], 10, 1);
    }

    public function show_droip_header($show)
    {
        $is_frontend_builder = tutor_utils()->is_tutor_frontend_dashboard( 'create-course' );
        if ( $is_frontend_builder ) {
            $show = false;
        }
        if( $this->if_spotlight_mode_for_learning_page_enabled() ) {
            $show = false;
        }
        return $show;
    }

    public function show_droip_footer($show)
    {
        $is_frontend_builder = tutor_utils()->is_tutor_frontend_dashboard( 'create-course' );
        if ( $is_frontend_builder ) {
            $show = false;
        }
        if( $this->if_spotlight_mode_for_learning_page_enabled() ) {
            $show = false;
        }
        return $show;
    }

    private function if_spotlight_mode_for_learning_page_enabled(){
        global $wp_query;
        if($wp_query->is_single && ! empty( $wp_query->query_vars['post_type'] ) &&  in_array( $wp_query->query_vars['post_type'], ['lesson', 'tutor_quiz', 'tutor_assignments', 'tutor-google-meet', 'tutor_zoom_meeting'])  ) {
            $enable_spotlight_mode = tutor_utils()->get_option( 'enable_spotlight_mode' );
            if ( $enable_spotlight_mode ) {
                return true;
            }
        }

        return false;
    }

    public function droip_import_should_create_page($flag, $old_page_data)
    {
        if ($old_page_data['post_type'] === 'page') {
            $page_slug = $old_page_data['post_name'];
            if(in_array($page_slug, ['instructor-registration', 'student-registration'])){
                return false;
            }
            if($page_slug === 'cart' && get_post(CartController::get_page_id())){
                return false;
            }
            if($page_slug === 'checkout' && get_post(CheckoutController::get_page_id())){
                return false;
            }

            $dashboard_page_id = (int) tutor_utils()->dashboard_page_id();
            if($page_slug === 'dashboard' && get_post($dashboard_page_id)){
                return false;
            }

            $certificate_page_id = (int) tutor_utils()->get_option('tutor_certificate_page');
            if($page_slug === 'tutor-certificate' && get_post($certificate_page_id)){
                return false;
            }

            $membership_page_id = (int) tutor_utils()->get_option('membership_pricing_page_id');
            if($page_slug === 'membership-pricing' && get_post($membership_page_id)){
                return false;
            }
        }

        return $flag;
    }

    public function droip_import_page_created($new_page_id, $old_page_data)
    {
        // Clear Tutor LMS Cache after importing a page
        if ($old_page_data['post_type'] === 'page') {
            $page_slug = $old_page_data['post_name'];
            if($page_slug === 'cart'){
                tutor_utils()->update_option( CartController::PAGE_ID_OPTION_NAME, $new_page_id );
            }
            if($page_slug === 'checkout'){
                tutor_utils()->update_option( CheckoutController::PAGE_ID_OPTION_NAME, $new_page_id );
            }
            if($page_slug === 'dashboard'){
                tutor_utils()->update_option( 'tutor_dashboard_page_id', $new_page_id );
            }
            if($page_slug === 'tutor-certificate'){
                tutor_utils()->update_option( 'tutor_certificate_page', $new_page_id );
            }
            if($page_slug === 'membership-pricing'){
                tutor_utils()->update_option( 'membership_pricing_page_id', $new_page_id );
            }
        }
    }

    public function modify_droip_dynamic_content_fields($fields, $collection_data)
    {
        if (isset($collection_data['collectionType'], $collection_data['type']) && $collection_data['collectionType'] === 'posts' && $collection_data['type'] === 'courses') {
            if (isset($fields['typeValues'], $fields['typeValues']['content'])) {
                foreach ($fields['typeValues']['content'] as $key => $value) {
                    if ($value['value'] === 'post') {
                        $fields['typeValues']['content'][$key]['title'] = 'Course';
                    }
                }
            }
        } else if (isset($collection_data['collectionType'], $collection_data['type']) && $collection_data['collectionType'] === 'TUTOR_LMS_COURSES' && $collection_data['type'] === 'TUTOR_LMS-subscriptions') {
            if ($collection_data['elementContentType'] === 'content') {
                $fields['typeValues']['content'][] = ['title' => 'Subscription', 'value' => 'TUTOR_LMS-subscriptions'];
                $fields['typeValuesAttr']['content']['TUTOR_LMS-subscriptions'] = [
                    ['title' => 'Plan name', 'value' => 'TUTOR_LMS-subscriptions-plan-name'],
                    ['title' => 'Plan price', 'value' => 'TUTOR_LMS-subscriptions-plan-price'],
                    ['title' => 'Plan sale price', 'value' => 'TUTOR_LMS-subscriptions-plan-sale-price'],
                    ['title' => 'Plan Recurring Interval', 'value' => 'TUTOR_LMS-subscriptions-plan-recurring-interval'],
                    ['title' => 'Enrollment Fee', 'value' => 'TUTOR_LMS-subscriptions-enrollment-fee'],
                    ['title' => 'Plan Short Description', 'value' => 'TUTOR_LMS-subscriptions-plan-short-description'],
                ];
            }
        } else if (isset($collection_data['collectionType'], $collection_data['type']) && $collection_data['collectionType'] === 'TUTOR_LMS_MEMBERSHIP' && $collection_data['type'] === 'TUTOR_LMS-membership-plans') {
            if ($collection_data['elementContentType'] === 'content') {
                $fields['typeValues']['content'][] = ['title' => 'Membership Plan', 'value' => 'TUTOR_LMS-membership-plans'];
                $fields['typeValuesAttr']['content']['TUTOR_LMS-membership-plans'] = [
                    ['title' => 'Plan name', 'value' => 'TUTOR_LMS-membership-plans-plan-name'],
                    ['title' => 'Plan price', 'value' => 'TUTOR_LMS-membership-plans-plan-price'],
                    ['title' => 'Plan sale price', 'value' => 'TUTOR_LMS-membership-plans-plan-sale-price'],
                    ['title' => 'Plan Recurring Interval', 'value' => 'TUTOR_LMS-membership-plans-plan-recurring-interval'],
                    ['title' => 'Enrollment Fee', 'value' => 'TUTOR_LMS-membership-plans-enrollment-fee'],
                    ['title' => 'Plan Short Description', 'value' => 'TUTOR_LMS-membership-plans-plan-short-description'],
                    ['title' => 'Featured Text', 'value' => 'TUTOR_LMS-membership-plans-featured-text'],
                    ['title' => 'Trial Fee', 'value' => 'TUTOR_LMS-membership-plans-trial-fee'],
                    ['title' => 'Trial Interval', 'value' => 'TUTOR_LMS-membership-plans-trial-interval'],
                    ['title' => 'Trial Value', 'value' => 'TUTOR_LMS-membership-plans-trial-value'],

                ];
            }

            if (isset($collection_data['elementContentType']) && $collection_data['elementContentType'] === 'anchor') {
                $plan_model         = new PlanModel();
                $active_membership_plans     = $plan_model->get_membership_plans(PlanModel::STATUS_ACTIVE);

                if (count($active_membership_plans) > 0) {
                    $fields['typeValues']['anchor'][] = ['title' => 'Membership', 'value' => 'membership-anchor'];

                    // get all active membership plans names
                    $fields['typeValuesAttr']['anchor']['membership-anchor'] = [['title' => 'Link', 'value' => 'membership-link']];
                }
            }
        } else if (isset($collection_data['collectionType'], $collection_data['type']) && $collection_data['collectionType'] === 'TUTOR_LMS_MEMBERSHIP' && $collection_data['type'] === 'TUTOR_LMS-membership-features') {
            if ($collection_data['elementContentType'] === 'content') {
                $fields['typeValues']['content'][] = ['title' => 'Membership Features', 'value' => 'TUTOR_LMS-membership-features'];
                $fields['typeValuesAttr']['content']['TUTOR_LMS-membership-features'] = [
                    ['title' => 'Content', 'value' => 'TUTOR_LMS-membership-features-feature-content'],
                ];
            }
        } else if (isset($collection_data['collectionType']) && $collection_data['collectionType'] === 'user' || $collection_data['collectionType'] === 'users') {
            if ($collection_data['elementContentType'] === 'anchor') {
                $fields['typeValuesAttr']['anchor']['author'] = array_merge(
                    $fields['typeValuesAttr']['anchor']['author'],
                    [
                        ['title' => 'Facebook', 'value' => 'TUTOR_LMS-instructor-facebook'],
                        ['title' => 'X (Twitter)', 'value' => 'TUTOR_LMS-instructor-twitter'],
                        ['title' => 'Linkedin', 'value' => 'TUTOR_LMS-instructor-linkedin'],
                        ['title' => 'Website', 'value' => 'TUTOR_LMS-instructor-website'],
                        ['title' => 'Github', 'value' => 'TUTOR_LMS-instructor-github'],
                    ]
                );
            }
        }

        return $fields;
    }

    public function modify_external_collection_options($options, $args)
    {
        $type           = $args['type'];
        $collectionType = $args['collectionType'];

        $courses_group = [
            'title'               => 'Course',
            'value'               => 'TUTOR_LMS_COURSES',
            'inherit'             => true,
            'default_select_type' => "TUTOR_LMS-topics",
            'group'               => [
                ['title' => 'Curriculum', 'value' => "TUTOR_LMS-topics", 'itemType' => 'post'],
                ['title' => 'Reviews', 'value' => "TUTOR_LMS-tutor_course_rating", 'itemType' => 'comment'],
                ['title' => 'Q & A', 'value' => "TUTOR_LMS-tutor_q_and_a", 'itemType' => 'comment'],
                ['title' => 'Announcements', 'value' => "TUTOR_LMS-announcements", 'itemType' => 'announcement'],
                ['title' => 'Resources', 'value' => "TUTOR_LMS-resources", 'itemType' => 'resources'],
                ['title' => 'Gradebooks', 'value' => "TUTOR_LMS-gradebooks", 'itemType' => 'post'],
                ['title' => 'Instructors', 'value' => "TUTOR_LMS-instructors", 'itemType' => 'user'],
                ['title' => 'Subscriptions', 'value' => "TUTOR_LMS-subscriptions", 'itemType' => 'subscriptions'],
                // ['title' => 'Cart', 		 'value' => "TUTOR_LMS-cart", 'itemType' => 'post'] //temporary commented.
            ],
        ];

        $curriculum_group = [
            'title'               => 'Curriculum',
            'value'               => 'TUTOR_LMS_CURRICULUM',
            'inherit'             => true,
            'default_select_type' => "TUTOR_LMS-materials",
            'group'               => [
                ['title' => 'Materials', 'value' => "TUTOR_LMS-materials", 'itemType' => 'material'],
            ],
        ];

        $cart_group = [
            'title'               => 'Course',
            'value'               => 'TUTOR_LMS_COURSES',
            'inherit'             => true,
            'default_select_type' => "TUTOR_LMS-cart",
            'group'               => [
                ['title' => 'Cart', 'value' => "TUTOR_LMS-cart", 'itemType' => 'post'],
            ],
        ];

        $membership_group = [
            'title'               => 'Membership',
            'value'               => 'TUTOR_LMS_MEMBERSHIP',
            'inherit'             => true,
            'default_select_type' => "TUTOR_LMS-membership-plans",
            'group'               => [
                ['title' => 'Plans', 'value' => "TUTOR_LMS-membership-plans", 'itemType' => 'membership-plan'],
                ['title' => 'Features', 'value' => "TUTOR_LMS-membership-features", 'itemType' => 'membership-feature'],
            ],
        ];

        if ($collectionType === 'posts' && $type === 'courses') {
            $options[] = $courses_group;
        } else if ($collectionType === 'TUTOR_LMS_COURSES' && $type === 'TUTOR_LMS-topics') {
            $options[] = $curriculum_group;
        } else {
            // $options[] = $cart_group; //temporary commented.
        }

        $options[] = $membership_group;

        return $options;
    }

    public function get_tutor_item_types($oldItemType, $collectionName)
    {
        switch ($collectionName) {
            case 'TUTOR_LMS-tutor_course_rating':
                return 'comment';
            case 'TUTOR_LMS-materials':
                return 'material';
            case 'TUTOR_LMS-tutor_q_and_a':
                return 'comment';
            case 'TUTOR_LMS-announcements':
                return 'announcement';
            case 'TUTOR_LMS-resources':
                return 'resources';
            default:
                return $oldItemType;
        }
    }

    public function modify_rating_comment_data($value)
    {
        $moderation                = tutor_utils()->get_option('enable_course_review_moderation', false, true, true);
        $value['comment_agent']    = 'TutorLMSPlugin';
        $value['comment_type']     = 'tutor_course_rating';
        $value['comment_approved'] = $moderation ? 'hold' : 'approved';
        return $value;
    }

    public function modify_qna_comment_data($value)
    {
        $value['comment_agent']    = 'TutorLMSPlugin';
        $value['comment_type']     = 'tutor_q_and_a';
        $value['comment_approved'] = 'approved';
        return $value;
    }

    public function rating_comment_added($value)
    {
        $comment_ID = $value['comment_ID'];
        $form_data  = $value['form_data'];
        $rating     = isset($form_data['rating']) ? sanitize_text_field($form_data['rating']) : 0;
        if (! $comment_ID) {
            return;
        }

        global $wpdb;
        $rating_info = $wpdb->get_row(
            $wpdb->prepare(
                "SELECT * FROM {$wpdb->commentmeta}
            WHERE comment_id = %d
                AND meta_key = 'tutor_rating'; ",
                $comment_ID
            )
        );
        if ($rating_info) {
            $wpdb->update(
                $wpdb->commentmeta,
                ['meta_value' => $rating],
                [
                    'comment_id' => $comment_ID,
                    'meta_key'   => 'tutor_rating',
                ]
            );
        } else {
            $wpdb->insert(
                $wpdb->commentmeta,
                [
                    'comment_id' => $comment_ID,
                    'meta_key'   => 'tutor_rating',
                    'meta_value' => $rating,
                ]
            );
        }
        do_action('tutor_after_rating_placed', $comment_ID);
    }

    public function qna_comment_added($value)
    {
        $form_data      = $value['form_data'];
        $comment_parent = isset($form_data['comment_parent']) ? sanitize_text_field($form_data['comment_parent']) : 0;
        if (! $comment_parent) {
            return;
        }

        global $wpdb;
        $parent_q_author_id = $wpdb->get_var(
            $wpdb->prepare(
                "SELECT user_id
					FROM {$wpdb->comments}
					WHERE comment_ID = %d
				",
                $comment_parent
            )
        );

        $asker_id = $value['user_id'];
        $self     = $asker_id == $parent_q_author_id;
        update_comment_meta($parent_q_author_id, 'tutor_qna_read' . ($self ? '' : '_' . $asker_id), 0);
    }

    public function droip_post_types($post_types)
    {
        $post_types[] = [
            'title' => 'Course Topics',
            'value' => 'topics',
        ];
        return $post_types;
    }
    public function droip_collection_TUTOR_LMS_COURSES($value, $args)
    {
        $context = isset($args['context']) ? $args['context'] : false;
        if ($context && isset($context['collectionType'])) {
            $collectionType = $context['collectionType']; // post/tags/users
            if ($collectionType === 'post') {
                if ($args['name'] === 'TUTOR_LMS-topics') {
                    $args['post_parent'] = $context['id'];
                    $args['inherit']     = true;
                }
            }
        }
        if ($args['name'] === 'TUTOR_LMS-topics') {
            $args['name']          = 'topics';
            $args['item_per_page'] = -1;
            // $obj                   = HelperFunctions::get_posts($args);
            // $obj['itemType']       = 'post';
            // return $obj;
            return [
                'data'       => tutor_utils()->get_topics($args['post_parent'])->posts,
                'pagination' => null,
                'itemType'   => 'post',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-tutor_course_rating') {
            $reviews = tutor_utils()->get_course_reviews($args['post_parent'], 0, 100, false, ['approved'], get_current_user_id());
            $reviews = $this->add_author_image_to_data($reviews);
            return [
                'data'       => $reviews,
                'pagination' => [],
                'itemType'   => 'comment',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-materials') {
            $topic_contents    = tutor_utils()->get_course_contents_by_topic($args['post_parent'], -1);
            $obj['data']       = $topic_contents->posts;
            $obj['pagination'] = [];
            $obj['itemType']   = 'post';
            return $obj;
        } elseif ($args['name'] === 'TUTOR_LMS-tutor_q_and_a') {
            if ($args['post_parent'] == 0) {
                return [
                    'data'       => [],
                    'pagination' => [],
                    'itemType'   => 'comment',
                ];
            }

            if (isset($args['context']) && isset($args['context']['comment_ID'])) {
                $q_id            = $args['context']['comment_ID'];
                $answer          = tutor_utils()->get_qa_answer_by_question($q_id);
                $filteredAnswers = array_values(
                    array_filter(
                        $answer,
                        function ($obj) use ($q_id) {
                            return $obj->comment_ID !== $q_id;
                        }
                    )
                );
                $filteredAnswers = $this->add_author_image_to_data($filteredAnswers);
                $filteredAnswers = $this->add_qna_reply_flag($filteredAnswers);
                return [
                    'data'       => $filteredAnswers,
                    'pagination' => [],
                    'itemType'   => 'comment',
                ];
            }

            $questions = tutor_utils()->get_qa_questions(0, 100, '', null, null, null, null, false, ['course_id' => $args['post_parent']]);
            $questions = $this->add_author_image_to_data($questions);
            return [
                'data'       => $questions,
                'pagination' => [],
                'itemType'   => 'comment',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-announcements') {
            $announcements = tutor_utils()->get_announcements($args['post_parent']);
            return [
                'data'       => $announcements,
                'pagination' => [],
                'itemType'   => 'announcement',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-resources') {
            $resources = tutor_utils()->get_attachments($args['post_parent']);
            return [
                'data'       => $resources,
                'pagination' => [],
                'itemType'   => 'resources',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-instructors') {
            $instructors = tutor_utils()->get_instructors_by_course($args['post_parent']);
            $instructors = array_map(fn($user) => (array) array_merge((array) $user, [
                'user_url'      => get_author_posts_url($user->ID),
                'profile_image' => get_avatar_url($user->ID),
            ]), $instructors);

            return [
                'data'       => $instructors,
                'pagination' => [],
                'itemType'   => 'user',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-cart') {
            $cart       = new CartController();
            $cart_items = $cart->get_cart_items();
            $courses    = isset($cart_items['courses'], $cart_items['courses']['results']) ? $cart_items['courses']['results'] : [];
            return [
                'data'       => $courses,
                'pagination' => null,
                'itemType'   => 'post',
            ];
        } else if ($args['name'] === 'TUTOR_LMS-subscriptions') {
            if (tutor()->has_pro && Subscription::is_enabled()) {
                $plan_model = new PlanModel();
                $items = $plan_model->get_subscription_plans($args['post_parent'], PlanModel::STATUS_ACTIVE); // get all active subscription plans
                return [
                    'data'       => $items,
                    'pagination' => null,
                    'itemType'   => 'TUTOR_LMS-subscriptions',
                ];
            }
        } else {
            return [
                'data'       => [],
                'pagination' => [],
                'itemType'   => false,
            ];
        }

        return $value;
    }

    public function droip_collection_TUTOR_LMS_CURRICULUM($value, $args)
    {
        if ($args['name'] === 'TUTOR_LMS-materials' && isset($args['post_parent'])) {
            $topic_contents    = tutor_utils()->get_course_contents_by_topic($args['post_parent'], -1);
            $obj['data']       = $topic_contents->posts;
            $obj['pagination'] = [];
            $obj['itemType']   = 'post';
            return $obj;
        } else {
            return [
                'data'       => [],
                'pagination' => [],
                'itemType'   => false,
            ];
        }

        return $value;
    }

    public function droip_collection_TUTOR_LMS_MEMBERSHIP($value, $args)
    {
        if ($args['name'] === 'TUTOR_LMS-membership-plans') {
            $plan_model         = new PlanModel();
            $active_membership_plans     = $plan_model->get_membership_plans(PlanModel::STATUS_ACTIVE);

            return [
                'data'       => $active_membership_plans,
                'pagination' => null,
                'itemType'   => 'membership-plan',
            ];
        } elseif ($args['name'] === 'TUTOR_LMS-membership-features' && isset($args['post_parent'])) {
            $plan_id = $args['post_parent'];

            if (isset($args['parent_item_type']) && $args['parent_item_type'] === 'membership-plan') {
                if (isset($args['parent_item'], $args['parent_item']->id)) {
                    $plan_id = $args['parent_item']->id;
                }
            }

            $plan_model = new PlanModel();
            $active_membership_plans     = $plan_model->get_membership_plans(PlanModel::STATUS_ACTIVE);

            $plan_details = null;
            foreach ($active_membership_plans as $plan) {
                if ($plan->id === $plan_id) {
                    $plan_details = $plan;
                    break;
                }
            }

            if (! $plan_details) {
                return [
                    'data'       => [],
                    'pagination' => [],
                    'itemType'   => false,
                ];
            }

            $features = isset($plan_details->description) ? json_decode($plan_details->description, true) : [];


            return [
                'data'       => $features,
                'pagination' => null,
                'itemType'   => 'membership-feature',
            ];
        } else {
            return [
                'data'       => [],
                'pagination' => [],
                'itemType'   => false,
            ];
        }

        return $value;
    }

    public function droip_dynamic_content($value, $args)
    {
        if (isset($args['dynamicContent'])) {
            $dynamicContent = $args['dynamicContent'];

            if ($dynamicContent['type'] === 'course') {
                $collectionItem = $args['collectionItem'];
                if ($collectionItem && isset($collectionItem['ID'])) {
                    $course_id = $collectionItem['ID'];
                } elseif (isset($args['post_id'])) {
                    $course_id = $args['post_id'];
                }

                if ($dynamicContent['value'] === 'thumbnail_image') {
                    $tutor_course_img = get_tutor_course_thumbnail_src('post-thumbnail', $course_id);
                    if ($tutor_course_img) {
                        return $tutor_course_img;
                    }
                } elseif ($dynamicContent['value'] === 'thumbnail_video') {
                    $video_info = tutor_utils()->get_video_info($course_id);
                    $source_key = is_object($video_info) ? 'source_' . $video_info->source : null;
                    if ($source_key) {
                        return ['url' => $video_info->$source_key];
                    }
                }
            } else if ($dynamicContent['type'] === 'TUTOR_LMS-subscriptions') {
                $collectionItem = isset($args['collectionItem']) ? $args['collectionItem'] : false;
                $plan_id = false;
                if ($collectionItem && isset($collectionItem['id'])) {
                    $plan_id = $collectionItem['id'];
                } elseif (isset($args['options'], $args['options']['TUTOR_LMS-subscriptions'])) {
                    $plan_id = $args['options']['TUTOR_LMS-subscriptions']->id;
                }

                $plan_model = new PlanModel();
                $plan_details = $plan_model->get_plan($plan_id);
                if (!$plan_details) {
                    return "No Plan";
                }
                if ($dynamicContent['value'] === 'TUTOR_LMS-subscriptions-plan-name') {
                    if ($plan_details) {
                        return $plan_details->plan_name;
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-subscriptions-plan-price') {
                    if ($plan_details) {
                        return tutor_get_formatted_price($plan_details->regular_price);
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-subscriptions-plan-sale-price') {
                    if ($plan_details) {
                        return tutor_get_formatted_price($plan_details->sale_price);
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-subscriptions-plan-recurring-interval') {
                    if ($plan_details) {
                        return isset($plan_details->recurring_interval) ? $plan_details->recurring_interval : 'N/A';
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-subscriptions-enrollment-fee') {
                    if ($plan_details) {
                        return tutor_get_formatted_price($plan_details->enrollment_fee);
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-subscriptions-plan-short-description') {
                    if ($plan_details) {
                        return wp_kses_post($plan_details->short_description);
                    }
                }
            } else if ($dynamicContent['type'] === 'TUTOR_LMS-membership-plans') {
                $collectionItem = isset($args['collectionItem']) ? $args['collectionItem'] : false;
                $plan_id = false;

                if ($collectionItem && isset($collectionItem['id'])) {
                    $plan_id = $collectionItem['id'];
                } elseif (isset($args['options'], $args['options']['membership-plan'])) {
                    $plan_id = $args['options']['membership-plan']->id;
                }

                $plan_model = new PlanModel();
                $plan_details = $plan_model->get_plan($plan_id);

                if (!$plan_details) {
                    return "No Plan";
                }

                if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-plan-name') {
                    if ($plan_details) {
                        return $plan_details->plan_name;
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-plan-price') {
                    if ($plan_details) {
                        return tutor_get_formatted_price($plan_details->regular_price);
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-plan-sale-price') {
                    if ($plan_details) {
                        return tutor_get_formatted_price($plan_details->sale_price);
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-plan-recurring-interval') {
                    if ($plan_details) {
                        return isset($plan_details->recurring_interval) ? $plan_details->recurring_interval : 'N/A';
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-enrollment-fee') {
                    if ($plan_details) {
                        return tutor_get_formatted_price($plan_details->enrollment_fee);
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-plan-short-description') {
                    if ($plan_details) {
                        return wp_kses_post($plan_details->short_description);
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-featured-text') {
                    if ($plan_details) {
                        return sanitize_text_field($plan_details->featured_text);
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-trial-fee') {
                    if ($plan_details) {
                        return tutor_get_formatted_price($plan_details->trial_fee);
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-trial-interval') {
                    if ($plan_details) {
                        return isset($plan_details->trial_interval) ? $plan_details->trial_interval : 'N/A';
                    }
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-membership-plans-trial-value') {
                    if ($plan_details) {
                        return isset($plan_details->trial_value) ? intval($plan_details->trial_value) : 'N/A';
                    }
                }
            } else if ($dynamicContent['type'] === 'TUTOR_LMS-membership-features') {
                $collectionItem = isset($args['collectionItem']) ? $args['collectionItem'] : false;
                $feature_id = false;

                if ($collectionItem && isset($collectionItem['id'])) {
                    $feature_id = $collectionItem['id'];
                } elseif (isset($args['options'], $args['options']['membership-feature'])) {
                    $feature_id = $args['options']['membership-feature']['id'];
                }

                $plan_model = new PlanModel();
                $active_membership_plans    = $plan_model->get_membership_plans(PlanModel::STATUS_ACTIVE);

                foreach ($active_membership_plans as $plan) {
                    $features = json_decode($plan->description, true);
                    foreach ($features as $feature) {
                        if ($feature['id'] == $feature_id) {
                            if ($dynamicContent['value'] === 'TUTOR_LMS-membership-features-feature-content') {
                                return isset($feature['content']) ? wp_kses_post($feature['content']) : '';
                            }
                        }
                    }
                }

                return '';
            } else if ($dynamicContent['type'] === 'membership-anchor') {
                if ($dynamicContent['value'] === 'membership-link') {
                    $collectionItem = isset($args['collectionItem']) ? $args['collectionItem'] : false;

                    $plan_id = false;
                    $url = '#';

                    if (is_user_logged_in() && isset($args['options'], $args['options']['membership-plan'])) {
                        $plan_id = $args['options']['membership-plan']->id;
                        $checkout_link = CheckoutController::get_page_url();

                        if ($checkout_link) {
                            $url = add_query_arg('plan', $plan_id, $checkout_link);
                        }
                    } else if (!is_user_logged_in()) {
                        $url = wp_login_url(wp_get_referer());
                    }

                    return $url;
                }
            } else if ($dynamicContent['type'] === 'author') {
                $user_id = isset($args['options'], $args['options']['user']) ? $args['options']['user']['ID'] : false;

                if ($dynamicContent['value'] === 'TUTOR_LMS-instructor-facebook') {
                    return get_user_meta($user_id, '_tutor_profile_facebook', true);
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-instructor-twitter') {
                    return get_user_meta($user_id, '_tutor_profile_twitter', true);
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-instructor-linkedin') {
                    return get_user_meta($user_id, '_tutor_profile_linkedin', true);
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-instructor-website') {
                    return get_user_meta($user_id, '_tutor_profile_website', true);
                } else if ($dynamicContent['value'] === 'TUTOR_LMS-instructor-github') {
                    return get_user_meta($user_id, '_tutor_profile_github', true);
                }
            }
        } elseif (isset($args['settings'])) {
            $settings = $args['settings'];
            $options  = [];
            switch ($args['collectionProperties']['type']) {
                case 'TUTOR_LMS-tutor_course_rating':
                    $reviews            = tutor_utils()->get_course_reviews($args['collectionItem']['comment_ID'], 0, 100, false, ['approved'], get_current_user_id(), false);
                    $options['comment'] = count($reviews) > 0 ? $reviews[0] : [];
                    break;
                case 'TUTOR_LMS-materials':
                    $options['material'] = $args['collectionItem'];
                    break;
                case 'TUTOR_LMS-tutor_q_and_a':
                    $options['comment'] = tutor_utils()->get_qa_question($args['collectionItem']['comment_ID']);
                    break;
                case 'TUTOR_LMS-announcements':
                    $options['announcement'] = get_post($args['collectionItem']['ID']);
                    break;
                case 'TUTOR_LMS-resources':
                    $resource_id = $args['collectionItem']['id'] ?? null;
                    if ($resource_id) {
                        $resource = tutor_utils()->get_attachment_data($resource_id);
                        if ($resource) {
                            $options['resources'] = $resource;
                        }
                    }
                    break;
                case 'TUTOR_LMS-cart':
                    $cart            = new CartController();
                    $cart_items      = $cart->get_cart_items();
                    $course_id       = $args['collectionItem']['ID'];
                    $options['post'] = [];

                    if ($cart_items && isset($cart_items['courses']['results']) && is_array($cart_items['courses']['results'])) {
                        foreach ($cart_items['courses']['results'] as $course) {
                            if ($course->ID === $course_id) {
                                $options['post'] = $course;
                                break;
                            }
                        }
                    }
                default:
                    break;
            }

            $collectionItem = $args['collectionItem'];
            if ($collectionItem && isset($collectionItem['ID'])) {
                $course_id = $collectionItem['ID'];
            } elseif (isset($args['post_id'])) {
                $course_id = $args['post_id'];
            }

            $is_instructor = false;
            if (! $collectionItem && isset($args['templateEditContext']['collectionType'])) {
                $is_instructor = $args['templateEditContext']['collectionType'] === 'user';
            } else if (
                $collectionItem && $collectionItem['collectionType'] === 'users' ||
                $args['collectionProperties']['type'] === 'TUTOR_LMS-instructors'
            ) {
                $is_instructor = true;
            }

            if (isset($settings['course_meta_type'])) {
                $meta = $this->get_course_meta($settings['course_meta_type'], $course_id, $options, $settings, $is_instructor);
                return $this->wrap_if_meta_has_label($meta, $settings);
            }
            if (isset($settings['thumbnail_type'])) {
                return $this->get_course_thumbnail($settings['thumbnail_type'], $settings['thumbnail_type'], $course_id, $options);
            }
        }
        return $value;
    }

    public function add_author_image_to_data($list)
    {
        foreach ($list as $item) {
            $item->author_profile_picture = ['src' => get_avatar_url($item->user_id)];
        }
        return $list;
    }

    public function add_qna_reply_flag($list)
    {
        foreach ($list as $item) {
            $item->reply = true;
        }
        return $list;
    }

    public function droip_element_generator_radio_buttons($value, $options)
    {
        if (isset($options['options'], $options['options']['TUTOR_LMS-subscriptions'])) {

            $course_id = isset($options['options']['post']) ? $options['options']['post']->ID : get_the_ID();
            $attributes = isset($options['attributes']) ? $options['attributes'] : '';

            $tag = $options['element']['properties']['tag'] ?? 'div';

            $name = 'name="course_' . $course_id . '_subscription_plan"';

            $extra_attributes = 'data-subscription_id="' . $options['options']['TUTOR_LMS-subscriptions']->id . '"';


            // Set checked for first item
            $checked = '';
            if (isset($options['options']['item_index']) && $options['options']['item_index'] === 1) {
                $checked = 'checked="checked"';
            }

            return "<$tag $name $attributes $extra_attributes $checked />";
        }

        return $value;
    }
}
