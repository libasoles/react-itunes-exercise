import moment from 'moment';

const transformers = {
  album: data => ({
    id: data.collectionId,
    artistId: data.artistId,
    title: data.collectionName,
    subtitle: data.artistName,
    image: data.artworkUrl100,
    description: `${moment(data.releaseDate).year()}`,
    link: data.collectionViewUrl,
  }),
  artist: data => ({
    id: data.artistId,
    name: data.artistName,
    description: `${data.primaryGenreName}`,
    link: data.artistLinkUrl || data.artistViewUrl,
  }),
  song: data => ({
    id: data.trackId,
    albumId: data.collectionId,
    artistId: data.artistId,
    name: data.trackName,
    description: `${moment(data.releaseDate).year()}`,
    time: moment.utc(data.trackTimeMillis),
    image: data.artworkUrl100,
    link: data.trackViewUrl,
  }),
};

export const getTransformerFor = resource => data => transformers[resource](data);
