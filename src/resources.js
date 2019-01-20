import axios from 'axios';
import moment from 'moment';
import get from 'lodash/get';

const itunesApiBaseUrl = 'https://itunes.apple.com';

export default {
  fetchAlbums: (filters) => {
    const params = {
      type: 'music',
      entity: 'album',
      attribute: 'albumTerm',
      limit: 25,
      ...filters,
    };

    return axios.get(`${itunesApiBaseUrl}/search`, { params })
      .then(response => get(response, 'data.results', []))
      .then(data => transformers.transformAlbum(data))
      .catch(console.error);
  },
  fetchAlbumsByArtistId: (id, filters = {}) => {
    const params = {
      id,
      entity: 'album',
      ...filters,
    };

    return axios.get(`${itunesApiBaseUrl}/lookup`, { params })
      .then(response => get(response, 'data.results', []))
      .then((data) => {
        const artist = data.shift();
        const albums = transformers.transformAlbum(data);
        return {
          artist: transformers.transformArtist([artist])[0],
          albums,
        };
      })
      .catch(console.error);
  },

};

const transformers = {
  transformAlbum: data => data.map(x => ({
    id: x.collectionId,
    artistId: x.artistId,
    title: x.collectionName,
    subtitle: x.artistName,
    image: x.artworkUrl100,
    description: `${moment(x.releaseDate).year()}`,
    link: x.artistViewUrl,
  })),
  transformArtist: data => data.map(x => ({
    id: x.artistId,
    name: x.artistName,
    description: `${x.primaryGenreName}`,
    link: x.artistLinkUrl,
  })),
};
