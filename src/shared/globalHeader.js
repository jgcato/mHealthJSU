import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Auth} from 'aws-amplify';

const windowWidth = Dimensions.get('window').width;

//sign out button component
function SignOut(props) {
  return (
    <View>
      <TouchableOpacity
        //backToSignIn
        onPress={() => Auth.signOut()}>
        <Text style={styles.signOut}>sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function GlobalHeader({headerText}) {
  return (
    <View style={styles.container}>
      <Header
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          height: 110,
          width: windowWidth,
          backgroundColor: 'white',
          paddingBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
          shadowRadius: 5,
          shadowOpacity: 1,
          shadowColor: 'midnightblue',
          shadowOffset: {width: 0, height: 1},
        }}
        centerComponent={{
          //headerTitle
          text: headerText,
          style: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 40,
          },
        }}
        rightComponent={<SignOut />} //signOut button
        placement="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signOut: {
    color: 'black',
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'midnightblue',
    padding: 4,
  },
  center: {
    color: 'darkblue',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
  },
});
