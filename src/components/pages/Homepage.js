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
import {Button, Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;

export default function Homepage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safearea}>
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
              <FontAwesome5
                name="meh-rolling-eyes"
                size={80}
                color="gainsboro"
              />
            </TouchableOpacity>
          </View>
        </Card>
        <View style={styles.buttons}>
          {/* <GlobalHeader headerText="Home" /> */}
          <Button
            icon={<FontAwesome5 name="question-circle" size={15} color="red" />}
            title="FAQs"
            raised="false"
            type="outline"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            onPress={() => navigation.navigate('FAQs')}
            buttonStyle={styles.buttonstyle}
          />
          <Button
            icon={<FontAwesome5 name="building" size={15} color="red" />}
            title="Campus Services"
            raised="true"
            type="outline"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            onPress={() => navigation.navigate('Campus Services')}
            buttonStyle={styles.buttonstyle}
          />
          <Button
            icon={<FontAwesome5 name="youtube" size={15} color="red" />}
            title="Youtube Library"
            raised="true"
            type="outline"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            onPress={() => navigation.navigate('Youtube')}
            buttonStyle={styles.buttonstyle}
          />
          <Button
            icon={<FontAwesome5 name="brain" size={15} color="red" />}
            title="Mental Health"
            raised="true"
            type="outline"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            onPress={() => navigation.navigate('Mental Health')}
            buttonStyle={styles.buttonstyle}
          />
          <Button
            icon={<FontAwesome5 name="lightbulb" size={15} color="red" />}
            title="Tips"
            raised="true"
            type="outline"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            onPress={() => navigation.navigate('Tips')}
            buttonStyle={styles.buttonstyle}
          />
          <Button
            title="Motivation"
            icon={<FontAwesome5 name="hand-sparkles" size={15} color="red" />}
            raised="true"
            type="outline"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            onPress={() => navigation.navigate('Motivation')}
            buttonStyle={styles.buttonstyle}
          />
        </View>
      </View>
    </SafeAreaView>
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
    alignItems: 'center',
    padding: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    marginBottom: 8,
    flexDirection: 'column',
    borderRadius: 30,
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection: 'column',
  },
  buttonstyle: {
    backgroundColor: 'darkblue',
    borderWidth: 0,
    width: 110,
    height: 92,
    borderRadius: 30,
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
