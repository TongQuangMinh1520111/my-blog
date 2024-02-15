$(document).ready(function () {
    "use strict";
    $(".hamburger").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(".menu_overlay").toggleClass("opened");
    });
    
//    $('.slider').slick({
//        slidesToShow: 1,
//        infinite: true,
//        dots: true,
//        arrows: true,
//        touchMove: true,
//        pauseOnHover: false,
//        autoplay: true,
//        autoplaySpeed: 3000,
//        fade: true,
//        cssEase: 'linear',
//        responsive: [{
//            breakpoint: 751,
//            settings: {
//                dots: false,
//                arrows: false,
//            }
//    }]
//    });
    
    //  Splitting();
    //  ScrollOut({
    //    onShown: function (el) {
    //      el.classList.add("animated");
    //    },
    //    targets: '[data-splitting]',
    //    once: true
    //  });
    //
    //  if ($(window).width() > 750) {
    //    new WOW().init();
    //  }
    //
    //  if ($(window).width() > 750) {
    //    $(window).scroll(function () {
    //      if ($(this).scrollTop() > 600) {
    //        $(".side_bnr").addClass('side_bnr_fixed');
    //      } else {
    //        $(".side_bnr").removeClass('side_bnr_fixed');
    //      }
    //    });
    //  }
});
