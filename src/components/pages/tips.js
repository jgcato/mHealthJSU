import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions, ImageBackground} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Crutches from './Tips Screens/crutches';
import DoctorsOffice from './Tips Screens/doctorsoffice';
import KneeScooter from './Tips Screens/kneescooter';
import Nutrition from './Tips Screens/nutrition';
import {NavItem} from 'aws-amplify-react';
import {SafeAreaView} from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
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
      <Image
        style={{
          width: 380,
          height: 120,
          alignSelf: 'center',
          marginTop: 5,
          marginBottom: 20,
        }}
        source={require('../assets/appPics/yougotthis.jpeg')}
      />
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
