// Toggle navigation menu for mobile screens
const navLinks = document.querySelector('.nav-links');

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Smooth scroll effect for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Alert when user clicks "Contact Us" button
const contactBtn = document.querySelector('.cta .hero-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert("Thank you for your interest! We will get in touch soon.");
    });
}

// Add a simple hover effect for testimonials
const testimonialCols = document.querySelectorAll('.testimonial-col');
testimonialCols.forEach(col => {
    col.addEventListener('mouseenter', () => {
        col.style.transform = "scale(1.05)";
        col.style.transition = "0.3s";
    });
    col.addEventListener('mouseleave', () => {
        col.style.transform = "scale(1)";
    });
});
