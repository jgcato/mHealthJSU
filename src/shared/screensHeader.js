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
      </TouchableOpacity>
    </View>
  );
}

export default function ScreenHeader({headerText}) {
  const navigation = useNavigation();
  function Back() {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <Ionicons name="arrow-back" size={30} color="#4F8EF7" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          height: 100,
          width: windowWidth,
          backgroundColor: 'white',
          paddingBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
          shadowRadius: 4,
          shadowOpacity: 1,
          shadowColor: '#4F8EF7',
          shadowOffset: {width: 0, height: 1},
        }}
        leftComponent={<Back />}
        centerComponent={{
          text: headerText,
          style: {
            //color: '#4F8EF7',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 25,
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
