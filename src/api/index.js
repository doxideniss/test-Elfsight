import axios from 'axios';

export default {
  getUsers: () => axios.get('https://jsonplaceholder.typicode.com/users'),
  getAlbums: () => axios.get('https://jsonplaceholder.typicode.com/albums?_embed=photos'),
  getPhotosById: (albumId) => axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`),
}
