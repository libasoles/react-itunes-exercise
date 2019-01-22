import React, { Component } from 'react';

import SearchPageHeader from './SearchPageHeader';
import resources from '../../api/resources';
import SearchBox from './SearchBox';
import SearchResults from './SearchPageResults';
import Page from '../../components/Page';
import Loading from '../../components/Loading';

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      filters: {
        term: '',
        type: undefined,
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
      filters: {
        term: '',
        type: undefined,
      },
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

  fetchData() {
    const { filters } = this.state;

    resources.fetchAlbums(filters)
      .then((items) => {
        this.setState({
          items,
          loading: false,
        });
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

    return (
      <Page>
        <SearchPageHeader title="Qué querés escuchar hoy?" />
        <SearchBox {...filters} handleChange={this.handleFiltersChange} />
        <SearchResults items={items} />
      </Page>
    );
  }
}

export default SearchPage;
