import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { OfflineBolt } from '@material-ui/icons';

function NoResults() {
  return (
    <Grid>
      <OfflineBolt color="secondary">no_results</OfflineBolt>
      <Typography variant="h6" color="secondary" noWrap>
  Sorry, no results
      </Typography>
    </Grid>
  );
}

export default NoResults;
