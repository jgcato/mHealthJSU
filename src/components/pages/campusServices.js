import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ada from './CampService Screens/ada';
import Counseling from './CampService Screens/counseling';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 15, fontWeight: '400'},
        indicatorStyle: {backgroundColor: 'darkblue'},
      }}>
      <Tab.Screen name="Counseling" component={Counseling} />
      <Tab.Screen name="ADA Info" component={Ada} />
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
