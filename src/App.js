import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import PropTypes from 'prop-types';

import theme from './theme';
import Routes from './routes';
import Header from './components/Header';

const styles = theme => ({
  container: {
    background: '#757575',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
});

function App({ classes }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Grid container className={classes.container}>
          <Header title="iTunes discovery" />
          <Routes />
        </Grid>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(App);
