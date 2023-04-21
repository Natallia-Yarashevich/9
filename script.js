
function learnJavaScript() {
    console.log("Я учу JavaScript!");
}
learnJavaScript();
  
// КАРУСЕЛЬКА
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel__slide');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('carousel__slide--active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('carousel__slide--active');
}

function showPrevSlide() {
  showSlide(currentSlide - 1);
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

showSlide(currentSlide);

    // <!-- ЗАДАНИЕ СО ЗВЕЗДОЧКОЙ -->
  
const year = +prompt('Введите год');

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year} год является високосным`);
        } else {
            console.log(`${year} год не является високосным`);
        }
    } else {
        console.log(`${year} год является високосным`);
    }
} else {
    console.log(`${year} год не является високосным`);
}
 

