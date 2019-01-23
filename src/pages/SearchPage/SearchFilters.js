import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  radio: {
    padding: '0 10px',
  },
  termInput: {
    margin: '0 0 -4px 0',
  },
});

function SearchFilters({
  classes, term, locale, type, handleChange,
}) {
  return (
    <Grid container className={classes.container}>

      <RadioGroup
        aria-label="Gender"
        name="type"
        value={type}
        onChange={handleChange}
        className={classes.radioGroup}
      >
        <FormControlLabel value="artist" control={<Radio className={classes.radio} />} label={locale.artists} />
        <FormControlLabel value="album" control={<Radio className={classes.radio} />} label={locale.albums} />
      </RadioGroup>

      <TextField
        name="term"
        label={locale.searcherPlaceholder}
        type="search"
        autoFocus
        margin="normal"
        value={term}
        onChange={handleChange}
        className={classes.termInput}
      />
    </Grid>
  );
}

SearchFilters.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  locale: PropTypes.shape({}),
  term: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

SearchFilters.defaultProps = {
  term: '',
  locale: {
    artists: 'Artists',
    albums: 'Albums',
  },
  type: 'album',
};

export default withStyles(styles)(SearchFilters);
