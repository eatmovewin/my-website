/* =====================================
   EatMove Win
   script.js
   Version 1
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("EatMove Win Loaded");

    // ==========================
    // Active Navigation
    // ==========================

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

    // ==========================
    // Fade In Card
    // ==========================

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    cards.forEach(card => observer.observe(card));

});


// ==========================
// Scroll To Top
// ==========================

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
