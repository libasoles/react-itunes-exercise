import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { OfflineBolt } from '@material-ui/icons';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  noResults: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

function NoResults({ classes }) {
  return (
    <Grid
      container
      className={classes.noResults}
    >
      <OfflineBolt color="secondary">no_results</OfflineBolt>
      <Typography variant="h6" color="secondary" noWrap>
  Sorry, no results
      </Typography>
    </Grid>
  );
}

NoResults.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(NoResults);
