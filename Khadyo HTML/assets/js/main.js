// toggle Menu

function myFunction(x) {
  x.classList.toggle("fa-xmark");
}

//   PreLoader



$(window).on('load', function () { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({ 'overflow': 'visible' });
});

// Tabs


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById(tabshape).style.display = "block";
  evt.currentTarget.className += " active";
}

// Slide Toggle

$(document).ready(function () {
  $(".mobile-toggle").click(function () {
    $(".nav-links").slideToggle("fast");
  });
});

// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find('.number').text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find('.name').text();
    return name.match(/ium$/);
  }
};
// bind filter button click
$('.filters-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});

// Countdown

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached

      //seconds
    }, 0)
}());

// Slider

$('.test-slider').slick({
  infinite: false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});

// transation

const div = document.getElementById("pizza-shapes")

window.addEventListener("mousemove", (e) => {
  let x = e.layerX
  let y = e.layerY
  div.style.transform = `translate(-${x / 50}px, -${y / 50}px)`
})

// counter

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 400,
    complete: ''
  }, options);

  var thisElement = $(this);

  $({ count: settings.start }).animate({ count: settings.end }, {
    duration: settings.duration,
    easing: settings.easing,
    step: function () {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};

$('#counter').jQuerySimpleCounter({ end: 2000, duration: 3000 });

// popup

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoWidth: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

$('[data-fancybox]').fancybox({
  arrows: true,
  slideshow:true,
  buttons: [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "download",
    "thumbs",
    "close"
  ],
})
$.fancybox.defaults.animationEffect = "fade";

// rocket btn

jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() < 50) {
    jQuery('#rocketmeluncur').slideUp(500);
  } else {
    jQuery('#rocketmeluncur').slideDown(500);
  }
  var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
  var scrolltoprocketmeluncur = $('rocketmeluncur');
  var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
  var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
  var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
  var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
  if (basewrocketmeluncur < 1000) {
    var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
    leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
    scrolltoprocketmeluncur.style.left = (basewrocketmeluncur + leftrocketmeluncur) + 'px';
  } else {
    scrolltoprocketmeluncur.style.left = 'auto';
    scrolltoprocketmeluncur.style.right = '10px';
  }
})

jQuery('#rocketmeluncur').click(function () {
  jQuery("html, body").animate({ scrollTop: '0px', display: 'none' }, {
    duration: 600,
    easing: 'linear'
  });

  var self = this;
  this.className += ' ' + "launchrocket";
  setTimeout(function () {
    self.className = 'showrocket';
  }, 800)
});

// Locomtie

