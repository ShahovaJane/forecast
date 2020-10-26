import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import WeatherForm from '../WeatherForm';
import WeatherResult from '../WeatherResult';

import containers from '../../styles/containers';
import {BACKGROUND_IMAGE} from '../../constants/images';

function WeatherContainer() {
  return (
    <View style={containers.mainContainer}>
      <ImageBackground
        source={BACKGROUND_IMAGE}
        style={containers.backgroundImage}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView>
            <View style={containers.weatherContainer}>
              <WeatherForm />
              <WeatherResult />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

export default WeatherContainer;
