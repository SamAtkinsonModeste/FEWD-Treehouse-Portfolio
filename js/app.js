const overlay = document.querySelector('#overlay')
const projectSlider = document.querySelector('.project-slider')
const projects = document.querySelectorAll('.project')
const mobileNav = document.querySelector('#mobile-nav')
const mobileNavLi = mobileNav.querySelectorAll('li')
const staticNav = document.querySelector('.static-li')
const interactNav = document.querySelector('.interactive-li')
const logoNav = document.querySelector('.logo-li')
const portNavUl = document.querySelector('.top-slide-nav')
const allPortLis = portNavUl.querySelectorAll('li')
const slideNav = document.querySelector('.proj-slider-nav')
const portTopNav = document.querySelector('.top-slide-nav')
const topPortLi = portTopNav.querySelectorAll('li')
const ulStatic = document.querySelector('#static-ul')
const ulInteract = document.querySelector('#interactive-ul')
const ulLogos = document.querySelector('#logos-ul')
const indicatDots = slideNav.querySelectorAll('li')
const hamburger = document.querySelector('.hamburger')
const body = document.body
const projViewBox = document.querySelector('.proj-viewport')
const viewBoxWidth = getComputedStyle(projViewBox).width
const nextBtn = document.querySelector('#arrow-right')
const prevBtn = document.querySelector('#arrow-left')
const staticUl = document.querySelector('#static-ul')
const interactUl = document.querySelector('#interactive-ul')
const logosUl = document.querySelector('#logos-ul')
const projWidth = getComputedStyle(projects[0]).width
const moveAmount = projWidth
console.log(projWidth)
console.log(viewBoxWidth)
console.log(topPortLi)

let projectIndex = 0

document.addEventListener('DOMContentLoaded', initializeElements)

//sets up my elements
function initializeElements () {
  overlay.style.display = 'block'
  console.log(overlay)
}

//callback for when the animaLogo is finished
const setupsDismis = () => {
  overlay.style.display = 'none'
  projects.forEach(project => {
    project.style.margin = '0'

    gsap.to(project, { scale: 0.5 })

    if (projects.length > 0) {
      projects[projectIndex].classList.add('active-proj')
      gsap.to(projects[projectIndex], { scale: 1 })
      // console.log(projects[projectIndex]);
    }

    if (projects[0].classList.contains('active-proj')) {
      prevBtn.style.visibility = 'hidden'
      // console.log(projects[0]);
    }
  })
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
      '.hori',
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
        y: -400,
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
        y: -400,
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
      2.5
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
      '.top-slide-nav',
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
const animaLogo = gsap.timeline({ onComplete: setupsDismis })
const homeAni = gsap.timeline()
//logo animation for overlay
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
      duration: 1,
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
      duration: 1,
      repeat: 1,
      yoyo: true,
      repeatDelay: 2.5
    },
    0
  )

//animating mobile hamburger
hamburger.addEventListener('click', () => {
  body.classList.toggle('active-ham')
})

//removes the slide in mobile nav to reveal the clicked link
mobileNavLi.forEach(navLi => {
  navLi.addEventListener('click', () => {
    body.classList.remove('active-ham')
  })
})

function showProjs (index) {
  if (index >= projects.length) {
    projectIndex = 0
  } else if (index < 0) {
    projectIndex = projects.length - 1
  }

  projects.forEach(project => {
    project.classList.remove('active-proj')
    gsap.to(project, { scale: 0.5 })
  })

  projects[projectIndex].classList.add('active-proj')

  if (projects[projectIndex].classList.contains('active-proj')) {
    projects[projectIndex].style.display.alignSelf = 'center'
  }

  indicatDots.forEach(list => list.classList.remove('active-indiBall'))

  indicatDots[projectIndex].classList.add('active-indiBall')
}

//UL SWAP OUT AND IN FUNCTIONS
function ulNextBtn () {
  if (projectIndex === 3) {
    // console.log(ulInteractive);
    gsap.to(ulStatic, { xPercent: -1000 })
    ulStatic.classList.remove('current-ul')
    ulInteract.style.display = 'flex'
    ulInteract.classList.add('current-ul')
    gsap.to(ulInteract, { y: -45 })
    topPortLi.forEach(portLi => {
      portLi.classList.remove('active-proj-sec')
    })
    topPortLi[1].classList.add('active-proj-sec')
  } else if (projectIndex === 7) {
    console.log(ulLogos)
    ulInteract.classList.remove('current-ul')
    gsap.to(ulInteract, { y: 100 })
    ulLogos.classList.add('current-ul')
    gsap.to(ulLogos, { y: -101 })
    topPortLi.forEach(portLi => {
      portLi.classList.remove('active-proj-sec')
    })
    topPortLi[2].classList.add('active-proj-sec')
  }
}

function ulPrevBtn () {
  if (projectIndex === 2) {
    console.log(ulStatic, ulInteract)
    ulStatic.classList.add('current-ul')
    gsap.to(ulStatic, { xPercent: 0 })
    ulInteract.classList.remove('current-ul')
    gsap.to(ulInteract, { y: 100 })
    topPortLi.forEach(portLi => {
      portLi.classList.remove('active-proj-sec')
    })
    topPortLi[0].classList.add('active-proj-sec')
  } else if (projectIndex === 6) {
    console.log(ulInteract)
    ulLogos.classList.remove('current-ul')
    gsap.to(ulLogos, { y: 100 })
    ulInteract.classList.add('current-ul')
    gsap.to(ulInteract, { y: -45 })
    topPortLi.forEach(portLi => {
      portLi.classList.remove('active-proj-sec')
    })
    topPortLi[1].classList.add('active-proj-sec')
  }
}

