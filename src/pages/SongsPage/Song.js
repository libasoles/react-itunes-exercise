import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainData: {
    alignItems: 'center',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  title: {
    fontSize: '0.8em',
  },
  description: {
    fontSize: '0.7em',
  },
  time: {
    fontSize: '0.7em',
  },
});

const Song = (props) => {
  const { classes, data, onPlayClicked } = props;
  const {
    name, description, link, preview, time,
  } = data;

  return (
    <Link href={link} target="_blank">
      <Grid container className={classes.container}>
        <Grid item>
          <Grid container className={classes.mainData} spacing={8}>
            <Grid item>
              <IconButton aria-label="Play/pause" onClick={onPlayClicked} data-src={preview}>
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography noWrap variant="h6" className={classes.title}>
                { name }
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.description}>
                { description }
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography className={classes.time}>
            { time.format('mm:ss') }
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};

Song.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    albumId: PropTypes.number.isRequired,
    artistId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onPlayClicked: PropTypes.func.isRequired,
};

export default withStyles(styles)(Song);
