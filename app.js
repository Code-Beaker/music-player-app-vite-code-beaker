import openIcon from "/assets/icon-menu.svg";
import closeIcon from "/assets/icon-close.svg";
import playIcon from "/assets/icon-play.svg";
import pauseIcon from "/assets/icon-pause.svg";

const toggleSidebarButton = document.querySelector("#toggleSidebar");
const toggleSidebarIcon = document.querySelector("#toggleSidebarIcon");
const searchBtn = document.querySelector("#searchButton");
const searchBar = document.querySelector("#searchForMusic");
const trackInfo = document.querySelector(".navbar__music-details");
const musicPlaybackControlButton = document.querySelector(
  "#music-play-control"
);
const playbackIndicatorIcon = document.querySelector(
  ".music-play-control__icon"
);
const sidebar = document.querySelector(".sidebar");

let hidden = true;
let playing = true;

musicPlaybackControlButton.addEventListener("click", () => {
  if (playing) {
    playbackIndicatorIcon.setAttribute("src", pauseIcon);
    playing = false;
  } else {
    playbackIndicatorIcon.setAttribute("src", playIcon);
    playing = true;
  }
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("search-btn-focus");
  searchBar.classList.toggle("display");
  trackInfo.classList.toggle("hide-content");
  toggleSidebarButton.classList.toggle("hide-content");
  document.querySelector(".navbar").classList.toggle("nav--collapsed");
});

toggleSidebarButton.addEventListener("click", () => {
  if (hidden) {
    toggleSidebarIcon.setAttribute("src", closeIcon);
    sidebar.classList.add("sidebar__slide-in");
    toggleSidebarButton.classList.add("navbar__toggle-rotate");
    hidden = false;
  } else {
    toggleSidebarIcon.setAttribute("src", openIcon);
    sidebar.classList.remove("sidebar__slide-in");
    toggleSidebarButton.classList.remove("navbar__toggle-rotate");
    hidden = true;
  }
});
