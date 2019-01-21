import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
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
  container: {
    flexDirection: 'columns',
    alignItems: 'stretch',
  },
  metadata: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '20px 0 0 10px',
  },
  artistDescription: {
    marginBottom: '20px',
  },
  songs: {
    flex: 1,
  },
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
    const { classes } = this.props;
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
        <Grid container className={classes.container}>
          <Grid item>
            <Grid container className={classes.metadata} spacing={16}>
              <Grid item>
                <ArtistDescription artist={artist} />
              </Grid>
              <Grid item>
                <AlbumDescription album={album} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.songs}>
            <SongsList songs={songs} />
          </Grid>
        </Grid>
      </Page>
    );
  }
}

SongsPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SongsPage);
