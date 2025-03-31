const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const siteList = document.querySelector('.site-list');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed', !isOpen);
  siteList.classList.toggle('site-list--open', isOpen);
});
