import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function SearchBox({ term, placeholder, handleChange }) {
  return (
    <TextField
      name="search-term"
      label={placeholder}
      type="search"
      autoFocus
      margin="normal"
      value={term}
      onChange={handleChange}
    />
  );
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  term: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

SearchBox.defaultProps = {
  term: '',
  placeholder: 'Buscá tu música...',
};

export default SearchBox;
