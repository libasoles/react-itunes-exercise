import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

const styles = () => ({
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

function SearchPageResults({ classes, items, component }) {
  return (
    <Grid
      container
      className={classes.container}
      alignItems="stretch"
      justify="center"
    >
      {items.map(item => (
        <Grid item key={item.id} className={classes.item}>
          <React.Fragment>
            {
              React.cloneElement(component, {
                item,
              })
            }
          </React.Fragment>
        </Grid>
      ))}
    </Grid>
  );
}

SearchPageResults.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  component: PropTypes.element.isRequired,
};

export default withStyles(styles)(SearchPageResults);
