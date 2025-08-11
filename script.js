
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Reusable function to copy email and show alert
const copyEmail = () => {
    const email = 'tavasulmehdi23@gmail.com';
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Show the custom alert
    const emailAlert = document.getElementById('email-alert');
    emailAlert.classList.remove('hidden');
    emailAlert.classList.add('animate-slide-in-up');

    // Hide the alert after 3 seconds
    setTimeout(() => {
        emailAlert.classList.add('hidden');
        emailAlert.classList.remove('animate-slide-in-up');
    }, 3000);
};

// Event listeners for the email copy buttons
const copyEmailBtnHero = document.getElementById('copyEmailBtnHero');
const copyEmailBtnContact = document.getElementById('copyEmailBtnContact');
const closeAlertBtn = document.getElementById('close-alert-btn');

if (copyEmailBtnHero) {
    copyEmailBtnHero.addEventListener('click', copyEmail);
}

if (copyEmailBtnContact) {
    copyEmailBtnContact.addEventListener('click', copyEmail);
}

if (closeAlertBtn) {
    closeAlertBtn.addEventListener('click', () => {
        const emailAlert = document.getElementById('email-alert');
        emailAlert.classList.add('hidden');
    });
}