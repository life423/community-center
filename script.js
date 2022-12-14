//need to reload page on rotate

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

const icon = document.querySelector('.icon');
const menuIcon = document.querySelector('.icon__menu');
const navItems = document.querySelectorAll('.nav__item');
const closeIcon = document.querySelector('.icon__close');
const navLinks = document.querySelectorAll('.nav__link');
const width = window.innerWidth;
const height = window.innerHeight;

const toggleMenu = () => {
  menuIcon.classList.toggle('hide');
  closeIcon.classList.toggle('hide');
};

const hideNavItems = () => {
  navItems.forEach(item => {
    item.classList.add('hide');
  });
};

const showNavItems = () => {
  navItems.forEach(item => {
    item.classList.remove('hide');
  });
};

const showMenu = () => {
  menuIcon.classList.remove('hide');
};


console.log('load fired');
window.addEventListener('load', e => {
  e.preventDefault();

  if (width <= 600) {
    header.style.height = '14vh';
    menuIcon.classList.remove('hide');
    icon.classList.remove('hide');
    navItems.forEach(item => {
      item.classList.add('hide');
    });
  } else if (width > height && width <= 1200) {
    console.log('tablet-landscape load');
    menuIcon.classList.add('hide');
    header.style.height = '18vh';
    showNavItems();
  } else if (width >= 600) {
    header.style.height = '10vh';
    menuIcon.classList.add('hide');
    icon.classList.add('hide');
    navItems.forEach(item => {
      item.classList.remove('hide');
    });
  }
});



const close = () => {
  closeIcon.classList.add('hide');  
  menuIcon.classList.remove('hide');  
  nav.style.height = '0%';
  header.style.height = '14vh';
  navItems.forEach(item => {
    item.classList.add('hide');
  });
};


onresize = e => {
  if (closeIcon.classList.contains('hide') === false) {
    close();
  }


  e.preventDefault();

  const width = e.target.innerWidth;
  const height = e.target.innerHeight;
  if (width <= 600) {
    ('fired less than 600px');
    hideNavItems();
    showMenu();
  } else if (width > height && width <= 1200) {
    console.log('tablet-landscape resize');
    menuIcon.classList.add('hide');
    header.style.height = '18vh';
    showNavItems();
  } else if (width >= 600) {
    ('fired more than 600px');
    menuIcon.classList.add('hide');
    showNavItems();
  }
};

menuIcon.addEventListener('click', e => {
  e.preventDefault();
  menuIcon.classList.toggle('hide');
  closeIcon.classList.toggle('hide');
  nav.style.height = '60%';
  header.style.height = '80vh';

  navItems.forEach(item => {
    item.classList.remove('hide');
  });
});

closeIcon.addEventListener('click', e => {
  e.preventDefault();
  toggleMenu();
  nav.style.height = '0%';
  header.style.height = '14vh';
  navItems.forEach(item => {
    item.classList.add('hide');
  });
});

