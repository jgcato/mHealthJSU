import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {Auth, nav} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

export default function FAQs() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FAQs</Text>
      <View>
        <Divider
          style={{
            backgroundColor: 'red',
            height: 4,
            width: 200,
            borderRadius: 10,
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.question}>Who is going to pay for my surgery?</Text>
        <Text>
          Anything your personal insurance company does not cover will be
          covered by Jackson State Athletic Dept.  Your insurance is primary and
          JSU’s is secondary. If you don’t have insurance JSU will take care of
          everything.
        </Text>
        <Text style={styles.question}>
          Who is going to take me to my appointments?{' '}
        </Text>
        <Text>
          A Jackson State Athletic Dept. staff member will take you if are
          unable to drive yourself, no friend/family is able to take you to your
          appointment and/or your injury prevents you from being able to drive.
        </Text>
        <Text style={styles.question}>How do I red shirt? </Text>
        <Text>
          Contact Mrs. Christina Ross (christina.t.ross@jsums.edu) in compliance
          to start the paperwork then follow up with the trainer
        </Text>
        <Text style={styles.question}>Where do I get a knee scooter </Text>
        <Text>
          The training staff will do their best to find you one if there is one
          available. However, you are ultimately responsible for obtaining your
          own knee scooter as Jackson State does not cover that cost. The
          Mississippi Sports Medicine offices will be give you a prescription
          for a knee scooter and a list of places to get one.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    justifyContent: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4F8EF7',
    padding: 15,
    paddingBottom: 5,
  },
  question: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    alignContent: 'center',
  },
});
