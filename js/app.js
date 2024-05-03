const overlay = document.querySelector('#overlay')
const projectSlider = document.querySelector('.project-slider')
const projects = document.querySelectorAll('.project')
const slideNav = document.querySelector('.proj-slider-nav')
const ulStatic = document.querySelector('#static-ul')
const ulInteract = document.querySelector('#interactive-ul')
const ulLogos = document.querySelector('#logos-ul')
const indicatDots = slideNav.querySelectorAll('li')

console.log(projectSlider)
console.log(projects)
console.log(slideNav, ulStatic, ulInteract, ulLogos)
console.log(indicatDots)

document.addEventListener('load', initializeElements)

function initializeElements () {
  overlay.style.display = 'block'
  projectSlider.style.display = 'flex'
  slideNav.style.display = 'flex'
}

const overlayDismiss = () => {
  overlay.style.display = 'none'
}

const animaLogo = gsap.timeline({ onComplete: overlayDismiss })
animaLogo.from(
  '.s-down',
  {
    y: 400,
    opacity: 0,
    ease: 'bouce.InOut',
    duration: 2.5,
    repeat: 1,
    yoyo: true,
    repeatDelay: 2
  },
  1
)

animaLogo.from(
  '.s-up',
  {
    y: -400,
    opacity: 0,
    ease: 'bouce.InOut',
    duration: 2.5,
    repeat: 1,
    yoyo: true,
    repeatDelay: 2
  },
  1
)

animaLogo.from(
  '.a-left',
  {
    x: -400,
    opacity: 0,
    stagger: { each: 0.1, from: 'end' },
    ease: 'bouce.InOut',
    duration: 2.5,
    repeat: 1,
    yoyo: true,
    repeatDelay: 3
  },
  0
)

animaLogo.from(
  '.m-right',
  {
    x: 400,
    opacity: 0,
    stagger: { each: 0.1, from: 'start' },
    ease: 'bouce.InOut',
    duration: 2.5,
    repeat: 1,
    yoyo: true,
    repeatDelay: 3
  },
  0
)
