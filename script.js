//need to reload page on rotate

const header = document.querySelector('.header');
const menuIcon = document.querySelector('.icon__menu');
const navItems = document.querySelectorAll('.item__nav');
const closeIcon = document.querySelector('.close__icon');
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
    console.log('width less than 600');
    menuIcon.classList.remove('hide');
  } else if (width >= 600) {
    
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

// menuIcon.addEventListener('click', e => {
//     console.log('menu icon clicked');
//   e.preventDefault();
//   header.style.height = '60vh';
//   toggleMenu();
//   toggleNavItems();
// });

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
