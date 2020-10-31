import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
