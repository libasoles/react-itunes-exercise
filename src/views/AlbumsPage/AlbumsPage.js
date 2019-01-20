import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import get from 'lodash/get';

import resources from '../../resources';
import Page from '../../components/Page';
import SearchResults from '../SearchPage/SearchPageResults';
import NoResults from '../../components/NoResults';
import ArtistDescription from './ArtistDescription';
import Loading from '../../components/Loading';

const styles = theme => ({

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
    const { artist, items, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (!items.length) {
      return <NoResults />;
    }

    return (
      <Page>
        <ArtistDescription artist={artist} />
        <SearchResults items={items} />
      </Page>
    );
  }
}

AlbumsPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(AlbumsPage);
