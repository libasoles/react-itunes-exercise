import axios from 'axios';
import moment from 'moment';
import get from 'lodash/get';

const itunesApiBaseUrl = 'https://itunes.apple.com/search';

export default {
  fetchAlbums: (filters) => {
    const params = {
      type: 'music',
      entity: 'album',
      attribute: 'albumTerm',
      limit: 25,
      ...filters,
    };

    return axios.get(itunesApiBaseUrl, { params })
      .then((response) => {
        const results = get(response, 'data.results', []);

        return results.map(x => ({
          id: x.collectionId,
          title: x.collectionName,
          subtitle: x.artistName,
          image: x.artworkUrl100,
          description: `${moment(x.releaseDate).year()}`,
          link: x.artistViewUrl,
        }));
      })
      .catch(console.error);
  },
};
