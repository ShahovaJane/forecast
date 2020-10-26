import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.REACT_APP_API_URL,
});

export function getWeatherByCityName(cityName) {
  return instance
    .get('/data/2.5/weather', {
      params: {q: cityName, appid: Config.REACT_APP_WEATHER_API_KEY},
    })
    .then((res) => res.data);
}
