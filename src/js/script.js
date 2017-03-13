$(document).ready(function () {

    var button = $('.btn-extended'),
        height = 0,
        article = '',
        arrow = '',
        triggerHead = $('.trigger').find('.trigger-head'),
        toTop = $('#to-top'),
        navbar = $('header.menu'),
        dropdown = navbar.find('.dropdown');

    //Плавное раскрытие текстового блока
    button.on('click', '.text', function () {
        article = $(this).closest('.container').find('.hid-text');
        height = article.find('.text').height() + article.find('h2').height() + 15;
        arrow = $(this).find('.arrow-down');

        article.toggleClass('active');
        if (article.hasClass('active')) {
            article.animate({
                height: height
            }, 500);
        } else {
            article.animate({
                height: 150
            }, 500);
        }
    });

    triggerHead.on('click', function (e) {
        e.stopPropagation();
        $(this).closest('.trigger').toggleClass('active');
    });

    //window.onscroll = function() {
    $(window).on('scroll', function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= 250) {
            toTop.show();
        } else {
            toTop.hide();
        }
    });
    //Бургер
    toTop.on('click', function () {
        $("body,html").stop().animate({
            scrollTop:0
        }, 500);
    });

    $('#burger').on('click', function () {
        navbar.toggleClass('active');
        if (navbar.hasClass('active')) {
            dropdown.slideDown(500);
        } else {
            dropdown.slideUp(500);
        }
    });
    //Плавный скролл
    $('.scroll').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);

        navbar.removeClass('active');
    });
    //Модальное окно
    $('.pop-img').on('click', function(){
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");

        $('#myModal').find('.modal-image').attr('src', bg);
    });

    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: true,
        animationLoop: true
    });

});

