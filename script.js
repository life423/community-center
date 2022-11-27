const header = document.querySelector('.header');
const menuIcon = document.querySelector('.menu__icon');
const navItems = document.querySelectorAll('.nav__item');
const closeIcon = document.querySelector('.close__icon');
const navLinks = document.querySelectorAll('.nav__link');
const width = window.innerWidth;
const height = window.innerHeight;

window.addEventListener('load', e => {
  e.preventDefault();
  if (width <= 600) {
    menuIcon.classList.toggle('hide');
    navItems.forEach(item => {
      item.classList.toggle('hide');
    });
  }
});

onresize = e => {
  e.preventDefault();
  const width = e.target.innerWidth;

  if (width <= 600) {
    menuIcon.classList.remove('hide');
    navItems.forEach(item => {
    item.classList.add('hide');
     header.style.height = '14vh';
    });
  } else if (width >= 600) {
    header.style.height = '6vh';
    menuIcon.classList.add('hide');
    navItems.forEach(item => {
      item.classList.remove('hide');
    });
  }
};

menuIcon.addEventListener('click', e => {
  e.preventDefault();
  header.style.height = '60vh';
  closeIcon.classList.toggle('hide');
  menuIcon.classList.toggle('hide');
  navItems.forEach(item => {
    item.classList.toggle('hide');    
  });  
});


closeIcon.addEventListener('click', e => {
  e.preventDefault();
  header.style.height = '14vh';
  closeIcon.classList.toggle('hide');
  menuIcon.classList.toggle('hide');
  navItems.forEach(item => {
    item.classList.toggle('hide');    
  });
});



