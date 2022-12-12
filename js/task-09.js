function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

document.querySelector('button.change-color').addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor()
  document.querySelector('span.color').textContent =
    document.body.style.backgroundColor
})
