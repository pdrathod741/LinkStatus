$(document).ready(function () {
    $(".mobile-toggle").click(function () {
        $(".nav-links").fadeToggle()(500);
    });
    $(".about-arrow").click(function () {
        $(".about-link").toggle();
    });
    $(".sol-arrow").click(function () {
        $(".sol-link").toggle();
    });
    $(".ind-arrow").click(function () {
        $(".ind-link").toggle();
    });
    $(".res-arrow").click(function () {
        $(".res-link").toggle();
    });
});

function myFunction(x) {
    x.classList.toggle("fa-xmark");
}

// $(".about-arrow").click(function(){
//     $(this).toggleClass("change");
//   });