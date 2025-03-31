const priceSlider = document.querySelector('.fieldset-price__slider');
const minPrice = document.querySelector('.fieldset-price__input--min');
const maxPrice = document.querySelector('.fieldset-price__input--max');

noUiSlider.create(priceSlider, {
  start: [0, 900],
  connect: true,
  range: {
    'min': 0,
    'max': 1000
  },
  step: 1
});

priceSlider.noUiSlider.on('update', (values, handle) => {
  if (handle === 0) {
    minPrice.value = Math.round(values[0]);
  } else {
    maxPrice.value = Math.round(values[1]);
  }
});

minPrice.addEventListener('change', function () {
  priceSlider.noUiSlider.set([this.value, null]);
});

maxPrice.addEventListener('change', function () {
  priceSlider.noUiSlider.set([null, this.value]);
});
