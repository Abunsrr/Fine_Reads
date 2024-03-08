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
