$(document).ready(function(){

    $(window).scroll(function(){

        if($(window).scrollTop() > 970){

            $('.navbar').addClass('navbar-fixed-top');
        } else{
            $('.navbar').removeClass('navbar-fixed-top');
        }
    })
});