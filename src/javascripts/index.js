import $ from 'jquery';

window.jQuery = $;
window.$ = $;

const Home = () => {
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

  video.onloadeddata = () => {
    rangeSlider.setAttribute('value', 128);
  };

  video.addEventListener('timeupdate', () => {
    if (Math.round(video.currentTime) === 2) {
      const items = $('#main nav ul li');
      const footerLeft = $('footer .left');
      const footerRight = $('footer .right');
      const colorSlider = $('.colorslider');
      items.addClass('slide-in-blurred-left');
      setTimeout(() => {
        $('.intro__img-holder--logo').addClass('swing-in-top-fwd ');
        video.removeEventListener('timeupdate', () => {});
        colorSlider.addClass('slide-in-blurred-left');
        footerLeft.addClass('scale-in-ver-top');
        footerRight.addClass('scale-in-ver-top');
      }, 3000);
    }
  });
};

export default Home;
