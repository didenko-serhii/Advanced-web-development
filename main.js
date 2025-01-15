let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let body = document.querySelector('body')

  body.classList.toggle('theme')
})
