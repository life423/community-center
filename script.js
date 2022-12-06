//need to reload page on rotate

const header = document.querySelector('.header');
const menuIcon = document.querySelector('.menu__icon');
const navItems = document.querySelectorAll('.nav__item');
const closeIcon = document.querySelector('.close__icon');
const navLinks = document.querySelectorAll('.nav__link');
const width = window.innerWidth;
const height = window.innerHeight;

const toggleMenu = () => {
  menuIcon.classList.toggle('hide');
  closeIcon.classList.toggle('hide');
};

const toggleNavItems = () => {
  navItems.forEach(item => {
    item.classList.toggle('hide');
  });
};

window.addEventListener('load', e => {
  e.preventDefault();
  if (width <= 600) {
    menuIcon.classList.toggle('hide');
    toggleNavItems();
  } else if (width >= 600) {
    menuIcon.classList.toggle('hide');
    toggleNavItems();
  }
});

onresize = e => {
  e.preventDefault();
  const width = e.target.innerWidth;

  if (width <= 600) {
    menuIcon.classList.toggle('hide');
    navItems.forEach(item => {
      item.classList.add('hide');
      header.style.height = '14vh';
      menuIcon.style.stroke = 'white';
    });
  } else if (width >= 600) {
    //safari treats rotate as a resize event line below for safari
    header.style.height = '10vh';
    menuIcon.classList.toggle('hide');
    navItems.forEach(item => {
      item.classList.remove('hide');
    });
  }
};

menuIcon.addEventListener('click', e => {
  e.preventDefault();
  header.style.height = '60vh';
  toggleMenu();
  toggleNavItems();
});

closeIcon.addEventListener('click', e => {
  e.preventDefault();
  header.style.height = '14vh';
  toggleMenu();
  toggleNavItems();
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    if (width <= 600) {
      toggleMenu();
      header.style.height = '14vh';
      toggleNavItems();
    }
  });
});
