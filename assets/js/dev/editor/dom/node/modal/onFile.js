import { compressImage } from 'anticore/api/image/compressImage'
import { imageToDataURL } from 'anticore/api/image/imageToDataURL'
import { resizeImage } from 'anticore/api/image/resizeImage'
import { curry } from 'anticore/primitive/function/curry'
import { display } from './display'

export function onFile (tooltip, options, promise) {
  return promise.then(curry(resizeImage, options)).then(
    curry(compressImage, options)).then(curry(imageToDataURL, options)).then(
    curry(display, tooltip))
}
