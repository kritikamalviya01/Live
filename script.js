$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    $('.custom-toggler').click(function() {
        if ($(window).width() <= 768) {
            $('.navbar').toggleClass('bg-black');
        }
    });

    var typed = new Typed("#typed-text", {
        strings: ["","Web Developer", "Designer", "Creative Thinker"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
    });

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

    // Get the current URL
    const currentUrl = window.location.href;

    const links = {
        connect: document.getElementById("connect-link")
        // Add IDs for other links
    };


    for (const key in links) {
        if (links.hasOwnProperty(key)) {
            if (currentUrl.includes(links[key].href)) {
                links[key].classList.add("active");
            }
        }
    }
});
