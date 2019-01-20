import React, { Component } from 'react';

import resources from '../../resources';
import SearchBox from '../../components/SearchBox';
import SearchResults from './SearchPageResults';

class SearchPageBody extends Component {
  constructor() {
    super();

    this.state = {
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

  render() {
    const { items } = this.state;

    return (
      <React.Fragment>
        <SearchBox />
        <SearchResults items={items} />
      </React.Fragment>
    );
  }
}

export default SearchPageBody;
