const heroSection = document.querySelector('.hero');
const imageSources = heroSection.querySelectorAll('source');
const newProduct = heroSection.querySelector('.hero__new-product');
const productTitle = heroSection.querySelector('.hero__product-title');
const productDescription = heroSection.querySelector('.hero__description');
const productOldPrice = heroSection.querySelector('.hero__old-price');
const productNewPrice = heroSection.querySelector('.hero__new-price');
const productImage = heroSection.querySelector('.hero__image');
const prevSlide = heroSection.querySelector('.hero__slider-button--prev');
const nextSlide = heroSection.querySelector('.hero__slider-button--next');
const paginationButtons = heroSection.querySelectorAll('.slider-pagination__button');

let currentSlide = 0;

const slides = [
  {
    title: 'Декаф Флэт Уайт',
    newProduct: 'Новинка!',
    description: 'Свежесваренный кофе без кофеина из Эфиопии<br class="break-tablet"> с натуральным фермерским молоком — то, что нужно<br class="break-tablet"> для расслабления после тяжёлого рабочего дня',
    oldPrice: '295₽',
    newPrice: '225₽',
    backgroundColor: '#f3ebe1',
    backgroundGradient:'linear-gradient(to bottom, #f3ebe1 77.2%, #ffffff 77.2%)',
    images: {
      webp: [
        'images/hero/flat_white_mobile@1x.webp',
        'images/hero/flat_white_tablet@1x.webp',
        'images/hero/flat_white_desktop@1x.webp',
        'images/hero/flat_white_mobile@2x.webp',
        'images/hero/flat_white_tablet@2x.webp',
        'images/hero/flat_white_desktop@2x.webp'
      ],
      png: [
        'images/hero/flat_white_mobile@1x.png',
        'images/hero/flat_white_tablet@1x.png',
        'images/hero/flat_white_desktop@1x.png',
        'images/hero/flat_white_mobile@2x.png',
        'images/hero/flat_white_tablet@2x.png',
        'images/hero/flat_white_desktop@2x.png'
      ]
    }
  },
  {
    title: 'Лавандовый Латте',
    newProduct: 'Новинка!',
    description: 'Невероятное сочетание перуанской высокогорной арабики <br class="mobile-break">с молоком ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор',
    oldPrice: '285₽',
    newPrice: '265₽',
    backgroundColor: '#eae6fc',
    backgroundGradient: 'linear-gradient(to bottom, #eae6fc 77.2%, #ffffff 77.2%)',
    images: {
      webp: [
        'images/hero/lavender_latte_mobile@1x.webp',
        'images/hero/lavender_latte_tablet@1x.webp',
        'images/hero/lavender_latte_desktop@1x.webp',
        'images/hero/lavender_latte_mobile@2x.webp',
        'images/hero/lavender_latte_tablet@2x.webp',
        'images/hero/lavender_latte_desktop@2x.webp'
      ],
      png: [
        'images/hero/lavender_latte_mobile@1x.png',
        'images/hero/lavender_latte_tablet@1x.png',
        'images/hero/lavender_latte_desktop@1x.png',
        'images/hero/lavender_latte_mobile@2x.png',
        'images/hero/lavender_latte_tablet@2x.png',
        'images/hero/lavender_latte_desktop@2x.png'
      ]
    }
  },
  {
    title: 'Тройной Эспрессо',
    newProduct: 'Новинка!',
    description: 'Мощнее укола адреналина, чернее самой тёмной ночи, этот <br class="tablet-break">тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость',
    oldPrice: '395₽',
    newPrice: '375₽',
    backgroundColor: '#e5e6e8',
    backgroundGradient: 'linear-gradient(to bottom, #e5e6e8 77.2%, #ffffff 77.2%)',
    images: {
      webp: [
        'images/hero/triple_espresso_mobile@1x.webp',
        'images/hero/triple_espresso_tablet@1x.webp',
        'images/hero/triple_espresso_desktop@1x.webp',
        'images/hero/triple_espresso_mobile@2x.webp',
        'images/hero/triple_espresso_tablet@2x.webp',
        'images/hero/triple_espresso_desktop@2x.webp'
      ],
      png: [
        'images/hero/triple_espresso_mobile@1x.png',
        'images/hero/triple_espresso_tablet@1x.png',
        'images/hero/triple_espresso_desktop@1x.png',
        'images/hero/triple_espresso_mobile@2x.png',
        'images/hero/triple_espresso_tablet@2x.png',
        'images/hero/triple_espresso_desktop@2x.png'
      ]
    }
  }
];

function updateSlide() {
  const slide = slides[currentSlide];
  const windowWidth = window.innerWidth;

  if (windowWidth >= 768 && windowWidth < 1440) {
    heroSection.style.background = slide.backgroundGradient;
  } else {
    heroSection.style.background = 'none';
    heroSection.style.backgroundColor = slide.backgroundColor;
  }

  productImage.src = slide.images.png[0];
  productImage.srcset = `${slide.images.png[3]} 2x`;

  newProduct.textContent = slide.newProduct;
  productTitle.textContent = slide.title;
  productDescription.innerHTML = slide.description;
  productOldPrice.textContent = slide.oldPrice;
  productNewPrice.textContent = slide.newPrice;

  imageSources[0].srcset = `${slide.images.webp[2] }, ${ slide.images.webp[5] } 2x`;
  imageSources[1].srcset = `${slide.images.webp[1] }, ${ slide.images.webp[4] } 2x`;
  imageSources[2].srcset = `${slide.images.webp[0] }, ${ slide.images.webp[3] } 2x`;
  imageSources[3].srcset = `${slide.images.png[2] }, ${ slide.images.png[5] } 2x`;
  imageSources[4].srcset = `${slide.images.png[1] }, ${ slide.images.png[4] } 2x`;

  updateButtonState();
  updatePagination();
}

function updatePagination() {
  paginationButtons.forEach((button, index) => {
    button.classList.toggle('slider-pagination__button--current', index === currentSlide);
  });
}

function updateButtonState() {
  nextSlide.disabled = currentSlide >= slides.length - 1;
  prevSlide.disabled = currentSlide <= 0;
}

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlide = index;
    updateSlide();
  });
});

window.addEventListener('resize', updateSlide);

updateSlide();

nextSlide.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide ++;
    updateSlide();
  }
});

prevSlide.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide --;
    updateSlide();
  }
});

export {updateSlide};
