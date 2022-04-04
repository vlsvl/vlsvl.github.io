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
  if (oldActive != newActive) {
    if (oldActive) {
      oldActive.classList.remove('side-menu__item-active');
    }
    newActive.classList.add('side-menu__item-active');
  }
}

function handleMenuToggle(e) {
  const side = document.querySelector('.side');
  if (!side.classList.contains('side__show')) {
    side.classList.add('side__show')
  } else {
    side.classList.remove('side__show')
  }
}

export {
  handleMenuItem, handleScroll, handleMenuToggle
}
