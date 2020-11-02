import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Auth} from 'aws-amplify';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FormStyles} from '../../styles/FormStyles';
import useForm from '../../useForm';
import {validateEmail} from './validation';

export default function ForgotPassword(props) {
  const initialValues = {email: ''};

  const {values, onSubmit, onChange, errors} = useForm(
    forgotPassword,
    initialValues,
    validateSignup,
  );
  const [error, setError] = React.useState();

  async function forgotPassword() {
    let username = values.email;
    try {
      await Auth.forgotPassword(username);
      props.onStateChange('changePassword', {});
      setError({});
    } catch (err) {
      setError('User does not exist');
    }
  }

  function validateSignup() {
    const errors = {};
    errors.email = validateEmail(values.email);
    return errors;
  }

  if (props.authState === 'forgotPassword') {
    return (
      <View style={FormStyles.container}>
        <View style={FormStyles.bgcontainer}>
          <Text style={FormStyles.title}>Forgot Password</Text>
          <View style={FormStyles.labelWrapper}>
            <Text style={FormStyles.labelText}> Email </Text>
          </View>
          <TextInput
            style={FormStyles.input}
            autoCompleteType="email"
            onChangeText={(text) => onChange({name: 'email', value: text})}
            value={values.email}
            placeholder="Enter Email"
          />
          {errors.email && <Text style={FormStyles.error}>{errors.email}</Text>}
          <TouchableOpacity style={FormStyles.button} onPress={onSubmit}>
            <Text style={FormStyles.buttonText}>Send</Text>
          </TouchableOpacity>
          <View style={FormStyles.links}>
            <TouchableWithoutFeedback
              onPress={() => props.onStateChange('signIn', {})}>
              <Text style={FormStyles.links}>Back to Sign In</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => props.onStateChange('changePassword', {})}>
              <Text style={FormStyles.links}>Change Password</Text>
            </TouchableWithoutFeedback>
          </View>
          {error && <Text style={FormStyles.error}>{error}</Text>}
          {/* {error && <ErrorMessage error={error} setError={setError} />} */}
        </View>
      </View>
    );
  } else return <></>;
}
