<?php
namespace HTMegaOpt\Admin;

class Options_Field {

    /**
     * [$_instance]
     * @var null
     */
    private static $_instance = null;

    /**
     * [instance] Initializes a singleton instance
     * @return [Admin]
     */
    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function get_settings_tabs(){
        $tabs = array(
            'general' => [
                'id'    => 'htmega_pro_vs_free_tabs',
                'title' => esc_html__( 'General', 'htmega-addons' ),
                'icon'  => '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1_9612)"> <path d="M10 12.4937C8.6193 12.4937 7.5 13.6129 7.5 14.9937V19.9937H12.5V14.9937C12.5 13.6129 11.3807 12.4937 10 12.4937Z" fill="#7D8087"/> <path d="M14.1667 14.9951V19.9951H17.5C18.8807 19.9951 20 18.8758 20 17.4951V9.89429C20.0002 9.46136 19.8319 9.04535 19.5308 8.73429L12.4492 1.07844C11.1996 -0.273518 9.09074 -0.356525 7.73879 0.893006C7.67457 0.95236 7.61271 1.01422 7.55336 1.07844L0.48418 8.73179C0.173944 9.04415 -0.000116212 9.46655 5.82127e-08 9.90679V17.4951C5.82127e-08 18.8758 1.1193 19.9951 2.5 19.9951H5.83332V14.9951C5.84891 12.7228 7.68355 10.8671 9.89867 10.8137C12.1879 10.7585 14.1492 12.6457 14.1667 14.9951Z" fill="#7D8087"/> <path d="M10 12.4937C8.6193 12.4937 7.5 13.6129 7.5 14.9937V19.9937H12.5V14.9937C12.5 13.6129 11.3807 12.4937 10 12.4937Z" fill="#7D8087"/> </g> <defs> <clipPath id="clip0_1_9612"> <rect width="20" height="20" fill="white"/> </clipPath> </defs> </svg>',
                'content' => [
                    'header' => false,
                    'footer' => false,
                    'title' => __( 'Free VS Pro', 'htmega-addons' ),
                    'desc'  => __( 'Freely use these elements to create your site. You can enable which you are not using, and, all associated assets will be disable to improve your site loading speed.', 'htmega-addons' ),
                ],
            ],
            'elements' => [
                'id'    => 'htmega_element_tabs',
                'title' => esc_html__( 'Elements', 'htmega-addons' ),
                'icon'  => '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1_9620)"> <path d="M20 5.81V11.75H10.75V0H14.19C17.83 0 20 2.17 20 5.81ZM0 13.25V14.19C0 17.83 2.17 20 5.81 20H9.25V8.25H0V13.25ZM0 5.81V6.75H9.25V0H5.81C2.17 0 0 2.17 0 5.81ZM10.75 20H14.19C17.83 20 20 17.83 20 14.19V13.25H10.75V20Z" fill="#7D8087"/> </g> <defs> <clipPath id="clip0_1_9620"> <rect width="20" height="20" fill="white"/> </clipPath> </defs> </svg>',
                'content' => [
                    'column' => 3,
                    'title' => __( 'Widget List', 'htmega-addons' ),
                    'desc'  => __( 'Freely use these elements to create your site. You can enable which you are not using, and, all associated assets will be disable to improve your site loading speed.', 'htmega-addons' ),
                ],
            ],
            'gutenberg' => [
                'id'    => 'htmega_gutenberg_tabs',
                'title' => esc_html__( 'Gutenberg', 'htmega-addons' ),
                'icon'  => '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1_9625)"> <path d="M5.11042 3.186C5.11042 3.0641 5.24055 2.98634 5.3479 3.0441L9.65036 5.35904C9.73739 5.40587 9.79167 5.49671 9.79167 5.59554V10.8042C9.79167 10.9263 9.6612 11.0041 9.55384 10.946L5.25115 8.61749C5.16444 8.57056 5.11042 8.47989 5.11042 8.3813V3.186ZM0.506447 11.2989C0.39405 11.3594 0.393334 11.5204 0.505187 11.5819L1.24959 11.9914L4.76796 13.889C4.84774 13.9321 4.94385 13.9319 5.02353 13.8887L9.2753 11.5815C9.38792 11.5204 9.3876 11.3587 9.27475 11.298L5.01478 9.00767C4.93531 8.96495 4.8397 8.96498 4.76027 9.00777L0.506447 11.2989ZM5.1125 19.7106C5.1125 19.8327 5.2429 19.9104 5.35026 19.8524L9.63833 17.5341C9.72509 17.4872 9.77916 17.3965 9.77916 17.2979V12.0824C9.77916 11.9604 9.64876 11.8827 9.5414 11.9407L5.25334 14.2589C5.16657 14.3058 5.1125 14.3965 5.1125 14.4952V19.7106ZM14.7527 8.61742C14.8396 8.57055 14.8937 8.4798 14.8937 8.38109V3.18639C14.8937 3.0644 14.7634 2.98665 14.6561 3.04459L10.3639 5.36106C10.2771 5.40794 10.2229 5.49868 10.2229 5.59739V10.7921C10.2229 10.9141 10.3532 10.9918 10.4606 10.9339L14.7527 8.61742ZM19.495 11.5789C19.6074 11.5179 19.6074 11.3565 19.4949 11.2956L15.2486 8.99592C15.1689 8.95276 15.0728 8.95271 14.993 8.99579L10.7261 11.3012C10.614 11.3617 10.6132 11.5223 10.7248 11.5839L11.7456 12.1481L14.1178 13.4237L14.9853 13.886C15.0647 13.9284 15.1601 13.9281 15.2393 13.8853L16.6542 13.1205L19.495 11.5789ZM0 17.2895C0 17.3882 0.0541119 17.4789 0.140932 17.5258L4.43729 19.8463C4.54465 19.9043 4.675 19.8265 4.675 19.7045V14.4932C4.675 14.3945 4.62085 14.3038 4.53399 14.2569L0.237658 11.9383C0.130302 11.8804 0 11.9581 0 12.0801V17.2895ZM15.3292 19.7044C15.3292 19.8264 15.4596 19.9042 15.5669 19.8461L19.8592 17.5258C19.9459 17.4789 20 17.3882 20 17.2895V12.0803C20 11.9583 19.8696 11.8806 19.7622 11.9386L15.47 14.2589C15.3832 14.3058 15.3292 14.3965 15.3292 14.4952V19.7044ZM14.654 19.8463C14.7613 19.9042 14.8917 19.8265 14.8917 19.7045V14.4932C14.8917 14.3945 14.8375 14.3038 14.7507 14.2569L10.4585 11.9404C10.3511 11.8825 10.2208 11.9602 10.2208 12.0822V17.2916C10.2208 17.3902 10.2749 17.481 10.3618 17.5279L14.654 19.8463ZM5.61176 2.40285C5.50051 2.46314 5.49898 2.62226 5.60905 2.68468L6.19547 3.01724L9.925 5.01216L10.0062 5.05591L14.3883 2.68305C14.5008 2.62211 14.5008 2.46058 14.3882 2.39965L10.1279 0.0938866C10.0481 0.0506978 9.9519 0.050725 9.87213 0.0939587L5.61176 2.40285Z" fill="#7D8087"/> </g> <defs> <clipPath id="clip0_1_9625"> <rect width="20" height="20" fill="white"/> </clipPath> </defs> </svg>',
                'content' => [
                    'column' => 3,
                    'title' => __( 'Gutenberg Blocks List', 'htmega-addons' ),
                    'desc'  => __( 'Freely use these Gutenberg Blocks to create your site. You can disable which you are not using, and, all associated assets will be disable to improve your site loading speed.', 'htmega-addons' ),
                ],
            ],
            'thirdparty' => array(
                'id'    => 'htmega_thirdparty_element_tabs',
                'title' => esc_html__( 'Third Party', 'htmega-addons' ),
                'icon'  => '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1_9629)"> <path d="M4.21875 15.625C5.44845 15.625 6.44531 14.6194 6.44531 13.3789C6.44531 12.1384 5.44845 11.1328 4.21875 11.1328C2.98905 11.1328 1.99219 12.1384 1.99219 13.3789C1.99219 14.6194 2.98905 15.625 4.21875 15.625Z" fill="#7D8087"/> <path d="M15.7617 15.625C17.0022 15.625 18.0078 14.6194 18.0078 13.3789C18.0078 12.1384 17.0022 11.1328 15.7617 11.1328C14.5212 11.1328 13.5156 12.1384 13.5156 13.3789C13.5156 14.6194 14.5212 15.625 15.7617 15.625Z" fill="#7D8087"/> <path d="M9.98047 4.72656C11.221 4.72656 12.2266 3.72095 12.2266 2.48047C12.2266 1.23999 11.221 0.234375 9.98047 0.234375C8.73998 0.234375 7.73438 1.23999 7.73438 2.48047C7.73438 3.72095 8.73998 4.72656 9.98047 4.72656Z" fill="#7D8087"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.96388 14.6875C1.64503 14.8615 1.3498 15.0812 1.08833 15.3424C0.366472 16.0633 -0.0390625 17.0412 -0.0390625 18.0608V18.0615C-0.0390625 18.9811 0.707358 19.7266 1.62815 19.7266H6.77029C7.69108 19.7266 8.4375 18.9811 8.4375 18.0615C8.4375 18.0612 8.4375 18.061 8.4375 18.0608C8.4375 17.0412 8.03197 16.0633 7.3101 15.3424C7.04864 15.0812 6.75341 14.8615 6.43455 14.6875C5.98454 15.4531 5.15153 15.9676 4.19926 15.9676C3.24691 15.9676 2.4139 15.4531 1.96388 14.6875Z" fill="#7D8087"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5264 14.6875C13.2075 14.8616 12.9123 15.0812 12.6508 15.3424C11.929 16.0634 11.5234 17.0411 11.5234 18.0607V18.0614C11.5234 18.981 12.2699 19.7266 13.1906 19.7266H18.3328C19.2536 19.7266 20 18.981 20 18.0614C20 18.0612 20 18.061 20 18.0607C20 17.0411 19.5945 16.0634 18.8726 15.3424C18.6111 15.0812 18.3159 14.8616 17.9971 14.6875C17.547 15.4532 16.714 15.9676 15.7617 15.9676C14.8094 15.9676 13.9764 15.4532 13.5264 14.6875Z" fill="#7D8087"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74511 3.78906C7.42634 3.96304 7.13112 4.18279 6.86966 4.44393C6.1478 5.16488 5.74219 6.14275 5.74219 7.16235V7.16302C5.74227 8.08265 6.48869 8.82812 7.40946 8.82812H12.5516C13.4723 8.82812 14.2188 8.08265 14.2188 7.16302C14.2188 7.16277 14.2188 7.16251 14.2188 7.16235C14.2188 6.14275 13.8132 5.16488 13.0914 4.44393C12.8299 4.18279 12.5346 3.96304 12.2158 3.78906C11.7658 4.55469 10.9328 5.06912 9.98047 5.06912C9.02813 5.06912 8.19521 4.55469 7.74511 3.78906Z" fill="#7D8087"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2224 11.6289L11.0841 9.17969H8.87789L8.73955 11.6289L6.64062 14.4022C6.97941 14.5909 7.2934 14.8277 7.57201 15.1081C7.82069 15.3583 8.03476 15.6367 8.21125 15.9359L9.98097 13.9826L11.7522 15.9375C11.9295 15.6358 12.1449 15.3551 12.3953 15.1031C12.6722 14.8245 12.984 14.5889 13.3203 14.4008L11.2224 11.6289Z" fill="#7D8087"/> </g> <defs> <clipPath id="clip0_1_9629"> <rect width="20" height="20" fill="white"/> </clipPath> </defs> </svg>',
                'content' => [
                    'column' => 3,
                    'title' => __( 'Third Party Widget List', 'htmega-addons' ),
                    'desc'  => __( 'Freely use these elements to create your site. You can enable which you are not using, and, all associated assets will be disable to improve your site loading speed.', 'htmega-addons' ),
                ],
            ),
            'others' => array(
                'id'    => 'htmega_general_tabs',
                'title' => esc_html__( 'Integrations', 'htmega-addons' ),
                'icon'  => '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1_9639)"> <path d="M9.28571 15.0181H8.57143V15.735C8.57143 16.0109 8.41379 16.2614 8.16686 16.3811C7.91921 16.5001 7.62486 16.4666 7.41071 16.295L3.83929 13.4275C3.66979 13.2911 3.57143 13.0852 3.57143 12.8675C3.57143 12.6498 3.66979 12.4439 3.83929 12.3074L7.41071 9.43993C7.62557 9.26771 7.91786 9.23479 8.16686 9.35379C8.41379 9.47357 8.57143 9.72414 8.57143 10V10.7169H9.28571V8.56621C9.28571 8.17 9.60521 7.84936 10 7.84936H12.1429C12.5189 7.84936 12.8264 8.14057 12.8551 8.51021L14.571 7.13243L12.8551 5.75464C12.8265 6.12429 12.5189 6.4155 12.1429 6.4155H10C9.60521 6.4155 9.28571 6.09486 9.28571 5.69864V0C4.10507 0.370143 0 4.70786 0 10C0 15.2921 4.10507 19.6299 9.28571 20V15.0181Z" fill="#7D8087"/> <path d="M10.715 0V4.98186H11.4293V4.26493C11.4293 3.98907 11.5869 3.7385 11.8338 3.61879C12.0808 3.49907 12.3751 3.53264 12.59 3.70493L16.1614 6.57243C16.3309 6.70893 16.4293 6.91479 16.4293 7.1325C16.4293 7.35021 16.3309 7.55607 16.1614 7.69257L12.59 10.5601C12.3758 10.733 12.0828 10.7659 11.8338 10.6462C11.5869 10.5264 11.4293 10.2759 11.4293 10V9.28314H10.715V11.4338C10.715 11.83 10.3955 12.1506 10.0007 12.1506H7.85783C7.48183 12.1506 7.17426 11.8594 7.14562 11.4898L5.42969 12.8676L7.14562 14.2454C7.17419 13.8757 7.48183 13.5845 7.85783 13.5845H10.0007C10.3955 13.5845 10.715 13.9051 10.715 14.3014V20C15.8956 19.6299 20.0007 15.2921 20.0007 10C20.0007 4.70786 15.8956 0.370143 10.715 0Z" fill="#7D8087"/> </g> <defs> <clipPath id="clip0_1_9639"> <rect width="20" height="20" fill="white"/> </clipPath> </defs> </svg>',
                'content' => [
                    'enableall' => false,
                    'title' => __( 'Integrations', 'htmega-addons' ),
                    'desc'  => __( 'Set the fields value to use these features', 'htmega-addons' ),
                    'wrapper_class'  => 'htmega-integrarion-section',
                ],
            ),
            'advance' => array(
                'id'    => 'htmega_advance_element_tabs',
                'title' => esc_html__( 'Modules', 'htmega-addons' ),
                'icon'  => '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1_9645)"> <path d="M10.4067 0.106243C10.1565 -0.0354143 9.84705 -0.0354143 9.59691 0.106243L1.86746 4.48204C1.73243 4.55849 1.7321 4.7529 1.86687 4.8298L9.91876 9.42424C9.98029 9.45935 10.0558 9.45929 10.1173 9.42408L18.1378 4.83012C18.2723 4.75307 18.2718 4.5589 18.1369 4.48253L10.4067 0.106243ZM10.7048 10.4448C10.6426 10.4805 10.6042 10.5467 10.6042 10.6184V19.6569C10.6042 19.8102 10.7694 19.9065 10.9028 19.831L18.6403 15.4506C18.887 15.3109 19.0387 15.0547 19.0387 14.7776V6.01639C19.0387 5.86274 18.8726 5.76648 18.7393 5.84285L10.7048 10.4448ZM0.964844 14.7776C0.964844 15.0547 1.11654 15.3109 1.36323 15.4506L9.10077 19.831C9.23409 19.9065 9.3993 19.8102 9.3993 19.6569V10.6001C9.3993 10.5283 9.36079 10.462 9.29842 10.4264L1.26396 5.84195C1.13063 5.76587 0.964844 5.86215 0.964844 6.01566V14.7776Z" fill="#7D8087"/> </g> <defs> <clipPath id="clip0_1_9645"> <rect width="20" height="20" fill="white"/> </clipPath> </defs> </svg>',
                'content' => [
                    'column' => 3,
                    'title' => __( 'Module List', 'htmega-addons' ),
                    'desc'  => __( 'Freely use these elements to create your site. You can enable which you are not using, and, all associated assets will be disable to improve your site loading speed.', 'htmega-addons' ),
                ],
            ),
        );

        return apply_filters( 'htmega_admin_fields_sections', $tabs );

    }

