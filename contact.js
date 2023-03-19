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
