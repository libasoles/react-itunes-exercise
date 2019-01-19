import React from 'react'
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
  render() {
    return (
      <input type="search" autoFocus placeholder="Buscá tu música..." />
    );
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  term: PropTypes.string,
}

export default SearchBox;
