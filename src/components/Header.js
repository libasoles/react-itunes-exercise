import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import logo from '../logo.png';
import LinkWrapper from './Link';

const styles = theme => ({
  appBar: {
    background: theme.primary,
  },
  logo: {
    width: '50px',
    margin: '0px 10px',
  },
});

function Header({ classes, title }) {
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <LinkWrapper to="/">
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
        </LinkWrapper>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);
