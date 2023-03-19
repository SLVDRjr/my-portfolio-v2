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

// Form Validation
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')

const submitBtn = document.querySelector('#submit')

// event listeners
nameInput.addEventListener('keyup', validateName)
emailInput.addEventListener('keyup', validateEmail)
messageInput.addEventListener('keyup', validateMessage)

  function validateName(e){
    if(!nameInput.value.match(/^[a-zA-Z ]*$/)){ 
      e.preventDefault()
      nameInput.style.borderColor = "red";
      return false
    }else{
      nameInput.style.borderColor = "";
      return true
    }
  }
  
  function validateEmail(e){
    if(!emailInput.value){
      e.preventDefault()
      return false
    }
  
    if(!emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      e.preventDefault()
      emailInput.style.borderColor = "red";
      return false
    }else{
      emailInput.style.borderColor = "";
      return true
    }
  }
  
  function validateMessage(e){
    if(!messageInput.value){
      e.preventDefault()
      messageInput.style.borderColor = "red";
      return false
    }else{
      messageInput.style.borderColor = "";
      return true
    }
  }

  function reset(){
    nameInput.value = ''
    emailInput.value = ''
    messageInput.value = ''
  }

  contactForm.addEventListener('submit', function() {
    const isValidName = validateName()
    const isValidEmail = validateEmail()
    const isValidMessage = validateMessage()

    if(isValidName && isValidEmail && isValidMessage){
      reset()
    }
  })


