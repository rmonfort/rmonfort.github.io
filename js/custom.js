// Smooth page transition
$(function() {
    $('.nav-link').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 1000, 'swing');
    });
});

// Navbar active text management
$(".nav a").on("click", function() {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

$("#readMore").click(function() {
    $(".nav").find(".active").removeClass("active");
    $(".nav a[href$='about']").parent().addClass("active");
});

// Fix for mobile menu collapsing issue
$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});

//Scrollspy
$(document).ready(function(){
    $("body").scrollspy({
        target: "#myNavbar",
        offset: 90
    }) 
});