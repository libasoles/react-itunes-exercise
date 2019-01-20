import React, { Component } from 'react';

import resources from '../../resources';
import SearchBox from '../../components/SearchBox';
import SearchResults from './SearchPageResults';

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
        console.error(response);
      });
  }

  handleSearchTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  }

  render() {
    const { term, items } = this.state;

    return (
      <React.Fragment>
        <SearchBox term={term} handleChange={this.handleSearchTermChange} />
        <SearchResults items={items} />
      </React.Fragment>
    );
  }
}

export default SearchPageBody;
