import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
});

function AlbumDescription({ classes, album }) {
  const { title, description, link } = album;

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.title}>
        <Link href={link} target="_blank">
          <Typography variant="h6" color="secondary" noWrap>
            { title }
          </Typography>
        </Link>
      </Grid>
      <Typography variant="subtitle1" color="primary" noWrap>
        { description }
      </Typography>
    </Grid>
  );
}

AlbumDescription.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AlbumDescription);
