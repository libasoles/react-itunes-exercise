import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';

const styles = theme => ({

});

function SongsPage({ classes }) {
  return (
    <React.Fragment>
      <Typography variant="h6" color="inherit" noWrap>
        :D
      </Typography>
    </React.Fragment>
  );
}

SongsPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SongsPage);
