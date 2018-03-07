import {curry} from 'anticore/primitive/function/curry';
import {compressImage} from 'anticore/api/image/compressImage';
import {resizeImage} from 'anticore/api/image/resizeImage';
import {imageToDataURL} from 'anticore/api/image/imageToDataURL';
import {display} from './display';

export function onFile(tooltip, options, promise) {
  return promise
  .then(curry(resizeImage, options))
  .then(curry(compressImage, options))
  .then(curry(imageToDataURL, options))
  .then(curry(display, tooltip));
}