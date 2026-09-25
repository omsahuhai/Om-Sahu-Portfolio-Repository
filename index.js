/**
 * ====================================================================
 * Om Sahu — Personal Portfolio Scripts
 * Full-Stack Developer & AI Systems Engineer
 * Raipur, Chhattisgarh, India
 * ====================================================================
 * 
 * Modules:
 * 1. Typewriter Hero Animation
 * 2. Sticky Navbar Glassmorphism on Scroll
 * 3. Mobile Navigation Drawer Toggle
 * 4. Smooth Anchor Link Scrolling
 * 5. ScrollSpy (Active Navigation Link Highlighting)
 * 6. Contact Form Interactive Handler
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initNavbarScroll();
    initMobileNav();
    initSmoothScroll();
    initScrollSpy();
    initContactForm();
});

/**
 * 1. Typewriter Effect
 * Cycles through professional roles in the hero section.
 */
function initTypewriter() {
    const typedRoleEl = document.getElementById('typedRole');
    if (!typedRoleEl) return;

    const roles = [
        'Full-Stack (MERN) Developer',
        'Next.js & TypeScript Specialist',
        'AI & Gemini API Builder',
        'SaaS Systems Craftsman'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typedRoleEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedRoleEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 30 : 70;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2000; // Pause at the end of the role
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400; // Pause before typing the next role
        }

        setTimeout(typeEffect, speed);
    };

    setTimeout(typeEffect, 600);
}

/**
 * 2. Sticky Navbar Glassmorphism
 * Adds a blurred backdrop and border when scrolled past threshold.
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load
}

/**
 * 3. Mobile Navigation Drawer Toggle
 * Toggles hamburger menu on mobile viewports and handles auto-closing.
 */
function initMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (!mobileToggle || !navLinks) return;

    mobileToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        mobileToggle.textContent = isOpen ? '✕' : '☰';
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking outside or selecting a link
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            mobileToggle.textContent = '☰';
            mobileToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/**
 * 4. Smooth Anchor Link Scrolling
 * Provides smooth scrolling with fixed navbar offset compensation.
 */
function initSmoothScroll() {
    const navbar = document.getElementById('navbar');

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const navHeight = navbar ? navbar.offsetHeight : 0;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight - 16;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * 5. ScrollSpy
 * Highlights the current section's link in the navigation bar.
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                navLinks.forEach((link) => {
                    const href = link.getAttribute('href');
                    if (href === `#${activeId}`) {
                        link.classList.add('active');
                    } else if (href && href.startsWith('#')) {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));
}

/**
 * 6. Contact Form Interactive Handler
 * Provides visual feedback during form submission and simulates transmission.
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (!submitBtn) return;

        const originalText = submitBtn.innerHTML;
        const originalBg = submitBtn.style.background;
        const originalBorder = submitBtn.style.borderColor;

        // Transition to transmitting state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⚡ TRANSMITTING PACKET...';
        submitBtn.style.background = 'var(--accent-hover)';
        submitBtn.style.borderColor = 'var(--accent-hover)';

        // Simulated network transmission delay
        setTimeout(() => {
            submitBtn.innerHTML = '✓ MESSAGE TRANSMITTED DIRECTLY';
            submitBtn.style.background = '#00b894';
            submitBtn.style.borderColor = '#00b894';

            // Reset after display period
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = originalBg;
                submitBtn.style.borderColor = originalBorder;
                contactForm.reset();
            }, 3500);
        }, 1100);
    });
}