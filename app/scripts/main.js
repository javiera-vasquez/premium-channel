// Watch scroll for active element
//$('#header').scrollspy({ target: '#navbar-example' });
// Document ready
$(function() {
	// Calc the height of the viewport and pass to the #vtr landing
  	var windowsHeight = $(window).height() - ($('.toolbar').height() + $('.divisor').height() + 30),
  		animationNav = 'animated fadeIn active';
	$('#vtr').css('height', windowsHeight + 'px');
	// Check the scroll top, and remove negative margin to .header
	$(window).on('scroll', function() {
		// if($(window).scrollTop() < 0) $('.header').css('margin-top',$(window).scrollTop() + 'px');
		if($(window).scrollTop() >= 44) $('.header').addClass(animationNav);
		else if($(window).scrollTop() <= 44) $('.header').removeClass(animationNav);
	})
	// Smooth scrolling
	$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top - 80
	    }, 1000);
	    return false;
	  }
	}
	});
});




