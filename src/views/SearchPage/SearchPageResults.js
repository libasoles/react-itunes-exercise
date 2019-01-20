import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import AlbumItem from '../../components/AlbumItem';

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
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

SearchPageResults.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(styles)(SearchPageResults);
