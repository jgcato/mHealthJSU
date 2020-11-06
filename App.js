import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  LogBox,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import Amplify, {authState} from 'aws-amplify';
import awsconfig from './aws-exports';
import {Authenticator, ConfirmSignIn} from 'aws-amplify-react-native';
import SignUp from './src/components/authentication/SignUp';
import ConfirmSignUp from './src/components/authentication/ConfirmSignUp';
import SignIn from './src/components/authentication/SignIn';
import ForgotPassword from './src/components/authentication/ForgotPassword';
import ChangePassword from './src/components/authentication/ChangePassword';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FAQs from './src/components/pages/FAQs';
import Homepage from './src/components/pages/Homepage';
import CampusServices from './src/components/pages/campusServices';
import MentalHealth from './src/components/pages/mentalHealth';
import Motivation from './src/components/pages/motivation';
import Tips from './src/components/pages/tips';
import Youtube from './src/components/pages/youtube';

Amplify.configure(awsconfig); //loads config file for AWS Amplify

LogBox.ignoreAllLogs(true); //ignores some pesky AWS warnings

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="Tips" component={Tips} />
      <Stack.Screen name="Youtube" component={Youtube} />
      <Stack.Screen name="Campus Services" component={CampusServices} />
      <Stack.Screen name="Motivation" component={Motivation} />
      <Stack.Screen name="Mental Health" component={MentalHealth} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <View>
            <Authenticator
              usernameAttributes="email"
              hideDefault={true}
              authState="signIn"
              onStateChange={(authState) =>
                console.log('authState...', authState)
              }>
              <HomeStack />
              <SignUp />
              <SignIn />
              <ConfirmSignUp />
              <ConfirmSignIn />
              <ForgotPassword />
              <ChangePassword />
            </Authenticator>
          </View>
        </NavigationContainer>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
