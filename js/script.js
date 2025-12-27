/**
 * Presentation Controller
 * Manages slide navigation with accessibility and performance optimizations
 */
const PresentationController = (() => {
    // Private variables
    let currentSlide = 1;
    const SLIDE_SELECTOR = '.slide';
    const ACTIVE_CLASS = 'active';
    
    // Cache DOM elements
    const elements = {
        slides: null,
        prevBtn: null,
        nextBtn: null,
        currentSlideSpan: null,
        totalSlidesSpan: null
    };

    /**
     * Initialize the presentation controller
     */
    const init = () => {
        // Cache DOM elements for performance
        elements.slides = document.querySelectorAll(SLIDE_SELECTOR);
        elements.prevBtn = document.getElementById('prevBtn');
        elements.nextBtn = document.getElementById('nextBtn');
        elements.currentSlideSpan = document.getElementById('currentSlide');
        elements.totalSlidesSpan = document.getElementById('totalSlides');

        // Set total slides count
        if (elements.totalSlidesSpan) {
            elements.totalSlidesSpan.textContent = elements.slides.length;
        }

        // Display the first slide
        showSlide(currentSlide);

        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyboard);

        // Add touch navigation for mobile
        addTouchNavigation();
    };

    /**
     * Display a specific slide
     * @param {number} slideNumber - The slide number to display
     */
    const showSlide = (slideNumber) => {
        // Validate slide number
        if (slideNumber > elements.slides.length) {
            currentSlide = elements.slides.length;
        } else if (slideNumber < 1) {
            currentSlide = 1;
        }

        // Remove active class from all slides
        elements.slides.forEach(slide => {
            slide.classList.remove(ACTIVE_CLASS);
        });

        // Add active class to current slide
        if (elements.slides[currentSlide - 1]) {
            elements.slides[currentSlide - 1].classList.add(ACTIVE_CLASS);
        }

        // Update slide counter
        if (elements.currentSlideSpan) {
            elements.currentSlideSpan.textContent = currentSlide;
        }

        // Update button states
        updateButtonStates();

        // Announce slide change to screen readers
        announceSlideChange();
    };

    /**
     * Update navigation button states
     */
    const updateButtonStates = () => {
        if (elements.prevBtn) {
            elements.prevBtn.disabled = currentSlide === 1;
        }
        if (elements.nextBtn) {
            elements.nextBtn.disabled = currentSlide === elements.slides.length;
        }
    };

    /**
     * Navigate to next slide
     */
    const nextSlide = () => {
        if (currentSlide < elements.slides.length) {
            currentSlide++;
            showSlide(currentSlide);
        }
    };

    /**
     * Navigate to previous slide
     */
    const previousSlide = () => {
        if (currentSlide > 1) {
            currentSlide--;
            showSlide(currentSlide);
        }
    };

    /**
     * Handle keyboard navigation
     * @param {KeyboardEvent} event - The keyboard event
     */
    const handleKeyboard = (event) => {
        if (event.key === 'ArrowRight' || event.key === ' ') {
            event.preventDefault();
            nextSlide();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            previousSlide();
        }
    };

    /**
     * Add touch/swipe navigation for mobile devices
     */
    const addTouchNavigation = () => {
        const slidesContainer = document.querySelector('.slides-container');
        if (!slidesContainer) return;

        let startX = 0;
        let startY = 0;
        const SWIPE_THRESHOLD = 50;

        slidesContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        slidesContainer.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;

            const deltaX = startX - endX;
            const deltaY = startY - endY;

            // Only consider it a swipe if horizontal movement is greater than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
                if (deltaX > 0) {
                    // Swiped left, go to next slide
                    nextSlide();
                } else {
                    // Swiped right, go to previous slide
                    previousSlide();
                }
            }
        }, { passive: true });
    };

    /**
     * Announce slide change to screen readers
     */
    const announceSlideChange = () => {
        const slideTitle = elements.slides[currentSlide - 1]?.querySelector('h1, h2')?.textContent || '';
        const announcement = `Slide ${currentSlide} of ${elements.slides.length}. ${slideTitle}`;
        
        // Create live region announcement
        const liveRegion = document.querySelector('[aria-live="polite"]');
        if (liveRegion) {
            liveRegion.textContent = announcement;
        }
    };

    // Public API
    return {
        init,
        nextSlide,
        previousSlide,
        showSlide: (num) => {
            currentSlide = num;
            showSlide(currentSlide);
        }
    };
})();

// Initialize presentation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', PresentationController.init);
} else {
    PresentationController.init();
}
