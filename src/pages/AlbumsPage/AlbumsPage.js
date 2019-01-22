import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import get from 'lodash/get';

import resources from '../../api/resources';
import Page from '../../components/Page';
import SearchResults from '../SearchPage/SearchPageResults';
import NoResults from '../../components/NoResults';
import ArtistDescription from '../components/ArtistDescription';
import Loading from '../../components/Loading';
import AlbumItem from '../components/AlbumItem';
import BackButton from '../../components/BackButton';

const styles = theme => ({
  artist: {
    marginTop: '10px',
  },
  backButton: {
    position: 'absolute',
    right: '60px',
  },
});

class AlbumsPage extends Component {
  constructor() {
    super();

    this.state = {
      artist: {},
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = get(this.props, 'match.params');

    const filters = {
      limit: 25,
    };

    resources.fetchAlbumsByArtistId(id, filters)
      .then((data) => {
        this.setState({
          artist: data.artist,
          items: data.albums,
          loading: false,
        });
      })
      .catch((response) => {
        this.setState({
          artist: {},
          items: [],
          loading: false,
        });
        console.error(response);
      });
  }

  render() {
    const { classes } = this.props;
    const { artist, items, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (!items.length) {
      return <NoResults />;
    }

    return (
      <Page>
        <BackButton className={classes.backButton} />
        <Grid item className={classes.artist}>
          <ArtistDescription artist={artist} />
        </Grid>
        <SearchResults items={items} component={<AlbumItem />} />
      </Page>
    );
  }
}

AlbumsPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(AlbumsPage);
