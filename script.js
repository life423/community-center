const header = document.querySelector('header');
const menu = document.querySelector('.menu__icon');
const width = window.innerWidth;
const height = window.innerHeight;

//   if (width <= 600) {
//     menu.classList.toggle('hide');
//     console.log('fired');
//   }

window.addEventListener('load', e => {
  e.preventDefault();

  if (width <= 600) {
    menu.classList.toggle('hide');
    console.log('fired');
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
