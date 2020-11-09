import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Header, Button} from 'react-native-elements';
import {Auth} from 'aws-amplify';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavDrawer from './navDrawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homepage from '../components/pages/Homepage';
import FAQs from '../components/pages/FAQs';

const windowWidth = Dimensions.get('window').width;
//const windowHeight = Dimensions.get('window').height;

function SignOut(props) {
  return (
    <View>
      <TouchableOpacity
        //backToSignIn
        onPress={() => Auth.signOut()}>
        <Text style={styles.signOut}>sign out</Text>
        {/* <FontAwesome5 name="sign-out-alt" size={25} color="#4F8EF7" /> */}
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
          height: 130,
          width: windowWidth,
          backgroundColor: 'white',
          paddingBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        centerComponent={{
          text: headerText,
          style: {
            color: '#4F8EF7',
            fontWeight: 'bold',
            fontSize: 40,
          },
        }}
        rightComponent={<SignOut />}
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
    color: '#4F8EF7',
    fontWeight: 'bold',
    borderWidth: 1.7,
    borderRadius: 8,
    borderColor: '#4F8EF7',
    padding: 4,
  },
  center: {
    color: 'darkblue',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
  },
});
