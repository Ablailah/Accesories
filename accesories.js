// Smooth Scroll for Navigation Links
document.querySelectorAll('#nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    });
});

// Toggle Sidebar
const sidebarMenu = document.querySelector('.sidebar-menu');
const overlay = document.querySelector('.overlay');
const closeSidebar = document.querySelector('.close-sidebar');

if (sidebarMenu && overlay && closeSidebar) {
    closeSidebar.addEventListener('click', () => {
        sidebarMenu.style.display = 'none';
        overlay.style.display = 'none';
    });
    overlay.addEventListener('click', () => {
        sidebarMenu.style.display = 'none';
        overlay.style.display = 'none';
    });
}

// Back to Top Button
const backToTopButton = document.querySelector('#btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Contact Form Submission
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset();
    });
}
