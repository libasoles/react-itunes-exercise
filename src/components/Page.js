import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  page: {
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
};

function Page(props) {
  const { classes, children } = props;

  return (
    <main className={classes.page}>
      {children}
    </main>
  );
}

Page.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Page);
