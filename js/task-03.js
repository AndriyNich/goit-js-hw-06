const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

const galleries = document.querySelector('.gallery')

galleries.style.display = 'flex'
galleries.style.gap = '10px'
galleries.style.listStyle = 'none'
galleries.style.justifyContent = 'space-between'
galleries.style.alignItems = 'center'

const gallery = images
  .map(
    ({url, alt}) =>
      `<li class="gallery__item"><img width="100%" src="${url}" alt="${alt}"/></li>`,
  )
  .join('')

galleries.insertAdjacentHTML('afterbegin', gallery)
