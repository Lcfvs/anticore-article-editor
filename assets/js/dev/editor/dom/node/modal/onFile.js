import {curry} from 'anticore/primitive/function/curry';
import {compress} from 'anticore/api/image/compress';
import {resize} from 'anticore/api/image/resize';
import {imageToDataURL} from 'anticore/api/image/imageToDataURL';
import {display} from './display';

export function onFile(tooltip, options, promise) {
  return promise
  .then(curry(resize, options))
  .then(curry(compress, options))
  .then(curry(imageToDataURL, options))
  .then(curry(display, tooltip));
}