    public function get_settings_subtabs(){

        $subtabs = array();

        return apply_filters( 'htmega_admin_fields_sub_sections', $subtabs );
    }

    public function get_registered_settings(){
        $settings = array(
            'htmega_pro_vs_free_tabs' => array(
                
                array(
                    'id'   => 'htmega_pro_vs_free_html',
                    'type' => 'html',
                    'html' => $this->general_page_html_tabs()
                ),
                
            ),

            'htmega_element_tabs' => array(

                array(
                    'id'  => 'accordion',
                    'name'  => __( 'Accordion', 'htmega-addons' ),
                    'type'  => 'element',
                    'default' => 'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-accordion-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/accordion-widget/',
                ),
            
                array(
                    'id'  => 'animatesectiontitle',
                    'name'  => __( 'Animate Heading', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-animated-headline-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/animated-heading-widget/',
                ),
            
                array(
                    'id'  => 'addbanner',
                    'name'  => __( 'Ads Banner', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-banner-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/banner-widget/',
                ),
            
                array(
                    'id'  => 'specialadsbanner',
                    'name'  => __( 'Special Day Offer', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-special-day-offer-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/special-day-offer-widget/',
                ),
            
                array(
                    'id'  => 'blockquote',
                    'name'  => __( 'Blockquote', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-blockquote-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/blockquote-widget/',
                ),
            
                array(
                    'id'  => 'brandlogo',
                    'name'  => __( 'Brands', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-brand-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/brand-widget/',
                ),
            
                array(
                    'id'  => 'businesshours',
                    'name'  => __( 'Business Hours', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-business-hours-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/business-hours-widget/',
                ),
            
                array(
                    'id'  => 'button',
                    'name'  => __( 'Button', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-button-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/button-widget/',
                ),
            
                array(
                    'id'  => 'calltoaction',
                    'name'  => __( 'Call To Action', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-call-to-action-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/call-to-action-widget/',
                ),
            
                array(
                    'id'  => 'carousel',
                    'name'  => __( 'Carousel', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-custom-carousel-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/custom-carousel-widget/',
                ),
            
                array(
                    'id'  => 'countdown',
                    'name'  => __( 'Countdown', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-countdown-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/countdown-widget/',
                ),
            
                array(
                    'id'  => 'counter',
                    'name'  => __( 'Counter', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-counter-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/counter-widget/',
                ),
            
                array(
                    'id'  => 'customevent',
                    'name'  => __( 'Custom Event', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => '',
                    'doc_link' => '',
                ),
            
                array(
                    'id'  => 'dualbutton',
                    'name'  => __( 'Double Button', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-double-button-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/double-button-widget/',
                ),
                array(
                    'id'  => 'dropcaps',
                    'name'  => __( 'Dropcaps', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-drop-cap-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/dropcaps-widget/',
                ),
                array(
                    'id'  => 'flipbox',
                    'name'  => __( 'Flip Box', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-flip-box-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/flipbox-widget/',
                ),
            
                array(
                    'id'  => 'galleryjustify',
                    'name'  => __( 'Gallery Justify', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-image-justify-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/gallery-justify-widget/',
                ),
            
                array(
                    'id'  => 'googlemap',
                    'name'  => __( 'Google Map', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-google-map-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/google-map-widget/',
                ),
            
                array(
                    'id'  => 'imagecomparison',
                    'name'  => __( 'Image Comparison', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-image-comparison-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/image-comparison-widget/',
                ),
            
                array(
                    'id'  => 'imagegrid',
                    'name'  => __( 'Image Grid', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-image-grid-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/images-grid-widget/',
                ),

                array(
                    'id'  => 'imagemagnifier',
                    'name'  => __( 'Image Magnifier', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/docs/general-widgets/image-magnifier-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/image-magnifier-widget/',
                ),
                
                array(
                    'id'  => 'imagemarker',
                    'name'  => __( 'Image Marker', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-image-marker-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/image-marker-widget/',
                ),
                
                array(
                    'id'  => 'imagemasonry',
                    'name'  => __( 'Image Masonry', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-image-masonry-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/image-masonry-widget/',
                ),
                
                array(
                    'id'  => 'inlinemenu',
                    'name'  => __( 'Inline Navigation', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-inline-menu-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/inline-menu-widget/',
                ),

                array(
                    'id'  => 'instagram',
                    'name'  => __( 'Instagram', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Social Media Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-instagram-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/social-widgets/instagram-widget/',
                ),
            
                array(
                    'id'  => 'lightbox',
                    'name'  => __( 'Light Box', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-lightbox-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/light-box-widget/',
                ),
            
                array(
                    'id'  => 'modal',
                    'name'  => __( 'Modal', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-modal-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/modal-widget/',
                ),

                array(
                    'id'  => 'newtsicker',
                    'name'  => __( 'News Ticker', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-news-ticker-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/post-widgets/news-ticker-widget/',
                ),
            
                array(
                    'id'  => 'notify',
                    'name'  => __( 'Notify', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-notification-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/notification-widget/',
                ),
            
                array(
                    'id'  => 'offcanvas',
                    'name'  => __( 'Offcanvas', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-off-canvas-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/off-canvas-widget/',
                ),
            
                array(
                    'id'  => 'panelslider',
                    'name'  => __( 'Panel Slider', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-panel-slider-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/panel-slider-widget/',
                ),
            
                array(
                    'id'  => 'popover',
                    'name'  => __( 'Popover', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-popover-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/popover-widget/',
                ),
            
                array(
                    'id'  => 'postcarousel',
                    'name'  => __( 'Post carousel', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-post-carousel-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/post-widgets/post-carousel-widget/',
                ),
            
                array(
                    'id'  => 'postgrid',
                    'name'  => __( 'Post Grid', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-post-grid-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/post-widgets/post-grid-widget/',
                ),
            
                array(
                    'id'  => 'postgridtab',
                    'name'  => __( 'Post Grid Tab', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-post-grid-tab-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/post-widgets/post-grid-tab-widget/',
                ),
            
                array(
                    'id'  => 'postslider',
                    'name'  => __( 'Post Slider', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-post-slider-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/post-widgets/post-slider-widget/',
                ),
            
                array(
                    'id'  => 'pricinglistview',
                    'name'  => __( 'Pricing List View', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-price-list-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/pricing-list-view-widget/',
                ),
            
                array(
                    'id'  => 'pricingtable',
                    'name'  => __( 'Pricing Table', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-pricing-table-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/pricing-table-widget/',
                ),
            
                array(
                    'id'  => 'progressbar',
                    'name'  => __( 'Progress Bar', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-progress-bar-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/progress-bar-widget/',
                ),
            
                array(
                    'id'  => 'scrollimage',
                    'name'  => __( 'Scroll Image', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-scroll-image-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/scroll-image-widget/',
                ),
            
                array(
                    'id'  => 'scrollnavigation',
                    'name'  => __( 'Scroll Navigation', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-scroll-navigation-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/scroll-navigation-widget/',
                ),
            
                array(
                    'id'  => 'search',
                    'name'  => __( 'Search', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-search-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/search-widget/',
                ),
            
                array(
                    'id'  => 'sectiontitle',
                    'name'  => __( 'Section Title', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-heading-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/section-title-widget/',
                ),
            
                array(
                    'id'  => 'service',
                    'name'  => __( 'Service', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-services-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/services-widget/',
                ),
            
                array(
                    'id'  => 'singlepost',
                    'name'  => __( 'Single Post', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-single-post-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/post-widgets/single-post-widget/',
                ),
            
                array(
                    'id'  => 'thumbgallery',
                    'name'  => __( 'Slider Thumbnail Gallery', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-thumbnails-gallery-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/slider-thumbnail-gallery-widget/',
                ),
            
                array(
                    'id'  => 'socialshere',
                    'name'  => __( 'Social Share', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Social Media Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-social-share-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/social-widgets/social-share-widget/',
                ),
            
                array(
                    'id'  => 'switcher',
                    'name'  => __( 'Switcher', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-switcher-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/switcher-widget/',
                ),
            
                array(
                    'id'  => 'tabs',
                    'name'  => __( 'Tabs', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-tab-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/tabs-widget/',
                ),
                array(
                    'id'  => 'datatable',
                    'name'  => __( 'Data Table', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-data-table-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/data-table-widget/',
                ),
            
                array(
                    'id'  => 'teammember',
                    'name'  => __( 'Team Member', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-team-member-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/team-member-widget/',
                ),
            
                array(
                    'id'  => 'testimonial',
                    'name'  => __( 'Testimonial', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-testimonial-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/testimonial-widget/',
                ),
            
                array(
                    'id'  => 'testimonialgrid',
                    'name'  => __( 'Testimonial Grid', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-testimonial-grid-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/testimonial-grid-widget/',
                ),
            
                array(
                    'id'  => 'toggle',
                    'name'  => __( 'Toggle', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-toggle-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/toggle-widget/',
                ),
            
                array(
                    'id'  => 'tooltip',
                    'name'  => __( 'Tooltip', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-tooltip-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/tooltip-widget/',
                ),
            
                array(
                    'id'  => 'twitterfeed',
                    'name'  => __( 'Twitter Feed', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Social Media Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-twitter-feed-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/social-widgets/twitter-feed-widget/',
                ),
            
                array(
                    'id'  => 'userloginform',
                    'name'  => __( 'User Login Form', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Form Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-user-login-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/user-login-form-widget/',
                ),
            
                array(
                    'id'  => 'userregisterform',
                    'name'  => __( 'User Register Form', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Form Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-user-register-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/user-register-form-widget/',
                ),
            
                array(
                    'id'  => 'verticletimeline',
                    'name'  => __( 'Verticle Timeline', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-vertical-timeline-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/vertical-timeline-widget/',
                ),
            
                array(
                    'id'  => 'videoplayer',
                    'name'  => __( 'Video Player', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-video-player-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/video-player-widget/',
                ),
            
                array(
                    'id'  => 'workingprocess',
                    'name'  => __( 'Working Process', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-working-process-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/working-process-widget/',
                ),
    
                array(
                    'id'  => 'htmega_sticky_sectionp',
                    'name'  => __( 'Sticky Section', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=>'off',
                    'is_pro' => true,
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => '',
                    'doc_link' => '',

                ),
    
                array(
                    'id'  => 'htmega_image_rotedp',
                    'name'  => __( 'Image Rotate', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=>'off',
                    'is_pro' => true,
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => '',
                    'doc_link' => '',
                ),
                array(
                    'id'  => 'errorcontent',
                    'name'  => __( '404 Content', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => '',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/404-widget/',
                ),
            
                array(
                    'id'  => 'template_selector',
                    'name'  => __( 'Remote Template', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => '',
                    'doc_link' => '',
                ),
            
                array(
                    'id'  => 'weather',
                    'name'  => __( 'Weather', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'on',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-weather-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/weather-widget/',
                ),
            
                array(
                    'id'  => 'audio_player',
                    'name'  => __( 'Audio Player', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=> 'off',
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-audio-player-widget/',
                    'doc_link' => '',
                ),
            
                array(
                    'id'  => 'calendly',
                    'name'  => __( 'Calendly', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=> 'on',
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-calendly-widget/',
                    'doc_link' => '',
                ),

                // pro addon list
                array(
                    'id'  => 'info_boxp',
                    'name'  => __( 'Info Box', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-info-box-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/info-box-widget/',
                ),
            
                array(
                    'id'  => 'lottiep',
                    'name'  => __( 'Lottie', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-lottie-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/lottie-widget/',
                ),
                array(
                    'id'  => 'event_calendarp',
                    'name'  => __( 'Event Calendar', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/docs/general-widgets/lottie-widget/',
                    'doc_link' => 'https://wphtmega.com/widget/elementor-event-calendar-widget/',
                ),
                array(
                    'id'  => 'category_listp',
                    'name'  => __( 'Category List', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-category-list-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/category-list-widget/',
                ),
                array(
                    'id'  => 'pricing_menup',
                    'name'  => __( 'Pricing Menu', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-price-menu-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/price-menu-widget/',
                ),
                array(
                    'id'  => 'feature_listp',
                    'name'  => __( 'Feature List', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-feature-list-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/feature-list-widget/',

                ),
                array(
                    'id'  => 'social_network_iconsp',
                    'name'  => __( 'Social Network Icons', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Social Media Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-social-network-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/social-network-widget/',
                ),
                array(
                    'id'  => 'taxonomy_termsp',
                    'name'  => __( 'Taxonomy Terms', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-taxonomy-terms-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/taxonomy-terms-widget/',
                ),
                array(
                    'id'  => 'background_switcherp',
                    'name'  => __( 'Background Switcher', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-background-switcher-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/background-switcher-widget/',
                ),
                array(
                    'id'  => 'breadcrumbsp',
                    'name'  => __( 'Breadcrumbs', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-breadcrumbs-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/breadcrumbs-widget/',
                ),
                array(
                    'id'  => 'page_listp',
                    'name'  => __( 'Page List', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-page-list-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/page-list-widget/',
                ),
                array(
                    'id'  => 'icon_boxp',
                    'name'  => __( 'Icon Box', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-icon-box-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/icon-box-widget/',
                ),
                array(
                    'id'  => 'team_carouselp',
                    'name'  => __( 'Team Carousel', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-team-carousel-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/team-carousel-widget/',
                ),
                array(
                    'id'  => 'interactive_promop',
                    'name'  => __( 'Interactive Promo', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-interactive-promo-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/interactive-promo-widget/',
                ),
                array(
                    'id'  => 'facebook_reviewp',
                    'name'  => __( 'Facebook Review', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Social Media Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-facebook-review-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/facebook-review-widget/',
                ),
                array(
                    'id'  => 'whatsapp_chatp',
                    'name'  => __( 'WhatsApp Chat', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Social Media Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-whatsapp-chat-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/whatsapp-chat-widget/',
                ),
                array(
                    'id'  => 'filterable_galleryp',
                    'name'  => __( 'Filterable Gallery', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-filterable-gallery-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/filterable-gallery-widget/',
                ),
                array(
                    'id'  => 'event_boxp',
                    'name'  => __( 'Event Box', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-event-box-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/event-box-widget/',
                ),
                array(
                    'id'  => 'chartp',
                    'name'  => __( 'Chart', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/docs/general-widgets/event-box-widget/',
                    'doc_link' => 'https://wphtmega.com/widget/elementor-chart-widget/',
                ),
                array(
                    'id'  => 'post_timelinep',
                    'name'  => __( 'Post Timeline', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-post-timeline-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/post-widgets/post-timeline-widget/',
                ),
                array(
                    'id'  => 'post_masonryp',
                    'name'  => __( 'Post Masonry', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-post-masonry-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/post-widgets/post-masonry-widget/',
                ),

                array(
                    'id'  => 'source_codep',
                    'name'  => __( 'Source Code', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-source-code-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/source-code-widget/',
                ),
                array(
                    'id'  => 'threesixty_rotationp',
                    'name'  => __( '360 Rotation', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-360-rotation-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/360-rotation-widget/',
                ),
                array(
                    'id'  => 'pricing_table_flip_boxp',
                    'name'  => __( 'Pricing Table Flip Box', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=>'off',
                    'is_pro' => true,
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-pricing-table-flip-box-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/pricing-table-flip-box-widget/',
                ),
                array(
                    'id'  => 'flip_switcher_pricing_tablep',
                    'name'  => __( 'Flip Switcher Pricing Table', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=>'off',
                    'is_pro' => true,
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/elementor-pricing-table-flip-box-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/flip-switcher-pricing-table/',
                ),
                array(
                    'id'  => 'dynamic_galleryp',
                    'name'  => __( 'Dynamic Gallery', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=>'off',
                    'is_pro' => true,
                    'category' => __( 'Post Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-dynamic-gallery-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/post-widgets/dynamic-gallery-widget/',
                ),
                array(
                    'id'  => 'advanced_sliderp',
                    'name'  => __( 'Advanced Slider', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=>'off',
                    'is_pro' => true,
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-advanced-slider-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/advanced-slider-widget/',
                ),
                array(
                    'id'  => 'flip_carouselp',
                    'name'  => __( 'Flip Carousel', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=>'off',
                    'is_pro' => true,
                    'category' => __( 'General Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-flip-carousel-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/elementor-flip-carousel-widget/',
                ),
                array(
                    'id'  => 'interactive_circle_infographicp',
                    'name'  => __( 'Interactive Circle Infographic', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=>'off',
                    'is_pro' => true,
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-interactive-circle-infographic-widget/',
                    'doc_link' => '',

                ),
                array(
                    'id'  => 'copy_coupon_codep',
                    'name'  => __( 'Copy Coupon Code', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=>'off',
                    'is_pro' => true,
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-copy-coupon-code-widget/',
                    'doc_link' => '',
                ),
                array(
                    'id'  => 'video_galleryp',
                    'name'  => __( 'Video Gallery', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=> 'off',
                    'is_pro' => true,
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-video-gallery-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/elementor-video-gallery-widget/',
                ),
                array(
                    'id'  => 'video_playlistp',
                    'name'  => __( 'Video Palylist', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=> 'off',
                    'is_pro' => true,
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-video-playlist-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/elementor-video-playlist-widget/',

                ),
                array(
                    'id'  => 'blob_shapep',
                    'name'  => __( 'Blob Shape', 'htmega-addons' ),
                    'type'  => 'element',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'default'=> 'off',
                    'is_pro' => true,
                    'category' => __( 'Creative Widgets', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-blob-shape-widget/',
                    'doc_link' => 'https://wphtmega.com/docs/creative-widgets/elementor-blob-shape-widget/',
                ),
            ),

            'htmega_gutenberg_tabs' => [
                'blocks' => [
                    [
                        'id'  => 'accordion',
                        'name'  => __( 'Accordion', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                    [
                        'id'  => 'brand',
                        'name'  => __( 'Brand', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                    [
                        'id'  => 'buttons',
                        'name'  => __( 'Buttons', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                    [
                        'id'  => 'cta',
                        'name'  => __( 'Call To Action', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                    [
                        'id'  => 'image-grid',
                        'name'  => __( 'Image Grid', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                    [
                        'id'  => 'info-box',
                        'name'  => __( 'Info Box', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                    [
                        'id'  => 'section-title',
                        'name'  => __( 'Section Title', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                    [
                        'id'  => 'tab',
                        'name'  => __( 'Tabs', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                    [
                        'id'  => 'team',
                        'name'  => __( 'Team', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                    [
                        'id'  => 'testimonial',
                        'name'  => __( 'Testimonial', 'htmega-addons' ),
                        'type'  => 'element',
                        'label_on' => __( 'On', 'htmega-addons' ),
                        'label_off' => __( 'Off', 'htmega-addons' ),
                        'default'=>'off',
                        'is_pro' => false,
                    ],
                ]
            ],

            'htmega_general_tabs' => array(
                array(
                    'id'  => 'google_map_api_key',
                    'name' => __( 'Google Map API Key', 'htmega-addons' ),
                    'desc'  => __( 'Go to <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">https://developers.google.com</a> and generate the API key.', 'htmega-addons' ),
                    'placeholder' => __( 'Google Map API key', 'htmega-addons' ),
                    'type' => 'text',
                ),

                array(
                    'id'  => 'weather_map_api_key',
                    'name' => __( 'Weather Map API Key', 'htmega-addons' ),
                    'desc'  => __( 'Please enter a OpenWeatherMaps API key. OpenWeather is a weather provider service which is capable of delivering all the necessary weather information for any location on the globe.To create API key, go to this link <a href="https://openweathermap.org/appid" target="_blank">OpenWeather</a>.', 'htmega-addons' ),
                    'placeholder' => __( 'Weather Map API key', 'htmega-addons' ),
                    'type' => 'text',
                ),

                array(
                    'id'    => 'errorpage',
                    'name'   => __( 'Select 404 Page.', 'htmega-addons' ),
                    'desc'    => __( 'You can select 404 page from here.', 'htmega-addons' ),
                    'type'    => 'select',
                    'default' => '0',
                    'options' => htmega_post_name( 'page', -1 )
                ),

                array(
                    'id'  => 'loadpostlimit',
                    'name' => __( 'Load Post in Elementor Addons', 'htmega-addons' ),
                    'desc'  => wp_kses_post( 'Load Post in Elementor Addons' ),
                    'min'               => 1,
                    'max'               => 1000,
                    'step'              => '1',
                    'type'              => 'number',
                    'default'           => '20',
                    'sanitize_callback' => 'floatval',
                ),

            ),

            'htmega_advance_element_tabs' => array(
                array(
                    'id'  => 'themebuilder',
                    'name'  => __( 'Theme Builder', 'htmega-addons' ),
                    'type'  => 'module',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'option_active_key' => 'themebuilder_enable',
                    'video_link' => 'https://wphtmega.com/modules/theme-builder/',
                    'doc_link' => '',
                    'section'  => 'htmega_themebuilder_module_settings',
                    'setting_fields' => array(
                        array(
                            'id'  => 'themebuilder_enable',
                            'name' => esc_html__( 'Enable / Disable' ),
                            'desc'  => esc_html__( 'You can enable / disable Theme Builder from  here.', 'htmega-addons' ),
                            'type'  => 'checkbox',
                            'default' => 'off',
                            'class' => 'htmega-action-field-left',
                            'label_on' => esc_html__( 'On', 'htmega-addons' ),
                            'label_off' => esc_html__( 'Off', 'htmega-addons' ),
                        ),
                        array(
                            'id'    => 'single_blog_page',
                            'name'   => __( 'Single Blog Template.', 'htmega-addons' ),
                            'desc' => __( 'You can select a single blog page from here. Or create a ', 'htmega-addons' ) . ' <a href="' . esc_url( admin_url( 'edit.php?post_type=htmega_theme_builder' ) ) . '">' . esc_html__( 'new one', 'htmega-addons' ) . '</a>',
                            'type'    => 'select',
                            'default' => '0',
                            'options' => [
                                'group'=>[
                                    'htmega' => [
                                        'label' => __( 'HT Mega', 'htmega-addons' ),
                                        'options' => htmega_theme_builder_templates(['single_blog_page']),
                                    ],
                                    'elementor' => [
                                        'label' => __( 'Elementor', 'htmega-addons' ),
                                        'options' => htmega_elementor_template()
                                    ]
                                ]
                            ],
                            'condition' => [ ['condition_key' => 'themebuilder_enable', 'condition_value' => 'on'] ]
                        ),
                        array(
                            'id'    => 'archive_blog_page',
                            'name'   => __( 'Blog Template.', 'htmega-addons' ),
                            'desc'    => __( 'You can select blog page from here. Or create a ', 'htmega-addons' ) . ' <a href="' . esc_url( admin_url( 'edit.php?post_type=htmega_theme_builder' ) ) . '">' . esc_html__( 'new one', 'htmega-addons' ) . '</a>',
                            'type'    => 'select',
                            'default' => '0',
                            'options' => [
                                'group'=>[
                                    'htmega' => [
                                        'label' => __( 'HT Mega', 'htmega-addons' ),
                                        'options' => htmega_theme_builder_templates(['archive_blog_page']),
                                    ],
                                    'elementor' => [
                                        'label' => __( 'Elementor', 'htmega-addons' ),
                                        'options' => htmega_elementor_template()
                                    ]
                                ]
                            ],
                            'condition' => [ ['condition_key' => 'themebuilder_enable', 'condition_value' => 'on'] ]
                        ),
                        array(
                            'id'    => 'header_page',
                            'name'   => __( 'Header Template.', 'htmega-addons' ),
                            'desc'    => __( 'You can select header template from here. Or create a ', 'htmega-addons' ) . ' <a href="' . esc_url( admin_url( 'edit.php?post_type=htmega_theme_builder' ) ) . '">' . esc_html__( 'new one', 'htmega-addons' ) . '</a>',
                            'type'    => 'select',
                            'default' => '0',
                            'options' => [
                                'group'=>[
                                    'htmega' => [
                                        'label' => __( 'HT Mega', 'htmega-addons' ),
                                        'options' => htmega_theme_builder_templates(['header_page']),
                                    ],
                                    'elementor' => [
                                        'label' => __( 'Elementor', 'htmega-addons' ),
                                        'options' => htmega_elementor_template()
                                    ]
                                ]
                            ],
                            'condition' => [ ['condition_key' => 'themebuilder_enable', 'condition_value' => 'on'] ]
                        ),
                        array(
                            'id'    => 'footer_page',
                            'name'   => __( 'Footer Template.', 'htmega-addons' ),
                            'desc'    => __( 'You can select footer template from here. Or create a ', 'htmega-addons' ) . ' <a href="' . esc_url( admin_url( 'edit.php?post_type=htmega_theme_builder' ) ) . '">' . esc_html__( 'new one', 'htmega-addons' ) . '</a>',
                            'type'    => 'select',
                            'default' => '0',
                            'options' => [
                                'group'=>[
                                    'htmega' => [
                                        'label' => __( 'HT Mega', 'htmega-addons' ),
                                        'options' => htmega_theme_builder_templates(['footer_page']),
                                    ],
                                    'elementor' => [
                                        'label' => __( 'Elementor', 'htmega-addons' ),
                                        'options' => htmega_elementor_template()
                                    ]
                                ]
                            ],
                            'condition' => [ ['condition_key' => 'themebuilder_enable', 'condition_value' => 'on'] ]
                        ),
                        array(
                            'id'    => 'search_pagep',
                            'name'   => __( 'Search Page Template.', 'htmega-addons' ),
                            'desc'    => __( 'You can select search page from here.', 'htmega-addons' ),
                            'type'    => 'select',
                            'default' => '0',
                            'options' => [
                                'group'=>[
                                    'htmega' => [
                                        'label' => __( 'HT Mega', 'htmega-addons' ),
                                        'options' => htmega_theme_builder_templates(['search_page']),
                                    ],
                                    'elementor' => [
                                        'label' => __( 'Elementor', 'htmega-addons' ),
                                        'options' => htmega_elementor_template()
                                    ]
                                ]
                            ],
                            'is_pro' => true,
                            'condition' => [ ['condition_key' => 'themebuilder_enable', 'condition_value' => 'on'] ]
                        ),
                        array(
                            'id'    => 'error_pagep',
                            'name'   => __( '404 Page Template.', 'htmega-addons' ),
                            'desc'    => __( 'You can select 404 page from here.', 'htmega-addons' ),
                            'type'    => 'select',
                            'default' => '0',
                            'options' => [
                                'group'=>[
                                    'htmega' => [
                                        'label' => __( 'HT Mega', 'htmega-addons' ),
                                        'options' => htmega_theme_builder_templates(['error_page']),
                                    ],
                                    'elementor' => [
                                        'label' => __( 'Elementor', 'htmega-addons' ),
                                        'options' => htmega_elementor_template()
                                    ]
                                ]
                            ],
                            'is_pro' => true,
                            'condition' => [ ['condition_key' => 'themebuilder_enable', 'condition_value' => 'on'] ]
                        ),
                        array(
                            'id'    => 'coming_soon_pagep',
                            'name'   => __( 'Coming Soon Page Template.', 'htmega-addons' ),
                            'desc'    => __( 'You can select coming soon page from here.', 'htmega-addons' ),
                            'type'    => 'select',
                            'default' => '0',
                            'options' => [
                                'group'=>[
                                    'htmega' => [
                                        'label' => __( 'HT Mega', 'htmega-addons' ),
                                        'options' => htmega_theme_builder_templates(['coming_soon_page']),
                                    ],
                                    'elementor' => [
                                        'label' => __( 'Elementor', 'htmega-addons' ),
                                        'options' => htmega_elementor_template()
                                    ]
                                ]
                            ],
                            'is_pro' => true,
                            'condition' => [ ['condition_key' => 'themebuilder_enable', 'condition_value' => 'on'] ]
                        ),
                    ),
                ),
                array(
                    'id'  => 'salenotification',
                    'name'  => __( 'Sales Notification', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                ),

                array(
                    'id'  => 'megamenubuilder',
                    'name'  => __( 'Menu Builder', 'htmega-addons' ),
                    'type'  => 'module',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'option_active_key' => 'megamenubuilder_enable',
                    'video_link' => 'https://wphtmega.com/modules/megamenu/',
                    'doc_link' => '',
                    'section'  => 'htmega_megamenu_module_settings',
                    'setting_fields' => array(
                        array(
                            'id'  => 'megamenubuilder_enable',
                            'name' => esc_html__( 'Enable / Disable' ),
                            'desc'  => esc_html__( 'You can enable / disable Menu Builder from  here.', 'htmega-addons' ),
                            'type'  => 'checkbox',
                            'default' => 'off',
                            'class' => 'htmega-action-field-left',
                            'label_on' => esc_html__( 'On', 'htmega-addons' ),
                            'label_off' => esc_html__( 'Off', 'htmega-addons' ),
                        ),

                        array(
                            'id'    => 'menu_items_color',
                            'name'   => __( 'Menu Items Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the Menu Items Color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '',
                            'condition' => [['condition_key' => 'megamenubuilder_enable', 'condition_value' => 'on']]
                        ),
                        array(
                            'id'    => 'menu_items_hover_color',
                            'name'   => __( 'Menu Items Hover Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the Menu Items Hover Color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '',
                            'condition' => [['condition_key' => 'megamenubuilder_enable', 'condition_value' => 'on']]
                        ),
                        array(
                            'id'  => 'sub_menu_width',
                            'name' => __( 'Sub Menu Width', 'htmega-addons' ),
                            'desc'  => __( 'Specify the width of the Sub Menu (px).', 'htmega-addons' ),
                            'min'               => 0,
                            'max'               => 1000,
                            'step'              => '1',
                            'type'              => 'number',
                            'default'           => '200',
                            'sanitize_callback' => 'floatval',
                            'condition' => [['condition_key' => 'megamenubuilder_enable', 'condition_value' => 'on']]
                        ),
                        array(
                            'id'    => 'sub_menu_bg_color',
                            'name'   => __( 'Sub Menu Background Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the Sub Menu Background Color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '',
                            'condition' => [['condition_key' => 'megamenubuilder_enable', 'condition_value' => 'on']]
                        ),
                        array(
                            'id'    => 'sub_menu_items_color',
                            'name'   => __( 'Sub Menu Items Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the Sub Menu Items Color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '',
                            'condition' => [['condition_key' => 'megamenubuilder_enable', 'condition_value' => 'on']]
                        ),
                        array(
                            'id'    => 'sub_menu_items_hover_color',
                            'name'   => __( 'Sub Menu Items Hover Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the Sub Menu Items Hover Color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '',
                            'condition' => [['condition_key' => 'megamenubuilder_enable', 'condition_value' => 'on']]
                        ),
                        array(
                            'id'  => 'mega_menu_width',
                            'name' => __( 'Mega Menu Width', 'htmega-addons' ),
                            'desc'  => __( 'Specify the Mega Menu Width (px)', 'htmega-addons' ),
                            'min'               => 0,
                            'max'               => 2000,
                            'step'              => '1',
                            'type'              => 'number',
                            'default'           => '',
                            'sanitize_callback' => 'floatval',
                            'condition' => [['condition_key' => 'megamenubuilder_enable', 'condition_value' => 'on']]
                        ),
                        array(
                            'id'    => 'mega_menu_bg_color',
                            'name'   => __( 'Mega Menu Background Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the Mega Menu Background Color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '',
                            'condition' => [['condition_key' => 'megamenubuilder_enable', 'condition_value' => 'on']]
                        )
                    ),
                ),

                array(
                    'id'  => 'postduplicator',
                    'name'  => __( 'Post Duplicator', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                ),
                
                array(
                    'id'  => 'wrapperlink',
                    'name'  => __( 'Wrapper Link', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                ),
                
                array(
                    'id'  => 'floating_effects',
                    'name'  => __( 'Floating Effects', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/modules/elementor-floating-effects-module/',
                    'doc_link' => 'https://wphtmega.com/docs/modules/floating-effects/',
                ),
                
                array(
                    'id'  => 'htmega_rpbar',
                    'name'  => __( 'Reading Progress Bar', 'htmega-addons' ),
                    'type'  => 'module',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'section'  => 'htmega_rpbar_module_settings',
                    'option_active_key' => 'rpbar_enable',
                    'video_link' => '',
                    'doc_link' => 'https://wphtmega.com/docs/modules/reading-progress-bar-module/',
                    'setting_fields' => array(
                        array(
                            'id'  => 'rpbar_enable',
                            'name' => __( 'Enable/Disable', 'htmega-addons' ),
                            'desc'  => __( 'You can enable/disable the Reading Progress Bar from here.', 'htmega-addons' ),
                            'type'  => 'checkbox',
                            'default' => 'off',
                            'class' => 'htmega-action-field-left',
                            'label_on' => __( 'On', 'htmega-addons' ),
                            'label_off' => __( 'Off', 'htmega-addons' ),
                        ),
                        array(
                            'id'  => 'rpbar_globalp',
                            'name' => __( 'Enable/Disable Global', 'htmega-addons' ),
                            'desc'  => __( 'Enable Reading Progress Bar Globally.' , 'htmega-addons'),
                            'type'  => 'checkbox',
                            'default' => 'off',
                            'class' => 'htmega-action-field-left',
                            'label_on' => __( 'On', 'htmega-addons' ),
                            'label_off' => __( 'Off', 'htmega-addons' ),
                            'is_pro' => true,
                        ),
                        array(
                            'id'    => 'rpbar_background_color',
                            'name'   => __( 'Background Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the reading progress bar background color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '#000000',
                            'is_pro' => true,
                            'condition' => [
                                ['condition_key' => 'rpbar_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'rpbar_globalp', 'condition_value' => 'on']
                            ]
        
                        ),
                        array(
                            'id'    => 'rpbar_fill_color',
                            'name'   => __( 'Fill Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the fill color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '#D43A6B',
                            'is_pro' => true,
                            'condition' => [
                                ['condition_key' => 'rpbar_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'rpbar_globalp', 'condition_value' => 'on']
                            ]
        
                        ),
                        array(
                            'id'    => 'rpbar_select_to_show_pages',
                            'name'   => __( 'Select Pages', 'htmega-addons' ),
                            'desc'    => __( 'Select the option where you want to display it.', 'htmega-addons' ),
                            'type'    => 'select',
                            'default' => 'all',
                            'is_pro' => true,
                            'options' => [
                                'posts' => __('All Posts', 'htmega-addons'),
                                'pages' => __('All Pages', 'htmega-addons'),
                                'all' => __('All Posts & Pages', 'htmega-addons'),
                            ],
                            'condition' => [
                                ['condition_key' => 'rpbar_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'rpbar_globalp', 'condition_value' => 'on']
                            ]
        
                        ),
                        array(
                            'id'  => 'rpbar_loading_height',
                            'name' => __( 'Loading Progress Bar Height', 'htmega-addons' ),
                            'desc'  => __( 'Specify the height of the loading progress bar.', 'htmega-addons' ),
                            'min'               => 1,
                            'max'               => 100,
                            'step'              => '1',
                            'type'              => 'number',
                            'default'           => '5',
                            'is_pro' => true,
                            'sanitize_callback' => 'floatval',
                            'condition' => [
                                ['condition_key' => 'rpbar_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'rpbar_globalp', 'condition_value' => 'on']
                            ]
                        ),
                        array(
                            'id'    => 'rpbar_position',
                            'name'   => __( 'Position', 'htmega-addons' ),
                            'desc'    => __( 'Choose the loading bar position to display the progress bar at the top or bottom.', 'htmega-addons' ),
                            'type'    => 'select',
                            'default' => 'top',
                            'is_pro' => true,
                            'options' => [
                                'top' => __('Top', 'htmega-addons'),
                                'bottom' => __('Bottom', 'htmega-addons'),
                            ],
                            'condition' => [
                                ['condition_key' => 'rpbar_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'rpbar_globalp', 'condition_value' => 'on']
                            ]
        
                        ),
    
                    )
                ),
                array(
                    'id'  => 'htmega_stt',
                    'name'  => __( 'Scroll To Top', 'htmega-addons' ),
                    'type'  => 'module',
                    'default'=>'off',
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'option_active_key' => 'stt_enable',
                    'video_link' => '',
                    'doc_link' => 'https://wphtmega.com/docs/modules/scroll-to-top/',
                    'section'  => 'htmega_stt_module_settings',
                    'setting_fields' => array(
                        array(
                            'id'  => 'stt_enable',
                            'name' => __( 'Enable/Disable', 'htmega-addons' ),
                            'desc'  => __( 'You can enable/disable Scroll To Top from here.', 'htmega-addons' ),
                            'type'  => 'checkbox',
                            'default' => 'off',
                            'class' => 'htmega-action-field-left',
                            'label_on' => __( 'On', 'htmega-addons' ),
                            'label_off' => __( 'Off', 'htmega-addons' ),
                        ),
                        array(
                            'id'  => 'stt_globalp',
                            'name' => __( 'Enable/Disable Global', 'htmega-addons' ),
                            'desc'  => __( 'Enable Scroll To Top Globally.', 'htmega-addons' ),
                            'type'  => 'checkbox',
                            'default' => 'off',
                            'class' => 'htmega-action-field-left',
                            'label_on' => __( 'On', 'htmega-addons' ),
                            'label_off' => __( 'Off', 'htmega-addons' ),
                            'is_pro' => true,
                        ),
                        array(
                            'id'    => 'stt_select_to_show_pages',
                            'name'   => __( 'Select Pages', 'htmega-addons' ),
                            'desc'    => __( 'Select the option where you would like to display it.', 'htmega-addons' ),
                            'type'    => 'select',
                            'default' => 'all',
                            'is_pro' => true,
                            'options' => [
                                'posts' => __('All Posts', 'htmega-addons'),
                                'pages' => __('All Pages', 'htmega-addons'),
                                'all' => __('All Posts & Pages', 'htmega-addons'),
                            ],
                            'condition' => [
                                ['condition_key' => 'stt_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'stt_globalp', 'condition_value' => 'on']
                            ]
                            
                        ),
                        array(
                            'id'    => 'stt_position',
                            'name'   => __( 'Position', 'htmega-addons' ),
                            'desc'    => __( 'Choose the position to display the Scroll To Top button on the left or right.', 'htmega-addons' ),
                            'type'    => 'select',
                            'default' => 'right',
                            'options' => [
                                'left' => __('Bottom Left', 'htmega-addons'),
                                'right' => __('Bottom Right', 'htmega-addons'),
                            ],
                            'is_pro' => true,
                            'condition' => [
                                ['condition_key' => 'stt_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'stt_globalp', 'condition_value' => 'on']
                            ]
                        ),
                        array(
                            'id'  => 'stt_bottom_space',
                            'name' => __( 'Bottom Space', 'htmega-addons' ),
                            'desc'  => __( 'Specify the bottom spacing for the Scroll To Top button.', 'htmega-addons' ),
                            'step'              => '1',
                            'type'              => 'number',
                            'default'           => '30',
                            'sanitize_callback' => 'floatval',
                            'is_pro' => true,
                            'condition' => [
                                ['condition_key' => 'stt_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'stt_globalp', 'condition_value' => 'on']
                            ]
                        ),
                        array(
                            'id'    => 'stt_color',
                            'name'   => __( 'Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the button icon/text color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '#ffffff',
                            'is_pro' => true,
                            'condition' => [
                                ['condition_key' => 'stt_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'stt_globalp', 'condition_value' => 'on']
                            ]
                        ),
                        array(
                            'id'    => 'stt_bg_color',
                            'name'   => __( 'Background Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the button background color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '#000000',
                            'is_pro' => true,
                            'condition' => [
                                ['condition_key' => 'stt_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'stt_globalp', 'condition_value' => 'on']
                            ]
        
                        ),
                        array(
                            'id'    => 'stt_color_hover',
                            'name'   => __( 'Hover Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the button icon/text hover color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '#ffffff',
                            'is_pro' => true,
                            'condition' => [
                                ['condition_key' => 'stt_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'stt_globalp', 'condition_value' => 'on']
                            ]
                        ),
                        array(
                            'id'    => 'stt_bg_color_hover',
                            'name'   => __( 'Hover Background Color', 'htmega-addons' ),
                            'desc'    => __( 'Set the button hover background color.', 'htmega-addons' ),
                            'class' => 'htmega-action-field-left',
                            'type'    => 'color',
                            'default' => '#000000',
                            'is_pro' => true,
                            'condition' => [
                                ['condition_key' => 'stt_enable', 'condition_value' => 'on'],
                                ['condition_key' => 'stt_globalp', 'condition_value' => 'on']
                            ]
                        )
                    )
                ),
               
                array(
                    'id'  => 'crossdomaincpp',
                    'name'  => __( 'Cross Domain Copy Paste', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'video_link' => '',
                    'doc_link' => '',
                ),
                array(
                    'id'  => 'parallax_modulep',
                    'name'  => __( 'Parallax', 'htmega-addons' ),
                    'type'  => 'element',
                    'default' => 'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-parallax-module/',
                    'doc_link' => '',
                ),
                array(
                    'id'  => 'particles_modulep',
                    'name'  => __( 'Particles', 'htmega-addons' ),
                    'type'  => 'element',
                    'default' => 'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/widget/elementor-particles-module/',
                    'doc_link' => 'https://wphtmega.com/docs/general-widgets/particles-module/',
                ),
                array(
                    'id'  => 'd_conditional_modulep',
                    'name'  => __( 'Conditional Display', 'htmega-addons' ),
                    'type'  => 'element',
                    'default' => 'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/modules/conditional-display-module/',
                    'doc_link' => 'https://wphtmega.com/docs/modules/conditional-display-module/',
                ),
                array(
                    'id'  => 'advanced_sticky_modulep',
                    'name'  => __( 'Advanced Sticky', 'htmega-addons' ),
                    'type'  => 'element',
                    'default' => 'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                    'video_link' => 'https://wphtmega.com/modules/advanced-sticky-module/',
                    'doc_link' => 'https://wphtmega.com/docs/',
                ),
                array(
                    'id'  => 'custom_css_modulep',
                    'name'  => __( 'Custom CSS', 'htmega-addons' ),
                    'type'  => 'element',
                    'default'=>'off',
                    'is_pro' => true,
                    'label_on' => __( 'On', 'htmega-addons' ),
                    'label_off' => __( 'Off', 'htmega-addons' ),
                ),
            ),
        );

        $settings['htmega_themebuilder_element_tabs'] = array(

            array(
                'id'  => 'bl_post_title',
                'name'  => __( 'Post Title', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_featured_image',
                'name'  => __( 'Post Featured Image', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_meta_info',
                'name'  => __( 'Post Meta Info', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_excerpt',
                'name'  => __( 'Post Excerpt', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_content',
                'name'  => __( 'Post Content', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_comments',
                'name'  => __( 'Post Comments', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_search_form',
                'name'  => __( 'Post Search Form', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_archive',
                'name'  => __( 'Archive Posts', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_archive_title',
                'name'  => __( 'Archive Title', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),
            
            array(
                'id'  => 'bl_page_title',
                'name'  => __( 'Page Title', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_site_title',
                'name'  => __( 'Site Title', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_site_logo',
                'name'  => __( 'Site Logo', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_nav_menu',
                'name'  => __( 'Nav Menu', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_author_info',
                'name'  => __( 'Author Info', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'on',
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_social_sharep',
                'name'  => __( 'Social Share', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'off',
                'is_pro' => true,
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_print_pagep',
                'name'  => __( 'Print Page', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'off',
                'is_pro' => true,
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_view_counterp',
                'name'  => __( 'View Counter', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'off',
                'is_pro' => true,
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_post_navigationp',
                'name'  => __( 'Post Navigation', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'off',
                'is_pro' => true,
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_related_postp',
                'name'  => __( 'Related Post', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'off',
                'is_pro' => true,
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),

            array(
                'id'  => 'bl_popular_postp',
                'name'  => __( 'Popular Post', 'htmega-addons' ),
                'type'    => 'element',
                'default' => 'off',
                'is_pro' => true,
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
            ),


        );

        // Post Duplicator Condition
        if( htmega_get_option( 'postduplicator', 'htmega_advance_element_tabs', 'off' ) === 'on' ){
            $post_types = htmega_get_post_types( array('defaultadd'=>'all') );
            if ( did_action( 'elementor/loaded' ) && defined( 'ELEMENTOR_VERSION' ) ) {
                $post_types['elementor_library'] = esc_html__( 'Templates', 'htmega-addons' );
            }
            $settings['htmega_general_tabs'][] = [
                'id'    => 'postduplicate_condition',
                'name'   => __( 'Post Duplicator Condition', 'htmega-addons' ),
                'desc'    => __( 'You can enable duplicator for individual post.', 'htmega-addons' ),
                'type'    => 'multiselect',
                'default' => '',
                'options' => $post_types,
            ];
        }

        $third_party_element = array();
        // Third Party Addons

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'bbpress',
                'name'    => __( 'bbPress', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/bbpress-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'bookedcalender',
                'name'    => __( 'Booked Calender', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/general-widgets/booked-calendar-widget/',
            ];
    

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'buddypress',
                'name'    => __( 'BuddyPress', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/buddypress-widget/',
            ];
  

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'calderaform',
                'name'    => __( 'Caldera Form', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/caldera-form-widget/',
            ];



            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'contactform',
                'name'    => __( 'Contact form 7', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/forms-widgets/contact-form-widget/',
            ];
   

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'downloadmonitor',
                'name'    => __( 'Download Monitor', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/download-monitor-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'easydigitaldownload',
                'name'    => __( 'Easy Digital Downloads', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/easy-digital-downloads-widget/',
            ];
   
            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'gravityforms',
                'name'    => __( 'Gravity Forms', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/forms-widgets/gravity-forms-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'instragramfeed',
                'name'    => __( 'Instragram Feed', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/social-widgets/instagram-feed-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'jobmanager',
                'name'    => __( 'Job Manager', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/job-manager-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'layerslider',
                'name'    => __( 'Layer Slider', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/layer-slider-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'mailchimpwp',
                'name'    => __( 'Mailchimp for wp', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/mailchimp-for-wp-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'ninjaform',
                'name'    => __( 'Ninja Form', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/ninja-form-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'quforms',
                'name'    => __( 'QU Form', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/quform-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'wpforms',
                'name'    => __( 'WP Form', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/wp-forms-widget/',                
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'revolution',
                'name'    => __( 'Revolution Slider', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => '',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'tablepress',
                'name'    => __( 'TablePress', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/3rd-party-plugin-widgets/tablepress-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'wcaddtocart',
                'name'    => __( 'WC : Add To cart', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/woocommerce-widgets/woocommerce-add-to-cart-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'categories',
                'name'    => __( 'WC : Categories', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/woocommerce-widgets/woocommerce-category-widget/',
            ];

            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'wcpages',
                'name'    => __( 'WC : Pages', 'htmega-addons' ),
                'type'    => 'element',
                'default' => "on",
                'label_on' => __( 'On', 'htmega-addons' ),
                'label_off' => __( 'Off', 'htmega-addons' ),
                'video_link' => '',
                'doc_link' => 'https://wphtmega.com/docs/woocommerce-widgets/woocommerce-page-widget/',
            ];


        if( empty( $third_party_element ) ){
            $third_party_element['htmega_thirdparty_element_tabs'][] = [
                'id'    => 'noelement',
                'html'    => __( 'No Element Found', 'htmega-addons' ),
                'type'    => 'html',
            ];
        }

        $allFields = array_merge( $settings, $third_party_element );
        return apply_filters( 'htmega_admin_fields', $allFields );

    }

    // General tab
    public function general_page_html_tabs(){
        ob_start();
        include_once HTMEGAOPT_INCLUDES .'/templates/dashboard-general.php';
        return ob_get_clean();
    }

}