import {StyleSheet} from 'react-native';

import {width, height} from '../constants/dimensions';
import sizes from '../constants/sizes';
import colors from '../constants/colors';

export default base = StyleSheet.create({
  textInput: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 2,
    height: height * 0.04,
    fontSize: sizes['14'],
  },
  errorInput: {
    fontSize: sizes['12'],
    color: colors.red,
    paddingTop: sizes['2'],
  },
  errorMessage: {
    backgroundColor: colors.red,
    borderRadius: 3,
    padding: 5,
  },
  textErrorMessage: {
    fontSize: sizes['12'],
    color: colors.white,
  },
  textLabel: {
    fontSize: sizes['14'],
    paddingBottom: sizes['12'],
    color: colors.black,
  },
  button: {
    marginTop: sizes['12'],
    marginBottom: sizes['12'],
    paddingTop: sizes['10'],
    paddingBottom: sizes['10'],
    backgroundColor: colors.darkerGreen,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sizes['14'],
    color: colors.white,
  },
  imgResult: {
    width: 80,
    height: 70,
  },
  textResultMain: {
    fontSize: sizes['14'],
    color: colors.black,
  },
  textResult: {
    fontSize: sizes['12'],
    color: colors.black,
    paddingTop: sizes['2'],
  },
});
