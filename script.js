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
// Modal Functions
function openModal() {
    document.getElementById("featuresModal").style.display = "block";
}

function closeModal() {
    document.getElementById("featuresModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById("featuresModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
