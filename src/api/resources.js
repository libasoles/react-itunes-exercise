import axios from 'axios';
import get from 'lodash/get';

import { config } from '../config';
import { getTransformerFor } from './transformers';

class Api {
  constructor() {
    this.itunesApiBaseUrl = config.apibaseUrl;
    this.limit = config.itemsPerPage;
  }

  fetchAlbums = (filters = {}) => {
    const params = {
      media: 'music',
      entity: 'album',
      attribute: 'albumTerm',
      limit: this.limit,
      ...filters,
    };

    return axios.get(`${this.itunesApiBaseUrl}/search`, { params })
      .then(response => get(response, 'data.results', []))
      .then((albums) => {
        const transformAlbum = getTransformerFor('album');
        return albums.map(transformAlbum);
      })
      .catch(console.error);
  };

  fetchArtists = (filters = {}) => {
    const params = {
      media: 'music',
      entity: 'musicArtist',
      attribute: 'artistTerm',
      limit: this.limit,
      ...filters,
    };

    return axios.get(`${this.itunesApiBaseUrl}/search`, { params })
      .then(response => get(response, 'data.results', []))
      .then((artists) => {
        const transformArtist = getTransformerFor('artist');
        return artists.map(transformArtist);
      })
      .catch(console.error);
  };

  fetchAlbumsByArtistId = (id, filters = {}) => {
    const params = {
      id,
      entity: 'album',
      limit: this.limit,
      ...filters,
    };

    return axios.get(`${this.itunesApiBaseUrl}/lookup`, { params })
      .then(response => get(response, 'data.results', []))
      .then(([artist, ...albums]) => {
        const transformAlbum = getTransformerFor('album');
        const transformArtist = getTransformerFor('artist');

        return {
          artist: transformArtist(artist),
          albums: albums.map(transformAlbum),
        };
      })
      .catch(console.error);
  };

  fetchSongsByAlbumId = (id, filters = {}) => {
    const params = {
      id,
      media: 'music',
      entity: 'song',
      limit: this.limit,
      ...filters,
    };

    return axios.get(`${this.itunesApiBaseUrl}/lookup`, { params })
      .then(response => get(response, 'data.results', []))
      .then(([metadata, ...songs]) => {
        const transformArtist = getTransformerFor('artist');
        const transformAlbum = getTransformerFor('album');
        const transformSong = getTransformerFor('song');

        return {
          artist: transformArtist(metadata),
          album: transformAlbum(metadata),
          songs: songs.map(transformSong),
        };
      })
      .catch(console.error);
  }
}

export default new Api();
