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
	

	
})