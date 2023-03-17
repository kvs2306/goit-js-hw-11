import refs from './refs';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = refs;
function createGalleryElem(str) {
  refs.gallery.insertAdjacentHTML('beforeend', str);
}

export default createGalleryElem;
