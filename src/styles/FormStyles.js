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
    marginBottom: 7,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
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
    color: 'black',
    paddingBottom: 20,
    paddingTop: 20,
  },
  signintitle: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 15,
    fontWeight: '600',
    color: '#4F8EF7',
    paddingTop: 20,
    paddingBottom: 15,
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
  bottomview: {
    right: 20,
    top: 100,
    backgroundColor: '#F0F8FF',
    width: windowWidth,
    height: 750,
    borderRadius: 30,
    padding: 13,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20}
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    top: 60,
  },
  logocontainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageheader: {
    width: windowWidth,
    alignSelf: 'center',
    height: 140,
    top: 145,
  },
});