//Right direction for project divs
function goRight () {
  if (projectIndex === projects.length - 1) {
    // console.log(nextBtn);
    nextBtn.style.visibility = 'hidden'
  }

  if (projectIndex === 1) {
    // console.log(prevBtn);
    prevBtn.style.visibility = 'visible'
  }

  gsap.to(projects, { x: `-=${moveAmount}`, ease: 'power4.out', duration: 1.1 })
  gsap.to('.active-proj', { scale: 1, delay: 0.8, duration: 0.8 })
  console.log(moveAmount)
  console.log(projectIndex)
}

//Left direction for project divs
function goLeft () {
  if (projectIndex === 0) {
    console.log(prevBtn)
    prevBtn.style.visibility = 'hidden'
  }
  if (projectIndex > 0) {
    console.log(prevBtn)
    nextBtn.style.visibility = 'visible'
  }
  gsap.to(projects, { x: `+=${moveAmount}`, ease: 'power4.out', duration: 1 })
  gsap.to('.active-proj', { scale: 1, delay: 0.8, duration: 0.8 })
  console.log(projectIndex)
}

//next project button function
const nextProject = () => {
  if (projects[1].classList.contains('active=proj')) {
    prevBtn.style.visibility = 'visible'
  }
  projectIndex++

  showProjs(projectIndex)
  goRight()
  ulNextBtn()
  console.log(projects[projectIndex], getComputedStyle(projViewBox).width)
}

//prev project button function
const prevProject = () => {
  projectIndex--
  showProjs(projectIndex)
  goLeft()
  ulPrevBtn()
}

function removeActive () {
  projects.forEach(project => {
    project.classList.remove('active-proj')
  })
}

nextBtn.addEventListener('click', nextProject)
prevBtn.addEventListener('click', prevProject)

// staticNav.addEventListener('click', () => {
//   console.log("I'm working")
//   if (projectIndex > 0) {
//     gsap.to(projects, {
//       x: `-=${moveAmount}` * projectIndex,
//       ease: 'power4.out',
//       duration: 1
//     })
//     removeActive()
//     projects[0].classList.add('active-proj')
//     gsap.to('.active-proj', { scale: 1, delay: 0.8, duration: 0.8 })
//     projectIndex = 0
//     console.log(projectIndex)

//     topPortLi.forEach(topLi => {
//       topLi.classList.remove('active-proj-sec')
//     })

//     staticNav.classList.add('active-proj-sec')
//   }

//   if (ulInteract.classList.contains('current-ul')) {
//     ulInteract.classList.remove('current-ul')
//     gsap.to(ulInteract, { y: 100 })
//     ulStatic.classList.add('current-ul')
//     gsap.to(ulStatic, { xPercent: 0 })
//     indicatDots.forEach(list => list.classList.remove('active-indiBall'))
//     indicatDots[0].classList.add('active-indiBall')
//   } else if (ulLogos.classList.contains('current-ul')) {
//     ulLogos.classList.remove('current-ul')
//     gsap.to(ulLogos, { y: 100 })
//     ulStatic.classList.add('current-ul')
//     gsap.to(ulStatic, { xPercent: 0 })
//     indicatDots.forEach(list => list.classList.remove('active-indiBall'))
//     indicatDots[0].classList.add('active-indiBall')
//   }
// })

// interactNav.addEventListener('click', () => {
//   console.log("I'm working for interactive nav")
//   if (projectIndex > 3) {
//     projectReset = projectIndex[3]

//     console.log(projectIndex)
//     gsap.to(projects[3], {
//       x: `-=${moveAmount}` * projectIndex - projectReset,
//       ease: 'power4.out',
//       duration: 1
//     })
//     removeActive()
//     projects[3].classList.add('active-proj')
//     gsap.to('.active-proj', { scale: 1, delay: 0.8, duration: 0.8 })
//     projectIndex = 3
//     console.log(projectIndex)

//     topPortLi.forEach(topLi => {
//       topLi.classList.remove('active-proj-sec')
//     })

//     interactive.classList.add('active-proj-sec')
//   }

//   if (ulStatic.classList.contains('current-ul')) {
//     ulStatic.classList.remove('current-ul')
//     gsap.to(ulInteract, { y: 100 })
//     ulStatic.classList.add('current-ul')
//     gsap.to(ulStatic, { xPercent: 0 })
//     indicatDots.forEach(list => list.classList.remove('active-indiBall'))
//     indicatDots[0].classList.add('active-indiBall')
//   } else if (ulLogos.classList.contains('current-ul')) {
//     ulLogos.classList.remove('current-ul')
//     gsap.to(ulLogos, { y: 100 })
//     ulStatic.classList.add('current-ul')
//     gsap.to(ulStatic, { xPercent: 0 })
//     indicatDots.forEach(list => list.classList.remove('active-indiBall'))
//     indicatDots[0].classList.add('active-indiBall')
//   }
// })
