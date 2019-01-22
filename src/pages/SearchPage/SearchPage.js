import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import resources from '../../api/resources';
import Page from '../../components/Page';
import Loading from '../../components/Loading';
import SearchPageHeader from './SearchPageHeader';
import SearchBox from './SearchFilters';
import SearchResults from './SearchPageResults';
import ArtistItem from '../components/ArtistItem';
import AlbumItem from '../components/AlbumItem';
import { WithConfig } from '../../config';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.defaultFilters = {
      term: '',
      type: 'album',
      offset: 0,
    };

    const filters = queryString.parse(props.location.search);

    this.state = {
      filters: {
        ...this.defaultFilters,
        ...filters,
      },
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  reset = () => {
    this.setState({
      filters: { ...this.defaultFilters },
      items: [],
      loading: false,
    });
  };

  handleFiltersChange = (event) => {
    const { name, value } = event.target;
    const { config } = this.props;

    this.setState(state => ({
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
        offset: state.filters.offset + config.itemsPerPage,
      },
    }), () => this.fetchData());
  };

  persistFilters = (filters) => {
    const { history } = this.props;
    history.push({
      search: queryString.stringify(filters),
    });
  };

  fetchData() {
    const { filters } = this.state;
    const { type } = filters;

    const result = type === 'artist' ? resources.fetchArtists(filters) : resources.fetchAlbums(filters);

    result
      .then((items = []) => {
        this.setState({
          items,
          loading: false,
        });
      })
      .catch((response) => {
        this.reset();
        console.error(response);
      });

    this.persistFilters(filters);
  }

  render() {
    const { filters, items, loading } = this.state;

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
