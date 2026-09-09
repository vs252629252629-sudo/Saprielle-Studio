/* =========================================================
   SAPRIELLE STUDIO
   JavaScript
   ========================================================= */


/* ---------- Mobile Navigation ---------- */

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "68px";
        nav.style.left = "0";
        nav.style.right = "0";

        nav.style.flexDirection = "column";
        nav.style.gap = "0";

        nav.style.padding = "15px 25px";

        nav.style.background = "rgba(7, 7, 11, 0.96)";
        nav.style.backdropFilter = "blur(15px)";

        nav.style.borderBottom =
            "1px solid rgba(255, 255, 255, 0.08)";
    }
}


/* ---------- Close Mobile Menu ---------- */

document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 650) {

            document.querySelector(".navbar nav").style.display =
                "none";

        }

    });

});


/* ---------- Navbar Scroll Effect ---------- */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 5, 9, 0.92)";

        navbar.style.borderBottom =
            "1px solid rgba(139, 92, 246, 0.15)";

    } else {

        navbar.style.background =
            "rgba(7, 7, 11, 0.75)";

        navbar.style.borderBottom =
            "1px solid rgba(255, 255, 255, 0.08)";

    }

});


/* ---------- Reveal Sections ---------- */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(35px)";

    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


/* ---------- Game Card Mouse Effect ---------- */

const cards = document.querySelectorAll(".game-card");

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 25;

        const rotateY =
            (centerX - x) / 25;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* ---------- Dynamic Year ---------- */

const yearElements =
    document.querySelectorAll("footer p");

if (yearElements.length > 0) {

    yearElements[0].textContent =
        `© ${new Date().getFullYear()} Saprielle Studio. All rights reserved.`;

}


/* ---------- Console Message ---------- */

console.log(
    "🎮 Welcome to Saprielle Studio!"
);

console.log(
    "Building worlds. Creating memories."
);
