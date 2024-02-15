(function ($) {
  function init() {
    modal();
  }

  function modal() {
    $(".openModalBtn").on("click", function () {
      var modalId = $(this).data("modal");
      $("." + modalId).fadeIn();
    });

    $(".closeModalBtn").on("click", function () {
      $(this).closest(".modal").fadeOut();
    });

    $(window).on("click", function (event) {
      if (event.target.classList.contains("modal")) {
        $(event.target).fadeOut();
      }
    });
  }

  $(function () {
    init();
  });

  $(".select01").click(function () {
    $(this).toggleClass("active");
  });

  $(".select02").click(function () {
    $(this).closest(".aside-box").find(".select02").removeClass("active");
    $(this).toggleClass("active");
  });

  if ($(".link .sub").length) {
    $(".link .sub").hide();
    $(".link span").click(function () {
      $(".link span").not(this).removeClass("active");
      $(".link span").not(this).parent().find(".sub").slideUp();
      $(this).toggleClass("active");
      $(this).parent().find(".sub").slideToggle();
    });
  }

  if ($(".menu01").length) {
    $(".menu01 .btn-tab").each(function (index) {
      $(this).click(function () {
        $(".aside-content .aside-block").removeClass("active");
        $(".aside-content .aside-block").eq(index).addClass("active");
      });
    });
    if ($(window).width() > 768) {
      $(".menu01 .btn-tab").eq(0).addClass("active");
      $(".menu01 .btn-tab").each(function (index) {
        $(this).click(function () {
          $(".menu01 .btn-tab").removeClass("active");
          $(this).addClass("active");
        });
      });
    } else {
      $(".menu01 .btn-menu02").click(function () {
        $(".menu01 .btn-tab").removeClass("active");
        $(".aside-right").removeClass("show");
        $(this).toggleClass("active");
        $(".menu02").toggleClass("show");
      });

      $(".close-aside").click(function () {
        $(".menu01 .btn-tab").removeClass("active");
        $(".aside-right").removeClass("show");
        $("body").removeClass("no-fixed");
      });

      $(".btn-tab").click(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(".btn-tab").removeClass("active");
          $(this).addClass("active");
        }
      });

      $(".menu01").click(function () {
        if ($(".btn-tab").hasClass("active")) {
          $(".aside-right").addClass("show");
          $("body").addClass("no-fixed");
        } else {
          $(".aside-right").removeClass("show");
          $("body").removeClass("no-fixed");
        }
      });

      $(".btn-tab").click(function () {
        if ($(".btn-menu02").hasClass("active")) {
          $(".btn-menu02").removeClass("active");
          $(".menu02").removeClass("show");
        }
      });
    }
  }

  if ($(".popover").length) {
    $(".popover .btn-popup").click(function () {
      $(this).parent().hide();
    });
  }

  if ($(window).width() < 769) {
    $(".header-control .checkboxToggle-icon ").change(function () {
      if (this.checked) {
        $(this).parent().find(".checkboxToggle-text").addClass("active");
      } else {
        $(this).parent().find(".checkboxToggle-text").removeClass("active");
      }
    });

    $(".control-blockdown").click(function () {
      $(".blockdown").slideToggle();
      $(".article-content").toggleClass("changeheight");
    });

    $("#input-area")
      .on("change keydown keyup paste cut", "textarea", function () {
        $(this)
          .height(0)
          .height(this.scrollHeight + 2);
        var h = $(this).height();
        if (h >= 35) {
          $("#input-area").css("border-radius", "10px");
          $(".article-content").css(
            "height",
            "calc(var(--vh, 1vh) * 100 - 185px - " + h + "px)"
          );
          if (h >= 100) {
            $("#input-area textarea").css("overflow", "auto");
          } else {
            $("#input-area textarea").css("overflow", "hidden");
          }
        } else {
          $("#input-area").css("border-radius", "30px");
          $(".article-content").css(
            "height",
            "calc(var(--vh, 1vh) * 100 - 215px)"
          );
        }
      })
      .find("textarea")
      .change();

    let scrollY = 0;

    document.querySelectorAll("input, textarea").forEach((element) => {
      element.addEventListener("focus", () => {
        // Save the current scroll position
        scrollY = window.scrollY;
        // Disable scrolling
        document.body.style.position = "fixed";
        document.body.style.overflowY = "scroll";
        // Set the scroll position back to the original
        window.scrollTo(0, scrollY);
      });

      element.addEventListener("blur", () => {
        // Enable scrolling
        document.body.style.position = "";
        document.body.style.overflowY = "";
        // Set the scroll position back to the original
        window.scrollTo(0, scrollY);
      });
    });
  }
  appHeight();
})(jQuery);

function appHeight() {
  var setVhCustomVar = function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  };

  setVhCustomVar();

  window.addEventListener(
    "load",
    function () {
      setVhCustomVar();
    },
    false
  );

  window.addEventListener(
    "orientationchange",
    function () {
      setTimeout(function () {
        setVhCustomVar();
      }, 400);
    },
    false
  );
}
