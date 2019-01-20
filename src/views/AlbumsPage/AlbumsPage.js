import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';

const styles = theme => ({

});

function AlbumsPage({ classes }) {
  return (
    <React.Fragment>
      <Typography variant="h6" color="inherit" noWrap>
          :D
      </Typography>
    </React.Fragment>
  );
}

AlbumsPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(AlbumsPage);
