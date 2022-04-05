import Matrix from './matrix/matrix';
import { handleMenuItem, handleScroll, handleSectionHover, handleMenuLinkHover } from './menuHandlers'

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
