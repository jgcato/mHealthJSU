import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Motivation() {
  return (
    <View style={styles.container}>
      <Text>Motivation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
