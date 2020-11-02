import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Homepage(props) {
  if (props.authState === 'signedIn') {
    return (
      <View>
        <Text>HOME</Text>
        <View style={styles.signOut}>
          <TouchableOpacity 
            //backToSignIn
            onPress={() => props.onStateChange('signIn', {})}>
            <Text>sign out</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  } else return <></>;
}

const styles = StyleSheet.create({
  signOut: {
    left: 150,
    top: -360,
    padding: 6,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
});
