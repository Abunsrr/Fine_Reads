document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname;

    // Remove 'active' class from all menu items
    document.querySelectorAll('#collapseMenu li').forEach(function (menuItem) {
        menuItem.classList.remove('active');
    });

    // Add 'active' class to appropriate menu item based on the current page
    document.querySelectorAll('#collapseMenu a').forEach(function (link) {
        var linkPath = link.getAttribute('href').split("?")[0]; // Remove query parameters
        if (linkPath === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
});



// menu for return home 
// Function to dynamically create the header
function loadHeader() {
    const headerHTML = `
     <header class="z-[2000] sticky top-0 font-[sans-serif] bg-gradient-to-r from-cyan-800 to-cyan-950 text-white py-4">
  <div class="flex items-center justify-between max-w-7xl mx-auto px-4">
    <!-- Logo -->
    <a href="/" class="flex items-center" target="_blank">
      <img src="/images/finareadslogo.png" alt="Logo" class="w-36 h-[50px]">
    </a>
    <!-- Return Button -->
    <a href="/"  class="flex items-center space-x-2 text-sm font-semibold bg-blue-500 hover:bg-blue-600 hover:text-pink-200 text-white px-4 py-2 rounded-full transition-all">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
      </svg>
      <span>Return Home</span>
    </a>
  </div>
</header>

    `;
    // Inject the header into the placeholder
    const headerPlaceholder = document.getElementById("dynamicHeader");
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = headerHTML;
    }
  }
  
  // Load the header once the page has fully loaded
  window.addEventListener("load", loadHeader);
  



  