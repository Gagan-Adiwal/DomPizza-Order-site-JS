// Navbar toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
toggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Slider functionality
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

function showSlide(index) {
    const visibleSlides = window.innerWidth <= 600 ? 1 : (window.innerWidth <= 992 ? 2 : 3);
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - visibleSlides;
    slides.style.transform = `translateX(-${slideIndex * (100 / visibleSlides + 1.5)}%)`; // move by visible width
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

// Auto play
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 4000);

window.addEventListener("resize", () => showSlide(slideIndex));
