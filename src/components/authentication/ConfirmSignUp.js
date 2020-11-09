import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {validateJSUEmail} from './validation'; //error handling imported from here
import {Auth} from 'aws-amplify';
import {FormStyles} from '../../styles/FormStyles'; //styling imported from here
import {Input} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ConfirmSignUp(props) {
  const [state, setState] = useState({
    email: '',
    confirmationCode: '',
  });

  const [error, setErrors] = useState({email: ''});

  async function onSubmit() {
    const {email: username, confirmationCode: code} = state; //email renamed to username, confirmation code renamed to code
    //displays errors for email and password when entered incorrectly
    const emailError = validateJSUEmail(state.email);
    if (emailError) setErrors({email: emailError});
    else {
      try {
        const user = await Auth.confirmSignUp(
          username,
          code, //code is name of paramete ConfirmSignUp() accepts
        );
        props.onStateChange('signIn');
        setState({confirmationCode: ''});
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  }

  //if "confirmSignUp"  is pressed this code will load code will display a confirm sign up page
  if (props.authState === 'confirmSignUp') {
    return (
      <View style={FormStyles.container}>
        <Text style={FormStyles.title}>Confirm Sign Up</Text>
        <Text style={FormStyles.label}>Email</Text>
        <Input //email input field
          leftIcon={<FontAwesome5 name="envelope" size={20} color="black" />}
          onChangeText={(text) =>
            setState({...state, email: text.toLowerCase()})
          }
          placeholder="Enter email"
          value={state.email}
        />
        <Text
          //displays email error
          style={FormStyles.error}>
          {error.email}
        </Text>
        <Text style={FormStyles.label}>Confirmation Code</Text>
        <Input //confirmation code input field
          leftIcon={<FontAwesome5 name="lock" size={20} color="black" />}
          onChangeText={(text) => setState({...state, confirmationCode: text})}
          placeholder="Enter confirmation code"
          value={state.confirmationCode}
        />

        <TouchableOpacity //confirm button
          style={FormStyles.button}
          onPress={() => onSubmit()}>
          <Text style={FormStyles.buttonText}>CONFIRM</Text>
        </TouchableOpacity>

        <View style={FormStyles.links}>
          <Button //takes user to sign in page
            onPress={() => props.onStateChange('signIn', {})}
            title="back to Sign In"
            color="black"
            accessibilityLabel="back to signIn"
          />
          <Button //takes user to sign up page
            onPress={() => props.onStateChange('signUp', {})}
            title="back to Sign Up"
            color="black"
            accessibilityLabel="back to SignUp"
          />
        </View>
      </View>
    );
  } else {
    return <></>; //if "confirm sign up" not pressed, return nothing
  }
}
