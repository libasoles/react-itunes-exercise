import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import Link from '../../components/Link';

const styles = () => ({
  card: {
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: '100%',
  },
  cardMedia: {
    height: '100px',
    width: '100px',
  },
  cardContent: {
    padding: '4px',
    paddingBottom: '2px !important',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  },
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

const AlbumItem = (props) => {
  const { classes, item } = props;
  const {
    id, artistId, image, title, subtitle, description,
  } = item;

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardMedia}>
        <Link to={`/albums/${id}/songs`} size="small">
          <CardMedia
            className={classes.cardMedia}
            image={image}
            title={title}
          />
        </Link>
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <CardActions className={classes.cardActions}>
          <Link to={`/albums/${id}/songs`} size="large">
            <Typography noWrap variant="h6" className={classes.title}>
              { title }
            </Typography>
          </Link>
          <Link to={`/artists/${artistId}/albums`} size="small">
            <Typography noWrap variant="subtitle1" className={classes.subtitle}>
              { subtitle }
            </Typography>
          </Link>
        </CardActions>
        <Typography className={classes.description}>
          { description }
        </Typography>
      </CardContent>
    </Card>
  );
};

AlbumItem.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    artistId: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AlbumItem);
