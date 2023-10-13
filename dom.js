const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlideCount = slides.length;


btnNext.addEventListener("click", function() {
  if (currentSlide === maxSlideCount - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  
  slideMove(slides);
});

btnPrev.addEventListener("click", function() {
  if (currentSlide === 0) {
    currentSlide = maxSlideCount - 1;
  } else {
    currentSlide--;
  }

  slideMove(slides);
});

function slideMove(slides) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
}

slideMove(slides);
