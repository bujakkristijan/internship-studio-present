const headerBoxTabContainer = document.getElementById("header-box-tab-container");
const headerBoxLogoAndLanguage = document.querySelector(".header-box-1");
const tabTitle = document.querySelector(".tab-title");
const offerTitle = document.querySelector(".title-offer");
const dvgNumbersTitle = document.querySelector('.dvg-numbers-title');
const dvgNumbersSubTitle = document.querySelector('.dvg-numbers-subtitle');
const ourProductsContainer = document.querySelector('.our-products-container');
const ourProductsTitle = document.querySelector('.our-products-title');
const ourProductsDescription = document.querySelector('.our-products-description');
const ourBrandsTitle = document.querySelector('.our-brands-title');
const ourBrandsImageTitle = document.querySelector('.our-brands-image-title');

let hamburgerMenuButton = document.getElementById("hamburger-menu-button");
let xMenuButton = document.getElementById("x-menu-button");

function toggleSwitchMode(){
  const darkModeToggle = document.getElementById('swith-toggle-mode');
  const body = document.body;
  //premestio sam ovde da ne bi u konzoli greske ispisivao jer ne postoje na pocetku, vec se kreiraju preko js-a, mada je radilo okej sve 
  const languageTitleMobile = document.querySelector('.language-text-container');
  const languageTextMobile = document.querySelector('.language-mobile-container');  
  let isDarkModeEnabled = false;

    // Check the initial state of the dark mode toggle
    if (isDarkModeEnabled) {
      enableDarkMode();
      darkModeToggle.checked = true;
    }

    // Toggle dark mode when the switch is clicked
    darkModeToggle.addEventListener('change', function () {
      if (this.checked) {
          enableDarkMode();
          isDarkModeEnabled = true;
      } else {
          disableDarkMode();
          isDarkModeEnabled = false;
      }
    });

    function enableDarkMode() {
      body.classList.add('dark-mode');
      tabTitle.classList.add('dark-mode');
      offerTitle.classList.add('dark-mode');
      dvgNumbersTitle.classList.add('dark-mode');
      dvgNumbersSubTitle.classList.add('dark-mode');
      ourProductsContainer.classList.add('dark-mode');
      hamburgerMenuButton.classList.add('dark-mode');
      xMenuButton.classList.add('dark-mode');
      languageTitleMobile.classList.add('dark-mode');
      languageTextMobile.classList.add('dark-mode');
      ourProductsTitle.classList.add('dark-mode');
      ourProductsDescription.classList.add('dark-mode');
      ourBrandsTitle.classList.add('dark-mode');
      ourBrandsImageTitle.classList.add('dark-mode');
      // headerBoxLogoAndLanguage.classList.add('dark-mode'); /* ne mora ovako svaki posebno, izgleda je dosta na body sto ima classList. Proveriti posle zasto tako radi tacno!!! */ 
    }

    function disableDarkMode() {
      body.classList.remove('dark-mode');
      tabTitle.classList.remove('dark-mode');
      offerTitle.classList.remove('dark-mode');
      dvgNumbersTitle.classList.remove('dark-mode');
      dvgNumbersSubTitle.classList.remove('dark-mode');
      ourProductsContainer.classList.remove('dark-mode');
      hamburgerMenuButton.classList.remove('dark-mode');
      xMenuButton.classList.remove('dark-mode');
      languageTitleMobile.classList.remove('dark-mode');
      languageTextMobile.classList.remove('dark-mode');
      ourProductsTitle.classList.remove('dark-mode');
      ourProductsDescription.classList.remove('dark-mode');
      ourBrandsTitle.classList.remove('dark-mode');
      ourBrandsImageTitle.classList.remove('dark-mode');
      // headerBoxLogoAndLanguage.classList.remove('dark-mode');
    }
}

function updateSlidesPerView() {
    const swiperContainer = document.getElementById("mySwiper");
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 900) {
      swiperContainer.setAttribute("slides-per-view", "1");
    } else {
      swiperContainer.setAttribute("slides-per-view", "4");
    }
  }

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

  function initializeTabsLanguageIcon(){
    const xIcon = document.querySelector(".fa.fa-times");
  
    // kreiram container gde cu dodavati child elemente za svaki jezik posebno
    const languageMobileContainer = document.createElement("div");
    languageMobileContainer.className = "language-mobile-container";
  
    // kreiram i dodajem element za srpski jezik kao child element na languageMobileContainer
    const srpskiDiv = document.createElement("div");
    srpskiDiv.className = "language-mobile-text";
    srpskiDiv.textContent = "Srpski";
    languageMobileContainer.appendChild(srpskiDiv);
  
    // kreiram i dodajem element za engleski jezik kao child element na languageMobileContainer
    const englishDiv = document.createElement("div");
    englishDiv.className = "language-mobile-text";
    englishDiv.textContent = "English";
    languageMobileContainer.appendChild(englishDiv);
  
    // kreiram i dodajem element za madjarski jezik kao child element na languageMobileContainer
    const magyarDiv = document.createElement("div");
    magyarDiv.className = "language-mobile-text";
    magyarDiv.textContent = "Magyar";
    languageMobileContainer.appendChild(magyarDiv);
  
    // dodajem languageMobileContainer pre xIcon, mada je xIcon position: absolute svakako;
    // nema potrebe xIcon.nextSibling da bude, dovoljno je samo da doda pre xIcon, xIcon je position: absolute svakako da stoji gore u gornjem desnom cosku od header-box-2, koji je position: fixed, pa na osnovu njega se pozicionira tacno 
    headerBoxTabContainer.insertBefore(languageMobileContainer, xIcon);
  
    // kreiram languageTextContainer koji ce biti prvi, odnosno pre container-a sa jezicima koji su dodati kao child elementi
    const languageTextContainer = document.createElement("div");
    languageTextContainer.className = "language-text-container";
    languageTextContainer.textContent = "JEZIK";
  
    // stavljam languageTextContainer pre languageMobileContainer
    headerBoxTabContainer.insertBefore(languageTextContainer, languageMobileContainer);
  }

  function popupMessage() {
    // Set timeout for displaying popup
    setTimeout(function () {
        document.getElementById("popup").style.display = "block";
        document.body.style.overflow = "hidden"; // Disable scrolling
    }, 3000); 

    // Close popup when close button is clicked
    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    });
}

/* moze i ovako preko arrow funkcije da se pozovu sve tri odjednom */

// document.addEventListener("DOMContentLoaded", () => {
//   initializeTabsLanguageIcon();
//   toggleSwitchMode();
//   popupMessage();
// });

document.addEventListener("DOMContentLoaded", initializeTabsLanguageIcon);
document.addEventListener("DOMContentLoaded", toggleSwitchMode);
document.addEventListener("DOMContentLoaded", popupMessage);

hamburgerMenuButton.addEventListener('click', showMenu);
xMenuButton.addEventListener('click', hideMenu);

// Listen for window resize events and update slides-per-view
window.addEventListener("resize", updateSlidesPerView);

// // Initial call to set slides-per-view on page load
// updateSlidesPerView();

  
  
  