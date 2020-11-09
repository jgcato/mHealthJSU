import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function DoctorsOffice() {
  return (
    <View style={styles.container}>
      <Text>Doctor's Office</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 45,
  },
});