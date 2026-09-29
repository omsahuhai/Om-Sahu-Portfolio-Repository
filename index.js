/**
 * ====================================================================
 * Om Sahu — Personal Portfolio Scripts
 * Full-Stack Developer
 * Raipur, Chhattisgarh, India
 * ====================================================================
 * 
 * Modules:
 * 1. Typewriter Hero Animation
 * 2. Sticky Navbar Glassmorphism on Scroll
 * 3. Mobile Navigation Drawer Toggle
 * 4. Smooth Anchor Link Scrolling
 * 5. ScrollSpy (Active Navigation Link Highlighting)
 * 6. Contact Direct Mailer & Copy Email Handler (No Fake States)
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initNavbarScroll();
    initMobileNav();
    initSmoothScroll();
    initScrollSpy();
    initContactActions();
});

/**
 * 1. Typewriter Effect
 * Cycles through authentic professional roles in the hero section.
 */
function initTypewriter() {
    const typedRoleEl = document.getElementById('typedRole');
    if (!typedRoleEl) return;

    const roles = [
        'Next.js & React Specialist',
        'TypeScript & Node.js Builder',
        'Full-Stack (MERN) Developer',
        'Applied AI & Web Developer'
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

        let speed = isDeleting ? 30 : 65;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2200; // Pause at end of role
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400; // Pause before typing next role
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
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

/**
 * 3. Mobile Navigation Drawer Toggle
 * Toggles hamburger menu on mobile viewports and handles auto-closing.
 */
function initMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const navBackdrop = document.getElementById('navBackdrop');
    if (!mobileToggle || !navLinks) return;

    const closeMenu = () => {
        navLinks.classList.remove('open');
        mobileToggle.textContent = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-label', 'Open Navigation');
        if (navBackdrop) navBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    };

    const openMenu = () => {
        navLinks.classList.add('open');
        mobileToggle.textContent = '✕';
        mobileToggle.setAttribute('aria-expanded', 'true');
        mobileToggle.setAttribute('aria-label', 'Close Navigation');
        if (navBackdrop) navBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    mobileToggle.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeMenu);
    }

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            closeMenu();
        }
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
            if (targetId === '#' || targetId === '') return;

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
        rootMargin: '-25% 0px -65% 0px',
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
 * 6. Contact Actions: Copy Email & Genuine Direct Mailto Launcher
 * Never simulates fake transmission states.
 */
function initContactActions() {
    // A) 1-Click Copy Email
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailToCopy = 'om.colab1@gmail.com';

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async () => {
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(emailToCopy);
                } else {
                    // Fallback
                    const tempInput = document.createElement('input');
                    tempInput.value = emailToCopy;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                }

                const copyTextSpan = copyEmailBtn.querySelector('.copy-text');
                if (copyTextSpan) {
                    const originalText = copyTextSpan.textContent;
                    copyTextSpan.textContent = 'Copied!';
                    copyEmailBtn.classList.add('copied');
                    setTimeout(() => {
                        copyTextSpan.textContent = originalText;
                        copyEmailBtn.classList.remove('copied');
                    }, 2500);
                }
            } catch (err) {
                console.error('Failed to copy email:', err);
            }
        });
    }

    // B) Direct Email Composer (Launches real mailto link, zero fake transmission)
    const contactForm = document.getElementById('contactForm');
    const statusNote = document.getElementById('formStatusNote');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('fname')?.value.trim() || '';
            const email = document.getElementById('femail')?.value.trim() || '';
            const subject = document.getElementById('fsubject')?.value.trim() || 'Project / Opportunity Inquiry';
            const msg = document.getElementById('fmsg')?.value.trim() || '';

            const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`;
            const mailtoUrl = `mailto:${emailToCopy}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

            if (statusNote) {
                statusNote.textContent = 'Launching your email client to send message...';
                statusNote.className = 'form-status-note active';
            }

            // Launch user's default email client
            window.location.href = mailtoUrl;

            setTimeout(() => {
                if (statusNote) {
                    statusNote.textContent = 'Email client triggered. You can also write directly to om.colab1@gmail.com.';
                }
            }, 2000);
        });
    }
}