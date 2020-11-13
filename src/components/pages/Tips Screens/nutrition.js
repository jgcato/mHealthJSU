import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function Nutrition() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{textAlign: 'center', fontSize: 18, color: 'midnightblue'}}>
          Being that you can't move around and burn calories as much as you
          normally would, it is necessary to change your eating habits while you
          are temporarily inactive. Consider some of these tips on how to
          prevent excessive weight gain while injured:
        </Text>
        <Text style={styles.tip}>
          {' '}
          <Text style={styles.number}>1.</Text> Stay away from mindless snacking
          {'\n'}
          {'\n'}
          <Text style={styles.number}>2.</Text> Plan your meals ahead of time so
          that you continue to make healthy eating choices
          {'\n'}
          {'\n'}
          <Text style={styles.number}>3.</Text> Avoid drinking your calories,
          continue to hydrate with water
          {'\n'}
          {'\n'}
          <Text style={styles.number}>4.</Text> Avoid fried/fatty foods, foods
          with added sugars & concentrated sweets, and alcohol. These foods can
          interfere with the healing process
          {'\n'}
          {'\n'}
          <Text style={styles.number}>5.</Text> Inside your dorm room use a
          satchel, purse, or grocery bag when you have to carry things from room
          to room
          {'\n'}
          {'\n'}
        </Text>
        <Text
          style={{textAlign: 'center', fontSize: 15, color: 'midnightblue'}}>
          If you would like to adjust your diet to suit a temporarily less
          active lifestyle contact: Wellness Educator, Coach Jack at
          shannon.a.jackson@jsums.edu
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
