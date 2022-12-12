const categories = document.querySelectorAll('#categories > .item')

console.log(`Number of categories: ${categories.length}`)

const result = categories =>
  categories.forEach(category => {
    console.log('\nCategory: ', category.querySelector('h2').textContent)
    const numberElements = console.log(
      'Elements: ',
      category.querySelectorAll('ul > li').length,
    )
  })

result(categories)
