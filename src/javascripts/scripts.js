// Load jQuery from NPM
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

const hueFunction = (hueVal) => {
  const setAs = `${hueVal}deg`;
  document
    .getElementById('main-image')
    .setAttribute('style', `filter:hue-rotate(${setAs}) saturate(1.5)`);
};

window.hueFunction = hueFunction;

$(function () {
  const rangeSlider = document.getElementById('hue-rotate');
  rangeSlider.addEventListener('change', hueFunction(this.value));
});
