import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import { WithConfig } from '../../config';
import resources from '../../api/resources';
import Page from '../../components/Page';
import Loading from '../../components/Loading';
import SearchPageHeader from './SearchPageHeader';
import SearchBox from './SearchFilters';
import SearchResults from './SearchPageResults';
import ArtistItem from '../components/ArtistItem';
import AlbumItem from '../components/AlbumItem';
import MoreResults from '../../components/MoreResults';
import { mergeWithoutDuplicates } from '../../helpers/merge';

class SearchPage extends Component {
  defaultFilters = {
    term: '',
    type: 'album',
    offset: 0,
  };

  defaultState = {
    items: [],
    shouldLoadMore: false,
    loading: true,
  };

  constructor(props) {
    super(props);

    const filters = queryString.parse(props.location.search);

    this.state = {
      filters: {
        ...this.defaultFilters,
        ...filters,
      },
      ...this.defaultState,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  reset = () => {
    this.setState({
      filters: { ...this.defaultFilters },
      ...this.defaultState,
    });
  };

  handleFiltersChange = (event) => {
    const { name, value } = event.target;

    this.setState(state => ({
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
        offset: 0,
      },
    }), () => this.fetchData());
  };

  persistFilters = (filters) => {
    const { history } = this.props;
    const usefulFilters = { ...filters };
    delete usefulFilters.offset;
    history.push({
      search: queryString.stringify(usefulFilters),
    });
  };

  fetchData = () => {
    const { filters } = this.state;
    const { type } = filters;

    const result = type === 'artist' ? resources.fetchArtists(filters) : resources.fetchAlbums(filters);

    result
      .then(this.handleSuccessfulResponse)
      .catch(this.handleErrorResponse);
  }

  handleSuccessfulResponse = (items = []) => {
    this.setState(state => ({
      filters: {
        ...state.filters,
        offset: this.calculateNewOffset(state.filters.offset),
      },
      items: this.shouldResetCurrentResults(state.filters.offset)
        ? items : mergeWithoutDuplicates(state.items, items),
      shouldLoadMore: this.shouldLoadMoreItems(items),
      loading: false,
    }), () => {
      const { filters } = this.state;
      this.persistFilters(filters);
    });
  }

  handleErrorResponse = (response) => {
    console.error(response);
    this.reset();
  }

  shouldLoadMoreItems = (items) => {
    const { config } = this.props;
    const expectedLength = Number(config.itemsPerPage);

    return items.length === expectedLength;
  }

  calculateNewOffset = (existingOffset) => {
    const { config } = this.props;

    return Number(existingOffset) + Number(config.itemsPerPage);
  }

  shouldResetCurrentResults(offset) {
    return offset === 0;
  }

  render() {
    const {
      filters, items, shouldLoadMore, loading,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    const { type } = filters;
    const component = type === 'artist' ? <ArtistItem /> : <AlbumItem />;

    return (
      <Page>
        <SearchPageHeader title="Qué querés escuchar hoy?" />
        <SearchBox {...filters} handleChange={this.handleFiltersChange} />
        <SearchResults items={items} component={component} />
        { shouldLoadMore && <MoreResults handleChange={this.fetchData} /> }
      </Page>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  config: PropTypes.shape({}).isRequired,
};

export default WithConfig(SearchPage);
