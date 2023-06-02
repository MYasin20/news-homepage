const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerBody = document.querySelector('.hamburger-body');
const navLists = document.querySelector('.nav-lists');
const hideBg = document.querySelector('#hide-bg');
const hamburgerImgOpen = document.querySelector('.hamburger-img-open');
const hamburgerImgClose = document.querySelector('.hamburger-img-close');
let isClose = true;
hamburgerBtn.addEventListener('click', () => {
  if(isClose) {
    hamburgerImgOpen.style.display = 'none';
    hamburgerImgClose.style.display = 'block';
    isClose = false;
  } else {
    hamburgerImgOpen.style.display = 'block';
    hamburgerImgClose.style.display = 'none';
    isClose = true;
  }
  hamburgerBody.classList.toggle('isActive');
  navLists.classList.toggle('open');
  hideBg.classList.toggle('block-it');

  
});