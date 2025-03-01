// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.getElementById("carouselExampleCaptions");
//   const prevButton = document.querySelector("[data-twe-slide='prev']");
//   const nextButton = document.querySelector("[data-twe-slide='next']");
//   const indicators = document.querySelectorAll("[data-twe-carousel-indicators] button");

//   let currentIndex = 0;
//   let autoSlideInterval;

//   const showSlide = (index) => {
//     const slides = document.querySelectorAll("[data-twe-carousel-item]");
//     slides.forEach((slide, i) => {
//       if (i === index) {
//         slide.classList.remove("hidden");
//         indicators[i].classList.add("text-red-800");
//         slide.classList.add("hidden");
//         indicators[i].classList.remove("text-red-800");
//       }
//     });
//   };

//   const handlePrevClick = () => {
//     currentIndex = (currentIndex - 1 + 3) % 3;
//     showSlide(currentIndex);
//     resetAutoSlide();
//   };

//   const handleNextClick = () => {
//     currentIndex = (currentIndex + 1) % 3;
//     showSlide(currentIndex);
//     resetAutoSlide();
//   };

//   const autoSlide = () => {
//     currentIndex = (currentIndex + 1) % 3;
//     showSlide(currentIndex);
//   };

//   const resetAutoSlide = () => {
//     clearInterval(autoSlideInterval);
//     autoSlideInterval = setInterval(autoSlide, 5000);
//   };

//   prevButton.addEventListener("click", handlePrevClick);
//   nextButton.addEventListener("click", handleNextClick);
//   resetAutoSlide();
// });

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

// Favicon links
// Favicon links
const faviconLinks = [
  '<link rel="apple-touch-icon" sizes="57x57" href="../../favicon/apple-icon-57x57.png">',
  '<link rel="apple-touch-icon" sizes="60x60" href="../../favicon/apple-icon-60x60.png">',
  '<link rel="apple-touch-icon" sizes="72x72" href="../../favicon/apple-icon-72x72.png">',
  '<link rel="apple-touch-icon" sizes="76x76" href="../../favicon/apple-icon-76x76.png">',
  '<link rel="apple-touch-icon" sizes="114x114" href="../../favicon/apple-icon-144x144.png">',
  '<link rel="apple-touch-icon" sizes="120x120" href="../../favicon/apple-icon-120x120.png">',
  '<link rel="apple-touch-icon" sizes="144x144" href="../../favicon/apple-icon-144x144.png">',
  '<link rel="apple-touch-icon" sizes="152x152" href="../../favicon/apple-icon-152x152.png">',
  '<link rel="apple-touch-icon" sizes="180x180" href="../../favicon/apple-icon-180x180.png">',
  '<link rel="icon" type="image/png" sizes="192x192" href="../../favicon/android-icon-192x192.png">',
  '<link rel="icon" type="image/png" sizes="32x32" href="../../favicon/android-icon-36x36.png">',
  '<link rel="icon" type="image/png" sizes="96x96" href="../../favicon/android-icon-96x96.png">',
  '<link rel="icon" type="image/png" sizes="16x16" href="../../favicon/favicon-16x16.png">',
  '<link rel="icon" type="image/png" sizes="144x144" href="../../favicon/android-icon-144x144.png">',
  '<link rel="icon" type="image/png" sizes="48x48" href="../../favicon/android-icon-48x48.png">',
  '<link rel="icon" type="image/png" sizes="72x72" href="../../favicon/android-icon-72x72.png">'
];



function addFavicons() {
  const head = document.head || document.getElementsByTagName('head')[0];
  faviconLinks.forEach(favicon => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = favicon.trim();
      head.appendChild(tempDiv.firstChild);
  });
}


// Call the function to add favicons
addFavicons();




