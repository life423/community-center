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

// const toggleMenu = () => {
//   menuIcon.classList.toggle('hide');
//   closeIcon.classList.toggle('hide');
// };

// const toggleNavItems = () => {
//   navItems.forEach(item => {
//     item.classList.toggle('hide');
//   });
// };

window.addEventListener('load', e => {
  e.preventDefault();
  console.log('load called');
  if (width <= 600) {
    menuIcon.classList.remove('hide');
    icon.classList.remove('hide');
    navItems.forEach(item => {
      item.classList.add('hide');
    });
  } else if (width >= 600) {
    menuIcon.classList.add('hide');
    icon.classList.add('hide');
  }
});

// onresize = e => {
//   e.preventDefault();
//   const width = e.target.innerWidth;
// console.log('resize called');
//   if (width <= 600) {
//     menuIcon.classList.toggle('hide');
//     navItems.forEach(item => {
//       item.classList.add('hide');
//       header.style.height = '14vh';

//     });
//   } else if (width >= 600) {
//     //safari treats rotate as a resize event line below for safari
//     header.style.height = '10vh';
//     menuIcon.classList.toggle('hide');
//     navItems.forEach(item => {
//       item.classList.remove('hide');
//     });
//   }
// };

menuIcon.addEventListener('click', e => {
  e.preventDefault();
  menuIcon.classList.toggle('hide');
  closeIcon.classList.toggle('hide');
  nav.style.height = '60%';
  header.style.height = '80vh';
});

closeIcon.addEventListener('click', e => {
  e.preventDefault();
  menuIcon.classList.toggle('hide');
  closeIcon.classList.toggle('hide');
  nav.style.height = '0%';
  header.style.height = '14vh';
});

//TODO
//make navbar vertical with a transition.
// height goes from 0 % to 100% on click

// closeIcon.addEventListener('click', e => {
//   console.log('close icon clicked');
//   e.preventDefault();
//   header.style.height = '14vh';
//   toggleMenu();
//   toggleNavItems();
// });

// navLinks.forEach(link => {
//   console.log('nav and mneu items toggled');
//   link.addEventListener('click', e => {
//     if (width <= 600) {
//       toggleMenu();
//       header.style.height = '14vh';
//       toggleNavItems();
//     }
//   });
// });
