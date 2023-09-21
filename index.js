const headerBoxTabContainer = document.getElementById("header-box-tab-container");

document.addEventListener("DOMContentLoaded", initializeTabsLanguageIcon);

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

  function showMenu() {
    // const headerBoxTabContainer = document.getElementById("header-box-tab-container");
    headerBoxTabContainer.style.right = "0px";
    headerBoxTabContainer.style.boxShadow = "0 0 0 10000px rgba(0, 0, 0, .50)";
    // document.body.style.overflow = "hidden";
  
    
  }

  function hideMenu(){
    headerBoxTabContainer.style.right = "-300px";
    headerBoxTabContainer.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
    // document.body.style.overflow = "hidden";
  }

  let hamburgerMenuButton = document.getElementById("hamburger-menu-button");
  let xMenuButton = document.getElementById("x-menu-button");

  hamburgerMenuButton.addEventListener('click', showMenu);
  xMenuButton.addEventListener('click', hideMenu);
  

  function initializeTabsLanguageIcon(){

    // Get the x icon element
    const xIcon = document.querySelector(".fa.fa-times");
  
    // Create a new child element for language selection
    const languageMobileContainer = document.createElement("div");
    languageMobileContainer.className = "language-mobile-container";
  
    // Create and append the 'Srpski' div
    const srpskiDiv = document.createElement("div");
    srpskiDiv.textContent = "Srpski";
    languageMobileContainer.appendChild(srpskiDiv);
  
    // Create and append the 'English' div
    const englishDiv = document.createElement("div");
    englishDiv.textContent = "English";
    languageMobileContainer.appendChild(englishDiv);
  
    // Create and append the 'Magyar' div
    const magyarDiv = document.createElement("div");
    magyarDiv.textContent = "Magyar";
    languageMobileContainer.appendChild(magyarDiv);
  
    // Insert the language selection container after the x icon
    headerBoxTabContainer.insertBefore(languageMobileContainer, xIcon.nextSibling);
  
    // Create the "Language" text container element
    const languageTextContainer = document.createElement("div");
    languageTextContainer.className = "language-text-container";
    languageTextContainer.textContent = "Language";
  
    // Insert the "Language" text container before the language selection container
    headerBoxTabContainer.insertBefore(languageTextContainer, languageMobileContainer);
  }
  
  
  