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
import GlobalHeader from '../../shared/globalHeader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Homepage(props) {
  if (props.authState === 'signedIn') {
    return (
      <View>
        <GlobalHeader {...'HOME'} />
      </View>
    );
  } else return <></>;
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
