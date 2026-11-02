jQuery(document).ready(function($) {
    'use strict';

    var HTMegaTemplateBuilder = {
        init: function() {
            this.initModal();
            this.bindEvents();
            this.setupAddNewButton();
            this.initTemplateHoverEffects();
            this.initProModal();
        },

        initTemplateHoverEffects: function() {
            // Add hover effects for template items
            $(document).on('mouseenter', '.template-item', function() {
                $(this).find('.pro-tag').addClass('hover');
            }).on('mouseleave', '.template-item', function() {
                $(this).find('.pro-tag').removeClass('hover');
            });

            // Add hover effect for Get Pro button
            $(document).on('mouseenter', '.get-pro', function() {
                const $item = $(this).closest('.template-item');
                $item.find('.pro-tag').addClass('highlight');
            }).on('mouseleave', '.get-pro', function() {
                const $item = $(this).closest('.template-item');
                $item.find('.pro-tag').removeClass('highlight');
            });
        },

        bindEvents: function() {
            $(document).on('click', '#htmega-add-new-template, .page-title-action', this.openModal.bind(this));
            $(document).on('click', '.htmega-template-modal .close', this.closeModal.bind(this));
            $(document).on('click', '.htmega-template-modal', function(e) {
                if ($(e.target).hasClass('htmega-template-modal')) {
                    HTMegaTemplateBuilder.closeModal();
                }
            });
            $(document).on('click', '#create-template', this.createTemplate.bind(this));
            $(document).on('input', '#template-type, #template-name', this.validateForm);
            $(document).on('click', '.htmega-delete-template', this.deleteTemplate);
            
            // Update bulk action handling
            $(document).on('click', '#doaction, #doaction2', function(e) {
                e.preventDefault();
                var $button = $(this);
                var $selector = $button.prev('select');
                var action = $selector.val();
                
                if (action === 'trash') {
                    HTMegaTemplateBuilder.bulkAction(e);
                } else {
                    // Let other actions proceed normally
                    $button.closest('form').submit();
                }
            });

            $(document).on('keydown', function(e) {
                if (e.key === 'Escape') {
                    HTMegaTemplateBuilder.closeModal();
                    $('.htmega-preview-popup').removeClass('show');
                }
            });

            // Add preview popup functionality
            $(document).on('click', '.item-preview', function(e) {
                e.preventDefault();
                const $templateThumb = $(this).closest('.template-thumb');
                const imageUrl = $templateThumb.find('img').attr('src');
                if (!imageUrl) return;
                
                // Create popup if it doesn't exist
                if (!$('.htmega-preview-popup').length) {
                    $('body').append(`
                        <div class="htmega-preview-popup">
                            <div class="close-preview">
                                <span class="dashicons dashicons-no-alt"></span>
                            </div>
                            <img src="" alt="Template Preview">
                        </div>
                    `);
                }
                
                // Show popup with image
                const $popup = $('.htmega-preview-popup');
                $popup.find('img').attr('src', imageUrl);
                $popup.addClass('show');
            });

            // Close preview popup
            $(document).on('click', '.htmega-preview-popup, .close-preview', function(e) {
                if ($(e.target).hasClass('htmega-preview-popup') || $(e.target).closest('.close-preview').length) {
                    $('.htmega-preview-popup').removeClass('show');
                }
            });

            // Handle template type change
            $(document).on('change', '#template-type', function() {
                HTMegaTemplateBuilder.resetSampleDesigns();
            });

            // Sample Design button click
            $(document).on('click', '#htmega-sample-design', function(e) {
                e.preventDefault();
                const templateType = $('#template-type').val();
                if (!templateType) {
                    alert('Please select a template type first');
                    return;
                }
                
                const $button = $(this);
                const $wrapper = $('.htmega-sample-designs-wrapper');
                const $loading = $wrapper.find('.htmega-sample-designs-loading');
                const $grid = $wrapper.find('.htmega-sample-designs-carousel');
                
                if ($wrapper.is(':visible')) {
                    $wrapper.slideUp(200);
                    if ($grid.hasClass('slick-initialized')) {
                        setTimeout(() => {
                            $grid.slick('unslick');
                        }, 200);
                    }
                    return;
                }
                
                $wrapper.slideDown(200);
                $loading.show();
                $grid.html('');
                const sample_templates = [];
                const template_types = {
                    'single_blog_page' : 'Blog',
                    'footer_page' : 'Footer',
                    'header_page' : 'Header',
                    'archive_blog_page' : 'Blog',
                    'search_page' : 'Search',
                    'error_page' : 'Error',
                    'coming_soon_page' : 'Coming Soon',
                };

                window.HTMegaTemplateBuilder.templatesInfo.forEach(template => {
                    if (template.shareId === template_types[templateType]) {
                        sample_templates.push({
                            id: template.id,
                            title: template.title,
                            thumbnail: template.thumbnail,
                            type: template_types[templateType],
                            url: template.url ?? '#',
                            demoUrl: template.demoUrl ?? '#',
                            isPro: template.isPro ?? false
                        });
                    }
                });

                if (sample_templates.length === 0) {
                    $loading.hide();
                    $grid.html(`
                        <div class="htmega-no-templates">
                            <span class="dashicons dashicons-warning"></span>
                            <p>No templates found for this type. Please create a new template.</p>
                        </div>
                    `);
                } else {
                    $loading.hide();
                    sample_templates.forEach(template => {
                        const isProTemplate = template.isPro || false;
                        const templateHtml = `
                            <div class="template-item ${isProTemplate ? 'is-pro' : ''}">
                                ${isProTemplate ? '<span class="pro-tag">Pro</span>' : ''}
                                <div class="template-thumb">
                                    <img src="${template.thumbnail}" alt="${template.title}" loading="lazy">
                                    <div class="template-actions">
                                        <a href="#" class="item-preview" data-id="${template.id}" data-demo-url="${template.demoUrl}" title="Preview Template">
                                            <span class="dashicons dashicons-visibility"></span>
                                        </a>
                                        ${isProTemplate ? `
                                            <a href="https://wphtmega.com/pricing/" target="_blank" class="get-pro" title="Get Pro Version">
                                                <span class="dashicons dashicons-cart"></span>
                                            </a>
                                        ` : `
                                            <a href="#" class="select-template" data-id="${template.id}" data-title="${template.title}" title="Select Template">
                                                <span class="dashicons dashicons-yes"></span>
                                            </a>
                                        `}
                                    </div>
                                </div>
                                <h4>${template.title}</h4>
                            </div>`;
                        $grid.append(templateHtml);
                    });

                    // Initialize Slick carousel with improved settings
                    if ($grid.hasClass('slick-initialized')) {
                        $grid.slick('unslick');
                    }
                    
                    $grid.slick({
                        dots: false,
                        infinite: false,
                        speed: 400,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        prevArrow: '<button type="button" class="slick-prev"><span class="dashicons dashicons-arrow-left-alt2"></span></button>',
                        nextArrow: '<button type="button" class="slick-next"><span class="dashicons dashicons-arrow-right-alt2"></span></button>',
                        responsive: [
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1
                                }
                            }
                        ]
                    });

                    // Add lazy loading for images
                    $grid.find('img[loading="lazy"]').each(function() {
                        const img = new Image();
                        img.onload = function() {
                            $(this).removeClass('loading');
                        };
                        img.src = $(this).attr('src');
                    });

                    // Reinitialize Slick on window resize
                    $(window).on('resize', function() {
                        if ($grid.hasClass('slick-initialized')) {
                            $grid.slick('resize');
                        }
                    });
                }
            });

            // Handle template selection
            $(document).on('click', '.select-template', function(e) {
                e.preventDefault();
                const $this = $(this);
                const templateId = $this.data('id');
                const templateTitle = $this.data('title');
                const $templateName = $('#template-name');
                
                if (!$templateName.val().trim()) {
                    $templateName.val(templateTitle);
                }
                
                $('#template-form').data('selected-template', templateId);
                $('.template-item').removeClass('selected');
                $this.closest('.template-item').addClass('selected');
            });

            // Template Library button click
            $(document).on('click', '#htmega-template-library', function(e) {
                e.preventDefault();
                const templateType = $('#template-type').val();
                if (!templateType) {
                    alert('Please select a template type first');
                    return;
                }
                const $button = $(this);
                const $icon = $button.find('.dashicons');
                
                $button.addClass('htmega-tmpl-loading');
                $icon.removeClass('dashicons-category').addClass('dashicons-update');

                // Add your template library logic here
                $.ajax({
                    url: window.HTMegaTemplateBuilder.ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'htmega_get_template_library',
                        template_type: templateType,
                        nonce: window.HTMegaTemplateBuilder.nonce
                    },
                    success: function(response) {
                        if (response.success) {
                            // Handle success
                            $button.removeClass('htmega-tmpl-loading').addClass('htmega-tmpl-success');
                            $icon.removeClass('dashicons-update').addClass('dashicons-yes');
                            setTimeout(function() {
                                $button.removeClass('htmega-tmpl-success');
                                $icon.removeClass('dashicons-yes').addClass('dashicons-download');
                            }, 2000);
                        } else {
                            alert(response.data.message || 'Failed to load template library');
                            resetButtonState($button, 'download');
                        }
                    },
                    error: function() {
                        alert('Failed to load template library');
                        resetButtonState($button, 'download');
                    }
                });
            });

            // Import template trigger
            $(document).on('click', '#htmega-import-template-trigger', function(e) {
                e.preventDefault();
                $('#htmega-import-template-modal').show();
            });

            // Modal confirm button
            $(document).on('click', '.htmega-modal-confirm', function(e) {
                e.preventDefault();
                const $modal = $('#htmega-import-template-modal');
                const $button = $('#htmega-import-template-trigger');
                const $icon = $button.find('.dashicons');
                
                $modal.hide();
                $button.addClass('htmega-tmpl-loading');
                $icon.removeClass('dashicons-download').addClass('dashicons-update');
                
                $.ajax({
                    url: window.HTMegaTemplateBuilder.ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'htmega_template_import',
                        nonce: window.HTMegaTemplateBuilder.nonce
                    },
                    success: function(response) {
                        if (response.success) {
                            // Update template toggles
                            if (response.data.templates && response.data.templates.length) {
                                response.data.templates.forEach(function(template) {
                                    const $row = $(`tr[data-template-type="${template.type}"]`);
                                    if ($row.length) {
                                        const $toggle = $row.find('.htmega-template-toggle');
                                        if ($toggle.length) {
                                            $toggle.find('input[type="checkbox"]').prop('checked', true);
                                            $toggle.removeClass('htmega-tmpl-loading');
                                        }
                                    }
                                });
                            }
                            
                            // Show success state
                            $button.removeClass('htmega-tmpl-loading').addClass('htmega-tmpl-success');
                            $icon.removeClass('dashicons-update').addClass('dashicons-yes');
                            
                            // Reset button state after 2 seconds and reload
                            setTimeout(function() {
                                window.location.reload();
                            }, 1000);
                        } else {
                            alert(response.data.message || 'Import failed. Please try again.');
                            resetButtonState($button, 'download');
                        }
                    },
                    error: function() {
                        alert('Import failed. Please try again.');
                        resetButtonState($button, 'download');
                    }
                });
            });

            // Reset button state
            function resetButtonState($button) {
                const $icon = $button.find('.dashicons');
                $button.removeClass('htmega-tmpl-loading htmega-tmpl-success');
                $icon.removeClass('dashicons-update dashicons-yes').addClass('dashicons-download');
            }

            // Modal cancel button and overlay click
            $(document).on('click', '.htmega-modal-cancel, .htmega-modal-overlay', function(e) {
                e.preventDefault();
                $('#htmega-import-template-modal').hide();
            });

            // Close modal on escape key
            $(document).on('keyup', function(e) {
                if (e.key === 'Escape') {
                    $('#htmega-import-template-modal').hide();
                }
            });

            // Preview template
            $(document).on('click', '.template-actions .preview', function(e) {
                e.preventDefault();
                const templateId = $(this).data('id');
                const $template = $(this).closest('.template-item');
                const demoUrl = $template.data('demo-url');
                
                // Open demo URL in new tab
                window.open(demoUrl, '_blank');
            });

            // Import template
            $(document).on('click', '.template-actions .import', function(e) {
                e.preventDefault();
                const templateId = $(this).data('id');
                const $button = $(this);
                const $icon = $button.find('.dashicons');
                const $template = $(this).closest('.template-item');
                
                $button.addClass('importing');
                $icon.addClass('dashicons-update spinning');

                // Get template name from input
                const templateName = $('#template-name').val() || $template.find('h4').text();
                const templateType = $('#template-type').val();
                const setAsDefault = $('#set-as-default').prop('checked');

                $.ajax({
                    url: window.HTMegaTemplateBuilder.ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'htmega_template_import',
                        template_id: templateId,
                        template_name: templateName,
                        template_type: templateType,
                        set_as_default: setAsDefault,
                        nonce: window.HTMegaTemplateBuilder.nonce
                    },
                    success: function(response) {
                        if (response.success) {
                            $button.removeClass('importing').addClass('imported');
                            $icon.removeClass('dashicons-update spinning').addClass('dashicons-yes');
                            
                            setTimeout(function() {
                                // Close the modal and redirect to edit page
                                $('.htmega-template-modal').hide();
                                window.location.href = response.data.edit_url;
                            }, 1000);
                        } else {
                            alert(response.data.message || 'Failed to import template');
                            $button.removeClass('importing');
                            $icon.removeClass('dashicons-update spinning').addClass('dashicons-download');
                        }
                    },
                    error: function() {
                        alert('Failed to import template');
                        $button.removeClass('importing');
                        $icon.removeClass('dashicons-update spinning').addClass('dashicons-download');
                    }
                });
            });

            // Add spinning animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .dashicons.spinning {
                    animation: spin 1s linear infinite;
                }
                .template-actions .import.importing {
                    opacity: 0.7;
                    pointer-events: none;
                }
                .template-actions .import.imported {
                    background: #00a32a!important;
                    border-color: #00a32a!important;
                    color: #fff!important;
                }
            `;
            document.head.appendChild(style);
        },

        setupAddNewButton: function() {
            var $addNewButton = $('.page-title-action');
            if ($addNewButton.length) {
                $addNewButton
                    .attr('id', 'htmega-add-new-template')
                    .attr('href', '#')
                    .css('cursor', 'pointer');
            }
        },

        initModal: function() {
            if ($('.htmega-template-modal').length) {
                return;
            }

            var modalHtml = `
                <div class="htmega-template-modal" style="display: none;">
                    <div class="htmega-template-modal-content">
                        <span class="close">&times;</span>
                        <h2>${window.HTMegaTemplateBuilder.i18n.addNewTemplate}</h2>
                        <div class="htmega-template-form" id="template-form">
                            <div class="form-group">
                                <label for="template-type">${window.HTMegaTemplateBuilder.i18n.selectTemplateType}</label>
                                <select id="template-type" required>
                                    <option value="">${window.HTMegaTemplateBuilder.i18n.selectTemplateType}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="template-name">${window.HTMegaTemplateBuilder.i18n.enterName}</label>
                                <input type="text" id="template-name" placeholder="${window.HTMegaTemplateBuilder.i18n.enterName}" required>
                            </div>
                            <div class="form-group template-actions">
                                <div class="template-checkbox">
                                    <label>
                                        <input type="checkbox" id="set-as-default">
                                        Set as default
                                    </label>
                                </div>
                                <button type="button" id="htmega-sample-design" class="button">
                                    <span class="dashicons dashicons-download"></span> Sample Design
                                </button>
                            </div>
                            <div class="htmega-sample-designs-wrapper" style="display: none;">
                                <div class="htmega-sample-designs-loading">
                                    <span class="spinner is-active"></span>
                                </div>
                                <div class="htmega-sample-designs-carousel"></div>
                            </div>
                            <div class="form-group">
                                <button type="button" id="create-template" class="button button-primary" disabled>
                                    ${window.HTMegaTemplateBuilder.i18n.createTemplate}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;

            $('body').append(modalHtml);
            this.populateTemplateTypes();
        },

        populateTemplateTypes: function() {
            var $select = $('#template-type');
            var types = window.HTMegaTemplateBuilder.templateTypes || {};
            
            Object.entries(types).forEach(function([value, label]) {
                $select.append($('<option>', {
                    value: value,
                    text: label
                }));
            });
        },

        openModal: function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            $('.htmega-template-modal').fadeIn(200);
            $('#template-type').val('').focus();
            $('#template-name').val('');
            $('#create-template').prop('disabled', true);
        },

        closeModal: function() {
            $('.htmega-template-modal').fadeOut(200);
            this.resetSampleDesigns();
            $('#template-type').val('');
            $('#template-name').val('');
            $('#create-template').prop('disabled', true);
        },

        resetSampleDesigns: function() {
            const $wrapper = $('.htmega-sample-designs-wrapper');
            const $grid = $wrapper.find('.htmega-sample-designs-carousel');
            const $button = $('#htmega-sample-design');
            
            // Reset button icon and text
            $button.html('<span class="dashicons dashicons-download"></span> Sample Design');
            
            // Hide the wrapper and destroy carousel if initialized
            if ($grid.hasClass('slick-initialized')) {
                $grid.slick('unslick');
            }
            $wrapper.slideUp(200);
            $grid.html('');
            
            // Reset selected template
            $('#selected_template').val('');
        },

        validateForm: function() {
            var type = $('#template-type').val();
            var name = $('#template-name').val();
            $('#create-template').prop('disabled', !(type && name));
        },

        createTemplate: function(e) {
            e.preventDefault();
            
            const $form = $('#template-form');
            const templateType = $('#template-type').val();
            const templateName = $('#template-name').val();
            const setAsDefault = $('#set-as-default').prop('checked');
            const selectedTemplate = $form.data('selected-template');
            
            if (!templateType || !templateName) {
                alert(window.HTMegaTemplateBuilder.i18n.noTemplatesSelected);
                return;
            }
            
            const $submitButton = $('#create-template');
            const originalText = $submitButton.text();
            
            // Show loading state
            $submitButton.prop('disabled', true)
                .html('<span class="spinner is-active" style="float: none; margin-right: 5px;"></span>' + (window.HTMegaTemplateBuilder.i18n.creating || 'Creating...'));
            
            $.ajax({
                url: window.HTMegaTemplateBuilder.ajaxurl,
                type: 'POST',
                data: {
                    action: 'htmega_create_template',
                    template_type: templateType,
                    template_name: templateName,
                    set_as_default: setAsDefault ? 'true' : 'false',
                    selected_template: selectedTemplate,
                    nonce: window.HTMegaTemplateBuilder.nonce
                },
                success: function(response) {
                    if (response.success) {
                        // Show success message with edit button
                        const successHtml = `
                            <div class="htmega-template-success">
                                <div class="success-icon">
                                    <span class="dashicons dashicons-yes"></span>
                                </div>
                                <h3>Template Created Successfully!</h3>
                                <p>Your template has been created and is ready to use</p>
                                <div class="button-group">
                                    <a href="${response.data.edit_url}" class="edit-template-button">
                                        Edit Template
                                    </a>
                                    <button type="button" class="close-button">
                                        Close
                                    </button>
                                </div>
                            </div>
                        `;
                        
                        // Add success message and hide form content
                        const $modal = $('.htmega-template-modal');
                        $modal.addClass('success-state');
                        $modal.find('.htmega-template-modal-content').append(successHtml);
                        
                        // Reset form
                        $submitButton.prop('disabled', false).html(originalText);
                        $('#template-name').val('');
                        
                        // Handle close button click
                        $(document).on('click', '.htmega-template-success .close-button', function() {
                            HTMegaTemplateBuilder.closeModal();
                            HTMegaTemplateBuilder.resetSampleDesigns();
                            $modal.removeClass('success-state');
                            $('.htmega-template-success').remove();
                            setTimeout(function() {
                                window.location.reload();
                            }, 300);
                        });

                        // Handle modal close and escape key
                        $(document).one('click', '.htmega-template-modal .close, .htmega-template-modal', function(e) {
                            if ($(e.target).hasClass('htmega-template-modal') || $(e.target).closest('.close').length) {
                                HTMegaTemplateBuilder.closeModal();
                                $modal.removeClass('success-state');
                               $('.htmega-template-success').remove();
                               HTMegaTemplateBuilder.resetSampleDesigns();
                            }
                        });

                        // Also handle escape key
                        $(document).one('keydown', function(e) {
                            if (e.key === 'Escape') {
                                $modal.removeClass('success-state');
                                $('.htmega-template-success').remove();
                                HTMegaTemplateBuilder.resetSampleDesigns();
                            }
                        });
                    } else {
                        alert(response.data);
                        $submitButton.prop('disabled', false).html(originalText);
                    }
                },
                error: function() {
                    alert('Error creating template');
                    $submitButton.prop('disabled', false).html(originalText);
                }
            });
        },

        deleteTemplate: function(e) {
            e.preventDefault();
            if (!confirm(window.HTMegaTemplateBuilder.i18n.confirmDelete)) {
                return;
            }

            var templateId = $(this).data('id');
            
            $.ajax({
                url: window.HTMegaTemplateBuilder.ajaxurl,
                type: 'POST',
                data: {
                    action: 'htmega_delete_templates',
                    template_ids: [templateId],
                    nonce: window.HTMegaTemplateBuilder.nonce
                },
                success: function(response) {
                    if (response.success) {
                        window.location.reload();
                    } else {
                        alert(response.data || 'Failed to delete template');
                    }
                },
                error: function() {
                    alert('Failed to delete template');
                }
            });
        },

        bulkAction: function(e) {
            e.preventDefault();
            
            var action = $('#bulk-action-selector-top').val();
            if (action !== 'trash') return;

            // Using WordPress's default checkbox selector
            var templateIds = $('input[name="post[]"]:checked').map(function() {
                return $(this).val();
            }).get();

            if (!templateIds.length) {
                alert(window.HTMegaTemplateBuilder.i18n.noTemplatesSelected);
                return;
            }

            if (!confirm('Are you sure you want to move these templates to trash?')) {
                return;
            }

            $.ajax({
                url: window.HTMegaTemplateBuilder.ajaxurl,
                type: 'POST',
                data: {
                    action: 'htmega_trash_templates',
                    template_ids: templateIds,
                    nonce: window.HTMegaTemplateBuilder.nonce
                },
                success: function(response) {
                    if (response.success) {
                        window.location.reload();
                    } else {
                        alert(response.data || 'Failed to move templates to trash');
                    }
                },
                error: function() {
                    alert('Failed to move templates to trash');
                }
            });
        },
        initProModal: function() {
            // Add pro modal HTML if not exists
            if (!$('.htmega-pro-modal').length) {
                const proModalHtml = `
                    <div class="htmega-pro-modal">
                        <div class="htmega-pro-modal-overlay"></div>
                        <div class="htmega-pro-modal-content">
                            <div class="pro-icon">
                                <span class="dashicons dashicons-lock"></span>
                            </div>
                            <h3>Pro Feature</h3>
                            <p>This feature is only available in the Pro version. Upgrade to Pro to unlock all premium features and templates.</p>
                            <div class="button-group">
                                <a href="https://wphtmega.com/pricing/" target="_blank" class="htmega-pro-btn htmega-pro-upgrade-btn">
                                    <span class="dashicons dashicons-cart"></span>
                                    Get Pro Now
                                </a>
                                <button type="button" class="htmega-pro-btn htmega-pro-close-btn">
                                    <span class="dashicons dashicons-no-alt"></span>
                                    Close
                                </button>
                            </div>
                            <button type="button" class="htmega-pro-modal-dismiss">
                                <span class="dashicons dashicons-no-alt"></span>
                            </button>
                        </div>
                    </div>
                `;
                $('body').append(proModalHtml);
            }

            // Pro modal click handlers
            $(document).on('click', '.htmega-pro-tab', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $('.htmega-pro-modal').fadeIn(200).addClass('show');
            });

            $(document).on('click', '.htmega-pro-close-btn, .htmega-pro-modal-dismiss, .htmega-pro-modal-overlay', function() {
                $('.htmega-pro-modal').fadeOut(200).removeClass('show');
            });

            // Close modal on escape key
            $(document).on('keyup', function(e) {
                if (e.key === "Escape") {
                    $('.htmega-pro-modal').fadeOut(200).removeClass('show');
                }
            });
        }
    };

    // Initialize the template builder
    HTMegaTemplateBuilder.init();

    // Default template status management
    $(document).on('change', '.htmega-default-tmp-status-switch input[type="checkbox"]', function(e) {
        e.preventDefault();

        var $this = $(this),
            template_id = $this.val(),
            type = $this.attr('class').replace('htmega-status-', ''),
            $switch = $this.closest('.htmega-default-tmp-status-switch'),
            isChecked = $this.prop('checked');

        // First uncheck all other switches of the same type
        $('.htmega-status-' + type).not($this).prop('checked', false)
            .closest('.htmega-default-tmp-status-switch')
            .removeClass('htmega-tmpl-loading');

        // Add loading state
        $switch.addClass('htmega-tmpl-loading');
        
        $.ajax({
            url: window.HTMegaTemplateBuilder.ajaxurl,
            type: 'POST',
            data: {
                action: 'htmega_manage_default_template',
                template_id: template_id,
                type: type,
                nonce: window.HTMegaTemplateBuilder.nonce
            },
            success: function(response) {
                if (!response.success) {
                    $this.prop('checked', !isChecked);
                    alert(response.data);
                }
            },
            error: function() {
                $this.prop('checked', !isChecked);
                alert('Failed to update template status');
            },
            complete: function() {
                $switch.removeClass('htmega-tmpl-loading');
            }
        });
    });
});