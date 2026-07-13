/*====================================

NOOR E QURAN ONLINE ACADEMY
Professional JavaScript

====================================*/


// ================================
// Sticky Navbar
// ================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.padding = "14px 9%";
        navbar.style.background = "rgba(255,255,255,.98)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    } else {

        navbar.style.padding = "18px 9%";
        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";

    }

});


// ================================
// Back To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Button Hover Effect
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});


// ================================
// Cards Animation
// ================================

const cards = document.querySelectorAll(

".course-card,.why-card,.platform-card,.testimonial-card,.contact-box,.box"

);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// ================================
// WhatsApp Floating Animation
// ================================

const whatsapp = document.querySelector(".whatsapp-btn");

setInterval(() => {

    whatsapp.classList.toggle("pulse");

}, 1000);


// ================================
// Console Message
// ================================

console.log(

"✅ Noor E Quran Online Academy | Developed Professionally"

);