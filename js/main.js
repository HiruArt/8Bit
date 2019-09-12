$(document).ready(function () {
    $('.top-table__top-item').click(function (e) {
        if($(this).hasClass('open-list')){
            $(this).closest('.top-table__top-list').find('.top-table__bottom').slideUp();
            $(this).removeClass('open-list');
        }   else {
            $(this).closest('.top-table__top-list').find('.top-table__bottom').slideDown();
            $(this).addClass('open-list');
        }
    });

    $('.header__lang-link--active').click(function () {
        $('.header__lang-popup').slideToggle();
        $('.header__lang-link--active').toggleClass('lang-arrow');
    });
    $('.header__lang-popup-link').click(function () {
        $('.header__lang-popup').slideToggle();
        $('.header__lang-link--active').toggleClass('lang-arrow');
    });

    if($(window).width() > 1150 ) {
        // var coin1 = document.getElementById('coin1');
        var coin2 = document.getElementById('coin2');
        var coin3 = document.getElementById('coin3');
        var coin4 = document.getElementById('coin4');
        var coin5 = document.getElementById('coin5');
        var coin6 = document.getElementById('coin6');
        var coin7 = document.getElementById('coin7');
        var coin8 = document.getElementById('coin8');

        // var parallax1 = new Parallax(coin1);
        var parallax2 = new Parallax(coin2);
        var parallax3 = new Parallax(coin3);
        var parallax4 = new Parallax(coin4);
        var parallax5 = new Parallax(coin5);
        var parallax6 = new Parallax(coin6);
        var parallax7 = new Parallax(coin7);
        var parallax8 = new Parallax(coin8);
    }


    $('.showMore').click(function(e){
        var btn = e.target;
        $(btn).toggleClass('showMore--toggle');
        var parent = e.target.closest('.top-table__bottom-item');
        $(parent).find('.top-table__bottom-item-content:nth-child(n+5)').slideToggle();
    });

    var bLazy = new Blazy();
});



