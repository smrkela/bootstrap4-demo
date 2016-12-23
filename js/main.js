$(document).ready(function () {

    $(window).scroll(function () {

        updateNavPosition();
    })

    function updateNavPosition() {

        if ($(window).scrollTop() > 970) {

            $('.navbar').addClass('navbar-fixed-top');
            // $('body').css('margin-top', '180px');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            // $('body').css('margin-top', '');
        }
    }

    updateNavPosition();

    $("a[href^='#']").on('click', function (event) {

        event.preventDefault();

        var hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 300, function () {
            window.location.hash = hash;
        }
        );
    });

    var animatedElementCounter = 0;

    $('.js-wp').each(function (index, item) {

        var $element = $(item);
        var animationClass = $element.data('animate');

        item.id = "animationId" + ++animatedElementCounter;

        if ($element.data('animate-in') !== undefined)
            $element.css('opacity', 0);

        if ($element.data('animate-out') !== undefined)
            $element.css('opacity', 1);

        if ($element.data('animate-delay') !== undefined)
            $element.css('animation-delay', $element.data('animate-delay'));

        $('#' + item.id).waypoint(function (direction) {

            $item = $(item);
            $item.addClass('animated ' + animationClass);

            if ($item.data('animate-in') !== undefined)
                $item.css('opacity', 1);

            if ($item.data('animate-out') !== undefined)
                $item.css('opacity', 0);
        }, {
                offset: '80%'
            })
    });

});

