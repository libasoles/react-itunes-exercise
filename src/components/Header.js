import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import logo from '../logo.png';

const styles = theme => ({
  appBar: {
    background: grey[900],
  },
  logo: {
    width: '50px',
  },
});

function Header({ classes, title }) {
  return (
    <header>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);
