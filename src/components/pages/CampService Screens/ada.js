import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Ada() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: windowWidth,
            height: 120,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 30,
          }}
          source={require('../../assets/appPics/handicap.jpeg')}
        />
      </View>
      <Text style={styles.top}>
        <Text style={styles.number}>1.</Text> To obtain a handicap parking decal
        contact{' '}
        <Text style={styles.name}>
          Arron Richardson, Assistant Director for Disability Services
        </Text>{' '}
        at <Text style={styles.email}>arron.l.richardson@jsums.edu</Text>
        {'\n'}
        {'\n'}
        <Text style={styles.number}>2.</Text> You have the right to be moved to
        the first floor, just ask the doctor's office for an offical note
        stating so
        {'\n'}
        {'\n'}
        <Text style={styles.number}>3.</Text> Mississippi Sports Medicine may
        provide a handicap sticker for your vehicle upon request. Try to request
        this before your surgery date
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  top: {
    fontWeight: '300',
    fontSize: 20,
    alignContent: 'center',
    textAlign: 'center',
  },
  number: {
    fontWeight: 'bold',
  },
  email: {
    color: 'darkblue',
    fontWeight: '400',
  },
  name: {
    fontWeight: '400',
  },
});
