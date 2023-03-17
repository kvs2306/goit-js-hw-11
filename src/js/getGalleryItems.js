import axios from 'axios';
import refs from './refs';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '4711889-1df4bd4dd90c9a16aff582e9e';

async function getGalleryItems() {
  return await axios.get(
    `${BASE_URL}?key=${KEY}&page=${refs.page}&per_page=40&q=${refs.q}&image_type=photo&orientation=horizontal&safesearch=true`
  );
}

export default getGalleryItems;
