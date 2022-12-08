;(() => {
  const input = document.querySelector('#name-input')
  const output = document.querySelector('#name-output')

  const callback = function (element) {
    element.textContent = this.value.length === 0 ? 'Anonymous' : this.value
  }

  input.addEventListener('input', callback.bind(input, output))
})()
