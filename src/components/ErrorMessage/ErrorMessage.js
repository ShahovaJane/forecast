import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import base from '../../styles/base';

const ErrorMessage = (props) => {
  const {message} = props;
  return (
    <View style={base.errorMessage}>
      <Text style={base.textErrorMessage}>{message}</Text>
    </View>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: '',
};

export default ErrorMessage;
