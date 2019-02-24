import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Song from './Song';

const styles = () => ({
  container: {
    display: 'flex',
    maxWidth: '500px',
    width: 'auto',
    marginTop: '34px',
    paddingLeft: '30px',
    paddingRight: '30px',
    minWidth: '360px',
  },
});

function SongsList({ classes, songs, onPlayClicked }) {
  return (
    <Grid
      container
      spacing={16}
      className={classes.container}
    >
      {songs.map(song => (
        <Grid item key={song.id} xs={12}>
          <Song data={song} onPlayClicked={onPlayClicked} />
        </Grid>
      ))}
    </Grid>
  );
}

SongsList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    albumId: PropTypes.number.isRequired,
    artistId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  onPlayClicked: PropTypes.func.isRequired,
};

export default withStyles(styles)(SongsList);
