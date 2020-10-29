import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Homepage(props) {
  if (props.authState === 'signedIn') {
    return (
      <View>
        <Text>HOME</Text>
        <View style={styles.signOut}>
          <Button
            //backToSignIn
            onPress={() => props.onStateChange('signIn', {})}
            title="sign out"
            color="black"
            accessibilityLabel="sign out"
          />
        </View>
      </View>
    );
  } else return <></>;
}

const styles = StyleSheet.create({
  signOut: {
    left: 150,
    top: -360,
    paddingTop: 10,
    paddingLeft: 10,
  },
});
