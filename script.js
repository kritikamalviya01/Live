$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    $('.custom-toggler').click(function() {
        if ($(window).width() <= 768) { // Only apply this on smaller screens (responsive mode)
            $('.navbar').toggleClass('bg-black');
        }
    });
});

