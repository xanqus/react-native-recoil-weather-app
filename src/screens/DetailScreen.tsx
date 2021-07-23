import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

type DetailScreenProps = {
  route: {
    params: {
      location: string;
      latitude: number;
      longitude: number;
    };
  };
};

export default function DetailScreen({ route }: DetailScreenProps) {
  const { location, latitude, longitude } = route.params;

  return (
    <View style={styles.container}>
      <Text>{location}</Text>
      <Text>{latitude}</Text>
      <Text>{longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getStatusBarHeight(),
  },
});
