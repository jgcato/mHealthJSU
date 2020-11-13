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
import {globalStyles} from './src/styles/global';
import GlobadHeader from './src/shared/globalHeader';
import ScreenHeader from './src/shared/screensHeader';
import { ScrollView } from 'react-native-gesture-handler';

Amplify.configure(awsconfig); //loads config file for AWS Amplify

LogBox.ignoreAllLogs(true); //ignores some pesky AWS warnings

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeStack(props, {navigation}) {
  if (props.authState === 'signedIn') {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            height: 70,
            backgroundColor: '#eee',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{headerTitle: () => <GlobadHeader headerText="Home" />}}
        />
        <Stack.Screen
          name="FAQs"
          component={FAQs}
          options={{headerTitle: () => <ScreenHeader headerText="FAQs" />}}
        />
        <Stack.Screen
          name="Tips"
          component={Tips}
          options={{headerTitle: () => <ScreenHeader headerText="Tips" />}}
        />
        <Stack.Screen
          name="Youtube"
          component={Youtube}
          options={{
            headerTitle: () => <ScreenHeader headerText="Youtube Library" />,
          }}
        />
        <Stack.Screen
          name="Campus Services"
          component={CampusServices}
          options={{
            headerTitle: () => <ScreenHeader headerText="Campus Services" />,
          }}
        />
        <Stack.Screen
          name="Motivation"
          component={Motivation}
          options={{
            headerTitle: () => <ScreenHeader headerText="Motivation" />,
          }}
        />
        <Stack.Screen
          name="Mental Health"
          component={MentalHealth}
          options={{
            headerTitle: () => <ScreenHeader headerText="Mental Health" />,
          }}
        />
        <Stack.Screen name="Screen Header" component={ScreenHeader} />
      </Stack.Navigator>
    );
  } else {
    return <></>; //if "confirm sign up" not pressed, return nothing
  }
}

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.safearea}>
        <View style={globalStyles.container}>
          <NavigationContainer>
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
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#eee',
    //height: windowHeight,
  },
});
