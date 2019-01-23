import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { OfflineBolt } from '@material-ui/icons';
import { withStyles } from '@material-ui/core';

import { WithConfig } from '../config';

const styles = () => ({
  noResults: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

function NoResults({ classes, config }) {
  const { locale } = config;
  return (
    <Grid
      container
      className={classes.noResults}
    >
      <OfflineBolt color="secondary">no_results</OfflineBolt>
      <Typography variant="h6" color="secondary" noWrap>
        {locale.noResults}
      </Typography>
    </Grid>
  );
}

NoResults.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  config: PropTypes.shape({}).isRequired,
};

const WrappedComponent = WithConfig(NoResults);
export default withStyles(styles)(WrappedComponent);
