import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import Link from '../../components/Link';
import { Logo } from '../../components/Logo';

const styles = () => ({
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
  icon: {
    margin: '8px',
  },
  logo: {
    width: '50px',
  },
  name: {
    fontSize: '1em',
    textAlign: 'left',
    justifyContent: 'flex-start',
    textOverflow: 'ellipsis',
    maxHeight: '70px',
    overflow: 'hidden',
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
          <Grid item>
            <Link to={`/artists/${id}/albums`} className={classes.icon}>
              <Logo className={classes.logo} />
            </Link>
            <Typography noWrap className={classes.description} color="secondary">
              { description }
            </Typography>
          </Grid>
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
