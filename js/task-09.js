function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

document.querySelector('button.change-color').addEventListener('click', () => {
  const backgroundColor = getRandomHexColor()
  document.body.style.backgroundColor = backgroundColor
  document.querySelector('span.color').textContent = backgroundColor
})
