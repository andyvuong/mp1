$(document).ready(function (){

    /*
    * Handles the nav bar smooth scroll
    */
    $("#home-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 500);
    });

    $("#how-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#how-works").offset().top
        }, 500);
    });

    $("#expert-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#experts").offset().top
        }, 500);
    });

    $("#about-link").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".footer").offset().top
        }, 500);
    });

    /*
    * Detects where to top of the scroll bar is and resizes the nav bar based on that
    */
    $(document).on('scroll', function() {
        val = $(window).scrollTop();
        //console.log(val);
        if (val > 50 && $("#nav").hasClass("nav-large")) {
            $("#nav").removeClass("nav-large");
            $("#nav").addClass("nav-small");
        }
        if (val < 50 && $("#nav").hasClass("nav-small")) {
            $("#nav").removeClass("nav-small");
            $("#nav").addClass("nav-large");
        }
    });

    /*
    * Detects where to top of the scroll bar is and updates the the indicator on the nav bar
    */
    $(document).on('scroll', function() {
        val = $(window).scrollTop();
        if (val < $("#how-works").offset().top-10) {
            clear();
            $("#home-link").addClass("active");
        }
        if (val >= $("#how-works").offset().top-10) {
            clear();
            $("#how-link").addClass("active");
        }
        if (val >= $("#experts").offset().top-10) {
            clear();
            $("#expert-link").addClass("active");
        }
    });

    function clear() {
        $("#home-link").removeClass("active");
        $("#how-link").removeClass("active");
        $("#expert-link").removeClass("active");
        $("#about-link").removeClass("active");
    }

    /*
    * Handles the carousel update
    */
    $("#car-right").click(function(e) {
        e.preventDefault();
        var slide1 = $("#slide-1");
        var slide2 = $("#slide-2");
        var slide3 = $("#slide-3");

        if (slide1.hasClass("act")) {
            slide1.removeClass("act");
            animHid(slide1, -2500);
            slide2.toggleClass("hidden"); // show
            anim(slide2, 20);
            anim(slide3, 2500);
            slide2.addClass("act");
        }
        else if (slide2.hasClass("act")) {
            slide2.removeClass("act");
            animHid(slide2, -2500);
            slide3.toggleClass("hidden"); // show
            anim(slide3, 20);
            anim(slide1, -5000);
            slide3.addClass("act");
        }
    });

    // go left
    $("#car-left").click(function(e) {
        e.preventDefault();
        var slide1 = $("#slide-1");
        var slide2 = $("#slide-2");
        var slide3 = $("#slide-3");

        if (slide3.hasClass("act")) {
            slide3.removeClass("act");
            animHid(slide3, 2500);
            slide2.toggleClass("hidden"); // show
            anim(slide2, 20);
            anim(slide1, -2500);
            slide2.addClass("act");
        }
        else if (slide2.hasClass("act")) {
            slide2.removeClass("act");
            animHid(slide2, 2500);
            slide1.toggleClass("hidden"); // show
            anim(slide1, 20);
            anim(slide3, 5000);
            slide1.addClass("act");
        }
    });

    // helper for animating the movement
    function anim(id, val) {
        $(id).animate({
            left: val,
        }, 800); 
    }

    // helper for animating the movement and hiding divs
    function animHid(id, val) {
        $(id).animate({
            left: val,
        }, {
            duration: 800,
            complete: function() {
                id.toggleClass("hidden");
            }
        });
    }

});