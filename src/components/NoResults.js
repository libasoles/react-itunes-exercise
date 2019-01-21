import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import { OfflineBolt } from '@material-ui/icons';

function NoResults() {
  return (
    <React.Fragment>
      <OfflineBolt color="secondary">no_results</OfflineBolt>
      <Typography variant="h6" color="secondary" noWrap>
  Sorry, no results
      </Typography>
    </React.Fragment>
  );
}

export default NoResults;
