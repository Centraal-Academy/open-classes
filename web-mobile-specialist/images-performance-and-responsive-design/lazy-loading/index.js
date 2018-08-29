/* global IntersectionObserver, Image */
const images = [].slice.call(document.querySelectorAll('.pokemon'))

function lazyLoadPokemonItem (pokeItem) {
  const lazyImage = new Image()
  lazyImage.classList.add('pokemon')
  lazyImage.src = pokeItem.dataset.srcLazy
  lazyImage.onload = () => {
    const parent = pokeItem.parentNode
    parent.replaceChild(lazyImage, pokeItem)
  }
}

if ('IntersectionObserver' in window) {
  let imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let image = entry.target
        const placeholderSrc = image.dataset.src
        image.src = placeholderSrc
        imageObserver.unobserve(image)
        setTimeout(() => {
          lazyLoadPokemonItem(image)
        }, 3000)
      }
    })
  })

  images.forEach((image) => {
    imageObserver.observe(image)
  })
}
