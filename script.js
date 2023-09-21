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

    var typed = new Typed("#typed-text", {
        strings: ["","Web Developer", "Designer", "Creative Thinker"],
        typeSpeed: 60, // Typing speed in milliseconds
        backSpeed: 40, // Backspacing speed in milliseconds
        loop: true, // Loop the animation
    });

    $(document).ready(function() {
        // Smooth scrolling for all anchor links
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
    });
});

