function myFunction(x) {
    x.classList.toggle("fa-xmark");
}



$(document).ready(function () {
    $(".toggle-menu").click(function () {
        $(".menu-link").toggle(500  );
    });
    $(".slick-arrow").click(function () {
        $(".fly-menu").toggle();
        $(".slick-arrow").addClass("rotate");
    });
    $(".mega-slick").click(function () {
        $(".mega-menu").toggle();
    });
    $(".blog-slick").click(function () {
        $(".blog-menu").toggle();
    });
    $(".img-slick").click(function () {
        $(".img-menu").toggle();
    });
});