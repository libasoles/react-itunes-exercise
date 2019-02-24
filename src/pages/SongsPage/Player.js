import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = () => ({ 
  player: {
    filter: 'sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%)',
    width: '80%',
    height: '25px',
  },

});

function Player({classes, src}) {
  return (
  <audio controls className={classes.player} autoPlay>
    <source src={src} type="audio/mpeg" />
  </audio>
  )
};

Player.propTypes = {
  src: PropTypes.string.isRequired,
};

export default withStyles(styles)(Player);
