import Matrix from './matrix/matrix';
import { handleMenuItem, handleScroll, handleSectionHover, handleMenuLinkHover } from './menuHandlers'

import '@splidejs/splide/css/sea-green';
import Splide from '@splidejs/splide';

let splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 1,
  // autoWidth: true,
  // padding: '1rem',
}).mount();

(function init() {
  // Menu
  const items = document.querySelectorAll('.side-menu__item')
  items.forEach(item => {
    item.addEventListener('click', handleMenuItem)
  })
  handleSectionHover()
  handleMenuLinkHover()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('load', new Matrix('matrix'))
})()
