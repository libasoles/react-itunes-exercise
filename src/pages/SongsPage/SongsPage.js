import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import get from 'lodash/get';

import resources from '../../api/resources';
import Page from '../../components/Page';
import NoResults from '../../components/NoResults';
import Loading from '../../components/Loading';
import SongsList from './SongsList';
import ArtistDescription from '../components/ArtistDescription';
import AlbumDescription from '../components/AlbumDescription';

const styles = theme => ({

});

class SongsPage extends Component {
  constructor() {
    super();

    this.state = {
      artist: {},
      album: {},
      songs: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = get(this.props, 'match.params');

    const filters = {
      limit: 25,
    };

    resources.fetchSongsByAlbumId(id, filters)
      .then((data) => {
        this.setState({
          artist: data.artist || {},
          album: data.album || {},
          songs: data.songs || [],
          loading: false,
        });
      })
      .catch((response) => {
        this.setState({
          artist: {},
          album: {},
          songs: [],
          loading: false,
        });
        console.error(response);
      });
  }

  render() {
    const {
      artist, album, songs, loading,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (!songs.length) {
      return <NoResults />;
    }

    return (
      <Page>
        <ArtistDescription artist={artist} />
        <AlbumDescription album={album} />
        <SongsList songs={songs} />
      </Page>
    );
  }
}

SongsPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SongsPage);
