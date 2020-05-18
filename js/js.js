function initReviewSlider(){
	$('.review-slider').each(function() {
		var el = $(this); //общий контейнер, в котором лежат и слайдер, и стрелки
		var slider = el.find('.review-slider__slider');
		var nextArrow = el.find('.slider__owl-next');
		var prevArrow = el.find('.slider__owl-prev');
		
		slider.owlCarousel({
			// параметы
			loop:true,
		    margin:3,
		    dots: false,
		    nav:false,
		    smartSpeed:700,
		    responsive:{
		        0:{
		            items:1,
		        },
		        600:{
		            items:1,
		        },
		        1000:{
		            items:1,
		        }
		    }
		});
		
		nextArrow.click(function(){
			slider.trigger('next.owl.carousel');
		});
		
		
		prevArrow.click(function(){
			slider.trigger('prev.owl.carousel');
		});
	});	
}

function initPhotoSlider(){
	$('.photo-slider__slider').owlCarousel({
		dots: false,
		nav:false,
	    responsive:{
	    	0:{
	            items:3,
	            margin:15,
	        },
	        350:{
	            items:4,
	            margin:15,
	        },
	        600:{
	            items:6,
	            margin:15,
	        },
	        1000:{
	            items:6,
	        }
	    }
	})
}

function initAccordion(){
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fas').removeClass().addClass('fas fa-chevron-up');
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fas').removeClass().addClass('fas fa-chevron-down');
	});
}



$(document).ready(function(){
	initReviewSlider();
	initAccordion();
	initPhotoSlider();
});










