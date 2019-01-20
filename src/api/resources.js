import axios from 'axios';
import get from 'lodash/get';

import { transform } from './transformers';

const itunesApiBaseUrl = 'https://itunes.apple.com';

class Api {
  fetchAlbums = (filters) => {
    const params = {
      type: 'music',
      entity: 'album',
      attribute: 'albumTerm',
      limit: 25,
      ...filters,
    };

    return axios.get(`${itunesApiBaseUrl}/search`, { params })
      .then(response => get(response, 'data.results', []))
      .then(data => transform('album')(data))
      .catch(console.error);
  }

  fetchAlbumsByArtistId = (id, filters = {}) => {
    const params = {
      id,
      entity: 'album',
      ...filters,
    };

    return axios.get(`${itunesApiBaseUrl}/lookup`, { params })
      .then(response => get(response, 'data.results', []))
      .then((data) => {
        const artist = data.shift();
        const albums = transform('album')(data);
        return {
          artist: transform('artist')([artist])[0],
          albums,
        };
      })
      .catch(console.error);
  }
}

export default new Api();
