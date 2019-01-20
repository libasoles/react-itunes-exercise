import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  container: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
  },
  cards: {
    flexGrow: 1,
    marginTop: '30px',
    flex: 1,
  },
  card: {
    height: 140,
    width: 100,
    color: grey[100],
  },
});

function SearchPageResults({ classes, items }) {
  return (
    <Grid container spacing={16} className={classes.container}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16} className={classes.cards}>
          {items.map(value => (
            <Grid key={value} item>
              <Paper className={classes.card} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

SearchPageResults.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(SearchPageResults);
