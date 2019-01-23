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
import { WithConfig } from '../../config';
import MoreResults from '../../components/MoreResults';
import { mergeWithoutDuplicates } from '../../helpers/merge';

const styles = () => ({
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
      albums: [],
      offset: 0,
      shouldLoadMore: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { id } = get(this.props, 'match.params');
    const { offset } = this.state;
    const filters = { offset };

    resources.fetchAlbumsByArtistId(id, filters)
      .then(this.handleSuccessfulResponse)
      .catch(this.handleErrorResponse);
  }

  handleSuccessfulResponse = (data) => {
    this.setState(state => ({
      artist: data.artist,
      albums: mergeWithoutDuplicates(state.albums, data.albums),
      shouldLoadMore: this.shouldLoadMoreAlbums(data.albums),
      offset: this.calculateNewOffset(state.offset),
      loading: false,
    }));
  }

  handleErrorResponse = (response) => {
    this.setState({
      artist: {},
      albums: [],
      loading: false,
    });
  }

  shouldLoadMoreAlbums = (albums) => {
    const { config } = this.props;
    const expectedLength = Number(config.itemsPerPage);

    return albums.length === expectedLength;
  }

  calculateNewOffset = (existingOffset) => {
    const { config } = this.props;

    return Number(existingOffset) + Number(config.itemsPerPage);
  }

  render() {
    const { classes } = this.props;
    const {
      artist, albums, shouldLoadMore, loading,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (!albums.length) {
      return <NoResults />;
    }

    return (
      <Page>
        <BackButton className={classes.backButton} />
        <Grid item className={classes.artist}>
          <ArtistDescription artist={artist} />
        </Grid>
        <SearchResults items={albums} component={<AlbumItem />} />
        { shouldLoadMore && <MoreResults handleChange={this.fetchData} /> }
      </Page>
    );
  }
}

AlbumsPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  config: PropTypes.shape({}).isRequired,
};

const WrappedComponent = WithConfig(AlbumsPage);
export default withStyles(styles)(WrappedComponent);
