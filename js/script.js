/*!
Template Name: Consulbiz
Title: Consulbiz free consulting business bootstrap website template
Description: Consulbiz free bootstrap website template for consulting business company. Responsive Bootstrap 3 HTML5 website template for consultancy and consulting business.
Keyword: consulting group, management consulting, consulting website, consultant website examples, consulting website design, consultancy website, best consulting websites, it consultant website, business consulting websites, best consulting website designs, consulting firm website design, websites for consultants
Author: Bootstrap Website Templates
Author URI: https://bootstrapwebtemplates.com/
Tags: consulting, consultancy, consultant, business, firms, corporate, copart, corporation, agency, corp
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
*/

(function($) {
    "use strict"; // Start of use strict

	$(".copyright").after(atob("PGRpdiBjbGFzcz0nY29sLW1kLTYnPjxkaXYgY2xhc3M9J3JpZ2h0LXRleHQnPkRlc2lnbiAmYW1wOyBEZXZlbG9wZWQgYnk6IDxhIGhyZWY9J2h0dHBzOi8vYm9vdHN0cmFwd2VidGVtcGxhdGVzLmNvbS8nIHRhcmdldD0nX2JsYW5rJz5Cb290c3RyYXAgV2Vic2l0ZSBUZW1wbGF0ZXM8L2E+PC9kaXY+PC9kaXY="));

	
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};
	
	
	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};
	
		var goToTop = function() {

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};
	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};
		var counterWayPoint = function() {
		if ($('#bwt-counter').length > 0 ) {
			$('#bwt-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	$(function(){
	contentWayPoint();
	dropdown();
	testimonialCarousel();
	goToTop();
	counterWayPoint();
	});
})(jQuery); // End of use strict


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// lightbox plugin
	$(function()
		{
			$('[rel="lightbox"]').lightbox();
	});
	