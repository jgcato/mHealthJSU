import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Dashboard from 'react-native-dashboard';
import GlobalHeader from '../../shared/globalHeader';
import FAQs from './FAQs';
import CampusServices from '../pages/campusServices';
import MentalHealth from '../pages/campusServices';
import Youtube from '../pages/youtube';
import Tips from '../pages/tips';
import Motivation from '../pages/motivation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//https://developer.aliyun.com/mirror/npm/package/react-native-dashboard#-usage

// function Menu({navigation}) {
//   return (
//     <View>
//       <TouchableOpacity onPress={() => navigation.openDrawer()}>
//         <Ionicons name="menu" size={33} color="#4F8EF7" />
//       </TouchableOpacity>
//     </View>
//   );
// }

export default function Homepage() {

  return (
    <View style={styles.container}>
      <Text style={{paddingTop: 15}}>What is your mood?</Text>
      <View style={styles.buttons}>
        {/* <GlobalHeader headerText="Home" /> */}
        <Button
          icon={<FontAwesome5 name="question-circle" size={15} color="red" />}
          title="FAQs"
          raised="false"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('FAQs')}
        />
        <Button
          icon={<FontAwesome5 name="building" size={15} color="red" />}
          title="Campus Services"
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Campus Services')}
        />
        <Button
          icon={<FontAwesome5 name="youtube" size={15} color="red" />}
          title="Youtube Library"
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Youtube')}
        />
        <Button
          icon={<FontAwesome5 name="brain" size={15} color="red" />}
          title="Mental Health"
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Mental Health')}
        />
        <Button
          icon={<FontAwesome5 name="lightbulb" size={15} color="red" />}
          title="Tips"
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Tips')}
        />
        <Button
          icon={<FontAwesome5 name="hand-sparkles" size={15} color="red" />}
          title="Motivation"
          raised="true"
          type="outline"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => navigation.navigate('Motivation')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  buttons: {
    top: 470,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:3,
  },
  buttonContainer: {
    borderRadius: 100,
    width: 100,
    height: 80,
    justifyContent: 'center',
    //margin: 4,
    marginBottom: 8,
    flexDirection: 'column',
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
});
