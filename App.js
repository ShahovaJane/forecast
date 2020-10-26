import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/store';

import SplashScreen from 'react-native-splash-screen';

import WeatherContainer from './src/components/WeatherContainer';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <WeatherContainer />
    </Provider>
  );
};

export default App;
