$(document).ready(function (){

    // smooth scrolling
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

    // resize
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

    // position indicator
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
        console.log(1);
        $("#home-link").removeClass("active");
        $("#how-link").removeClass("active");
        $("#expert-link").removeClass("active");
        $("#about-link").removeClass("active");
    }

});