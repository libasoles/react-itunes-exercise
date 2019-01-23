import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ExpandMore from '@material-ui/icons/ExpandMore';

function MoreResults(props) {
  const { handleChange, className } = props;

  return (
    <IconButton onClick={handleChange} className={className}>
      <ExpandMore />
    </IconButton>
  );
}

MoreResults.propTypes = {
  handleChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

MoreResults.defaultProps = {
  className: '',
};

export default MoreResults;
