/* eslint-disable no-console */
// Load jQuery from NPM
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

const hueFunction = (hueVal) => {
  const setAs = `${hueVal}deg`;
  document
    .getElementById('main-video')
    .setAttribute('style', `filter:hue-rotate(${setAs}) saturate(1.5)`);
};

const rangeSlider = document.getElementById('hue-rotate');
rangeSlider.addEventListener('change', hueFunction(this));

window.hueFunction = hueFunction;

const video = document.getElementById('main-video');
// const items = $('#main nav ul li');

video.onloadeddata = () => {
  // alert('oi');
  // video.play();
  rangeSlider.setAttribute('value', 128);
};
video.addEventListener('ended', () => {
  console.log('end');
  const items = $('#main nav ul li');
  items.addClass('slide-in-blurred-left');
});

video.addEventListener('timeupdate', () => {
  // console.log(video.currentTime);
  if (Math.round(video.currentTime) === 2) {
    console.log('OK');
    $('.intro__img-holder').addClass('swing-in-top-fwd ');
    video.removeEventListener('timeupdate', () => {});
  }
});

// const items = $('#main nav ul li');
// $.each(items, function () {
//   setTimeout(() => {
//     $(this).addClass('slide-in-blurred-left');
//   }, 1000);
// });

// $('#main nav ul li').each((el) => {
//   $(el).delay(500).addClass('slide-in-blurred-left');
// });

// $('#main nav ul li').each((el) => {
//   console.log(el);
//   $(el).delay(1000).addClass('slide-in-blurred-left');
// });

// $(() => {

// });

// items.each((el) => {
//   setTimeout(() => {
//     console.log(el);
//     $(el).addClass('slide-in-blurred-left');
//   }, 1000);
// });
