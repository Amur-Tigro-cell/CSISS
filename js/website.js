/**
 * Website Navigation Handler
 * Manages mobile menu and page navigation
 */
const WebsiteNavigator = (() => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');

    const init = () => {
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMenu);
        }

        // Close menu when link is clicked
        if (navMenu) {
            const links = navMenu.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', closeMenu);
            });
        }

        // Set active link based on current page
        setActiveNavLink();

        // Close menu when clicking outside
        document.addEventListener('click', closeMenuOnClickOutside);
    };

    const toggleMenu = () => {
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
    };

    const closeMenu = () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    };

    const closeMenuOnClickOutside = (event) => {
        if (!event.target.closest('.navbar') && navMenu) {
            navMenu.classList.remove('active');
        }
    };

    const setActiveNavLink = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    return {
        init
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', WebsiteNavigator.init);
} else {
    WebsiteNavigator.init();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
