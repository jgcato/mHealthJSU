import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Counseling() {
  return (
    <View style={styles.container}>
      <Text>Counseling</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 45,
  },
});