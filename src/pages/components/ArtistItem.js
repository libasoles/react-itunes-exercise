import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import Link from '../../components/Link';

const styles = theme => ({
  card: {
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: '100%',
  },
  cardContent: {
    padding: '4px',
    paddingBottom: '2px !important',
    display: 'flex',
    flex: 1,
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 0,
    margin: 0,
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  link: {
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: '1em',
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  description: {
    fontSize: '0.7em',
  },
});

const ArtistItem = (props) => {
  const { classes, item } = props;
  const {
    id, name, description,
  } = item;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <CardActions className={classes.cardActions}>
          <Link to={`/artists/${id}/albums`} size="large" className={classes.link}>
            <Typography variant="h6" className={classes.name}>
              { name }
            </Typography>
          </Link>
          <Typography className={classes.description} color="secondary">
            { description }
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};

ArtistItem.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ArtistItem);
