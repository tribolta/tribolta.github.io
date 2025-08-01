jQuery(document).ready(function($) {
                                $('div.content').css('display', 'block');
                                var onMouseOutOpacity = 0.67;
                                $('#thumbs ul.thumbs li').opacityrollover({
                                        mouseOutOpacity:   onMouseOutOpacity,
                                        mouseOverOpacity:  1.0,
                                        fadeSpeed:         'fast',
                                        exemptionSelector: '.selected'
                                });
                                var gallery = $('#thumbs').galleriffic({
                                        delay:                     2500,
                                        numThumbs:                 12,
                                        preloadAhead:              10,
                                        enableTopPager:            false,
                                        enableBottomPager:         true,
                                        maxPagesToShow:            7,
                                        imageContainerSel:         '#slideshow',
                                        controlsContainerSel:      '#controls',
                                        captionContainerSel:       '#caption',
                                        loadingContainerSel:       '#loading',
                                        renderSSControls:          true,
                                        renderNavControls:         true,
                                        playLinkText:              'Play Slideshow',
                                        pauseLinkText:             'Pause Slideshow',
                                        prevLinkText:              '&lsaquo; Previous Photo',
                                        nextLinkText:              'Next Photo &rsaquo;',
                                        nextPageLinkText:          'Next &rsaquo;',
                                        prevPageLinkText:          '&lsaquo; Prev',
                                        enableHistory:             false,
                                        autoStart:                 false,
                                        syncTransitions:           true,
                                        defaultTransitionDuration: 900,
                                        onSlideChange:             function(prevIndex, nextIndex) {
                                        		this.find('ul.thumbs').children()
                                                        .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                                                        .eq(nextIndex).fadeTo('fast', 1.0);
                                        },
                                        onPageTransitionOut:       function(callback) {
                                                this.fadeTo('fast', 0.0, callback);
                                        },
                                        onPageTransitionIn:        function() {
                                                this.fadeTo('fast', 1.0);
                                        }
                                });
                        });