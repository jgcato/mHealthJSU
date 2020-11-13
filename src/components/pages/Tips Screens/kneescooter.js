import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function KneeScooter() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View onStartShouldSetResponder={() => true}>
          <Text style={styles.tip}>
            {' '}
            <Text style={styles.number}>1.</Text> When going down the plaza,
            stay on the sidewalks because the plaza bricks are uneven
            {'\n'}
            {'\n'}
            <Text style={styles.number}>2.</Text> Hold tight to the handlebars
            going down the middle of the plaza
            {'\n'}
            {'\n'}
            <Text style={styles.number}>3.</Text> Be careful not to roll over
            your toes
            {'\n'}
            {'\n'}
            <Text style={styles.number}>4.</Text> Utilize the brakes
            {'\n'}
            {'\n'}
            <Text style={styles.number}>5.</Text> Once you are comfortable on
            the knee-scooter, it is possible to carry a plate in the cafe and
            ride the scooter
            {'\n'}
            {'\n'}
            <Text style={styles.number}>6.</Text> It may be helpfup to purchase
            a shower stool until you are cleared to put pressure on injured site
          </Text>
        </View>
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
