function owlCarousel1(){
	$('.slider_owl-carousel-1').owlCarousel({
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
	})
	//Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится вне контейнера слайдера
	var owl=$(".slider_owl-carousel-1");
	owl.owlCarousel();

	$(".slider__owl-next").click(function(){
	    owl.trigger("next.owl.carousel");
	});
	$(".slider__owl-prev").click(function(){
	    owl.trigger("prev.owl.carousel");
	});	
}

function owlCarousel2(){
$('.slider_owl-carousel-2').owlCarousel({
		dots: false,
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
	
	




$(document).ready(function(){
	owlCarousel1();
	owlCarousel2();
});











