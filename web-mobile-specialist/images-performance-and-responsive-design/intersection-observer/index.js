/* global IntersectionObserver */
const images = [].slice.call(document.querySelectorAll('.pokemon'))

if ('IntersectionObserver' in window) {
  let imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let image = entry.target
        console.log(image.src)
        imageObserver.unobserve(image)
      }
    })
  })

  images.forEach((image) => {
    imageObserver.observe(image)
  })
}
