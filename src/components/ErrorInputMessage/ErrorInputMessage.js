import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import base from '../../styles/base';

function ErrorInputMessage(props) {
  const {message} = props;
  return <Text style={base.errorInput}>{message}</Text>;
}

ErrorInputMessage.propTypes = {
  message: PropTypes.string,
};

ErrorInputMessage.defaultProps = {
  message: '',
};

export default ErrorInputMessage;
