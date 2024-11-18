document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselExampleCaptions");
  const prevButton = document.querySelector("[data-twe-slide='prev']");
  const nextButton = document.querySelector("[data-twe-slide='next']");
  const indicators = document.querySelectorAll("[data-twe-carousel-indicators] button");

  let currentIndex = 0;
  let autoSlideInterval;

  const showSlide = (index) => {
    const slides = document.querySelectorAll("[data-twe-carousel-item]");
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("hidden");
        indicators[i].classList.add("text-red-800");
        slide.classList.add("hidden");
        indicators[i].classList.remove("text-red-800");
      }
    });
  };

  const handlePrevClick = () => {
    currentIndex = (currentIndex - 1 + 3) % 3;
    showSlide(currentIndex);
    resetAutoSlide();
  };

  const handleNextClick = () => {
    currentIndex = (currentIndex + 1) % 3;
    showSlide(currentIndex);
    resetAutoSlide();
  };

  const autoSlide = () => {
    currentIndex = (currentIndex + 1) % 3;
    showSlide(currentIndex);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000);
  };

  prevButton.addEventListener("click", handlePrevClick);
  nextButton.addEventListener("click", handleNextClick);
  resetAutoSlide();
});

const showSlide = (index) => {
const slides = document.querySelectorAll("[data-twe-carousel-item]");
slides.forEach((slide, i) => {
  if (i === index) {
    slide.classList.remove("hidden");
    indicators[i].classList.add("active");
  } else {
    slide.classList.add("hidden");
    indicators[i].classList.remove("active");
  }
});
};

var toggleBtn = document.getElementById('toggle');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
if (collapseMenu.style.display === 'block') {
  collapseMenu.style.display = 'none';
} else {
  collapseMenu.style.display = 'block';
}
}

toggleBtn.addEventListener('click', handleClick);

document.addEventListener('DOMContentLoaded', function() {
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('a');
  const menu = dropdown.querySelector('.absolute');

  dropdown.addEventListener('mouseenter', () => {
    menu.classList.remove('hidden');
    toggle.style.color = '#4dc0b5';
  });

  dropdown.addEventListener('mouseleave', () => {
    menu.classList.add('hidden');
    toggle.style.color = '';
  });
});
});

document.addEventListener('DOMContentLoaded', function() {
const dropdowns = document.querySelectorAll('.dropdown');
const toggleBtn = document.getElementById('toggle');
const collapseMenu = document.getElementById('collapseMenu');
let menuVisible = false;

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('a');
  const menu = dropdown.querySelector('.dropdown-menu');

  dropdown.addEventListener('mouseenter', () => {
    menu.classList.remove('hidden');
    toggle.style.color = '#4dc0b5';
  });

  dropdown.addEventListener('mouseleave', () => {
    menu.classList.add('hidden');
    toggle.style.color = '';
  });
});

toggleBtn.addEventListener('click', () => {
  menuVisible = !menuVisible;
  collapseMenu.classList.toggle('hidden', !menuVisible);
  toggleBtn.innerHTML = menuVisible ? '<span style="font-size : 30px;">×</span>' : '<span style="font-size: 26px; ">☰</span>';
});
});
