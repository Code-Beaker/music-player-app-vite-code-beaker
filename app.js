import openIcon from "/assets/icon-menu.svg";
import closeIcon from "/assets/icon-close.svg";

const toggleSidebarButton = document.querySelector("#toggleSidebar");
const toggleSidebarIcon = document.querySelector("#toggleSidebarIcon");
const searchBtn = document.querySelector("#searchButton");
const searchBar = document.querySelector("#searchForMusic");
const trackInfo = document.querySelector(".navbar__music-details");
let hidden = true;

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("search-btn-focus");
  searchBar.classList.toggle("display");
  trackInfo.classList.toggle("hide-content");
  toggleSidebarButton.classList.toggle("hide-content");
});

toggleSidebarButton.addEventListener("click", () => {
  if (hidden) {
    toggleSidebarIcon.setAttribute("src", closeIcon);
    hidden = false;
  } else {
    toggleSidebarIcon.setAttribute("src", openIcon);
    hidden = true;
  }
});
