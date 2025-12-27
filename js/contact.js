/**
 * Contact Form Handler
 * Handles contact form submission via Web3Forms (sends to subroopu@gmail.com)
 */

const ContactForm = (() => {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    /**
     * Check for success parameter in URL
     */
    const checkUrlParams = () => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            showSuccess('Thank you for your message! We will get back to you soon.');
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    };

    /**
     * Validate form inputs
     * @returns {boolean} True if all fields are valid
     */
    const validateForm = () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('inquiry_subject').value;
        const message = document.getElementById('message').value.trim();
        const consent = document.getElementById('consent').checked;

        // Clear previous messages
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';

        // Validation checks
        if (!name) {
            showError('Please enter your name');
            return false;
        }

        if (!email) {
            showError('Please enter your email address');
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('Please enter a valid email address');
            return false;
        }

        if (!subject) {
            showError('Please select a subject');
            return false;
        }

        if (!message) {
            showError('Please enter your message');
            return false;
        }

        if (message.length < 10) {
            showError('Message must be at least 10 characters long');
            return false;
        }

        if (!consent) {
            showError('Please agree to be contacted regarding your inquiry');
            return false;
        }

        return true;
    };

    /**
     * Display error message
     * @param {string} message - Error message to display
     */
    const showError = (message) => {
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    /**
     * Display success message
     * @param {string} message - Success message to display
     */
    const showSuccess = (message) => {
        if (successMessage) {
            successMessage.textContent = message;
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    /**
     * Reset form to initial state
     */
    const resetForm = () => {
        if (contactForm) {
            contactForm.reset();
        }
    };

    /**
     * Handle form submission
     * @param {Event} e - Form submission event
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form first
        if (!validateForm()) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Get form data
            const formData = new FormData(contactForm);

            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Reset form and show success
                resetForm();
                showSuccess('Thank you for your message! We will get back to you soon.');
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    if (successMessage) successMessage.style.display = 'none';
                }, 5000);
            } else {
                showError('Something went wrong. Please try again or contact us directly at info@csiss.gov.bd');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showError('Failed to send message. Please check your connection or contact us directly at info@csiss.gov.bd');
        } finally {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    };

    /**
     * Initialize contact form
     */
    const init = () => {
        if (contactForm) {
            contactForm.addEventListener('submit', handleSubmit);
        }
    };

    // Public API
    return {
        init,
        validateForm,
        showError,
        showSuccess,
        resetForm
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ContactForm.init);
} else {
    ContactForm.init();
}
    checkUrlParams();
        