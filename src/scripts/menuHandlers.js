function handleMenuItem(e) {
  document.querySelectorAll('.side-menu__item').forEach(itm => {
    itm.classList.remove('side-menu__item-active')
  })
  e.currentTarget.classList.add('side-menu__item-active')
}

function handleScroll(e) {
  let newActive = document.querySelector('.section');

  for (const link of document.querySelectorAll('.side-menu .side-menu__item')) {
    const id = link.getAttribute('href').slice(1);
    const a = document.getElementById(id);

    if (a.getBoundingClientRect().top < 560) {
      newActive = link;
    } else {
      break;
    }
  }

  const oldActive = document.querySelector('.side-menu__item.side-menu__item-active');
  if (oldActive !== newActive) {
    if (oldActive) {
      oldActive.classList.remove('side-menu__item-active');
    }
    newActive.classList.add('side-menu__item-active');
  }
}

function handleSectionHover() {
  const items = document.querySelectorAll('.section')
  items.forEach(item => {
    item.addEventListener('mouseover', (e) => {
      // Clear
      document.querySelectorAll('.section')
        .forEach(sec => sec.classList.remove('section-active'))
      document.querySelectorAll('.side-menu__item')
        .forEach(mi => mi.classList.remove('side-menu__item-active'))

      e.currentTarget.classList.add('section-active')
      const link = document.querySelector(`a[href="#${e.currentTarget.id}"]`)
      if (link)
        link.classList.add('side-menu__item-active')
    })
  })
}

function handleMenuLinkHover() {
  const items = document.querySelectorAll('.side-menu__item')
  items.forEach(item => {
    item.addEventListener('mouseover', (e) => {
      // Clear
      document.querySelectorAll('.side-menu__item')
        .forEach(i => i.classList.remove('side-menu__item-active'))
      document.querySelectorAll('.section')
        .forEach(si => si.classList.remove('section-active'))

      e.currentTarget.classList.add('side-menu__item-active')
      const sec = document.querySelector(e.currentTarget.hash)
      if (sec)
        sec.classList.add('section-active')
    })
  })
}

export {
  handleMenuItem, handleScroll, handleSectionHover, handleMenuLinkHover
}
