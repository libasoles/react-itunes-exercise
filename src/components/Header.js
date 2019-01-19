import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.png';

function Header({ title }) {
  return (
    <header>
      <img src={logo} alt="logo" />
      <p>{title}</p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
