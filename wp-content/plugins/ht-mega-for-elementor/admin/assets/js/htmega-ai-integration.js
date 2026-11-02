/**
 * HT Mega AI JavaScript Integration
 * Complete version with all original functionality + Multi-Provider Support
 * File: admin/assets/js/htmega-ai-integration.js
 */
(function($) {
    'use strict';
    
    // Main HT Mega AI object
    window.HTMegaAI = {
        
        // Initialize the AI integration
        init: function() {
            this.bindEvents();
            this.injectAIButtons();
        },
        
        // Bind events
        bindEvents: function() {
            // Test connection button
            $(document).on('click', '#htmega-test-ai-connection', this.testConnection.bind(this));
            
            // AI generation buttons
            $(document).on('click', '.htmega-ai-generate-btn', this.openAIModal.bind(this));
            
            // Monitor for new widgets being added
            if (typeof elementor !== 'undefined') {
                elementor.channels.editor.on('section:activated', this.onSectionActivated.bind(this));
            }
        },
        
        // Inject AI buttons into widgets
        injectAIButtons: function () {
            const self = this;
        
            // Wait until the #elementor-panel exists in the DOM
            const waitForPanel = setInterval(function () {
                const panelElement = document.getElementById('elementor-panel');
                if (panelElement) {
                    clearInterval(waitForPanel); // Stop checking
        
                    // Monitor panel changes
                    const observer = new MutationObserver((mutations) => {
                        mutations.forEach((mutation) => {
                            if (mutation.addedNodes.length) {
                                self.processNewControls(mutation.addedNodes);
                            }
                        });
                    });
        
                    observer.observe(panelElement, {
                        childList: true,
                        subtree: true
                    });
        
                    // Process existing controls right away
                    self.processExistingControls();
                }
            }, 500);
        },
        
        // Process new controls added to panel
        processNewControls: function(nodes) {
            const self = this;
            nodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    self.addAIButtonsToControls(node);
                }
            });
        },
        
        // Process existing controls
        processExistingControls: function() {
            const self = this;
            const panelElement = document.getElementById('elementor-panel');
            if (panelElement) {
                self.addAIButtonsToControls(panelElement);
            }
        },
        
        // Add AI buttons to appropriate controls
        addAIButtonsToControls: function(container) {
            const self = this;
            
            // Target text inputs, textareas, and WYSIWYG editors
            const selectors = [
                '.elementor-control-type-text:not(.elementor-control-_element_id,.elementor-control-_css_classes,.elementor-control-button_css_id) .elementor-control-input-wrapper',
                '.elementor-control-type-textarea .elementor-control-input-wrapper',
                '.elementor-control-type-wysiwyg .elementor-control-input-wrapper',
            ];
            
            selectors.forEach(selector => {
                $(container).find(selector).each(function() {
                    const $wrapper = $(this);
                    const $control = $wrapper.closest('.elementor-control');
                    
                    // Skip if button already exists
                    if ($control.find('.htmega-ai-btn-wrapper').length > 0) {
                        return;
                    }
                    
                    if ($control.hasClass('elementor-control-type-wysiwyg')) {
                        // Inject AFTER the TinyMCE wrapper (clean and visible)
                        const $textarea = $control.find('textarea.wp-editor-area');
                        if (
                            $textarea.length &&
                            $control.find('.htmega-ai-btn-wrapper').length === 0
                        ) {
                            const widgetType = self.getCurrentWidgetType();
                            const controlName = $control.attr('data-setting');
                            
                            const aiButton = $(`
                                <div class="htmega-ai-btn-wrapper" style="margin-top: 8px;">
                                    <button type="button" class="htmega-ai-generate-btn elementor-button elementor-button-default elementor-control-tooltip"
                                        data-widget="${widgetType}"
                                        data-control="${controlName}"
                                        data-tooltip="HT Mega AI Writer">
                                        <i class="eicon-ai" aria-hidden="true"></i>
                                    </button>
                                </div>
                            `);
                            $textarea.closest('.elementor-control-input-wrapper').before(aiButton);
                            
                            // Initialize tooltip using Elementor's tooltip system
                            const $tooltipElement = aiButton.find('.elementor-control-tooltip');
                            if ($tooltipElement.length && typeof $.fn.tipsy !== 'undefined') {
                                $tooltipElement.tipsy({
                                    gravity: 's',
                                    title: function() {
                                        return $(this).data('tooltip');
                                    }
                                });
                            }
                        }
                    } else {
                        // Default behavior for input, textarea
                        self.injectAIButton(this);
                    }
                });
            });
        },
        
        // Inject AI button for non-WYSIWYG controls
        injectAIButton: function(element) {
            const $input = $(element);
            const $control = $input.closest('.elementor-control-input-wrapper');
            
            // Skip if button already exists
            if ($control.find('.htmega-ai-btn-wrapper').length > 0) {
                return;
            }
            
            // Skip certain types of inputs
            const controlName = $control.data('setting') || '';
            if ( controlName && this.shouldSkipControl(controlName) ) {
                return;
            }
            
            // if (!htmegaAI.api_key_set) {
            //     return; // Don't show button if API key not configured
            // }
            
            const widgetType = this.getCurrentWidgetType();
            
            // Get the AI engine name for display
            const engineName = this.getEngineDisplayName(htmegaAI.current_engine);
            
            const buttonHtml = `
                <div class="htmega-ai-btn-wrapper">
                    <button type="button" class="htmega-ai-generate-btn elementor-button elementor-button-default elementor-control-tooltip" 
                            data-widget="${widgetType}" 
                            data-control="${controlName}"
                            data-tooltip="HT Mega AI Writer">
                        <i class="eicon-ai" aria-hidden="true"></i>
                    </button>
                </div>
            `;
            
            // Insert button based on control type
            if ($control.hasClass('elementor-control-type-wysiwyg')) {
                $control.find('.elementor-control-field').before(buttonHtml);
            } else {
                $control.before(buttonHtml);
            }
            
            // Initialize tooltip
            const $tooltipElement = $control.parent().find('.elementor-control-tooltip');
            if ($tooltipElement.length) {
                // Use Elementor's tooltip initialization if available
                if (typeof elementor !== 'undefined' && elementor.helpers && elementor.helpers.tooltip) {
                    elementor.helpers.tooltip.init($tooltipElement);
                } else if (typeof $.fn.tipsy !== 'undefined') {
                    $tooltipElement.tipsy({
                        gravity: 's',
                        title: function() {
                            return $(this).data('tooltip');
                        }
                    });
                } else {
                    // Fallback to native browser tooltip
                    $tooltipElement.attr('title', $tooltipElement.data('tooltip'));
                }
            }
        },
        
        // Get current widget type
        getCurrentWidgetType: function() {
            if (typeof elementor !== 'undefined' && elementor.getPanelView && elementor.getPanelView().getCurrentPageView) {
                const currentView = elementor.getPanelView().getCurrentPageView();
                if (currentView && currentView.model) {
                    return currentView.model.get('widgetType') || currentView.model.get('elType') || 'generic';
                }
            }
            return 'generic';
        },
        
        // Check if control should be skipped
        shouldSkipControl: function(controlName) {
            const skipControls = [
                'url', 'link', 'href', 'src', 'id', 'class', 'custom_css',
                'html_tag', 'size', 'width', 'height', 'margin', 'padding','button_css_id'
            ];
            
            return skipControls.some(skip => 
                controlName.toLowerCase().includes(skip)
            );
        },
        
        // Get engine display name
        getEngineDisplayName: function(engine) {
            const engineNames = {
                'openai': 'OpenAI',
                'claude': 'Claude',
                'google': 'Gemini'
            };
            return engineNames[engine] || 'AI';
        },
        
        // Get widget type from control (fallback method)
        getWidgetType: function($control) {
            const $widget = $control.closest('.elementor-element-edit-mode');
            if ($widget.length) {
                const classes = $widget.attr('class').split(' ');
                for (let className of classes) {
                    if (className.startsWith('elementor-widget-')) {
                        return className.replace('elementor-widget-', '');
                    }
                }
            }
            return this.getCurrentWidgetType();
        },
        
        // Handle section activation
        onSectionActivated: function() {
            // Add delay to ensure DOM is ready
            setTimeout(() => {
                this.processExistingControls();
            }, 100);
        },
        
        // Test API connection
        testConnection: function(e) {
            e.preventDefault();
            const $btn = $(e.currentTarget);
            const originalText = $btn.text();
            
            $btn.prop('disabled', true).text('Testing...');
            
            $.ajax({
                url: htmegaAI.ajaxurl,
                type: 'POST',
                data: {
                    action: 'htmega_ai_test_connection',
                    nonce: htmegaAI.nonce
                },
                success: function(response) {
                    if (response.success) {
                        alert('✅ Connection successful! Your ' + response.data.engine.toUpperCase() + ' API is working perfectly.');
                    } else {
                        let message = '❌ Connection failed: ' + response.data.message;
                        if (response.data.suggestions && response.data.suggestions.length > 0) {
                            message += '\n\nSuggestions:\n• ' + response.data.suggestions.join('\n• ');
                        }
                        alert(message);
                    }
                },
                error: function() {
                    alert('❌ Connection test failed. Please check your settings.');
                },
                complete: function() {
                    $btn.prop('disabled', false).text(originalText);
                }
            });
        },
        
        // Get settings URL for current AI engine
        getSettingsUrl: function() {
            return htmegaAI.admin_url + 'admin.php?page=htmega-addons#/htmega_ai';
        },
        
        // Open AI generation modal
        openAIModal: function(e) {
            e.preventDefault();
            
            if (!htmegaAI.api_key_set) {
                this.showApiConfigModal();
                return;
            }
            
            const $btn = $(e.currentTarget);
            const $control = $btn.closest('.elementor-control');
            const widgetType = $btn.data('widget');
            const controlName = $btn.data('control');
            
            // Get current value
            const $input = $control.find('input, textarea').first();
            let currentValue = '';
            
            if ($control.hasClass('elementor-control-type-wysiwyg')) {
                const editorId = $control.find('textarea.wp-editor-area').attr('id');
                if (typeof tinymce !== 'undefined' && tinymce.get(editorId)) {
                    currentValue = tinymce.get(editorId).getContent();
                } else {
                    currentValue = $input.val() || '';
                }
            } else {
                currentValue = $input.val() || '';
            }
            
            // Show AI generation modal
            this.showAIGenerationModal({
                widgetType: widgetType,
                controlName: controlName,
                currentValue: currentValue,
                targetInput: $input,
                controlElement: $control 
            });
        },
        
        // Show API configuration modal
        showApiConfigModal: function() {
            const engineName = this.getEngineDisplayName(htmegaAI.current_engine);
            const settingsUrl = this.getSettingsUrl();
            
            // Get API setup instructions based on current engine
            const apiInstructions = this.getApiInstructions(htmegaAI.current_engine);
            
            const modalHtml = `
                <div class="htmega-ai-modal-overlay">
                    <div class="htmega-ai-modal htmega-ai-config-modal">
                        <div class="htmega-ai-modal-header">
                            <h3><i class="eicon-warning"></i> ${htmegaAI.strings.api_not_configured}</h3>
                            <button class="htmega-ai-modal-close">&times;</button>
                        </div>
                        <div class="htmega-ai-modal-content">
                            <div class="htmega-ai-config-message">
                                <p>${htmegaAI.strings.configure_api}</p>
                                
                                <div class="htmega-ai-config-steps">
                                    <h4>Quick Setup:</h4>
                                    <ol>
                                        <li>1. Go to <strong>HT Mega → Settings → AI Writer</strong></li>
                                        <li>2. Select <strong>Engine</strong> as your AI Engine</li>
                                        <li>3. Paste your <strong>API Key</strong> and click <strong>Save Settings</strong></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="htmega-ai-modal-footer">
                            <button class="htmega-ai-btn htmega-ai-btn-secondary htmega-ai-close">Close</button>
                            <a href="${settingsUrl}" class="htmega-ai-btn htmega-ai-btn-primary" target="_blank">
                                ${htmegaAI.strings.go_to_settings}
                            </a>
                        </div>
                    </div>
                </div>
            `;
            
            $('body').append(modalHtml);
            
            // Bind close events
            $('.htmega-ai-modal-overlay').on('click', function(e) {
                if ($(e.target).hasClass('htmega-ai-modal-overlay') || $(e.target).hasClass('htmega-ai-modal-close') || $(e.target).hasClass('htmega-ai-close')) {
                    $(this).fadeOut(200, function() {
                        $(this).remove();
                    });
                }
            });
        },
        
        // Get API setup instructions for each provider
        getApiInstructions: function(engine) {
            const instructions = {
                'openai': {
                    name: 'OpenAI Platform',
                    url: 'https://platform.openai.com/api-keys'
                },
                'claude': {
                    name: 'Anthropic Console',
                    url: 'https://console.anthropic.com/'
                },
                'google': {
                    name: 'Google AI Studio',
                    url: 'https://makersuite.google.com/app/apikey'
                }
            };
            
            return instructions[engine] || instructions.openai;
        },
        
        // Show AI generation modal
        showAIGenerationModal: function(options) {
            const engineName = this.getEngineDisplayName(htmegaAI.current_engine);
            const placeholder = this.getPlaceholderText(options.widgetType, options.controlName);
            const suggestions = this.getSuggestions(options.widgetType, options.controlName);
            
            const modalHtml = `
                <div class="htmega-ai-modal-overlay">
                    <div class="htmega-ai-modal">
                        <div class="htmega-ai-modal-inner">
                            <div class="htmega-ai-modal-header">
                                <h3><i class="eicon-ai"></i> HT Mega AI Writer</h3>
                                <button class="htmega-ai-modal-close">&times;</button>
                            </div>
                            <div class="htmega-ai-modal-content">
                                <div class="htmega-ai-input-group">
                                    <label for="htmega-ai-prompt">What would you like to generate?</label>
                                    <textarea id="htmega-ai-prompt" placeholder="${placeholder}" rows="3"></textarea>
                                </div>
                                
                                ${suggestions.length > 0 ? `
                                <div class="htmega-ai-suggestions">
                                    <label>Quick suggestions:</label>
                                    <div class="htmega-ai-suggestion-buttons">
                                        ${suggestions.map(suggestion => `<button type="button" class="htmega-ai-suggestion-btn">${suggestion}</button>`).join('')}
                                    </div>
                                </div>
                                ` : ''}

                                ${options.currentValue ? `
                                <div class="htmega-ai-input-group">
                                    <label>Current content:</label>
                                    <div class="htmega-ai-current-content">${options.currentValue}</div>
                                </div>
                                ` : ''}

                                <div class="htmega-ai-generated-content" style="display: none;">
                                    <div class="htmega-ai-version-selector">
                                        <!-- Versions will be dynamically added here -->
                                    </div>
                                    <div class="htmega-ai-content"></div>
                                </div>
                            </div>
                            <div class="htmega-ai-modal-footer">
                                <button class="htmega-ai-btn htmega-ai-btn-secondary htmega-ai-cancel">Cancel</button>
                                <button class="htmega-ai-btn htmega-ai-btn-primary htmega-ai-generate" 
                                        data-widget="${options.widgetType}" 
                                        data-control="${options.controlName}">
                                    <span class="htmega-ai-btn-text">Generate</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            $('body').append(modalHtml);
            this.bindModalEvents();
            
            // Store options for later use
            this.currentOptions = options;

            // Store target textarea reference
            const $control = options.controlElement;
            let $targetTextarea = $control.find('textarea.elementor-wp-editor.wp-editor-area');
            if (!$targetTextarea.length) {
                $targetTextarea = $control.find('textarea, input').first();
            }
            $('.htmega-ai-modal').data('targetTextarea', $targetTextarea);
            
            // Focus the prompt textarea
            setTimeout(() => {
                $('#htmega-ai-prompt').focus();
            }, 300);
        },
        
        // Bind modal events
        bindModalEvents: function() {
            const self = this;
            const $modal = $('.htmega-ai-modal-overlay');
            
            // Close modal events
            $modal.on('click', '.htmega-ai-modal-close, .htmega-ai-cancel', function(e) {
                const $currentModal = $('.htmega-ai-modal');
                
                // Check if content is being generated
                if ($currentModal.data('isGenerating')) {
                    if (!confirm('Content generation is in progress. Do you want to close?')) {
                        return;
                    }
                }
                
                $modal.fadeOut(200, function() {
                    $(this).remove();
                });
            });
            
            // Prevent modal close when clicking inside
            $modal.on('click', '.htmega-ai-modal', function(e) {
                e.stopPropagation();
            });
            
            // Handle suggestion clicks
            $modal.on('click', '.htmega-ai-suggestion-btn', function() {
                const suggestion = $(this).text();
                const $prompt = $('#htmega-ai-prompt');
                $prompt.val(suggestion).focus();
            });
            
            // Handle generate button click
            $modal.on('click', '.htmega-ai-generate', this.generateContent.bind(this));
            
            // Handle version selection
            $modal.on('click', '.htmega-ai-version', function() {
                const $version = $(this);
                const content = $version.find('.htmega-ai-version-content').html();
                
                // Update selection
                $('.htmega-ai-version').removeClass('selected');
                $version.addClass('selected');
                
                // Update content with smooth transition
                const $content = $('.htmega-ai-content');
                $content.fadeOut(200, function() {
                    $(this).html(content).fadeIn(200);
                });
            });

            // Handle content use
            $modal.on('click', '.htmega-ai-use-content', function() {
                const content = $('.htmega-ai-version.selected .htmega-ai-version-content').html();
                const $field = $('.htmega-ai-modal').data('targetTextarea');

                if (!$field || !$field.length) {
                    self.showNotice('Target field not found.', 'error');
                    return;
                }

                // Update the field with generated content
                self.updateFieldContent($field, content);

                // Close modal
                $('.htmega-ai-modal-overlay').fadeOut(200, function() {
                    $(this).remove();
                });

                self.showNotice('Content applied successfully!', 'success');
            });

            // Handle keyboard shortcuts
            $modal.on('keydown', '#htmega-ai-prompt', function(e) {
                if (e.ctrlKey && e.keyCode === 13) {
                    $('.htmega-ai-generate').click();
                }
            });
        },
        
        // Update field content
        updateFieldContent: function($field, content) {
            const $control = $field.closest('.elementor-control');
            
            if ($control.hasClass('elementor-control-type-wysiwyg')) {
                // Handle WYSIWYG editor
                const editorId = $field.attr('id');
                if (typeof tinymce !== 'undefined' && tinymce.get(editorId)) {
                    tinymce.get(editorId).setContent(content);
                } else {
                    $field.val(content);
                }
                $field.trigger('input').trigger('change');
            } else {
                // Handle regular input/textarea
                $field.val(content).trigger('input').trigger('change');
            }
            
            // Trigger Elementor update
            if (typeof elementor !== 'undefined' && elementor.getPanelView().getCurrentPageView().model) {
                const setting = $field.closest('.elementor-control').data('setting');
                if (setting) {
                    elementor.getPanelView().getCurrentPageView().model.setSetting(setting, content);
                }
            }
        },
        
        // Get placeholder text based on widget and control
        getPlaceholderText: function(widgetType, controlName) {
            const placeholders = {
                'heading': {
                    'title': 'Write a compelling headline for...',
                    'subtitle': 'Create a supporting subtitle for...'
                },
                'button': {
                    'text': 'Generate button text for...',
                    'url': 'Suggest a URL for...'
                },
                'text-editor': {
                    'content': 'Write content about...'
                }
            };
            
            if (placeholders[widgetType] && placeholders[widgetType][controlName]) {
                return placeholders[widgetType][controlName];
            }
          
            return `Describe what you want to generate for this input field.`;
        },
        
        // Get suggestions based on widget and control
        getSuggestions: function(widgetType, controlName) {
            const suggestions = {
                'heading': {
                    'title': [
                        'Professional headline for tech company',
                        'Catchy title for fitness program',
                        'Elegant headline for wedding services',
                        'Bold title for startup launch'
                    ]
                },
                'button': {
                    'text': [
                        'Call-to-action for free trial',
                        'Download button text',
                        'Contact us button',
                        'Shop now button'
                    ]
                }
            };
            
            if (suggestions[widgetType] && suggestions[widgetType][controlName]) {
                return suggestions[widgetType][controlName];
            }
            
            return [];
        },
        
        // Generate content via AJAX
        generateContent: function (e) {
            e.preventDefault();
            const self = this;
            const $btn = $(e.currentTarget);
            const $btnText = $btn.find('.htmega-ai-btn-text');
            const originalText = $btnText.text();
            const prompt = $('#htmega-ai-prompt').val().trim();
            const engineName = this.getEngineDisplayName(htmegaAI.current_engine);

            if (!prompt) {
                self.showNotice('Please enter a prompt', 'error');
                return;
            }

            // Show loading state and disable buttons
            $btn.prop('disabled', true);
            $('.htmega-ai-use-content').prop('disabled', true);
            $('.htmega-ai-cancel').prop('disabled', true); 
            $btnText.html(`<span class="htmega-ai-loading"></span>Generating...`);

            // Set a flag to indicate content is being generated
            $('.htmega-ai-modal').data('isGenerating', true);

            $.ajax({
                url: htmegaAI.ajaxurl,
                type: 'POST',
                data: {
                    action: 'htmega_ai_generate',
                    nonce: htmegaAI.nonce,
                    prompt: prompt,
                    widget_type: $btn.data('widget'),
                    control_name: $btn.data('control'),
                    context: $('.htmega-ai-current-content').text()
                },
                success: function(response) {
                    if (response.success) {
                        self.displayGeneratedContent(response.data.content, response.data.engine);
                        
                        // Update generate button text to "Regenerate"
                        $btnText.text(`Regenerate`);
                        
                        self.showNotice(`Content generated successfully!`, 'success');
                    } else {
                        self.showNotice('Generation failed: ' + response.data, 'error');
                    }
                },
                error: function(xhr, status, error) {
                    self.showNotice('Request failed. Please try again.', 'error');
                    console.error('AI Generation Error:', error);
                },
                complete: function() {
                    // Re-enable buttons and remove generating flag
                    $btn.prop('disabled', false);
                    $('.htmega-ai-use-content').prop('disabled', false);
                    $('.htmega-ai-cancel').prop('disabled', false);
                    $('.htmega-ai-modal').data('isGenerating', false);
                    
                    // Don't reset text if content was generated successfully
                    if (!$('.htmega-ai-generated-content').is(':visible')) {
                        $btnText.text(originalText);
                    }
                }
            });
        },
        
        // Display generated content
        displayGeneratedContent: function(content, engine) {
            const engineName = this.getEngineDisplayName(engine);
            const $generatedSection = $('.htmega-ai-generated-content');
            const $versionSelector = $generatedSection.find('.htmega-ai-version-selector');
            const $content = $('.htmega-ai-content');
            
            // Clean content for display
            const cleanContent = content.replace(/^["']|["']$/g, '');
            
            // Check if this is first generation or regeneration
            const existingVersions = $versionSelector.find('.htmega-ai-version');
            const versionNumber = existingVersions.length + 1;
            
            // Remove 'selected' class from all existing versions
            existingVersions.removeClass('selected');
            
            // Create new version
            const $newVersion = $(`
                <div class="htmega-ai-version selected" data-version="${versionNumber}">
                    
                    <div class="htmega-ai-version-content">${cleanContent}</div>
                </div>
            `);
            //<span class="htmega-ai-version-label">Version ${versionNumber} - ${engineName}</span> // todo 
            // Add new version with animation
            $newVersion.hide();
            $versionSelector.append($newVersion);
            $newVersion.fadeIn(300);
            
            // Update main content area with animation
            $content.fadeOut(200, function() {
                $(this).html(cleanContent).fadeIn(200);
            });
            
            // Show generated content section if hidden
            if (!$generatedSection.is(':visible')) {
                $generatedSection.slideDown(300);
            }
            
            // Add use content button if not exists
            if (!$('.htmega-ai-modal-footer .htmega-ai-use-content').length) {
                const $useBtn = $(`
                    <button class="htmega-ai-btn htmega-ai-btn-primary htmega-ai-use-content">
                        Use This Content
                    </button>
                `);
                $useBtn.hide();
                $('.htmega-ai-modal-footer').prepend($useBtn);
                $useBtn.fadeIn(300);
            }
        },
        
        // Show notice
        showNotice: function(message, type = 'info') {
            const icons = {
                success: '<svg class="notice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
                error: '<svg class="notice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>',
                info: '<svg class="notice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>'
            };
            
            const noticeHtml = `
                <div class="htmega-ai-notice ${type}">
                    ${icons[type] || icons.info}
                    <span class="notice-message">${message}</span>
                    <span class="notice-close">&times;</span>
                </div>
            `;
            
            $('body').append(noticeHtml);
            
            // Auto hide after 4 seconds
            setTimeout(function() {
                $('.htmega-ai-notice').fadeOut(300, function() {
                    $(this).remove();
                });
            }, 4000);
            
            // Close on click
            $(document).on('click', '.notice-close', function() {
                $(this).parent().fadeOut(200, function() {
                    $(this).remove();
                });
            });
        }
    };
    
    // Initialize when document is ready
    $(document).ready(function() {
        HTMegaAI.init();
    });
    
})(jQuery);