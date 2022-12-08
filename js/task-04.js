const counter = {
  counterValue: 0,
  element: document.querySelector('#value'),
  decrement() {
    this.counterValue -= 1
    this.showCounter()
  },
  increment() {
    this.counterValue += 1
    this.showCounter()
  },
  showCounter() {
    this.element.textContent = this.counterValue
  },
}

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener('click', counter.decrement.bind(counter))

document
  .querySelector('button[data-action="increment"]')
  .addEventListener('click', counter.increment.bind(counter))
