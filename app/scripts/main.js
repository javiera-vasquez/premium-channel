// Watch scroll for active element
//$('#header').scrollspy({ target: '#navbar-example' });
// Document ready
$(function() {
	// Calc the height of the viewport and pass to the #vtr landing
  	var windowsH = $(window).height() - ($('.toolbar').height() + $('.divisor').height() + 30);
	$('#vtr').css('height', windowsH + 'px');
	// Check the scroll top, and remove negative margin to .header
	$(window).on('scroll', function() {
		// if($(window).scrollTop() < 0) $('.header').css('margin-top',$(window).scrollTop() + 'px');
		if($(window).scrollTop() >= 44) $('.header').addClass('animated fadeIn active');
		else if($(window).scrollTop() <= 44) $('.header').removeClass('animated fadeIn active');
	})
});




