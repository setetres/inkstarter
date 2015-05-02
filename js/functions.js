$(document).ready(function(){

    $('.wr').css({height: window.innerHeight});
    setTimeout(function(){
        $('.center').css({marginTop: - $('.center').height() / 2});
    },0);

    $(window).on("resize",function(){
        $('.wr').css({height: window.innerHeight});
        setTimeout(function(){
            $('.center').css({marginTop: - $('.center').height() / 2});
        },0);
    });

});