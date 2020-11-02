/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homepage from '../components/pages/Homepage';

const Drawer = createDrawerNavigator();

export default function NavDrawer() {
  return (
    <NavigationContainer>
      {
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Homepage} />
        </Drawer.Navigator>
      }
    </NavigationContainer>
  );
}
