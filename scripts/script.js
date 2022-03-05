const burgerButton = document.querySelector('.header__burger')
const closeButton = document.querySelector('.header__close')
const menu = document.querySelector('.menu')
const logo = document.querySelector('.header__logo')
let windowWidth = window.innerWidth

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth
})

burgerButton.addEventListener('click', () => {
  menu.style.display = 'block'

  if (windowWidth > 450) {
    logo.style.display = 'none'
  }

  burgerButton.style.display = 'none'
  closeButton.style.display = 'block'
})

closeButton.addEventListener('click', () => {
  menu.style.display = 'none'
  logo.style.display = 'block'
  burgerButton.style.display = 'block'
  closeButton.style.display = 'none'
})



