$(document).ready(function () {
    'use strict';
	
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('bi-list bi-x-lg');
    });
    
// Toggle Share Icons
    $(".news-section .news-card .share .toggle-icons").click(function () {
        $(this).siblings('.share-icons').toggleClass('active');
    }); 
    
// Toggle Heart Button
    $(".news-section .news-card .blog-icons .heart").click(function () {
        $(this).children('i').toggleClass('far fas');
    }); 
    
//    Main Slider
    $(".main-slider .banner-slides").owlCarousel({
//        loop: true,
        items: 1,
        margin: 0,
        dots: true,
        nav: false,
        dotsContainer: '#myDots',
//        animateOut: "fadeOut",
        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
//        autoplay: true,
        autoplayTimeout: 6000,
    });
    
});

