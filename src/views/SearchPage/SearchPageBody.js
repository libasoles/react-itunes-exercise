import React, { Component } from 'react';

import resources from '../../api/resources';
import Page from '../../components/Page';
import SearchBox from '../../components/SearchBox';
import SearchResults from './SearchPageResults';
import NoResults from '../../components/NoResults';

class SearchPageBody extends Component {
  constructor() {
    super();

    this.state = {
      term: '',
      items: [],
    };
  }

  componentDidMount() {
    const filters = {
      term: 'gold',
      limit: 25,
    };

    resources.fetchAlbums(filters)
      .then((items) => {
        this.setState({
          items,
        });
      })
      .catch((response) => {
        this.reset();
        console.error(response);
      });
  }

  reset = () => {
    this.setState({
      term: '',
      items: [],
    });
  }

  handleSearchTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  }

  render() {
    const { term, items } = this.state;

    if (!items.length) {
      return <NoResults />;
    }

    return (
      <Page>
        <SearchBox term={term} handleChange={this.handleSearchTermChange} />
        <SearchResults items={items} />
      </Page>
    );
  }
}

export default SearchPageBody;
