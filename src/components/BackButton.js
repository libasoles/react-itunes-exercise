import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

function BackButton(props) {
  const { history, className } = props;

  return (
    <IconButton onClick={history.goBack} className={className}>
      <KeyboardReturn />
    </IconButton>
  );
}

BackButton.propTypes = {
  history: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

BackButton.defaultProps = {
  className: '',
};

export default withRouter(BackButton);
