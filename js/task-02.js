const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const elements = ingredients.map(elem => {
  const elemLi = document.createElement('li')
  elemLi.textContent = elem
  elemLi.classList.add('item')
  return elemLi
})

document.querySelector('#ingredients').append(...elements)
