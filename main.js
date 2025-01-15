let btn = document.getElementById('themer')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let body = document.querySelector('body')

  body.classList.toggle('theme')
})
