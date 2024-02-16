$(document).ready(function () {
    "use strict";
    $('.latestnews_info dl dd').slick({
      slidesToShow: 1,
      infinite: true,
      dots: false,
      arrows: false,
      touchMove: false,
      pauseOnHover: true,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      cssEase: 'linear'
    });
  
    $('.fruits_list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      draggable: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplay: false,
      autoplaySpeed: 5000,
      fade: true,
      cssEase: 'ease',
    });
  
    $(".image_slider").slick({
      speed: 15000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      infinite: true,
      arrows: false,
      dots: false,
      variableWidth: true,
      swipeToSlide: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
    t_loading();
    if ($(window).width() > 1050) {
      window.addEventListener("load", onLoad);
    }
  
    appHeight();
    window.addEventListener('load', function () {
      appHeight();
    }, false);
  
    $('#box_service .service_list dl dd .txt').matchHeight({
      byRow: true,
    });
  });
  
  function onLoad() {
    updateScroller();
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll);
    window.addEventListener('resize', t_fruit);
    t_fruit();
  }
  
  function t_fruit() {
    var controller = new ScrollMagic.Controller();
    $(".fruit-effect").each(function () {
      var parallax = new TweenMax.from($(this).find("img"), 1, {
        y: "-35%",
        ease: Linear.easeNone
      })
      var sceneimg = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0.9
        })
        .setTween(parallax)
        .addTo(controller);
    });
  
    $(".fruit-effect02").each(function () {
      var parallax02 = new TweenMax.from($(this).find("img"), 1, {
        y: '-35%',
        ease: Linear.easeNone
      })
      var sceneimg = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0.9
        })
        .setTween(parallax02)
        .addTo(controller);
    });
  }
  
  var html = document.documentElement;
  var body = document.body;
  var scroller = {
    target: document.querySelector(".scroll-container"),
    ease: 0.09,
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
  };
  var requestId = null;
  
  TweenLite.set(scroller.target, {
    rotation: 0.001,
    force3D: true
  });
  
  function updateScroller() {
    var resized = scroller.resizeRequest > 0;
  
    if (resized) {
      var height = scroller.target.clientHeight;
      body.style.height = height + "px";
      scroller.resizeRequest = 0;
    }
  
    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
  
    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;
  
    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
      scroller.y = scrollY;
      scroller.scrollRequest = 0;
    }
  
    TweenLite.set(scroller.target, {
      y: -scroller.y
    });
  
    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }
  
  function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  }
  
  function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  }
  
  function t_loading() {
    TweenLite.fromTo(".logo_inner", 0.5, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    })
  
    var tag = $('.charsvg');
    var tl = new TimelineLite({
      delay: 1,
    });
  
    for (var i = 0; i < 8; i++) {
      tl.fromTo(tag[i], 0.08, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: Linear.easeNone
      })
    }
  
    TweenLite.fromTo(".loading_covers", 0.75, {
      width: "0%"
    }, {
      delay: 1.9,
      width: "100%",
      ease: Power3.easeOut
    })
  
    TweenLite.fromTo(".loading_cover", 0.1, {
      autoAlpha: 0
    }, {
      delay: 2.2,
      autoAlpha: 1
    })
  
    TweenLite.fromTo("#loading", 0.75, {
      x: "0%",
    }, {
      delay: 3,
      x: "100%",
      ease: Power3.easeOut
    })
  }
  
  function appHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  }
  