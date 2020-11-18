import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Alert, Image} from 'react-native';
import {validateEmail, validatePassword} from './validation'; //error handling is imported from here
import {Auth} from 'aws-amplify';
import {FormStyles} from '../../styles/FormStyles'; //styles are imported from here
import {Input} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Divider} from 'react-native-paper';

export default function SignIn(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [error, setErrors] = useState({email: '', password: ''}); //holds email/password error messages

  async function onSubmit() {
    //displays errors when password and email are entered incorrectly
    const emailError = validateEmail(state.email);
    const passwordError = validatePassword(state.password);
    if (emailError || passwordError)
      setErrors({email: emailError, password: passwordError});
    else {
      try {
        const user = await Auth.signIn({
          username: state.email,
          password: state.password,
        });
        props.onStateChange('Home', user); //goes to confirm code page when "sign up" is pressed
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  }

  if (props.authState === 'signIn') {
    //code will run when in 'signIp' state
    return (
      <View style={FormStyles.container}>
        <Image
          style={FormStyles.logo}
          source={require('../assets/logos/pawlogo.png')}
        />
        <View style={FormStyles.bottomview}>
          <Text style={FormStyles.signintitle}>Sign In</Text>
          <Divider
            style={{
              backgroundColor: 'black',
              height: 1,
              width: 250,
              borderRadius: 2,
              alignSelf: 'center',
              marginBottom: 30,
              top: -10,
            }}
          />
          <Text style={FormStyles.label}>Email</Text>
          <Input
            placeholder=" Enter email address"
            leftIcon={
              <FontAwesome5 name="envelope" size={20} color="#4F8EF7" />
            }
            onChangeText={(text) =>
              setState({...state, email: text.toLowerCase()})
            }
            value={state.email}
          />
          <Text
            //displays email error
            style={FormStyles.error}>
            {error.email}
          </Text>
          <Text style={FormStyles.label}>Password</Text>
          <Input
            placeholder=" Enter password"
            leftIcon={<FontAwesome5 name="lock" size={20} color="#4F8EF7" />}
            onChangeText={(text) => setState({...state, password: text})}
            value={state.password}
            secureTextEntry={true}
          />
          <Text
            //displays password error
            style={FormStyles.error}>
            {error.password}
          </Text>

          <TouchableOpacity
            //sign In button
            style={FormStyles.button}
            onPress={() => onSubmit()}>
            <Text style={FormStyles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <View
            //encompasses "Forgot Password" & "Sign Up" buttons
            style={FormStyles.links}>
            <Button //forgotPassword
              onPress={() => props.onStateChange('forgotPassword', {})}
              title="Forgot Password"
              color="black"
              accessibilityLabel="forgot password"
            />
            <Button //signUp
              onPress={() => props.onStateChange('signUp', {})}
              title="Sign Up"
              color="black"
              accessibilityLabel="Sign Up"
            />
          </View>
        </View>
      </View>
    );
  } else {
    return <></>; //returns nothing
  }
}
