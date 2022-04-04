import Matrix from './matrix/matrix';
import { handleMenuItem, handleScroll, handleMenuToggle } from './menuHandlers'

(function init() {
  // Menu
  const items = document.querySelectorAll('.side-menu__item')
  items.forEach(item => {
    item.addEventListener('click', handleMenuItem)
  })
  const toggler = document.querySelectorAll('.sideToggler')
  toggler.forEach(el => el.addEventListener('click', handleMenuToggle))
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('load', new Matrix('matrix'))
})()
