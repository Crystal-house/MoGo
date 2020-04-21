/*Owl carousel 2*/
$('.owl-carousel').owlCarousel({
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
var owl=$(".owl-carousel");
owl.owlCarousel();

$(".slider__owl-next").click(function(){
    owl.trigger("next.owl.carousel");
});
$(".slider__owl-prev").click(function(){
    owl.trigger("prev.owl.carousel");
});

/*/Owl carousel 2*/

