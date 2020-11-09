import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Crutches from './Tips Screens/crutches';
import DoctorsOffice from './Tips Screens/doctorsoffice';
import KneeScooter from './Tips Screens/kneescooter';
import Nutrition from './Tips Screens/nutrition';
import { NavItem } from 'aws-amplify-react';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
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
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 45,
  },
});
