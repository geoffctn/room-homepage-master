// variables
const contents = document.querySelectorAll('.content')
const images = document.querySelectorAll('.big-image-content')
const controlsArrowLeft = document.getElementById('controls-arrow-left')
const controlsArrowRight = document.getElementById('controls-arrow-right')
const closeButton = document.getElementById('close-button')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const mobileMenu = document.querySelector('.mobile-menu')
let activeContent = 0

// functions
controlsArrowLeft.addEventListener('click', () => {
  removeCurrent()
  activeContent > 0 ? activeContent-- : (activeContent = 2)
  addNext()
})
controlsArrowRight.addEventListener('click', () => {
  removeCurrent()
  activeContent < 2 ? activeContent++ : (activeContent = 0)
  addNext()
})

const removeCurrent = () => {
  contents[activeContent].classList.remove('display-block')
  images[activeContent].classList.remove('display-block')
  contents[activeContent].classList.add('display-none')
  images[activeContent].classList.add('display-none')
}
const addNext = () => {
  contents[activeContent].classList.remove('display-none')
  images[activeContent].classList.remove('display-none')
  contents[activeContent].classList.add('display-block')
  images[activeContent].classList.add('display-block')
}

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'initial'
})
closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none'
})
