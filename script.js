// ===== MEGA SCROLL ANIMATIONS =====

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ===== SCROLL ANIMATION OBSERVER =====
    const scrollAnimationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger counters
                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                }

                // Trigger progress bars
                if (entry.target.classList.contains('progress-fill')) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                }

                // Trigger circular progress
                if (entry.target.classList.contains('circular-progress')) {
                    const progress = entry.target.getAttribute('data-progress');
                    entry.target.style.setProperty('--progress', progress + '%');
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all scroll-animate elements
    document.querySelectorAll('.scroll-animate, .slide-left, .slide-right, .slide-up, .slide-down, .scale-in, .rotate-in, .flip-in, .bounce-in, .swing-in, .zoom-rotate, .fade-blur, .stagger-children, .pop-sequence, .counter, .progress-fill, .circular-progress').forEach(el => {
        scrollAnimationObserver.observe(el);
    });

    // ===== COUNTER ANIMATION =====
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target')) || 0;
        const duration = parseInt(element.getAttribute('data-duration')) || 2000;
        const suffix = element.getAttribute('data-suffix') || '';
        const prefix = element.getAttribute('data-prefix') || '';
        const start = 0;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);

            element.textContent = prefix + current.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // ===== PARALLAX EFFECT =====
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateParallax() {
        const scrolled = window.pageYOffset;

        document.querySelectorAll('.parallax-slow').forEach(el => {
            el.style.transform = `translateY(${scrolled * 0.1}px)`;
        });

        document.querySelectorAll('.parallax-medium').forEach(el => {
            el.style.transform = `translateY(${scrolled * 0.3}px)`;
        });

        document.querySelectorAll('.parallax-fast').forEach(el => {
            el.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // ===== MOBILE NAVIGATION =====
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ===== SMOOTH SCROLLING =====
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

    // ===== TYPEWRITER EFFECT =====
    const typewriterElements = document.querySelectorAll('.typewriter');

    typewriterElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.classList.add('typewriter-cursor');

        let i = 0;
        function type() {
            if (i < text.length) {
                el.textContent = text.slice(0, i + 1);
                i++;
                setTimeout(type, 100);
            } else {
                el.classList.remove('typewriter-cursor');
            }
        }

        setTimeout(type, 500);
    });

    // ===== ACCORDION =====
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const wasActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.accordion-item').forEach(acc => {
                acc.classList.remove('active');
            });

            // Toggle current
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });

    // ===== TABS =====
    document.querySelectorAll('.tabs').forEach(tabsContainer => {
        const tabs = tabsContainer.querySelectorAll('.tab');
        const contents = tabsContainer.nextElementSibling?.querySelectorAll('.tab-content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                if (contents) {
                    contents.forEach(c => c.style.display = 'none');
                    if (contents[index]) {
                        contents[index].style.display = 'block';
                    }
                }
            });
        });
    });

    // ===== TILT EFFECT ON HOVER =====
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // ===== RANDOM JIGGLE ON LOAD =====
    document.querySelectorAll('.jiggle-random').forEach(el => {
        const rotation = (Math.random() - 0.5) * 6;
        el.style.transform = `rotate(${rotation}deg)`;
    });

    // ===== ACTIVE NAV HIGHLIGHTING =====
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);

            if (link) {
                if (scrollPosition >= top && scrollPosition < top + height) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // ===== FORM HANDLING =====
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '✓ Sent!';
            btn.style.background = 'var(--color-secondary)';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                form.reset();
            }, 2000);
        });
    });

    // ===== SKILL BARS ANIMATION =====
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = bar.getAttribute('data-progress');
                    bar.style.width = width + '%';
                }
            });
        });
        observer.observe(bar);
    });

    // ===== SCROLL TO TOP BUTTON =====
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border: 3px solid var(--color-border);
        border-radius: 50%;
        background: var(--color-white);
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-normal);
    `;
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    // ===== RANDOM DECORATION ROTATION =====
    document.querySelectorAll('.random-rotate').forEach(el => {
        const rotation = Math.floor(Math.random() * 8) - 4;
        el.style.transform = `rotate(${rotation}deg)`;
    });

    // ===== MARQUEE PAUSE ON HOVER =====
    document.querySelectorAll('.marquee').forEach(marquee => {
        const content = marquee.querySelector('.marquee-content');
        if (content) {
            marquee.addEventListener('mouseenter', () => {
                content.style.animationPlayState = 'paused';
            });
            marquee.addEventListener('mouseleave', () => {
                content.style.animationPlayState = 'running';
            });
        }
    });

    // ===== CONSOLE GREETING =====
    console.log(`
    ╔═══════════════════════════════════════════════╗
    ║                                               ║
    ║   👋 Hello, curious developer!                ║
    ║                                               ║
    ║   Welcome to ANIRUDDHA ADAK's Portfolio       ║
    ║   AI Agent Engineer                           ║
    ║                                               ║
    ║   Built with love and lots of ☕              ║
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
    `);
});
