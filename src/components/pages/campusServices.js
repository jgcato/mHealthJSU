import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ada from '../pages/CampService Screens/ada';
import Counseling from '../pages/CampService Screens/counseling';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ADA Info" component={Ada} />
      <Tab.Screen name="Counseling" component={Counseling} />
    </Tab.Navigator>
  );
}

export default function CampusServices() {
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
