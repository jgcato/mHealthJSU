import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Card, Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function Homepage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardcontainer}>
        <Card.Title style={{fontSize: 20, fontWeight: '300'}}>
          What is your mood today?
        </Card.Title>
        {/* the following TouchableOpacity components are for the mood images */}
        <View style={styles.cardcontainer}>
          <TouchableOpacity style={styles.moodimage}>
            <Image
              style={{
                width: 90,
                height: 90,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/emotions/sad.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodimage}>
            <Image
              style={{
                width: 95,
                height: 95,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/emotions/joy.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodimage}>
            <Image
              style={{
                width: 95,
                height: 95,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/emotions/angry.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodimage}>
            <Image
              style={{
                width: 90,
                height: 90,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/emotions/disgust.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodimage}>
            <Image
              style={{
                width: 90,
                height: 90,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/emotions/smile.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodimage}>
            <Image
              style={{
                width: 95,
                height: 95,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/emotions/shock.png')}
            />
          </TouchableOpacity>
        </View>
      </Card>
      <Divider
        style={{
          backgroundColor: '#4F8EF7',
          height: 3,
          width: 300,
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 20,
        }}
      />
      <View style={styles.buttons}>
         {/* the following TouchableOpacity components are for the custom buttons */}
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('FAQs')}>
          <FontAwesome5 name="question-circle" size={60} color="midnightblue" />
          <Text style={styles.title}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Campus Services')}>
          <FontAwesome5 name="building" size={60} color="midnightblue" />
          <Text style={styles.title}>Campus Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Youtube')}>
          <FontAwesome5 name="youtube" size={60} color="midnightblue" />
          <Text style={styles.title}>Youtube</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Mental Health')}>
          <FontAwesome5 name="brain" size={60} color="midnightblue" />
          <Text style={styles.title}>Mental Health</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Tips')}>
          <FontAwesome5 name="lightbulb" size={60} color="midnightblue" />
          <Text style={styles.title}>Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Motivation')}>
          <FontAwesome5 name="hand-sparkles" size={60} color="midnightblue" />
          <Text style={styles.title}>Motivation</Text>
        </TouchableOpacity>
      </View>
      <Divider
        style={{
          backgroundColor: '#4F8EF7',
          height: 3,
          width: 300,
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    width: windowWidth,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttons: {
    //styles View containing custom buttons
    top: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonstyle: {
    //styles the custom buttons 
    alignItems: 'center',
    margin: 10,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowColor: '#4F8EF7',
    shadowOffset: {width: 0, height: 1},
  },
  title: {
    //styles custom button titles
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: '300',
    color: 'black',
    textAlign: 'center',
  },
  cardcontainer: {
    //styles "what is your mood today?" card
    marginTop: 20,
    marginBottom: 20,
    width: 380,
    borderRadius: 5,
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  moodimage: {
    //styles mood images
    paddingLeft: 10,
    paddingRight: 10,
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
  },
});
