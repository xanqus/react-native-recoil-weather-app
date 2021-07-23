import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import WeatherItem from './WeatherItem';
import { useNavigation } from '@react-navigation/native';

export default function WeatherList() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <WeatherItem
        location={'Seoul'}
        navigation={navigation}
        latitude={37.566535}
        longitude={126.9779692}
      />
      <WeatherItem
        location={'Tokyo'}
        navigation={navigation}
        latitude={139.6917064}
        longitude={35.6894875}
      />
      <WeatherItem
        location={'NewYork'}
        navigation={navigation}
        latitude={40.7499702}
        longitude={-73.9886907}
      />
      <WeatherItem location={'MyLocation'} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    width: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
