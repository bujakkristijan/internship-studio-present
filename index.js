function updateSlidesPerView() {
    const swiperContainer = document.getElementById("mySwiper");
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 900) {
      swiperContainer.setAttribute("slides-per-view", "1");
    } else {
      swiperContainer.setAttribute("slides-per-view", "3");
    }
  }

  // Initial call to set slides-per-view on page load
  updateSlidesPerView();

  // Listen for window resize events and update slides-per-view
  window.addEventListener("resize", updateSlidesPerView);
  
  
  
  