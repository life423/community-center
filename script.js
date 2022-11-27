const header = document.querySelector('header');
const menu = document.querySelector('.menu__icon');
const nav = document.querySelector('nav');

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
  } else if (width >= 600) {
    menu.classList.add('hide');
  }
};
