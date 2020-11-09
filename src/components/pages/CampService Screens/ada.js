import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Ada() {
  return (
    <View style={styles.container}>
      <Text>ADA</Text>
      <Text>image of handicap decal here</Text>
      <Text>To obtain a handicap parking decal contact Arron Richardson, Assistant Director for Disability Services at arron.l.richardson@jsums.edu</Text>
      <Text>You have the right to be moved to the first floor, just ask the doctor's office for an offical note stating so</Text>
      <Text>Mississippi Sports Medicine will provide a handicap sticker for your vehicle upon request. Try to request this before your surgery date</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});