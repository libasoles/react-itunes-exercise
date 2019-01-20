import moment from 'moment';

const transformers = {
  album: data => data.map(x => ({
    id: x.collectionId,
    artistId: x.artistId,
    title: x.collectionName,
    subtitle: x.artistName,
    image: x.artworkUrl100,
    description: `${moment(x.releaseDate).year()}`,
    link: x.artistViewUrl,
  })),
  artist: data => data.map(x => ({
    id: x.artistId,
    name: x.artistName,
    description: `${x.primaryGenreName}`,
    link: x.artistLinkUrl,
  })),
};

export const transform = resource => transformers[resource];
