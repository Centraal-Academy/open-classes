const imagemin = require('imagemin')
const imageminGuetzli = require('imagemin-guetzli')

imagemin(
  ['images/*.jpg'],
  'build/images-guetzil',
  {
    use: [
      imageminGuetzli()
    ]
  }
).then(() => {
  console.log('Images optimized')
})
