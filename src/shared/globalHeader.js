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
import { color } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

export default function GlobalHeader(headerText) {
  return (
    <View>
      <Header
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          height: 150,
          top: -380,
          width: windowWidth,
          backgroundColor: 'darkblue',
        }}
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: headerText, style: {color: '#fff'}}}
        rightComponent={<SignOut />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signOut: {
    color: '#fff',
    fontWeight: 'bold',
    borderWidth: 1.7,
    borderRadius: 8,
    borderColor: '#fff',
    padding: 4,
  },
});
