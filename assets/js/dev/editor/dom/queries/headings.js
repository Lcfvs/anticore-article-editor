import {all} from '.';

export function headings(element) {
  return all('h1, h2, h3, h4, h5, h6', element);
}