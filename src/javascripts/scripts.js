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

// let intervalRewind;

// // eslint-disable-next-line prefer-const
// intervalRewind = () => {
//   setInterval(() => {
//     video.playbackRate = 1.0;
//     if (video.currentTime === 0) {
//       clearInterval(intervalRewind);
//       video.pause();
//     } else {
//       video.currentTime += -0.1;
//     }
//   }, 30);
// };

// window.intervalRewind = intervalRewind;

video.onloadeddata = () => {
  // alert('oi');
  // video.play();
  rangeSlider.setAttribute('value', 128);
};

video.addEventListener('ended', () => {
  console.log('end');
  const items = $('#main nav ul li');
  const footerLeft = $('footer .left');
  const footerRight = $('footer .right');
  const colorSlider = $('.colorslider');
  items.addClass('slide-in-blurred-left');
  colorSlider.addClass('slide-in-blurred-right');
  footerLeft.addClass('scale-in-ver-top');
  footerRight.addClass('scale-in-ver-top');
  // setTimeout(() => {
  //   $('#home').addClass('slide-out-fwd-center');
  // }, 1000);
});

video.addEventListener('timeupdate', () => {
  // console.log(video.currentTime);
  if (Math.round(video.currentTime) === 2) {
    console.log('OK');
    $('.intro__img-holder').addClass('swing-in-top-fwd ');
    video.removeEventListener('timeupdate', () => {});
  }
});
