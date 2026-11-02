<?php
$subcribeFormAtts = '';
$subcribeFormAtts .= ' data-htmega-button-text="' . esc_attr__( 'Subscribe', 'htmega-addons' ) . '"';
$subcribeFormAtts .= ' data-htmega-processing-text="'. esc_attr__( 'Subscribing...', 'htmega-addons' ) . '"';
$subcribeFormAtts .= ' data-htmega-completed-text="' . esc_attr__( 'Subscribed', 'htmega-addons' ) . '"';
$subcribeFormAtts .= ' data-htmega-ajax-error-text="' . esc_attr__( 'Something went wrong.', 'htmega-addons' ) . '"';

ob_start();
?>
<div class="htmega-general-tabs">
<div class="htmega-admin-main-tab-pane-inner">
        <!-- Banner Start -->
        <div class="htmega-admin-banner" style="background-image: url('<?php echo esc_url( HTMEGAOPT_URL . '/assets/images/dashboard-welcome-bg.jpg' ); ?>'); background-size: cover;">
            <div class="htmega-banner-logo">
            <img src="<?php echo esc_url( HTMEGAOPT_URL . '/assets/images/htmega-logo-white.png' ); ?>" alt="<?php echo esc_attr__('HT Mega Logo', 'htmega-addons'); ?>">
            </div>
            <div class="htmega-banner-content">
                <h1><?php esc_html_e( 'Welcome To The HT Mega Family!', 'htmega-addons' ); ?></h1>
                <p><?php esc_html_e( 'You have made a great choice. Let’s build something extraordinary!', 'htmega-addons' ) ?></p>
            </div>
        </div>
        <!-- Banner End -->
    <!-- Quick Links Section -->
    <div class="htmega-quick-links">
        <div class="htmega-quick-link-item">
            <div class="quick-link-icon support"><img src="<?php echo esc_url( HTMEGAOPT_URL . '/assets/images/info-icon/support-new.png' ); ?>" alt="<?php echo esc_attr__('happy with us','htmega-addons');?>"></div>
            <h3><?php echo esc_html__('Support & Feedback', 'htmega-addons'); ?></h3>
            <p><?php echo esc_html__('Need help or want a free store set-up? We will get back to you within 12-24 hours after receiving your inquiry.', 'htmega-addons'); ?></p>
            <a href="https://wphtmega.com/support/" target="_blank" class="quick-link-btn">
                <?php echo esc_html__('Get Support', 'htmega-addons'); ?>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2016_5576)"><path d="M12.1679 11.3176C12.1057 11.3176 12.0441 11.3053 11.9867 11.2815C11.9292 11.2577 11.877 11.2228 11.833 11.1788C11.789 11.1348 11.7541 11.0826 11.7303 11.0252C11.7065 10.9677 11.6942 10.9061 11.6942 10.844L11.6907 5.96518L5.1448 12.5111C5.05616 12.5997 4.93588 12.6494 4.81043 12.6493C4.68498 12.6492 4.56462 12.5993 4.47584 12.5105C4.38706 12.4217 4.33713 12.3014 4.33703 12.1759C4.33692 12.0505 4.38666 11.9302 4.4753 11.8416L11.0212 5.29569L6.14239 5.29216C6.01687 5.29206 5.89645 5.2421 5.80762 5.15327C5.71879 5.06444 5.66883 4.94401 5.66872 4.81849C5.66862 4.69297 5.71839 4.57263 5.80708 4.48394C5.89576 4.39525 6.0161 4.34549 6.14163 4.34559L12.1622 4.35046C12.2244 4.35047 12.286 4.36274 12.3434 4.38656C12.4009 4.41038 12.4531 4.44528 12.4971 4.48927C12.5411 4.53326 12.576 4.58548 12.5998 4.64294C12.6236 4.70039 12.6359 4.76196 12.6359 4.82412L12.6408 10.8447C12.6409 10.9069 12.6287 10.9684 12.605 11.0259C12.5812 11.0833 12.5464 11.1354 12.5025 11.1794C12.4586 11.2233 12.4064 11.2581 12.349 11.2818C12.2916 11.3055 12.23 11.3177 12.1679 11.3176Z" fill="black"/></g><defs><clipPath id="clip0_2016_5576"><rect width="12" height="12" fill="white" transform="translate(8.48535 0.0146484) rotate(45)"/></clipPath></defs></svg>
        </a>
        </div>
        
        <div class="htmega-quick-link-item">
            <div class="quick-link-icon community"><img src="<?php echo esc_url( HTMEGAOPT_URL . '/assets/images/info-icon/join-community.png' ); ?>" alt="<?php echo esc_attr__('join community','htmega-addons');?>"></div>
            <h3><?php echo esc_html__('Join Our Community', 'htmega-addons'); ?></h3>
            <p><?php echo esc_html__('Engage with our community to connect & share your ideas. Join a network where collaboration and growth thrive!', 'htmega-addons'); ?></p>
            <a href="https://www.facebook.com/groups/shoplentor/" target="_blank" class="quick-link-btn">
                <?php echo esc_html__('Join Now', 'htmega-addons'); ?>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2016_5576)"><path d="M12.1679 11.3176C12.1057 11.3176 12.0441 11.3053 11.9867 11.2815C11.9292 11.2577 11.877 11.2228 11.833 11.1788C11.789 11.1348 11.7541 11.0826 11.7303 11.0252C11.7065 10.9677 11.6942 10.9061 11.6942 10.844L11.6907 5.96518L5.1448 12.5111C5.05616 12.5997 4.93588 12.6494 4.81043 12.6493C4.68498 12.6492 4.56462 12.5993 4.47584 12.5105C4.38706 12.4217 4.33713 12.3014 4.33703 12.1759C4.33692 12.0505 4.38666 11.9302 4.4753 11.8416L11.0212 5.29569L6.14239 5.29216C6.01687 5.29206 5.89645 5.2421 5.80762 5.15327C5.71879 5.06444 5.66883 4.94401 5.66872 4.81849C5.66862 4.69297 5.71839 4.57263 5.80708 4.48394C5.89576 4.39525 6.0161 4.34549 6.14163 4.34559L12.1622 4.35046C12.2244 4.35047 12.286 4.36274 12.3434 4.38656C12.4009 4.41038 12.4531 4.44528 12.4971 4.48927C12.5411 4.53326 12.576 4.58548 12.5998 4.64294C12.6236 4.70039 12.6359 4.76196 12.6359 4.82412L12.6408 10.8447C12.6409 10.9069 12.6287 10.9684 12.605 11.0259C12.5812 11.0833 12.5464 11.1354 12.5025 11.1794C12.4586 11.2233 12.4064 11.2581 12.349 11.2818C12.2916 11.3055 12.23 11.3177 12.1679 11.3176Z" fill="black"/></g><defs><clipPath id="clip0_2016_5576"><rect width="12" height="12" fill="white" transform="translate(8.48535 0.0146484) rotate(45)"/></clipPath></defs></svg>
            </a>
        </div>
        
        <div class="htmega-quick-link-item">
            <div class="quick-link-icon templates"><img src="<?php echo esc_url( HTMEGAOPT_URL . '/assets/images/info-icon/templates-library.png' ); ?>" alt="<?php echo esc_attr__('templates library','htmega-addons');?>"></div>
            <h3><?php echo esc_html__('Templates Library', 'htmega-addons'); ?></h3>
            <p><?php echo esc_html__('Explore our stunning Templates, perfect for any niche. Simply explore and apply any layout with just a few clicks!', 'htmega-addons'); ?></p>
            <a href="https://wphtmega.com/elementor-templates/" target="_blank" class="quick-link-btn">
                <?php echo esc_html__('View all Layouts', 'htmega-addons'); ?>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2016_5576)"><path d="M12.1679 11.3176C12.1057 11.3176 12.0441 11.3053 11.9867 11.2815C11.9292 11.2577 11.877 11.2228 11.833 11.1788C11.789 11.1348 11.7541 11.0826 11.7303 11.0252C11.7065 10.9677 11.6942 10.9061 11.6942 10.844L11.6907 5.96518L5.1448 12.5111C5.05616 12.5997 4.93588 12.6494 4.81043 12.6493C4.68498 12.6492 4.56462 12.5993 4.47584 12.5105C4.38706 12.4217 4.33713 12.3014 4.33703 12.1759C4.33692 12.0505 4.38666 11.9302 4.4753 11.8416L11.0212 5.29569L6.14239 5.29216C6.01687 5.29206 5.89645 5.2421 5.80762 5.15327C5.71879 5.06444 5.66883 4.94401 5.66872 4.81849C5.66862 4.69297 5.71839 4.57263 5.80708 4.48394C5.89576 4.39525 6.0161 4.34549 6.14163 4.34559L12.1622 4.35046C12.2244 4.35047 12.286 4.36274 12.3434 4.38656C12.4009 4.41038 12.4531 4.44528 12.4971 4.48927C12.5411 4.53326 12.576 4.58548 12.5998 4.64294C12.6236 4.70039 12.6359 4.76196 12.6359 4.82412L12.6408 10.8447C12.6409 10.9069 12.6287 10.9684 12.605 11.0259C12.5812 11.0833 12.5464 11.1354 12.5025 11.1794C12.4586 11.2233 12.4064 11.2581 12.349 11.2818C12.2916 11.3055 12.23 11.3177 12.1679 11.3176Z" fill="black"/></g><defs><clipPath id="clip0_2016_5576"><rect width="12" height="12" fill="white" transform="translate(8.48535 0.0146484) rotate(45)"/></clipPath></defs></svg>
            </a>
        </div>
    </div>

    <!-- Documentation Section -->
    <div class="htmega-documentation">
        <div class="htmega-doc-image">
            <img src="<?php echo esc_url(HTMEGAOPT_URL . '/assets/images/documentation-img.png'); ?>" alt="<?php echo esc_html__('Documentation', 'htmega-addons'); ?>">
        </div>
        <div class="htmega-doc-content">
            <div class="htmega-doc-icon"><img src="<?php echo esc_url( HTMEGAOPT_URL . '/assets/images/info-icon/documentation-new.png' ); ?>" alt="<?php echo esc_html__('documentation','htmega-addons');?>"></div>
            <h3><?php echo esc_html__('Documentation', 'htmega-addons'); ?></h3>
            <p><?php echo esc_html__('Regularly updated and organized, our documentation ensures you have the latest information. Use this manual to navigate our plugin efficiently and maximize its potential.', 'htmega-addons');?></p>
            <a href="https://wphtmega.com/docs/" target="_blank" class="htmega-doc-btn"><?php echo esc_html__('Get Now', 'htmega-addons'); ?></a>
        </div>
    </div>


    <!-- Video Tutorial Section -->
    <div class="htmega-video-tutorial">
        <div class="htmega-video-badge">
            <span class="video-icon">
                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20.4178" height="19" rx="1.92301" fill="black"/><g clip-path="url(#clip0_2016_8881)"><path d="M11.8548 9.34621C11.8852 9.36128 11.9104 9.38361 11.9278 9.41079C11.9451 9.43796 11.9539 9.46893 11.9532 9.50033C11.9549 9.5271 11.9495 9.55387 11.9373 9.57832C11.9252 9.60278 11.9066 9.62419 11.8833 9.64071L8.75637 11.0594C8.72659 11.0743 8.69304 11.0819 8.65902 11.0816C8.625 11.0812 8.59167 11.0728 8.56231 11.0572C8.53296 11.0416 8.50858 11.0193 8.49158 10.9926C8.47457 10.9659 8.46553 10.9356 8.46533 10.9047V8.09591C8.46467 8.06459 8.47343 8.03371 8.49065 8.00656C8.50788 7.97941 8.53293 7.95702 8.56312 7.9418C8.59091 7.92726 8.62243 7.91962 8.65451 7.91963C8.70144 7.92088 8.7472 7.93326 8.78722 7.95552L11.8548 9.34621ZM17.1966 5.80588V13.1948C17.1957 13.8944 16.8888 14.5651 16.3431 15.0598C15.7975 15.5545 15.0578 15.8328 14.2862 15.8337H6.13699C5.36538 15.8328 4.62564 15.5545 4.08003 15.0598C3.53442 14.5651 3.22749 13.8944 3.22656 13.1948L3.22656 5.80588C3.22749 5.10626 3.53442 4.43554 4.08003 3.94083C4.62564 3.44612 5.36538 3.16783 6.13699 3.16699L14.2862 3.16699C15.0578 3.16783 15.7975 3.44612 16.3431 3.94083C16.8888 4.43554 17.1957 5.10626 17.1966 5.80588ZM13.1174 9.50033C13.1176 9.27795 13.0513 9.05968 12.9257 8.86871C12.8 8.67774 12.6196 8.52121 12.4037 8.41574L9.33147 7.02505C9.12454 6.9174 8.89003 6.86099 8.65146 6.86147C8.41289 6.86196 8.17865 6.91932 7.97226 7.02781C7.76586 7.1363 7.59456 7.2921 7.47554 7.47957C7.35653 7.66704 7.29398 7.8796 7.29418 8.09591V10.9047C7.29278 11.121 7.35478 11.3337 7.47383 11.5212C7.59287 11.7086 7.7647 11.8639 7.97172 11.9714C8.18128 12.0823 8.41942 12.1411 8.66208 12.1419C8.88656 12.1428 9.10737 12.0902 9.30237 11.9893L12.4317 10.5712C12.6409 10.4644 12.8148 10.3087 12.9354 10.1204C13.0559 9.93214 13.1188 9.71804 13.1174 9.50033ZM6.96429 7.62386C6.86222 7.52533 6.80287 7.39068 6.799 7.24886C6.79514 7.10704 6.84706 6.96936 6.94362 6.86541C7.04018 6.76147 7.17366 6.69956 7.31537 6.69299C7.45708 6.68642 7.59571 6.73572 7.70147 6.83028L8.70405 7.76253C8.84976 7.9077 9.06479 7.90825 9.19749 7.77553L11.2899 5.75828C11.3932 5.65851 11.532 5.60388 11.6756 5.60642C11.8192 5.60896 11.956 5.66846 12.0557 5.77182C12.1555 5.87519 12.2101 6.01396 12.2076 6.1576C12.2051 6.30125 12.1456 6.438 12.0422 6.53777L9.95634 8.54852C9.82543 8.67899 9.67005 8.78232 9.49912 8.8526C9.32819 8.92287 9.14506 8.95871 8.96025 8.95804C8.77314 8.95836 8.5878 8.92178 8.41484 8.85039C8.24188 8.77901 8.08468 8.67422 7.95225 8.54202L6.96429 7.62386ZM15.9995 9.88324V13.2916C15.9995 14.785 14.7846 16 13.2912 16H5.70822C4.21491 16 3 14.785 3 13.2916V9.88324C3 9.47914 3.09966 9.08588 3.27082 8.72566L7.58502 13.0408C8.09687 13.5521 8.77663 13.8338 9.50027 13.8338C10.2239 13.8338 10.9037 13.5521 11.415 13.0408L15.7292 8.72566C15.9003 9.08588 15.9995 9.47969 15.9995 9.88324Z" fill="white"/>
                    </svg>
            </span>
            <?php echo esc_html__('Video Tutorial', 'htmega-addons'); ?>
        </div>

        <h2 class="htmega-video-title"><?php echo esc_html__('How to Use Our PRO Modules?', 'htmega-addons');?></h2>

        <div class="htmega-video-grid">
            <div class="htmega-video-item">
                <div class="video-thumbnail">
                <img src="<?php echo esc_url( HTMEGAOPT_URL . '/assets/images/video-tutorial-thumb.png' ); ?>" alt="<?php echo esc_html__('video tutorial','htmega-addons');?>">
                <a href="https://www.youtube.com/watch?v=z_9Z9VWhaEQ" target="_blank" class="play-button">
                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6767 8.42964C19.3759 9.41071 19.3759 11.8634 17.6767 12.8445L4.29501 20.5703C2.59575 21.5514 0.471673 20.3251 0.471673 18.3629L0.471674 2.91115C0.471674 0.94901 2.59575 -0.277325 4.29502 0.703745L17.6767 8.42964Z" fill="#681EC8"/></svg>
                </a>
                </div>
                <h3><?php echo esc_html__('Introduction to HT Mega Elementor Addons ', 'htmega-addons');?></h3>
            </div>

            <div class="htmega-video-item">
                <div class="video-thumbnail">
                    <img src="<?php echo esc_url( HTMEGAOPT_URL . '/assets/images/video-tutorial-thumb3.png' ); ?>" alt="<?php echo esc_html__('video tutorial','htmega-addons');?>">
                    <a href="https://www.youtube.com/watch?v=L8S_Ov3b56o" target="_blank" class="play-button">
                        <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6767 8.42964C19.3759 9.41071 19.3759 11.8634 17.6767 12.8445L4.29501 20.5703C2.59575 21.5514 0.471673 20.3251 0.471673 18.3629L0.471674 2.91115C0.471674 0.94901 2.59575 -0.277325 4.29502 0.703745L17.6767 8.42964Z" fill="#681EC8"/></svg>
                    </a>
                </div>
                <h3><?php echo esc_html__('Conditional Display Content In Elementor', 'htmega-addons');?></h3>
            </div>
        </div>

        <a href="https://www.youtube.com/watch?v=z_9Z9VWhaEQ" target="_blank" class="htmega-doc-btn"><?php echo esc_html__('View More Videos', 'htmega-addons'); ?> </a>
    </div>
    <!-- Feature Request Section -->
    <div class="htmega-feature-request">
        <div class="htmega-feature-left">
            <img src="<?php echo esc_url(HTMEGAOPT_URL . '/assets/images/feature-request-img.png'); ?>" alt="<?php echo esc_html__('Feature Request', 'htmega-addons'); ?>">
        </div>
        <div class="htmega-feature-right">
            <div class="feature-icon">
            <img src="<?php echo esc_url( HTMEGAOPT_URL . '/assets/images/info-icon/missing-feature-new.png' ); ?>" alt="<?php echo esc_attr__('missing feature','htmega-addons');?>">
            </div>
            <h3><?php echo esc_html__('Missing Any Feature?', 'htmega-addons'); ?></h3>
            <p><?php echo esc_html__('Have you ever noticed any missing features? Please notify us if you do. As soon as possible, our staff will add any necessary features based on your requests. Our commitment to our clients is second to none.', 'htmega-addons');?></p>
            <a href="https://hasthemes.com/contact-us/" target="_blank" class="htmega-doc-btn"><?php echo esc_html__('Request Feature ', 'htmega-addons');?></a>
        </div>
    </div>

    <!-- Subscribe Banner Start -->
    <div class="htmega-admin-subscribe">
        <div class="htmega-admin-subscribe-content">

        <div class="htmega-video-badge">
            <span class="video-icon">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="19" height="19" rx="1.93953" fill="black"/><path d="M10.6486 12.2743L14.3745 8.54798V5.16676C14.3745 3.97179 13.4028 3 12.2079 3H6.79151C6.21712 3.00043 5.66638 3.22878 5.26017 3.63491C4.85397 4.04105 4.62551 4.59178 4.62493 5.16622V8.54798L8.35036 12.2743C8.96458 12.888 10.0349 12.888 10.6486 12.2743ZM6.96429 7.62386C6.86222 7.52533 6.80287 7.39068 6.799 7.24886C6.79514 7.10704 6.84706 6.96936 6.94362 6.86541C7.04018 6.76147 7.17366 6.69956 7.31537 6.69299C7.45708 6.68642 7.59571 6.73572 7.70147 6.83028L8.70405 7.76253C8.84976 7.9077 9.06479 7.90825 9.19749 7.77553L11.2899 5.75828C11.3932 5.65851 11.532 5.60388 11.6756 5.60642C11.8192 5.60896 11.956 5.66846 12.0557 5.77182C12.1555 5.87519 12.2101 6.01396 12.2076 6.1576C12.2051 6.30125 12.1456 6.438 12.0422 6.53777L9.95634 8.54852C9.82543 8.67899 9.67005 8.78232 9.49912 8.8526C9.32819 8.92287 9.14506 8.95871 8.96025 8.95804C8.77314 8.95836 8.5878 8.92178 8.41484 8.85039C8.24188 8.77901 8.08468 8.67422 7.95225 8.54202L6.96429 7.62386ZM15.9995 9.88324V13.2916C15.9995 14.785 14.7846 16 13.2912 16H5.70822C4.21491 16 3 14.785 3 13.2916V9.88324C3 9.47914 3.09966 9.08588 3.27082 8.72566L7.58502 13.0408C8.09687 13.5521 8.77663 13.8338 9.50027 13.8338C10.2239 13.8338 10.9037 13.5521 11.415 13.0408L15.7292 8.72566C15.9003 9.08588 15.9995 9.47969 15.9995 9.88324Z" fill="white"/>
                    </svg>
            </span>
                <?php echo esc_html__('Subscribe Our Newsletter', 'htmega-addons'); ?>
        </div>

            <div class="htmega-newsletter-content">
                <h2><?php echo esc_html__('Subscribe to receive discount, offer, plugin updates and news in your inbox.', 'htmega-addons');?></h2>
            </div>
        </div>
        <div class="htmega-admin-subscribe-wrapper">
            <form action="#" class="htmega-admin-subscribe-form" <?php echo wp_kses_post( trim( $subcribeFormAtts ) ); ?>>
                <input type="email" value="<?php echo esc_attr( get_bloginfo('admin_email') ); ?>" placeholder="<?php echo esc_attr__('Enter your email', 'htmega-addons'); ?>">
                <button type="submit"><?php esc_html_e( 'Subscribe', 'htmega-addons' ) ?></button>
            </form>
            <span class="htmega-subscribe-status"></span>
        </div>
    </div>
    <!-- Subscribe Banner End -->

    </div>
</div>
<?php echo apply_filters('htmega_dashboard_general', ob_get_clean() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>