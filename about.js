// Skills Animation
// frontend
const frontend = document.querySelector('.frontend')
const frontendSkills = document.querySelectorAll('.frontend-skill')
const frontendObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      frontendSkills.forEach(frontendSkill => {
        frontendSkill.classList.add('show')
      })
      return
    }

    frontendSkills.forEach(frontendSkill => {
      frontendSkill.classList.remove('show')
    })
  })
})

frontendObserver.observe(frontend)

// backend
const backend = document.querySelector('.backend')
const backendSkills = document.querySelectorAll('.backend-skill')
const backendObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      backendSkills.forEach(backendSkill => {
        backendSkill.classList.add('show')
      })
      return
    }

    backendSkills.forEach(backendSkill => {
      backendSkill.classList.remove('show')
    })
  })
})

backendObserver.observe(backend)