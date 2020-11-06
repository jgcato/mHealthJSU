import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function CampusServices() {
  return (
    <View style={styles.container}>
      <Text>Campus Services</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
