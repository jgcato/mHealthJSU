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
import LinearGradient from 'react-native-linear-gradient';

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

export default function Homepage(props) {
  if (props.authState === 'signedIn') {
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
          centerComponent={{text: 'HOME', style: {color: '#fff'}}}
          rightComponent={<SignOut />}
        />
      </View>
    );
  } else return <></>;
}

const styles = StyleSheet.create({
  signOut: {
    color: '#fff',
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#fff",
    padding: 4,
  },
});
