import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  label: {
    color: grey[100],
  },
  input: {
    color: grey[100],
  },
  focused: {
    color: grey[100],
  },
  underline: {
    '&:after': {
      borderBottomColor: grey[100],
    },
  },
});

function SearchBox({ classes, term, placeholder }) {
  return (
    <TextField
      name="main-search"
      label={placeholder}
      type="search"
      autoFocus
      margin="normal"
      value={term}
      InputLabelProps={{
        classes: {
          root: classes.label,
          focused: classes.focused,
        },
      }}
      InputProps={{
        classes: {
          underline: classes.underline,
          input: classes.input,
        },
      }}
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

export default withStyles(styles)(SearchBox);
