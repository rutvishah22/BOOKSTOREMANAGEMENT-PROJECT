const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  const slideWidth = document.querySelector('.slide').offsetWidth;
  if (currentIndex < slider.children.length - 4) { // Assuming 4 items per view
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

prevButton.addEventListener('click', () => {
  const slideWidth = document.querySelector('.slide').offsetWidth;
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

