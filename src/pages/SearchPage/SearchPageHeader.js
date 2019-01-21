import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import logo from '../../logo.png';

const styles = theme => ({
  header: {
    position: 'relative',
    padding: '20px',
  },
});

function SearchPageHeader({ classes, title }) {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <Typography variant="h6" color="secondary">
        {title}
      </Typography>
    </header>
  );
}

SearchPageHeader.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(SearchPageHeader);
