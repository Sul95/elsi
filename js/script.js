
$(document).ready(function() {
    /***************** pc menu *****************/

    $('#gnb > li').hover(function() {
        $('.submenu, .submenu-3', this).stop().slideDown();
    }, function() {
        $('.submenu, .submenu-3', this).stop().slideUp();
    });


    /***************** mobile-open & close *****************/

    $("#m-open").click(function() {
        $("#m-menu").animate({right: "0%"}, 500);
        $("#m-back").fadeIn(600);
    })

    $(".close").click(function() {
        $("#m-menu").animate({right: "-100%"}, 500);
        $("#m-back").fadeOut(600);
    })

    /***************** m-toggle btn *****************/

    $('.m-gnb-2').click(function() {
        
    })

    // $('.m-gnb-2').click(function() {
    //     $('.m-submenu').slideToggle();
    // });
   
});




