import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Crutches from './Tips Screens/crutches';
import DoctorsOffice from './Tips Screens/doctorsoffice';
import KneeScooter from './Tips Screens/kneescooter';
import Nutrition from './Tips Screens/nutrition';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 12, fontWeight: '300'},
        indicatorStyle: {backgroundColor: 'lightskyblue', height: 3},
      }}>
      <Tab.Screen name="Knee-Scooter" component={KneeScooter} />
      <Tab.Screen name="Crutches" component={Crutches} />
      <Tab.Screen name="Nutrition" component={Nutrition} />
      <Tab.Screen name="Doctor's Office" component={DoctorsOffice} />
    </Tab.Navigator>
  );
}

export default function Tips() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 380,
          height: 120,
          alignSelf: 'center',
          marginTop: 5,
          marginBottom: 20,
        }}
        source={require('../assets/appPics/yougotthis2.jpeg')}
      />
      <MyTabs />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome5 name="chevron-down" size={25} color="gainsboro" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 45,
  },
});
