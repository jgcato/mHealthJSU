import React from 'react';
import {View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Accordion} from 'native-base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//FAQ content
const dataArray = [
  {
    title: 'Who is going to pay for my surgery?',
    content:
      'Anything your personal insurance company does not cover will be covered by Jackson State Athletic Dept.  Your insurance is primary and JSU’s is secondary. If you don’t have insurance JSU will take care of',
  },
  {
    title: 'Who is going to take me to my appointments?',
    content:
      'A Jackson State Athletic Dept. staff member will take you if are  unable to drive yourself, if no friend/family is able to take you to your your appointment and/or your injury prevents you from being able to drive.',
  },
  {
    title: 'How do I red shirt? ',
    content:
      'Contact Christina Ross (christina.t.ross@jsums.edu) in compliance to start the paperwork then follow up with an Athletic Trainer',
  },
  {
    title: 'Where do I get a knee scooter?',
    content:
      'The training staff will do their best to find you one if there is one available. However, you are ultimately responsible for obtaining your own knee scooter as Jackson State does not cover that cost. The Mississippi Sports Medicine offices will be give you a prescription for a knee scooter and a list of places to get one.',
  },
];

export default function FAQs() {
  return (
    //onStartShouldSetResponder enables scrolling for ScrollView which is disabled by TouchableWithoutFeedback in App.js file
    <View style={styles.container} onStartShouldSetResponder={() => true}> 
      <ScrollView>
        <Image
          style={{
            width: 380,
            height: 135,
            alignSelf: 'center',
            marginTop: 20,
          }}
          source={require('../assets/logos/circleNquestion.jpeg')}
        />
        <Divider
          style={{
            backgroundColor: 'darkblue',
            height: 2,
            width: 300,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}
        />
        <View>
          <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome5 name="chevron-down" size={25} color="gainsboro" />
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
    backgroundColor: 'white',
    height: windowHeight,
  },
  question: {
    fontWeight: '500',
    fontSize: 18,
    paddingTop: 10,
    alignContent: 'center',
    color: 'black',
    marginBottom: 5,
  },
  answer: {
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: '200',
    fontSize: 17,
  },
});
