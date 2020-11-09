import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Counseling() {
  return (
    <View style={styles.container}>
      <Text>Counseling</Text>
      <Text>Latasha Norman Center Info</Text>
      <Text>Other campus counseling here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});