import PropTypes from 'prop-types';
import React from 'react';
import logo from '../logo.png';

export function Logo(props) {
  const { className } = props;
  return <img src={logo} alt="logo" className={className} />;
}

Logo.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

Logo.defaultProps = { className: {} };
