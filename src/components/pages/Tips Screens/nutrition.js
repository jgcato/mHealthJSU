import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default function Nutrition() {
  return (
    <View style={styles.container}>
      <Text>Nutrition & The Injured Athlete</Text>
      <ScrollView>
        <Text>
          Being that you can't move around and burn calories as much as you
          normally would, it is necessary to change your eating habits while you
          are temporarilu inactive
        </Text>
        <Text>
          Consider some of these tips on how to prevent excessive weight gain
          while injured:
        </Text>
        <Text>1. Stay away from mindless snacking</Text>
        <Text>
          2. Plan your meals ahead of time so that you continue to make healthy
          eating choices
        </Text>
        <Text>
          Avoid drinking your calories, continue to hydrate with water
        </Text>
        <Text>
          Avoid fried/fatty foods, foods with added sugars & concentrated
          sweets, and alcohol. These foods can interfere with the healing
          process
        </Text>
        <Text>
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
  },
});