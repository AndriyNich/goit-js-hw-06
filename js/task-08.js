document.querySelector('.login-form').addEventListener('submit', callbackSubmit)

function callbackSubmit(event) {
  event.preventDefault()

  const {
    elements: {email, password},
  } = this

  const elements = {
    email: email.value,
    password: password.value,
  }

  console.log(elements)

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!')
  } else {
    event.currentTarget.reset()
  }
}
