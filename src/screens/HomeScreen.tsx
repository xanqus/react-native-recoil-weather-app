import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeatherList from '../components/weather/WeatherList';

import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WeatherList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getStatusBarHeight(),
  },
});
