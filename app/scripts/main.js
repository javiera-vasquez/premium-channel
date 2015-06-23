/*global $:false */
'use strict';
// Document ready
$(function() {
	// Calc the height of the viewport and pass to the #vtr landing
	var windowsHeight = $(window).height() - ($('.toolbar').height() + $('.divisor').height() + 30),
		containerHeight = $('#vtr .container').height(),
		animationNav = 'animated fadeIn active';
	$('#vtr').css('height', windowsHeight + 'px');
	$('#vtr .container').css('padding-top', Math.floor((windowsHeight - containerHeight) / 2 + 50 ) + 'px');
	// Check the scroll top, and remove negative margin to .header
	$(window).on('scroll', function() {
		if($(window).scrollTop() >= 44) {
			$('.header').addClass(animationNav);
		} else if($(window).scrollTop() <= 44) {
			$('.header').removeClass(animationNav);
		}
	});
	// Smooth scrolling
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({scrollTop: target.offset().top}, 1000);
				return false;
			}
		}
	});
	// Check height of the div
	$('.channelBox').each(function(){
		if($(this).height() < 500) {
			$(this).children().css('padding', '10em 0');
		}
	});
});




