/**
 * Contact Form Handler
 * Handles contact form submission, validation, and feedback
 */

const ContactForm = (() => {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    /**
     * Validate form inputs
     * @returns {boolean} True if all fields are valid
     */
    const validateForm = () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

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
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const organization = document.getElementById('organization').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        const partnership = document.getElementById('partnership').checked;

        // Prepare submission data
        const formData = {
            name,
            email,
            phone,
            organization,
            subject,
            message,
            partnership,
            timestamp: new Date().toISOString()
        };

        // Log data (for demonstration - in production, send to backend)
        console.log('Form submitted:', formData);

        // Simulate sending data
        submitForm(formData);
    };

    /**
     * Submit form data to backend
     * @param {Object} formData - Form data to submit
     */
    const submitForm = (formData) => {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call (in production, replace with actual endpoint)
        setTimeout(() => {
            // For demonstration, always succeed
            // In production, implement actual API endpoint
            
            // Save to localStorage for demonstration
            const submissions = JSON.parse(localStorage.getItem('csiss_submissions') || '[]');
            submissions.push(formData);
            localStorage.setItem('csiss_submissions', JSON.stringify(submissions));

            // Reset form and show success
            resetForm();
            showSuccess('Thank you for your inquiry! We will contact you soon.');

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Clear success message after 5 seconds
            setTimeout(() => {
                if (successMessage) successMessage.style.display = 'none';
            }, 5000);
        }, 1000);
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
