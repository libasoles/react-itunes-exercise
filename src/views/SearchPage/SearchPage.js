import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import Header from '../../components/Header';
import Top from './SearchPageHeader';
import SearchBox from '../../components/SearchBox';
import SearchResults from './SearchPageResults';

const styles = theme => ({
  main: {
    background: '#757575',
    textAlign: 'center',
    marginBottom: 'auto',
  },
});

function SearchPage({ classes }) {
  return (
    <React.Fragment>
      <Header title="iTunes discovery" />
      <main className={classes.main}>
        <Top title="Qué queres escuchar hoy?" />
        <SearchBox />
        <SearchResults items={[0, 1, 2, 4, 5]} />
      </main>
    </React.Fragment>
  );
}

SearchPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SearchPage);
