// variables
const contents = document.querySelectorAll('.content')
const bigImage = document.querySelector('.big-image')
const controlsArrowLeft = document.getElementById('controls-arrow-left')
const controlsArrowRight = document.getElementById('controls-arrow-right')
const closeButton = document.getElementById('close-button')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const mobileMenu = document.querySelector('.mobile-menu')
let activeContent = 0
let bgArr = ['bg-one', 'bg-two', 'bg-three']

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
  contents[activeContent].classList.add('display-none')
  bigImage.classList.remove(bgArr[activeContent])
}
const addNext = () => {
  contents[activeContent].classList.remove('display-none')
  contents[activeContent].classList.add('display-block')
  bigImage.classList.add(bgArr[activeContent])
}

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'initial'
})
closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none'
})
