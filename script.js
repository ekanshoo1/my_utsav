let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;

    // Update all elements with data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (lang === 'hi') {
            element.textContent = element.getAttribute('data-hi');
        }
    });

    // Update button active state
    document.getElementById('enBtn').classList.toggle('active', lang === 'en');
    document.getElementById('hiBtn').classList.toggle('active', lang === 'hi');

    // Update placeholder text
    document.querySelectorAll('[data-en-placeholder]').forEach(element => {
        if (lang === 'en') {
            element.placeholder = element.getAttribute('data-en-placeholder');
        } else if (lang === 'hi') {
            element.placeholder = element.getAttribute('data-hi-placeholder');
        }
    });
}

function selectVenue(type) {
    document.getElementById("venueType").value = type;
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    if (currentLanguage === 'en') {
        document.getElementById("successMessage").innerHTML =
            "🎉 Booking Request Sent Successfully! We will contact you shortly.";
    } else {
        document.getElementById("successMessage").innerHTML =
            "🎉 बुकिंग अनुरोध सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।";
    }

    this.reset();
});

// Scroll Animation with Intersection Observer
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the index position of the element
                const allAnimateElements = document.querySelectorAll('.scroll-animate');
                let elementIndex = 0;
                for (let i = 0; i < allAnimateElements.length; i++) {
                    if (allAnimateElements[i] === entry.target) {
                        elementIndex = i;
                        break;
                    }
                }

                // Apply animation with staggered delay
                const delay = elementIndex * 0.15;
                entry.target.style.animation = `scrollFadeIn 0.8s ease forwards ${delay}s`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all scroll-animate elements
    document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
    });
});

