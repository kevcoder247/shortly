const input = document.getElementById('link-input');
const form = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu')


form.addEventListener('submit', formSubmit);

menuBtn.addEventListener('click', navToggle);

function navToggle(){
  menuBtn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

// Validate a URL
function validURL(str) {
  let pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

function formSubmit(e) {
  e.preventDefault()

  if (input.value === '') {
    errMsg.innerHTML = 'Please enter something'
    input.classList.add('border-red')
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = 'Please enter a valid URL'
    input.classList.add('border-red')
  } else {
    errMsg.innerHTML = ''
    input.classList.remove('border-red')
    alert('Success')
  }
}