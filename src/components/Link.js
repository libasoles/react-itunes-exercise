import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    background: 'none',
    border: 0,
    padding: 0,
    '&:hover': {
      background: 'none',
    },
    textTransform: 'none',
  },
};

function LinkWrapper({
  to, children, classes, className, ...rest
}) {
  return (
    <Button className={classes.button} component={Link} to={to} {...rest}>{ children }</Button>
  );
}

LinkWrapper.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default withStyles(styles)(LinkWrapper);
