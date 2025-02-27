// youtube video
    let currentIndex = 0;
    const grids = document.querySelectorAll('.grid-item');
  
    function showGrids() {
      grids.forEach((grid, index) => {
        if (index >= currentIndex && index < currentIndex + getVisibleGrids()) {
          grid.style.display = 'block';
        } else {
          grid.style.display = 'none';
        }
      });
    }
  
    function getVisibleGrids() {
      if (window.innerWidth > 768) {
        return 4;
      } else if (window.innerWidth > 480) {
        return 2;
      } else {
        return 1;
      }
    }
  
    function showNext() {
      const maxIndex = grids.length - getVisibleGrids();
      if (currentIndex < maxIndex) {
        currentIndex++;
        showGrids();
      }
    }
  
    function showPrev() {
      if (currentIndex > 0) {
        currentIndex--;
        showGrids();
      }
    }
  
    window.addEventListener('resize', () => {
      currentIndex = 0;
      showGrids();
    });
  
    document.addEventListener('DOMContentLoaded', () => {
      showGrids();
    });
  

  
  document.getElementById('toggle').addEventListener('click', () => {
    document.getElementById('collapseMenu').classList.toggle('max-lg:hidden');
  });


  