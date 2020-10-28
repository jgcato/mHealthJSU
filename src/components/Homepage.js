import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Homepage(props) {
  if (props.authState === 'signedIn') {
    return (
      <View>
        <Text>HOME</Text>
        <View>
          <Button
            style={styles.signIn} //backToSignIn
            onPress={() => props.onStateChange('signIn', {})}
            title="sign out"
            color="black"
            accessibilityLabel="sign out"
          />
        </View>
        <View style={styles.topView}>
          <Text>Hello!</Text>
        </View>
      </View>
    );
  } else return <></>;
}

const styles = StyleSheet.create({
  signIn: {
    position: 'absolute',
    left: 120,
    top: -360,
    paddingTop: 10,
    paddingLeft: 10,
  },
  topView: {
    backgroundColor: 'gray',
    width: windowWidth,
    height: windowHeight - 470,
    bottom: 400,
  },
});
