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

//sets up my elements
function initializeElements () {
  overlay.style.display = 'block'
  projectSlider.style.display = 'flex'
  slideNav.style.display = 'flex'
}

//callback for when the animaLogo is finished
const overlayDismiss = () => {
  overlay.style.display = 'none'
  homeAni
    .from(
      '#giltter',
      {
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      0
    )
    .from(
      '#giltter-port-bg',
      {
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      0
    )

    .from(
      '.hori',
      {
        x: 400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      0.5
    )
    .from(
      '.hori-port',
      {
        x: 400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      0.5
    )
    .from(
      '.vert',
      {
        y: 400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      1
    )
    .from(
      '.vert-port',
      {
        y: 400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      1
    )
    .from(
      '.sam-img-home',
      {
        x: 400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      1.5
    )
    .from(
      '.nam-colour',
      {
        x: -400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      1
    )
    .from(
      '.nam-gold',
      {
        x: -400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      1.5
    )
    .from(
      '.creative-text',
      {
        x: -400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      2
    )
    .from(
      '.webDev-text',
      {
        x: -400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      2.5
    )
    .from(
      '.head-port',
      {
        x: -400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      2.5
    )
    .from(
      '.slide-nav',
      {
        y: -400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      2.5
    )
    .from(
      '.projects-container',
      {
        y: -400,
        opacity: 0,
        stagger: { each: 0.1, from: 'start' },
        ease: 'bouce.InOut',
        duration: 2.5,
        // repeat: 1,
        yoyo: true
        // repeatDelay:
      },
      2.5
    )
}
const animaLogo = gsap.timeline({ onComplete: overlayDismiss })
const homeAni = gsap.timeline()

animaLogo
  .from(
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
  .from(
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
  .from(
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
  .from(
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
