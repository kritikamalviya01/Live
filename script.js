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
        strings: ["","Learner","Web Developer","Digital Strategist","Backend Developer","Cloud Computing","DevOps","Java Programming","Founder","Creative Thinker", "Innovation","Content Creator", "Software Developer"],
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

 
    const currentUrl = window.location.href;

    // Remove the "active" class from all links
    $('a.nav-link').removeClass('active');

    // Iterate through the links and add "active" class to the appropriate one
    $('a.nav-link').each(function () {
        const href = $(this).attr('href');
        if (currentUrl.includes(href)) {
            $(this).addClass('active');
        }
    });

    updateExperienceYears();
    // Update the experience years every 1 minute (adjust the interval as needed)
    setInterval(updateExperienceYears, 2628000000); //  1 month = 2,628,000,000 milliseconds 2628000000

    // Email JS Function
    emailjs.init("N00I1kYaAC2QpPm6v");

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

        emailjs.send("service_woa4biw", "template_y88xz31", data)
            .then(function(response) {
                document.getElementById('response').textContent = 'Email sent successfully.';
            }, function(error) {
                console.error('Error:', error);
                document.getElementById('response').textContent = 'An error occurred. Please try again later.';
            });
    });


});


function calculateExperienceDuration(startDate, endDate) {
    const years = endDate.diff(startDate, 'year');
    startDate = startDate.add(years, 'year');
    const months = endDate.diff(startDate, 'month');
    
    if (years > 0 && months > 0) {
        return `${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''}`;
    } else if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''}`;
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''}`;
    } else {
        return 'Less than a month';
    }
}

// Function to update experience years
function updateExperienceYears() {
    $('.experience-item').each(function () {
        const startDateStr = $(this).data('start-date');
        const startDate = dayjs(startDateStr);
        const currentDate = dayjs();
        const duration = calculateExperienceDuration(startDate, currentDate);
        const durationElement = $(this).find('.experience-duration');
        durationElement.text(` (${duration})`);
    });
}

// Update the experience years every month
setInterval(updateExperienceYears, 2628000000); // 1 month = 2,628,000,000 milliseconds 2628000000

