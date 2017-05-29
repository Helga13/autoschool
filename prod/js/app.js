$(document).ready(function () {
	'use strict';
	$('.disabled').on('click', function (e) {
		e.preventDefault();
	});
	// tabs
	$('.tabs_block').each(function () {
		$(this).find('.tab').each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();	$(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active')
			});
		});
	});
	
	// popup

  $('.js-btn').click(function (e) {
        e.preventDefault();
        var DataId = $(this).attr('data-id');
        if (typeof DataId == "string") {
        	$('#'+DataId).addClass('opened').find('.car').css({'opacity': '1'});
					var timeoutCar;
    			timeoutCar = setTimeout(function () {
            $('.opened').addClass('car_loaded');
        }, 250);
        	$('body').css('overflow', 'hidden');  
        }
    });
    $('.popup').click(function (e) {
        e = event || window.event
        if (e.target == this) {
            $(this).removeClass('opened').removeClass('car_loaded').find('.car').css({'opacity': '0'});
            $('body').css('overflow', 'auto'); 
        }
    });
	$('.popup_close').click(function (e) {
         e.preventDefault();
           $(this).parents('.popup').removeClass('opened').removeClass('car_loaded').find('.car').css({'opacity': '0'});
           $('body').css('overflow', 'auto'); 
    });
    $('.popup .popup_content').click(function(e) {
		e.stopPropagation();
	}); 
	
	// animation blocks
	
	var	timeout = setTimeout(function () {
            $('.main_contant').addClass('ready');
        }, 1800);	
	    $('.animation').each(function() {
        var win       			= $(window),
						el              = $(this),
						scrollPosition  = win.scrollTop(),
            elTop;
            if (el.hasClass('opacity')) {
                elTop = el.offset().top + 100;
            } 
            else {
                elTop = el.offset().top;
            }
            if ( scrollPosition + win.height() >= elTop ) {
                el.addClass('done');
            }
            win.on('scroll', function() {
                if ( win.scrollTop() + win.height() >= elTop ) {
                    el.addClass('done');
                }
            });

    });
	

	
})