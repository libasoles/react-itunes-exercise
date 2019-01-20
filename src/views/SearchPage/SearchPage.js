import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import Header from '../../components/Header';
import SearchPageHeader from './SearchPageHeader';
import SearchPageBody from './SearchPageBody';

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
        <SearchPageHeader title="Qué queres escuchar hoy?" />
        <SearchPageBody />
      </main>
    </React.Fragment>
  );
}

SearchPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SearchPage);
