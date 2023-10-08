$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    $('html, body').animate({ scrollTop: 0 }, 'slow'); 

  

    $('.custom-toggler').click(function() {
        if ($(window).width() <= 768) {
            $('.navbar').toggleClass('bg-black');
        }
    });

    var typed = new Typed("#typed-text", {
        strings: ["","Learner","Web Developer", "Backend Developer","Cloud Computing","DevOps", "Java Programming", "Creative Thinker", "Innovation","Content Creater", "Software Developer"],
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


    emailjs.init("qg1Ju54CivCqTnPwu"); // Replace with your EmailJS user ID

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const data = {
            from_name: name,
            message: message,
            reply_to: email,
        };

        emailjs.send("service_grfuwbb", "template_y88xz31", data)
            .then(function(response) {
                document.getElementById('response').textContent = 'Email sent successfully.';
            }, function(error) {
                console.error('Error:', error);
                document.getElementById('response').textContent = 'An error occurred. Please try again later.';
            });
    });


});
