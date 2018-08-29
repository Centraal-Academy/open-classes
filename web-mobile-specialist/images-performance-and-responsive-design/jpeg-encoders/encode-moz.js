const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')

imagemin(
  ['images/*.jpg'],
  'build/images-moz',
  {
    use: [
      imageminMozjpeg()
    ]
  }
).then(() => {
  console.log('Images optimized')
})
