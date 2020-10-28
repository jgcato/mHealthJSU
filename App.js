import React from 'react';
import {View, Text, StyleSheet, LogBox, Button} from 'react-native';
import Amplify, {authState} from 'aws-amplify';
import awsconfig from './aws-exports';
import {Authenticator, ConfirmSignIn} from 'aws-amplify-react-native';
import SignUp from './src/components/SignUp';
import ConfirmSignUp from './src/components/ConfirmSignUp';
import SignIn from './src/components/SignIn';
import ForgotPassword from './src/components/ForgotPassword';
import ChangePassword from './src/components/ChangePassword';
import Homepage from './src/components/Homepage';

Amplify.configure(awsconfig); //loads config file for AWS Amplify

LogBox.ignoreAllLogs(true); //ignores some pesky AWS warnings

export default function App() {
  return (
    <View style={styles.container}>
      <Authenticator
        usernameAttributes="email"
        hideDefault={true}
        authState="signIn"
        onStateChange={(authState) => console.log('authState...', authState)}>
        <Homepage />
        <SignUp />
        <SignIn />
        <ConfirmSignUp />
        <ConfirmSignIn />
        <ForgotPassword />
        <ChangePassword />
      </Authenticator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
