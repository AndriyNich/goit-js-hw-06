const categories = document.querySelectorAll('#categories > .item')

console.log(`Number of categories: ${categories.length}`)
console.log('')

const result = categories =>
  categories.forEach(category => {
    const title = category.querySelector('h2').textContent
    console.log(`Category: ${title}`)
    const numberElements = category.querySelectorAll('ul > li').length
    console.log(`Elements: ${numberElements}`)
    console.log('')
  })

result(categories)
