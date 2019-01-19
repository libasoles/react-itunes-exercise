import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.png';

function Header({ title }) {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Typography variant="title" color="inherit">
        {title}
      </Typography>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
