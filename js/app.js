$(function() {

    let header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top - 50;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    // Menu nav toggle
    $("#nav__toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // Remove mobile nav menu and button after clicking on a link
    $("nav a").on("click", function(event) {
        event.preventDefault();

        $("nav.active").removeClass("active");
        $("#nav__toggle").removeClass("active");
    });

    // Acordeon collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);

        $this.data("collapse");
        $this.toggleClass("active");
    });

    // Slider
    $("[data-slider]").slick({
        infinite:true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
       });
});
    