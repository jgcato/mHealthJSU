import React from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default function ScreenHeader({headerText}) {
  //back button that takes user to homepage
  const navigation = useNavigation();
  function Back() {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <Ionicons name="arrow-back" size={30} color="black" />
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
          shadowRadius: 3,
          shadowOpacity: 1,
          shadowColor: 'slategrey',
          // shadowColor: '#4F8EF7',
          shadowOffset: {width: 0, height: 1},
        }}
        leftComponent={<Back />} //back button
        centerComponent={{
          text: headerText,
          style: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 29,
            shadowRadius: 2,
            shadowOpacity: 5,
            shadowColor: 'slategrey',
            shadowOffset: {width: 0, height: 1},
          },
        }}
        placement="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    color: 'darkblue',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
  },
});
