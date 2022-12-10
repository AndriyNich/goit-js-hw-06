const categories = document.querySelectorAll('#categories > .item')

console.log(`Number of categories: ${categories.length}`)
console.log('')

const result = categories =>
  categories.forEach(category => {
    console.log('Category: ', category.querySelector('h2').textContent)
    const numberElements = console.log(
      'Elements: ',
      category.querySelectorAll('ul > li').length,
    )
    console.log('')
  })

result(categories)
