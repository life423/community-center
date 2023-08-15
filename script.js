const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const icon = document.querySelector(".icon");
const menuIcon = document.querySelector(".icon__menu");
const closeIcon = document.querySelector(".icon__close");
const navItems = document.querySelectorAll(".nav__item");
const navLinks = document.querySelectorAll(".nav__link");

const width = window.innerWidth;
const height = window.innerHeight;

const toggleMenu = () => {
  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
};

const hideNavItems = () => {
  navItems.forEach((item) => item.classList.add("hide"));
};

const showNavItems = () => {
  navItems.forEach((item) => item.classList.remove("hide"));
};

const close = () => {
  toggleMenu();
  nav.style.height = "0%";
  header.style.height = "14vh";
  hideNavItems();
};

const adjustHeaderAndNav = () => {
  if (width <= 600) {
    header.style.height = "14vh";
    hideNavItems();
    showMenu();
  } else if (width > height && width <= 1200) {
    header.style.height = "18vh";
    showNavItems();
  } else if (width >= 600) {
    header.style.height = "10vh";
    hideNavItems();
    hideMenu();
  }
};

const hideMenu = () => {
  menuIcon.classList.add("hide");
  icon.classList.add("hide");
  hideNavItems();
};

window.addEventListener("load", () => {
  adjustHeaderAndNav();
});

window.addEventListener("resize", () => {
  if (!closeIcon.classList.contains("hide")) {
    close();
  }
  adjustHeaderAndNav();
});

menuIcon.addEventListener("click", () => {
  toggleMenu();
  nav.style.height = "60%";
  header.style.height = "80vh";
  showNavItems();
});

closeIcon.addEventListener("click", () => {
  close();
});
