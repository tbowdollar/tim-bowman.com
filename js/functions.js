// JavaScript Document

// Page loader

$(window).load(function() {
	$(".loader").fadeOut("slow");
});

// image centering
"use strict";
$(function() {
    $('.tImage').css({
        'position' : 'absolute',
        'left' : '50%',
        'top' : '50%',
        'margin-left' : function() {return -$(this).outerWidth()/2},
        'margin-top' : function() {return -$(this).outerHeight()/2 -150}
    });
		
	if (outerWidth <= 900 ){
		$(function(){
			$('.tImage').css({
        		'position' : 'absolute',
       		 'left' : '50%',
       		 'top' : '50%',
        		'margin-left' : function() {return -$(this).outerWidth()/2 +80},
        		'margin-top' : function() {return -$(this).outerHeight()/2 -195}
    		});
		});
		
	}
});

// Active links

$(document).ready(function(){
$('#defaultNavbar1 ul li').click(function(e){
	$('#defaultNavbar1 ul li').removeClass('active');
	$(e.currentTarget).addClass('active');
	});
$('.navbar-brand').click(function(){
	$('#defaultNavbar1 ul li').removeClass('active');
	});
$('.scrollToTop').click(function(){
	$('#defaultNavbar1 ul li').removeClass('active');
	});		
});

// Scroll functions

$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(function scrollTopBtn(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 400) {
			$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});
	});


// arrow animation

$(function arrow(){
	$('.down-arrow').animate({'top' : '92%'}, 1000, function(){
		$('.down-arrow').animate({'top' : '95%'}, 1000, arrow);
		});
	});
	
// home page fadein and animation
	
$(document).ready(function(){
	$('.navbar').animate({'top' : '0px'},1200);
	$('.fadeIn').delay(1000).fadeIn(400);
	});
	

// Mob nav click animation

$(function clickOnNav(){
	$('.navbar-toggle').click(function(){
		if($('.collapse.in').first().css('display') === 'block') {
			$('span.icon-bar').first().css({'position' : 'relative'}).animate({'left' : '0px'}, 500);
			$('span.icon-bar').last().css({'position' : 'relative'}).animate({'right' : '0px'}, 500);		
		} else {
			$('span.icon-bar').first().css({'position' : 'relative'}).animate({'left' : '7px'}, 500);
			$('span.icon-bar').last().css({'position' : 'relative'}).animate({'right' : '7px'}, 500);
		}		
	});
});

// scroll based animation

var $animation_elements = $('.animation_element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');