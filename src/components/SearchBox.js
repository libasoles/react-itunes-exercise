import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function SearchBox({ classes, term, placeholder }) {
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
  classes: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string,
  term: PropTypes.string,
};

SearchBox.defaultProps = {
  term: '',
  placeholder: 'Buscá tu música...',
};

export default SearchBox;
