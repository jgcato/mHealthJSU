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
    marginBottom: 5,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#4F8EF7',
    fontWeight: 'bold',
    fontSize: 20,
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
    fontSize: 30,
    marginBottom: 15,
    fontWeight: '600',
    color: 'black'
  },
  signintitle: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 15,
    fontWeight: '600',
    color: '#4F8EF7'
  },
  label: {
    marginLeft: 5,
    marginBottom: 2,
    fontSize: 18,
    fontWeight: '200',
  },
  error: {
    color: 'red',
    paddingBottom: 10,
    marginLeft: 10,
  },
});
