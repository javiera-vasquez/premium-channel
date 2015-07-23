/*global $:false */
'use strict';
// Document ready
$(function() {
	// Calc the height of the viewport and pass to the #vtr landing
	var windowsHeight = $(window).height() - ($('.toolbar').height() + $('.divisor').height() + 30),
		containerHeight = $('#vtr .landing').height(),
		animationNav = 'animated fadeIn active';
	$('#vtr .landing').css('height', windowsHeight + 'px');
	$('#vtr .landing').css('padding-top', Math.floor((windowsHeight - containerHeight) / 2 - 50) + 'px');
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
				$('html,body').animate({scrollTop: target.offset().top - 75}, 1000);
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
	// Loop of intro text
    var quotes = $('#vtr h1.loop-header');
    var quoteIndex = -1;
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(500)
            .delay(2500)
            .fadeOut(500, showNextQuote);
    }
    showNextQuote();
    // Modal windows movie
    $('#modal-video').click(function () {
        var src = 'https://www.youtube.com/v/C4DHAGBUJQs';
        $('#myModal').modal('show');
        $('#myModal iframe').attr('src', src);
        return false;
    });

    $('#myModal button').click(function () {
        $('#myModal iframe').removeAttr('src');
    });
    // Stop on close
    $('#myModal').on('hidden.bs.modal', function () {
        $('#myModal iframe').attr('src', $('#myModal iframe').attr('src'));
    });
});


