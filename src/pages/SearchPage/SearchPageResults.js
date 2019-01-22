import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import AlbumItem from '../../components/AlbumItem';
import NoResults from '../../components/NoResults';

const styles = theme => ({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '30px 3em',
    display: 'flex',

  },
  item: {
    margin: '3px',
  },
});

function SearchPageResults({ classes, items }) {
  if (!items.length) {
    return <NoResults />;
  }

  return (
    <Grid
      container
      className={classes.container}
      alignItems="stretch"
      justify="center"
    >
      {items.map(item => (
        <Grid item key={item.id} className={classes.item}>
          <AlbumItem key={item.id} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

SearchPageResults.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    artistId: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(styles)(SearchPageResults);
