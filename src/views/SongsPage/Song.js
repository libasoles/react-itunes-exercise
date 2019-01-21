import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import Link from '../../components/Link';


const styles = theme => ({

  title: {
    fontSize: '0.8em',
  },
  subtitle: {
    fontSize: '0.8em',
  },
  description: {
    fontSize: '0.7em',
  },
});

const Song = (props) => {
  const { classes, data } = props;
  const {
    id, name, description,
  } = data;

  return (
    <Grid className={classes.card}>

      <Link to={`/album/${id}/songs`} size="large">
        <Typography noWrap variant="h6" className={classes.title}>
          { name }
        </Typography>
      </Link>
      <Typography className={classes.description}>
        { description }
      </Typography>

    </Grid>
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
};

export default withStyles(styles)(Song);
