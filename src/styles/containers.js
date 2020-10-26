import {StyleSheet} from 'react-native';

import {width, height} from '../constants/dimensions';
import colors from '../constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.darkerGreen,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  weatherContainer: {
    padding: 20,
  },
  formContainer: {
    flex: 1,
    paddingTop: height * 0.03,
  },
  block: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapResult: {
    backgroundColor: colors.translucent,
    padding: 8,
    borderRadius: 5,
  },
});
