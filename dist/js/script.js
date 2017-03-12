$(document).ready(function () {

    var button = $('.btn-extended'),
        height = 0,
        article = '',
        arrow = '';

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

});

