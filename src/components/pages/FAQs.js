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
      <View>
        <Text style={styles.question}>Who is going to pay for my surgery?</Text>
        <Text>
          Anything your personal insurance company does not cover will be
          covered by Jackson State Athletic Dept.  Your insurance is primary and
          JSU’s is secondary. If you don’t have insurance JSU will take care of
          everything.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 45,
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
  },
});
