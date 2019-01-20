import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  card: {
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: '100%',
  },
  cardMedia: {
    height: '100px',
  },
  cardContent: {
    padding: '4px',
    paddingBottom: '2px !important',
  },
  title: {
    fontSize: '0.8em',
  },
  description: {
    fontSize: '0.7em',
  },
});

const AlbumItem = (props) => {
  const { classes, item } = props;
  const { image, title, description } = item;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={title}
      />
      <CardContent className={classes.cardContent}>
        <Typography noWrap variant="title" className={classes.title}>
          { title }
        </Typography>
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
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AlbumItem);
