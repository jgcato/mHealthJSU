import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {Divider, Card} from 'react-native-elements';
import {Auth, nav} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FormStyles} from '../../styles/FormStyles';
import Accordion from '@dooboo-ui/native-accordion';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FAQs() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: windowWidth,
            height: 120,
            alignSelf: 'center',
            marginTop: 30,
            top: -30,
          }}
          source={require('../assets/appPics/sideplant.jpg')}
        />
        <Divider
          style={{
            backgroundColor: 'red',
            height: 4,
            width: 300,
            borderRadius: 10,
            alignSelf: 'center',
            top: -15,
          }}
        />
      </View>
      <ScrollView>
        <View onStartShouldSetResponder={() => true}>
          <Card>
            <Card.Title style={styles.question}>
              Who is going to pay for my surgery?
            </Card.Title>
            <Card.Divider />
            <Text style={styles.answer}>
              {' '}
              Anything your personal insurance company does not cover will be
              covered by Jackson State Athletic Dept.  Your insurance is primary
              and JSU’s is secondary. If you don’t have insurance JSU will take
              care of
            </Text>
          </Card>
          <Card>
            <Card.Title style={styles.question}>
              Who is going to take me to my appointments?
            </Card.Title>
            <Card.Divider />
            <Text style={styles.answer}>
              {' '}
              A Jackson State Athletic Dept. staff member will take you if are
              unable to drive yourself, if no friend/family is able to take you
              to your your appointment and/or your injury prevents you from
              being able to drive.
            </Text>
          </Card>
          <Card>
            <Card.Title style={styles.question}>How do I red shirt?</Card.Title>
            <Card.Divider />
            <Text style={styles.answer}>
              {' '}
              Contact Mrs. Christina Ross (christina.t.ross@jsums.edu) in
              compliance to start the paperwork then follow up with the trainer
            </Text>
          </Card>
          <Card>
            <Card.Title style={styles.question}>
              Where do I get a knee scooter?
            </Card.Title>
            <Card.Divider />
            <Text style={styles.answer}>
              {' '}
              The training staff will do their best to find you one if there is
              one available. However, you are ultimately responsible for
              obtaining your own knee scooter as Jackson State does not cover
              that cost. The Mississippi Sports Medicine offices will be give
              you a prescription for a knee scooter and a list of places to get
              one.
            </Text>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#eee',
    height: windowHeight,
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
    fontSize: 15,
    paddingTop: 10,
    alignContent: 'center',
    color: 'black',
  },
  answer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
