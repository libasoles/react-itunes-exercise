import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { RecordVoiceOver } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
  },
});

function ArtistDescription({ classes, artist }) {
  const { name, description, link } = artist;

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.name}>
        <Link href={link} target="_blank">
          <RecordVoiceOver color="secondary">artist_icon</RecordVoiceOver>
          <Typography variant="h6" color="secondary" noWrap>
            { name }
          </Typography>
        </Link>
      </Grid>
      <Typography variant="subtitle1" color="primary" noWrap>
        { description }
      </Typography>
    </Grid>
  );
}

ArtistDescription.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ArtistDescription);
