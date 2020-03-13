/*Owl carousel 2*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots: false,
    nav:true,
    navText : ["",""],
    responsive:{
        0:{
            items:3,
            margin:5
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
})

//Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится вне контейнера слайдера
var owl=$(".owl-carousel");
owl.owlCarousel();

$(".next").click(function(){
    owl.trigger("next.owl.carousel");
});
$(".prev").click(function(){
    owl.trigger("prev.owl.carousel");
});

/*/Owl carousel 2*/


/*Video*/
$('.click-for-video').click(function() {
  this.style.display = 'none';
  $('div.youtube').css('display', 'block');
  $('iframe.youtube').prop('src', 'https://www.youtube.com/embed/QQNRWq7BMGk?;autoplay=1&;controls=1&;showinfo=0');
});
/*Video*/




