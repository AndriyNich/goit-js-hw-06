document
  .querySelector('#validation-input')
  .addEventListener('blur', function () {
    this.classList = []
    if (this.value.trim().length === parseInt(this.dataset.length)) {
      this.classList.add('valid')
    } else if (this.value.length !== 0) {
      this.classList.add('invalid')
    }
  })
