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

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.defaultFilters = {
      term: '',
      type: 'album',
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
  }

  handleFiltersChange = (event) => {
    const { name, value } = event.target;
    this.setState(state => ({
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    }));
    this.fetchData();
  }

  persistFilters = (filters) => {
    const { history } = this.props;
    history.push({
      search: queryString.stringify(filters),
    });
  }

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
        this.persistFilters(filters);
      })
      .catch((response) => {
        this.reset();
        console.error(response);
      });
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
};

export default SearchPage;
