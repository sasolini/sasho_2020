const hamburgerBtn = document.getElementById('js-hamburger-btn');
const mobileMenu = document.getElementById('js-mobile-menu');
const backDrop = document.getElementById('js-backdrop');

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('open');
};

hamburgerBtn.addEventListener('click', toggleMobileMenu);
backDrop.addEventListener('click', toggleMobileMenu);
