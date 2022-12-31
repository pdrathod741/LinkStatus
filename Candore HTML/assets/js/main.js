// On Scroll Header

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".s-header").addClass("d-block");
        $('.s-header').slideDown('slow');
    } else {
        $(".s-header").removeClass("d-block");
        $('.s-header').slideUp('slow');
    }
});

// About Section

$(document).ready(function () {
    $(".down").click(function () {
        $('html, body').animate({
            scrollTop: $("#About-section").offset().top
        }, 1000);
    });
});

// Pre Loder

$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
  })

// Scroll

// Owl Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay : true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// Toggle

$(document).ready(function(){
    $(".bars").click(function(){
      $(".menus-links").slideToggle("slow");
    });
});


