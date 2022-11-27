const header = document.querySelector('header');
const menu = document.querySelector('.menu__icon');
const navItems = document.querySelectorAll('.nav__item');

const width = window.innerWidth;
const height = window.innerHeight;

window.addEventListener('load', e => {
  e.preventDefault();

  if (width <= 600) {
    menu.classList.toggle('hide');
  }
});

onresize = e => {
  e.preventDefault();
  const width = e.target.innerWidth;

  if (width <= 600) {
    menu.classList.remove('hide');
    navItems.forEach(item => {
        item.classList.add('hide');
    });  
    
  } else if (width >= 600) {
    menu.classList.add('hide');
    navItems.forEach(item => {
      item.classList.remove('hide');
    });  



  }
};
