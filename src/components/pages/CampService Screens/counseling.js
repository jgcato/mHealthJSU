import React from 'react';
import {Text, View, StyleSheet, Linking, Image, Dimensions} from 'react-native';
import {Divider} from 'react-native-elements';
import {Card} from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;

export default function Counseling() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: windowWidth,
            height: 120,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}
          source={require('../../assets/appPics/jsu.jpg')}
        />
      </View>

      {/***  Latasha Norman Center Card ***/}
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Latasha Norman Center</Text>
          <Divider
            style={{
              backgroundColor: 'darkblue',
              height: 1,
              width: '100%',
              alignSelf: 'center',
              margin: 5,
            }}
          />
          <View style={styles.cardcontainer}>
            <FontAwesome5Icon name="phone" size={20} color="gainsboro" />
            <Text style={styles.cardtext}> : 601-979-0374</Text>
          </View>
          <View style={styles.cardcontainer}>
            <FontAwesome5Icon name="map-pin" size={20} color="gainsboro" />
            <Text style={styles.cardtext}>
              {' '}
              : JSU Student Center, 2nd floor
            </Text>
          </View>
          <View style={styles.cardcontainer}>
            <FontAwesome5Icon name="globe" size={20} color="gainsboro" />
            <Text
              style={{fontSize: 15, color: 'darkblue'}}
              onPress={() =>
                Linking.openURL('https://www.jsums.edu/latashanormancenter/')
              }>
              {' '}
              : click here for LNC website
            </Text>
          </View>
        </Card.Content>
      </Card>

      {/***  APSC card ***/}
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>APSC Clinical Supervisors and Staff</Text>
          <Divider
            style={{
              backgroundColor: 'darkblue',
              height: 1,
              width: '100%',
              alignSelf: 'center',
              margin: 5,
            }}
          />
          <View style={styles.cardcontainer}>
            <FontAwesome5Icon name="phone" size={20} color="gainsboro" />
            <Text style={styles.cardtext}> : 601-979-3381</Text>
          </View>
          <View style={styles.cardcontainer}>
            <FontAwesome5Icon name="envelope" size={20} color="gainsboro" />
            <Text style={styles.cardtext}> : aspc@jsums.edu</Text>
          </View>
          <View style={styles.cardcontainer}>
            <FontAwesome5Icon name="map-pin" size={20} color="gainsboro" />
            <Text style={styles.cardtext}>
              {' '}
              : College of Liberal Arts, 3rd floor
            </Text>
          </View>
          <View style={styles.cardcontainer}>
            <FontAwesome5Icon name="globe" size={20} color="gainsboro" />
            <Text
              style={{fontSize: 15, color: 'darkblue'}}
              onPress={() =>
                Linking.openURL(
                  'https://www.jsums.edu/psychology/applied-psychological-services-clinic/apsc-clinic-supervisors-and-staff/',
                )
              }>
              {' '}
              : click here for ASPC website
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  cardcontainer: {
    alignContent: 'space-between',
    flexDirection: 'row',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardtext: {
    fontSize: 18,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '600',
  },
});
