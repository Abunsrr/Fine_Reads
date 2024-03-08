                       // bannner sliding
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselExampleCaptions");
    const prevButton = document.querySelector("[data-twe-slide='prev']");
    const nextButton = document.querySelector("[data-twe-slide='next']");
    const indicators = document.querySelectorAll("[data-twe-carousel-indicators] button");

    let currentIndex = 0;
    let autoSlideInterval;

    // Function to show the current slide
    const showSlide = (index) => {
      const slides = document.querySelectorAll("[data-twe-carousel-item]");
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove("hidden");
          indicators[i].classList.add("text-red-800"); // Set color to dark red
        } else {
          slide.classList.add("hidden");
          indicators[i].classList.remove("text-red-800"); // Remove color
        }
      });
    };

    // Function to handle the click event for the previous button
    const handlePrevClick = () => {
      currentIndex = (currentIndex - 1 + 3) % 3; // Make it circular
      showSlide(currentIndex);
      resetAutoSlide();
    };

    // Function to handle the click event for the next button
    const handleNextClick = () => {
      currentIndex = (currentIndex + 1) % 3; // Make it circular
      showSlide(currentIndex);
      resetAutoSlide();
    };

    // Function to automatically transition to the next slide
    const autoSlide = () => {
      currentIndex = (currentIndex + 1) % 3; // Make it circular
      showSlide(currentIndex);
    };

    // Function to reset the automatic slide transition timer
    const resetAutoSlide = () => {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(autoSlide, 5000); // Set interval for 5 seconds
    };

    // Add click event listeners to the previous and next buttons
    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);

    // Initialize automatic slide transition
    resetAutoSlide();
  });

   // Function to show the current slide
 const showSlide = (index) => {
   const slides = document.querySelectorAll("[data-twe-carousel-item]");
   slides.forEach((slide, i) => {
     if (i === index) {
       slide.classList.remove("hidden");
       indicators[i].classList.add("active"); // Ensure 'active' class is added
     } else {
       slide.classList.add("hidden");
       indicators[i].classList.remove("active"); // Remove 'active' class
     }
   });
 };

// all menu toggle 

    
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
toggle.style.color = '#4dc0b5'; // Change color on hover
});

dropdown.addEventListener('mouseleave', () => {
menu.classList.add('hidden');
toggle.style.color = ''; // Reset color on leave
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
toggle.style.color = '#4dc0b5'; // Change color on hover
});

dropdown.addEventListener('mouseleave', () => {
menu.classList.add('hidden');
toggle.style.color = ''; // Reset color on leave
});
});

toggleBtn.addEventListener('click', () => {
// Toggle the visibility of the menu on clicking the toggle button
menuVisible = !menuVisible;
collapseMenu.classList.toggle('hidden', !menuVisible);
toggleBtn.innerHTML = menuVisible ?
'<span style="font-size : 30px;">×</span>' : '<span style="font-size: 26px;">☰</span>';
});
});

