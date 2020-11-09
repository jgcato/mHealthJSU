import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Crutches() {
  return (
    <View style={styles.container}>
      <Text>Crutches</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 45,
  },
});