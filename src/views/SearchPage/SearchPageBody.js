import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import get from 'lodash/get';
import { withStyles } from '@material-ui/core/styles';

import SearchBox from '../../components/SearchBox';
import SearchResults from './SearchPageResults';

const styles = theme => ({

});

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
      limit: 20,
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
          description: "" + moment(x.releaseDate).year(),
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
    const { classes } = this.props;
    const { items } = this.state;

    return (
      <React.Fragment>
        <SearchBox />
        <SearchResults items={items} />
      </React.Fragment>
    );
  }
}

SearchPageBody.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SearchPageBody);
