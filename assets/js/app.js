$(function() {
    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();


    /* Header fixed */
    checkScroll(scrollOffset)

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        
        if(scrollOffset >= introH) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var blockId = $(this).data('scroll');
        var blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        });
        $("#nav, #nav-toggle").removeClass("active");
    });

    /* Menu nav toggle */
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");

        $("#nav").toggleClass("active");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('collapse');
        $(this).toggleClass("active");
    });
    
    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
