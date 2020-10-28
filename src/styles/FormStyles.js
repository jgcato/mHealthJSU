//this styling is for the signIn, signUp, forgotPassword, confirmSignUp, changePassword components

import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const FormStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    width: windowWidth,
    padding: 20,
  },
  button: {
    backgroundColor: 'darkblue',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  label: {
    marginLeft: 5,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    paddingBottom: 10,
    marginLeft: 10,
  },
});
