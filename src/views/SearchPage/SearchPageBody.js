import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import get from 'lodash/get';

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
    const params = {
      term: 'gold',
      type: 'music',
      entity: 'album',
      attribute: 'albumTerm',
      limit: 25,
    };

    axios.get('https://itunes.apple.com/search', { params })
      .then((response) => {
        const results = get(response, 'data.results', []);

        if (results.length === 0) {
          this.resetResults();
        }

        const items = results.map(x => ({
          id: x.artistId,
          title: x.artistName,
          image: x.artworkUrl100,
          description: `${moment(x.releaseDate).year()}`,
          link: x.artistViewUrl,
        }));

        this.setState({
          items,
        });
      })
      .catch((response) => {
        console.error(response);
      });
  }

  resetResults() {
    this.setState({
      items: [],
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
