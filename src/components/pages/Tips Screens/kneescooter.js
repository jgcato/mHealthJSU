import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function KneeScooter() {
  return (
    <View style={styles.container}>
      <Text>Knee Scooter</Text>
      <Text>
        When going down the plaza, stay on the sidewalks because the plaza
        bricks are uneven
      </Text>
      <Text>
        Hold tight to the handlebars going down the middle of the plaza
      </Text>
      <Text>Be careful not to roll over your toes</Text>
      <Text>Utilize the brakes</Text>
      <Text>
        Once you are comfortable on the knee-scooter, it is possible to carry a
        plate in the cafe and ride the scooter
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
