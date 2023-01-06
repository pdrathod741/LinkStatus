// sticky header

var $stickyContainer = $("[data-sticky-header-container]");
var $sticky = $("[data-sticky-header]");
var marginTop = 100; /* [As optional height + space] */

var setSticky = function () {
  var scroll = window.pageYOffset;
  var topPoint = $stickyContainer.offset().top;

  topPoint += marginTop;

  if (scroll >= topPoint) {
    $sticky.addClass("stucked");
  } else if (scroll === 0) {
    $sticky.removeClass("stucked");
  }
};

var bindRaf = function (fn, throttle) {
  var isRunning, that, args;

  var run = function () {
    isRunning = false;
    fn.apply(that, args);
  };

  return function () {
    that = this;
    args = arguments;

    if (isRunning && throttle) {
      return;
    }

    isRunning = true;
    requestAnimationFrame(run);
  };
};

// defer event registration to handle browser
// potentially restoring previous scroll position
setTimeout(function () {
  // Called on every `scroll` event and on `load`
  $(window)
    .on("load.stickyHeader", setSticky.bind(this))
    .on("scroll.stickyHeader", bindRaf(setSticky.bind(this)));
}, 100);

// active
$(document).ready(function () {
  $(".nav-links li a").click(function () {
    $(".nav-links li").removeClass("link-active");
    $(".nav-links li").addClass("link-active");
  });
});

//   Verticle Slider
var $counter = $(".slide-count");
var $slider = $(".myslider");

$slider.on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $counter.text(i + "/" + slick.slideCount);
  }
);

$(".myslider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  dots: true,
  vertical: true,
  verticalSwiping: true,
  zIndex: 1000,
});

//   isotpe

// external js: isotope.pkgd.js

// init Isotope
var $grid = $(".grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows",
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find(".number").text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find(".name").text();
    return name.match(/ium$/);
  },
};
// bind filter button click
$(".filters-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$(".button-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});

//   Counter

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};

$("#main").jQuerySimpleCounter({ end: 10, duration: 2000 });
$("#number1").jQuerySimpleCounter({ end: 2, duration: 3000 });
$("#number2").jQuerySimpleCounter({ end: 40, duration: 2000 });
$("#number3").jQuerySimpleCounter({ end: 12, duration: 2000 });
$("#number4").jQuerySimpleCounter({ end: 26, duration: 2000 });

/* AUTHOR LINK */
$(".about-me-img").hover(
  function () {
    $(".authorWindowWrapper").stop().fadeIn("fast").find("p").addClass("trans");
  },
  function () {
    $(".authorWindowWrapper")
      .stop()
      .fadeOut("fast")
      .find("p")
      .removeClass("trans");
  }
);

// tabs

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

// choose tab

function openC(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("c-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("c-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" c-active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " c-active";

  document.getElementById(tabshape).style.display = "block";
  evt.currentTarget.className += " c-active";
}

// Jquery Progressbar

var skills = {
  ht: 79,
  cs: 72,
  js: 88,
};

$.each(skills, function (key, value) {
  var skillbar = $("." + key);

  skillbar.animate(
    {
      width: value + "%",
    },
    1000,
    function () {
      $(".speech-bubble").fadeIn();
    }
  );
});

// new Progress

$(".circle_percent").each(function () {
  var $this = $(this),
    $dataV = $this.data("percent"),
    $dataDeg = $dataV * 3.6,
    $round = $this.find(".round_per");
  $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  $this.append(
    '<div class="circle_inbox"><span class="percent_text"></span></div>'
  );
  $this.prop("Counter", 0).animate(
    { Counter: $dataV },
    {
      duration: 2000,
      easing: "swing",
      step: function (now) {
        $this.find(".percent_text").text(Math.ceil(now) + "%");
      },
    }
  );
  if ($dataV >= 51) {
    $round.css("transform", "rotate(" + 360 + "deg)");
    setTimeout(function () {
      $this.addClass("percent_more");
    }, 1000);
    setTimeout(function () {
      $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    }, 1000);
  }
});

// sidemenu

function toggleSideMenu() {
  document.getElementById("side-menu").classList.toggle("active");
}
// Main toggle
function MainMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

function Back(x) {
  x.classList.toggle("fa-arrow-left-long");
}

// rocket btn

var btn = $("#top-scroll-btn");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// swiper Slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  autoplay: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1540: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Fancy Box

Fancybox.bind(
  '[data-fancybox="side-gallery"]',
  '[data-fancybox="isotope-gallery"]',
  '[data-fancybox="slider-gallery"]',
  {
    Carousel: {
      on: {
        change: (that) => {
          // Sync Carousel slide
          mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  }
);

// LOcoMotive


const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
