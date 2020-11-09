import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Crutches() {
  return (
    <View style={styles.container}>
      <Text>Crutches</Text>
      <Text>
        Inside your dorm room use a satchel, purse, or grocery bag when you have
        to carry things from room to room
      </Text>
      <Text>
        When going up steps, place the crutches on the next landing first and
        carefully jump onto the landing (where crutches already are) with the
        good leg
      </Text>
      <Text>
        Move slowly and as steadily as possible when using crutches on wet,
        smooth surfaces. The crutches may slip if you move too fast.
      </Text>
      <Text>
        Put a pillowcase over your cast or boot when you go to sleep to protect
        your sheets
      </Text>
      <Text>
        It may be helpfup to purchase a shower stool until you are cleared to
        put pressure on injured site
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
