const FAVORITES_KEY = "melitto-favorites";

const menuButton = document.querySelector(".menu-button");
const navList = document.querySelector(".nav-list");
const heartCount = document.querySelector("#heart-count");
const yearSpan = document.querySelector("#year");

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function updateHeart() {
  const favorites = getFavorites();
  heartCount.textContent = `${favorites.length}`;
  heartCount.parentElement.setAttribute(
    "aria-label",
    `Your favorites, ${favorites.length} saved`
  );
}

function setMenu(isOpen) {
  navList.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", `${isOpen}`);
}

function showYear() {
  yearSpan.textContent = `${new Date().getFullYear()}`;
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

updateHeart();
showYear();