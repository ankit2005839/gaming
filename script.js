alert("You are Entering a gaming website")
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - n) * 100}%)`;
    });
}

showSlide(currentSlide);

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

slides.forEach((slide) => {
    slide.addEventListener('mouseover', () => {
        clearInterval(interval);
    });
    slide.addEventListener('mouseout', () => {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    });
});


