import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {weatherResult} from '../../store/selectors';

import containers from '../../styles/containers';
import base from '../../styles/base';
import colors from '../../constants/colors';

function WeatherResult() {
  const weather = useSelector(weatherResult);

  if (!weather || !Object.keys(weather).length) {
    return null;
  }
  return (
    <View>
      <View style={containers.wrapResult}>
        {weather?.weather[0] && (
          <View style={containers.block}>
            <Image
              style={base.imgResult}
              source={{
                uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
              }}
            />
            <Text style={base.textResultMain}>
              {weather?.weather[0]?.main}{' '}
            </Text>
          </View>
        )}
        {weather?.main && (
          <>
            {weather.main?.temp && (
              <Text style={base.textResult}>
                Temperature: {weather.main.temp} Kelvin
              </Text>
            )}
            {weather.main?.feels_like && (
              <Text style={base.textResult}>
                Temperature feels like: {weather.main.feels_like} Kelvin
              </Text>
            )}
            {weather.main?.pressure && (
              <Text style={base.textResult}>
                Atmospheric pressure: {weather.main.pressure} hPa
              </Text>
            )}
            {weather.main?.humidity && (
              <Text style={base.textResult}>
                Humidity: {weather.main.humidity}%
              </Text>
            )}
            {weather.main?.temp_min && (
              <Text style={base.textResult}>
                Minimum temperature at the moment: {weather.main.temp_min}{' '}
                Kelvin
              </Text>
            )}
            {weather.main?.temp_max && (
              <Text style={base.textResult}>
                Maximum temperature at the moment: {weather.main.temp_max}{' '}
                Kelvin
              </Text>
            )}
            {weather.main?.sea_level && (
              <Text style={base.textResult}>
                Atmospheric pressure on the sea level: {weather.main.sea_level}{' '}
                hPa
              </Text>
            )}
            {weather.main?.grnd_level && (
              <Text style={base.textResult}>
                Atmospheric pressure on the ground level:{' '}
                {weather.main.grnd_level} hPa
              </Text>
            )}
          </>
        )}
        {weather?.wind && (
          <>
            {weather.wind?.speed && (
              <Text style={base.textResult}>
                Wind speed: {weather.wind.speed} meter/sec
              </Text>
            )}
            {weather.wind?.deg && (
              <Text style={base.textResult}>
                Wind direction: {weather.wind.deg} degrees
              </Text>
            )}
            {weather.wind?.gust && (
              <Text style={base.textResult}>
                Wind gust: {weather.wind.gust} meter/sec
              </Text>
            )}
          </>
        )}
        {weather?.clouds && (
          <Text style={base.textResult}>Cloudiness: {weather.clouds.all}%</Text>
        )}
        {weather?.rain &&
          Object.entries(weather?.rain).map((item, idx) => (
            <Text key={{idx}} style={base.textResult}>
              Rain volume for the last {item[0]}: {item[1]} mm
            </Text>
          ))}
        {weather?.snow &&
          Object.entries(weather?.snow).map((item, idx) => (
            <Text key={{idx}} style={base.textResult}>
              Snow volume for the last {item[0]}: {item[1]} mm
            </Text>
          ))}
      </View>
    </View>
  );
}

export default WeatherResult;
