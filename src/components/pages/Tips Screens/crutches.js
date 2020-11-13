import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Crutches() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.tip}>
        {' '}
        <Text style={styles.number}>1.</Text> It may be helpfup to purchase a
        shower stool until you are cleared to put pressure on injured site
        {'\n'}
        {'\n'}
        <Text style={styles.number}>2.</Text> Put a pillowcase over your cast or
        boot when you go to sleep to protect your sheets
        {'\n'}
        {'\n'}
        <Text style={styles.number}>3.</Text> Move slowly and as steadily as
        possible when using crutches on wet, smooth surfaces. The crutches may
        slip if you move too fast.
        {'\n'}
        {'\n'}
        <Text style={styles.number}>4.</Text> When going up steps, place the
        crutches on the next landing first and carefully jump onto the landing
        (where crutches already are) with the good leg
        {'\n'}
        {'\n'}
        <Text style={styles.number}>5.</Text> Inside your dorm room use a
        satchel, purse, or grocery bag when you have to carry things from room
        to room
        {'\n'}
        {'\n'}
      </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'darkblue',
  },
  tip: {
    fontSize: 18,
    marginTop: 10,
  },
});
