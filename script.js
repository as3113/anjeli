// Get the CTA button
const ctaButton = document.querySelector('.cta-button');

// Add click event to CTA button
ctaButton.addEventListener('click', function() {
    window.location.href = 'legit.html';
});

// Smooth scrolling for navigation links (only for anchor links)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href;
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // If href doesn't start with #, let the browser handle normal navigation
    });
});
