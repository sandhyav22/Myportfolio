
function toggleDark() {
    const body = document.body;
    const icon = document.getElementById("theme-icon");

    body.classList.toggle("dark");

    // Animate icon
    icon.classList.add("rotate");

    if (body.classList.contains("dark")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }

    setTimeout(() => {
        icon.classList.remove("rotate");
    }, 300);
}

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}



    function toggleMenu() {
        document.getElementById("nav-links").classList.toggle("show");
    }

    /* Scroll animation */
    const reveals = document.querySelectorAll(".reveal");
    window.addEventListener("scroll", () => {
        reveals.forEach(card => {
            const top = card.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                card.classList.add("active");
            }
        });
    });



    /* ===============================
   MAGNETIC HOVER EFFECT
   =============================== */

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `
            translate(${x * 0.15}px, ${y * 0.15}px)
            scale(1.05)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translate(0, 0) scale(1)";
    });
});
