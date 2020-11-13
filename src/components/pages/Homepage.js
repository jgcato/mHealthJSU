import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Dashboard from 'react-native-dashboard';
import GlobalHeader from '../../shared/globalHeader';
import FAQs from './FAQs';
import CampusServices from '../pages/campusServices';
import MentalHealth from '../pages/campusServices';
import Youtube from '../pages/youtube';
import Tips from '../pages/tips';
import Motivation from '../pages/motivation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, Card, Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

export default function Homepage() {
  const navigation = useNavigation();

  return (
    // <SafeAreaView style={styles.safearea}>
    <View style={styles.container}>
      <Card containerStyle={styles.cardcontainer}>
        <Card.Title>What is your mood today?</Card.Title>
        <Card.Divider />
        <View style={styles.cardcontainer}>
          <TouchableOpacity style={styles.moodimage}>
            <FontAwesome5 name="sad-cry" size={80} color="gainsboro" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodimage}>
            <FontAwesome5 name="grin" size={80} color="gainsboro" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodimage}>
            <FontAwesome5 name="meh-blank" size={80} color="gainsboro" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodimage}>
            <FontAwesome5 name="smile-beam" size={80} color="gainsboro" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moodimage}>
            <FontAwesome5 name="meh-rolling-eyes" size={80} color="gainsboro" />
          </TouchableOpacity>
        </View>
      </Card>
      <Divider
          style={{
            backgroundColor: 'red',
            height: 3,
            width: 300,
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 20,
          }}
        />
      <View style={styles.buttons}>
        {/* <Button
          icon={<FontAwesome5 name="question-circle" size={15} color="red" />}
          title="FAQs"
          raised="false"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('FAQs')}
          buttonStyle={styles.buttonstyle}
        /> */}
        <TouchableOpacity style={styles.buttonstyle}  onPress={() => navigation.navigate('FAQs')}>
        <FontAwesome5 name="question-circle" size={60} color="midnightblue" />
        <Text style={styles.title}>FAQs</Text>
        </TouchableOpacity>
        {/* <Button
          icon={<FontAwesome5 name="building" size={15} color="red" />}
          title="Campus Services"
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Campus Services')}
          buttonStyle={styles.buttonstyle}
        /> */}
         <TouchableOpacity style={styles.buttonstyle} onPress={() => navigation.navigate('Campus Services')}>
        <FontAwesome5 name="building" size={60} color="midnightblue" />
        <Text style={styles.title}>Campus Services</Text>
        </TouchableOpacity>
        {/* <Button
          icon={<FontAwesome5 name="youtube" size={15} color="red" />}
          title="Youtube Library"
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Youtube')}
          buttonStyle={styles.buttonstyle}
        /> */}
          <TouchableOpacity style={styles.buttonstyle} onPress={() => navigation.navigate('Youtube')}>
        <FontAwesome5 name="youtube" size={60} color="midnightblue" />
        <Text style={styles.title}>Youtube</Text>
        </TouchableOpacity>
        {/* <Button
          icon={<FontAwesome5 name="brain" size={15} color="red" />}
          title="Mental Health"
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Mental Health')}
          buttonStyle={styles.buttonstyle}
        /> */}
           <TouchableOpacity style={styles.buttonstyle} onPress={() => navigation.navigate('Mental Health')}>
        <FontAwesome5 name="brain" size={60} color="midnightblue" />
        <Text style={styles.title}>Mental Health</Text>
        </TouchableOpacity>
        {/* <Button
          icon={<FontAwesome5 name="lightbulb" size={15} color="red" />}
          title="Tips"
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Tips')}
          buttonStyle={styles.buttonstyle}
        /> */}
             <TouchableOpacity style={styles.buttonstyle} onPress={() => navigation.navigate('Tips')}>
        <FontAwesome5 name="lightbulb" size={60} color="midnightblue" />
        <Text style={styles.title}>Tips</Text>
        </TouchableOpacity>
        {/* <Button
          title="Motivation"
          icon={<FontAwesome5 name="hand-sparkles" size={15} color="red" />}
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Motivation')}
          buttonStyle={styles.buttonstyle}
        /> */}
              <TouchableOpacity style={styles.buttonstyle} onPress={() => navigation.navigate('Motivation')}>
        <FontAwesome5 name="hand-sparkles" size={60} color="midnightblue" />
        <Text style={styles.title}>Motivation</Text>
        </TouchableOpacity>
      </View>
      <Divider
          style={{
            backgroundColor: 'red',
            height: 3,
            width: 300,
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 20,
          }}
        />
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    width: windowWidth,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  buttons: {
    top: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonstyle: {
    alignItems: 'center',
    margin: 10,
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowColor: '#4F8EF7',
    shadowOffset: {width: 0, height: 1},
  },
  title: {
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: '300',
    color: 'black',
    textAlign: 'center',
  },
  scroll: {
    marginTop: 20,
    marginBottom: 20,
    height: 290,
    width: 280,
  },
  cardcontainer: {
    marginTop: 25,
    marginBottom: 25,
    width: 380,
    borderRadius: 5,
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  moodimage: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  safearea: {
    flex: 1,
    backgroundColor: 'darkblue',
  },
});
