import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Youtube() {
  return (
    <View style={styles.container}>
      <Text>Youtube Library</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
