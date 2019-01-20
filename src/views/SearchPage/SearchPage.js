import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import Header from '../../components/Header';
import SearchPageHeader from './SearchPageHeader';
import SearchPageBody from './SearchPageBody';

const styles = theme => ({
  container: {
    background: '#757575',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});


function SearchPage({ classes }) {
  return (
    <Grid container className={classes.container}>
      <Header title="iTunes discovery" />
      <main>
        <SearchPageHeader title="Qué querés escuchar hoy?" />
        <SearchPageBody />
      </main>
    </Grid>
  );
}

SearchPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SearchPage);
