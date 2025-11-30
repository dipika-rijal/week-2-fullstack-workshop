// Mobile Menu Toggle
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    // Toggle the CSS class (controls visibility via CSS)
    navLinks.classList.toggle('open');
    
    // Update the button text/icon for accessibility
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

// Add the event handler
menuButton.addEventListener('click', toggleMenu);

// Close the menu when a link inside is clicked (for mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu(); // Closes the menu
        }
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        // Stop the browser from submitting the form and refreshing the page
        event.preventDefault();

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();

        if (nameInput === '' || emailInput === '' || messageInput === '') {
            messageDiv.textContent = '❌ Please fill out all required fields.';
            messageDiv.className = 'error';
        } else {
            // Successful mock submission
            messageDiv.textContent = '✅ Your message is submitted! ';
            messageDiv.className = 'success';
            contactForm.reset(); // Clear the form fields
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
