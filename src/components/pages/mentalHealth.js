import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function MentalHealth() {
  return (
    <View style={styles.container}>
      <Text>Mental Health</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
