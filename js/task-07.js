document
  .querySelector('#font-size-control')
  .addEventListener('input', function () {
    document.querySelector('#text').style.fontSize = this.value + 'px'
  })
