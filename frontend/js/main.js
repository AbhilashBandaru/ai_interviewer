/* =====================================================
   AI INTERVIEWER — MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu when a navigation link is clicked */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =====================================================
   2. SMOOTH SCROLLING
===================================================== */

const pageLinks = document.querySelectorAll(
    'a[href^="#"]'
);


pageLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        const navbarHeight =
            document.querySelector(".navbar")?.offsetHeight || 0;


        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;


        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =====================================================
   3. ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const desktopNavLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    desktopNavLinks.forEach((link) => {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (
            href === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =====================================================
   4. HERO MOUSE PARALLAX
===================================================== */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual) {

    document.addEventListener(
        "mousemove",
        (event) => {

            /* Disable effect on smaller screens */

            if (window.innerWidth <= 850) {
                heroVisual.style.transform = "";
                return;
            }


            const x =
                (window.innerWidth / 2 - event.clientX) / 80;

            const y =
                (window.innerHeight / 2 - event.clientY) / 80;


            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );


    /* Reset position when mouse leaves */

    document.addEventListener(
        "mouseleave",
        () => {

            heroVisual.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =====================================================
   5. INTERVIEW PREVIEW INTERACTION
===================================================== */

const miniSubmit =
    document.querySelector(".mini-submit");

const scoreText =
    document.querySelector(
        ".floating-score strong"
    );

const aiStatus =
    document.querySelector(".floating-ai");


if (
    miniSubmit &&
    scoreText &&
    aiStatus
) {

    miniSubmit.addEventListener(
        "click",
        () => {

            /* Prevent repeated clicks */

            if (
                miniSubmit.dataset.analyzing === "true"
            ) {
                return;
            }


            miniSubmit.dataset.analyzing =
                "true";


            /* Step 1 — analyzing */

            miniSubmit.textContent =
                "Analyzing...";


            aiStatus.innerHTML =
                '<span class="pulse"></span> AI is evaluating your answer...';


            scoreText.textContent =
                "Analyzing answer...";


            /* Step 2 — evaluation */

            setTimeout(() => {

                miniSubmit.textContent =
                    "Answer Evaluated ✓";


                scoreText.textContent =
                    "Great answer!";


                aiStatus.innerHTML =
                    '<span class="pulse"></span> Feedback ready';


                miniSubmit.dataset.analyzing =
                    "false";


            }, 1500);

        }
    );

}


/* =====================================================
   6. SCROLL REVEAL ANIMATIONS
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .workflow-step, .performance-dashboard, .cta-card"
    );


if (
    revealElements.length &&
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        (element) => {

            element.classList.add(
                "reveal"
            );


            revealObserver.observe(
                element
            );

        }
    );

}


/* =====================================================
   7. PERFORMANCE BAR ANIMATION
===================================================== */

const performanceBars =
    document.querySelectorAll(
        ".bar-value"
    );


if (
    performanceBars.length &&
    "IntersectionObserver" in window
) {

    const barObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        const bar =
                            entry.target;


                        const finalHeight =
                            bar.style.height;


                        /* Start from zero */

                        bar.style.height =
                            "0";


                        requestAnimationFrame(
                            () => {

                                bar.style.transition =
                                    "height 1s cubic-bezier(.2,.8,.2,1)";


                                bar.style.height =
                                    finalHeight;

                            }
                        );


                        barObserver.unobserve(
                            bar
                        );

                    }

                });

            },
            {
                threshold: 0.4
            }
        );


    performanceBars.forEach(
        (bar) => {

            barObserver.observe(
                bar
            );

        }
    );

}


/* =====================================================
   8. BUTTON HOVER MICRO-INTERACTION
===================================================== */

const buttons =
    document.querySelectorAll(
        ".primary-button, .secondary-button, .get-started-btn, .login-btn"
    );


buttons.forEach((button) => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.classList.add(
                "button-hover"
            );

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.classList.remove(
                "button-hover"
            );

        }
    );

});


/* =====================================================
   9. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    (event) => {

        if (
            !navMenu ||
            !menuToggle
        ) {
            return;
        }


        const clickedInsideMenu =
            navMenu.contains(event.target);


        const clickedToggle =
            menuToggle.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedToggle
        ) {

            navMenu.classList.remove(
                "open"
            );


            menuToggle.classList.remove(
                "active"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =====================================================
   10. PAGE LOAD
===================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);