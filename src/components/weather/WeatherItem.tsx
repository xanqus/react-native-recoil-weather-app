import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type WeatherItemProps = {
  location: string;
  latitude?: number;
  longitude?: number;
  navigation: any;
};

export default function WeatherItem({
  location,
  navigation,
  latitude,
  longitude,
}: WeatherItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('Detail', {
            location: location,
            latitude: latitude,
            longitude: longitude,
          });
        }}
      >
        <Text>{location}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
