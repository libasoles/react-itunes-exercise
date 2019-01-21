import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cover: {
    width: 100,
    height: 100,
  },
});

function AlbumDescription({ classes, album }) {
  const {
    title, description, image, link,
  } = album;

  return (
    <Link href={link} target="_blank">
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              { title }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              { description }
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={image}
          title={description}
        />
      </Card>
    </Link>
  );
}

AlbumDescription.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AlbumDescription);
