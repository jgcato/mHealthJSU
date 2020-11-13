import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Auth} from 'aws-amplify';
import {FormStyles} from '../../styles/FormStyles';
import useForm from '../../useForm';
import {validateEmail, validatePassword, validateCode} from './validation';
import {Input} from 'react-native-elements';
import {Divider} from 'react-native-paper';

export default function ChangePassword(props) {
  const initialValues = {email: '', confirmationCode: '', password: ''};
  1234;

  const {values, onSubmit, onChange, errors} = useForm(
    changePassword,
    initialValues,
    validateSignup,
  );
  const [error, setError] = React.useState();

  async function changePassword() {
    const {email: username, confirmationCode, password: newPassword} = values;
    try {
      await Auth.forgotPasswordSubmit(username, confirmationCode, newPassword);
      props.onStateChange('signIn', {});
      setError({});
    } catch (err) {
      setError(err.message);
    }
  }

  function validateSignup() {
    const errors = {};
    errors.email = validateEmail(values.email);
    errors.password = validatePassword(values.password);
    errors.confirmationCode = validateCode(values.confirmationCode);
    return errors;
  }

  if (props.authState === 'changePassword') {
    return (
      <View style={FormStyles.container}>
        <View style={FormStyles.bgcontainer}>
        <Image
          style={FormStyles.logo}
          source={require('../assets/logos/pawlogo.png')}
        />
          <View style={FormStyles.bottomview}>
            <Text style={FormStyles.title}>Change Password</Text>
            <Divider
              style={{
                backgroundColor: 'black',
                height: 2,
                width: 250,
                borderRadius: 2,
                alignSelf: 'center',
                marginBottom: 30,
                top: -10,
              }}
            />
            <Text
              style={{textAlign: 'center', paddingBottom: 20, color: 'red'}}>
              check your email for a verificaiton code
            </Text>
            <View style={FormStyles.labelWrapper}>
              <Text style={FormStyles.labelText}> Email *</Text>
            </View>
            <Input
              placeholder="Email"
              placeholderTextColor="#808389"
              type="text"
              value={values.email}
              onChangeText={(text) => onChange({name: 'email', value: text})}
            />
            {errors.email && (
              <Text style={FormStyles.error}>{errors.email}</Text>
            )}
            <View style={FormStyles.labelWrapper}>
              <Text style={FormStyles.labelText}> Confirmation Code *</Text>
            </View>

            <Input
              placeholder="Enter your confirmation code"
              placeholderTextColor="#808389"
              type="text"
              value={values.confirmationCode}
              onChangeText={(text) =>
                onChange({name: 'confirmationCode', value: text})
              }
            />
            {errors.confirmationCode && (
              <Text style={FormStyles.error}>{errors.confirmationCode}</Text>
            )}
            <View style={FormStyles.labelWrapper}>
              <Text style={FormStyles.labelText}> New Password *</Text>
            </View>
            <Input
              secureTextEntry={true}
              placeholder="New Password"
              placeholderTextColor="#808389"
              type="password"
              value={values.password}
              onChangeText={(text) => onChange({name: 'password', value: text})}
            />
            {errors.password && (
              <Text style={FormStyles.error}>{errors.password}</Text>
            )}

            <TouchableOpacity style={FormStyles.button} onPress={onSubmit}>
              <Text style={FormStyles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <View style={FormStyles.links}>
              <TouchableWithoutFeedback
                onPress={() => props.onStateChange('signIn', {})}>
                <Text style={FormStyles.links}>Back to Sign In</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => props.onStateChange('forgotPassword', {})}>
                <Text style={FormStyles.links}>Forgot Password</Text>
              </TouchableWithoutFeedback>
            </View>

            {error && (
              <Text style={{textAlign: 'center', color: 'red'}}>{error}</Text>
            )}
          </View>
        </View>
      </View>
    );
  } else return <></>;
}
