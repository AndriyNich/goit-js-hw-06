function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const outputContainer = document.querySelector('#boxes')
outputContainer.style.display = 'flex'
outputContainer.style.flexWrap = 'wrap'
outputContainer.style.gap = '10px'

const getRandomValidHexColor = () => {
  let color = getRandomHexColor()
  if (color.length === 7) {
    return color
  }

  return [
    color[0],
    ...Array(7 - color.length).fill(0),
    ...color.slice(1).split(''),
  ].join('')
}

const createElement = (element, index, array) => {
  const divRef = document.createElement('div')
  divRef.style.backgroundColor = getRandomValidHexColor()
  divRef.style.width = 30 + 10 * index + 'px'
  divRef.style.height = divRef.style.width
  return divRef
}

const createElements = amount => {
  return Array(amount).fill(0).map(createElement)
}

const clearDiv = container => {
  container.innerHTML = ''
}

const paintDiv = container => {
  const amount = parseInt(document.querySelector('input').value)
  if (!amount) {
    alert('Enter number!')
    return
  }

  clearDiv(container)
  container.append(...createElements(amount))
}

document
  .querySelector('button[data-create]')
  .addEventListener('click', paintDiv.bind(this, outputContainer))

document
  .querySelector('button[data-destroy]')
  .addEventListener('click', clearDiv.bind(this, outputContainer))
