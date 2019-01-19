import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function SearchBox({ term, placeholder }) {
  return (
    <TextField
      name="main-search"
      label={placeholder}
      type="search"
      autoFocus
      margin="normal"
      value={term}
    />
  );
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  term: PropTypes.string,
};

SearchBox.defaultProps = {
  term: null,
  placeholder: 'Buscá tu música...',
};

export default SearchBox;
