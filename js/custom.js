$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $("header").addClass('heder-top');
    }
    else {
        $("header").removeClass('heder-top');
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $(".top-btn").fadeIn();
    }
    else {
        $(".top-btn").fadeOut();
    }
});

$(window).on('load', function(){
    $('.loader').delay('1400').fadeOut('fast');
});

$(document).ready(function(){
    $('.toggle').click(function(){
        $('.mobile-menu-list').show();
        // console.log('gsggsgs');
    });
    $('.close').click(function(){
        $('.mobile-menu-list').hide();
    });

    new WOW().init();
});