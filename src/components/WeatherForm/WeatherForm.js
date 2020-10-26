import React, {useCallback, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';

import ErrorInputMessage from '../ErrorInputMessage';
import ErrorMessage from '../ErrorMessage';

import {requestGetWeatherInfByCity} from '../../store/actions';
import {weatherError} from '../../store/selectors';

import containers from '../../styles/containers';
import base from '../../styles/base';

function WeatherForm() {
  const {control, handleSubmit, errors} = useForm();
  const [hideErrorOnChangeInput, setHideErrorOnChangeInput] = useState(false);

  const weatherResponseError = useSelector(weatherError);
  const dispatch = useDispatch();

  const getWeatherInfByCity = useCallback(
    (data) => dispatch(requestGetWeatherInfByCity(data)),
    [dispatch],
  );

  const onGetWeather = useCallback(
    (data) => {
      getWeatherInfByCity(data.city);
      setHideErrorOnChangeInput(false);
    },
    [getWeatherInfByCity],
  );

  const onChangeInput = useCallback(() => {
    setHideErrorOnChangeInput(true);
  }, []);

  return (
    <View style={containers.formContainer}>
      <View>
        <Text style={base.textLabel}>Enter city</Text>
        <Controller
          control={control}
          name="city"
          defaultValue=""
          textContentType="addressCity"
          rules={{required: 'This field is required.'}}
          render={({value, onChange, onBlur}) => (
            <TextInput
              style={base.textInput}
              onChangeText={(value) => {
                onChange(value);
                onChangeInput();
              }}
              onBlur={onBlur}
              onSubmitEditing={handleSubmit(onGetWeather)}
              returnKeyType="done"
              value={value}
            />
          )}
        />
        {errors.city && <ErrorInputMessage message={errors.city.message} />}
      </View>

      <TouchableOpacity
        style={base.button}
        color="white"
        onPress={handleSubmit(onGetWeather)}>
        <Text style={base.buttonText}>Get</Text>
      </TouchableOpacity>
      {!hideErrorOnChangeInput && !!weatherResponseError && (
        <ErrorMessage message={weatherResponseError} />
      )}
    </View>
  );
}

export default WeatherForm;
