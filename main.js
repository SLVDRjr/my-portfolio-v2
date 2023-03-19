let activeIndex = 0

const slides = document.getElementsByClassName('slide')

const handleRightClick = () => {
  // Bump active index

  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)
  const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)

  // Active slide becomes after
  currentSlide.dataset.status = "after"

  // Next slide becomes active
  nextSlide.dataset.status = "becoming-active-from-before"

  setTimeout(() => {
    nextSlide.dataset.status = "active"
    activeIndex = nextIndex
  })
}

const handleLeftClick = () => {
  // Bump active index

  const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)
  const prevSlide = document.querySelector(`[data-index="${prevIndex}"]`)

  // Active slide becomes after
  currentSlide.dataset.status = "before"

  // Prev slide becomes active
  prevSlide.dataset.status = "becoming-active-from-after"

  setTimeout(() => {
    prevSlide.dataset.status = "active"
    activeIndex = prevIndex
  })
}

// Mobile Menu Navigation
const bars = document.querySelector('.nav-bars')
const mobileNav = document.querySelector('.mobile-nav')

bars.addEventListener('click', () => {
  const visibility = mobileNav.getAttribute('data-visible')

  if(visibility === 'false'){
    mobileNav.setAttribute('data-visible', true)
    bars.setAttribute('aria-expanded', true)
    bars.style.borderLeft = 'none'
  }else{
    mobileNav.setAttribute('data-visible', false)
    bars.setAttribute('aria-expanded', false)
    setTimeout(() => {
      bars.style.borderLeft = ''
    }, 500)
  }
})

window.addEventListener('resize', () => {
  if(window.innerWidth > 992){
    mobileNav.setAttribute('data-visible', false)
    bars.setAttribute('aria-expanded', false)
    bars.style.borderLeft = ''
  }
})


