// let index = 0;

// function moveSlide(direction) {
//   const slider = document.querySelector(".slider");
//   const totalSlides = document.querySelectorAll(".slide").length;

//   index += direction;

//   if (index < 0) {
//     index = totalSlides - 1;
//   } else if (index >= totalSlides) {
//     index = 0;
//   }

//   slider.style.transform = `translateX(${-index * 100}vw)`;
// }
let index = 0;
let autoSlideInterval;

function moveSlide(direction) {
  clearInterval(autoSlideInterval); // Stop auto-slide when manually navigating
  changeSlide(index + direction);
  startAutoSlide(); // Restart auto-slide after manual navigation
}

function changeSlide(newIndex) {
  const slider = document.querySelector(".slider");
  const totalSlides = document.querySelectorAll(".slide").length;

  index = newIndex;

  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  slider.style.transform = `translateX(${-index * 100}vw)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlide(index + 1);
  }, 5000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", startAutoSlide);
