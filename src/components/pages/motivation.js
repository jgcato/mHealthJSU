import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from 'react-native-elements';

export default function Motivation() {
  return (
    <ScrollView scrollEnabled={true} style={styles.container}>
      <Card>
        <Image
          style={{
            width: 300,
            height: 180,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}
          source={require('../assets/athletes/chris.jpg')}
        />
        <Text
          style={{
            marginBottom: 10,
            fontSize: 15,
            fontWeight: '300',
            textAlign: 'center',
          }}>
          “My drive and hunger for the sport will not let me give up and
          eventually sunrise will come at the right time on the track”
          {'\n'}- <Text style={{fontWeight: '500'}}>Chris Felix </Text>| Track &
          field
          {"\n"}
          {"\n"}
          Injuries: hamstring, quad, foot stress fracture
        </Text>
      </Card>

      <Card>
        <Image
          style={{
            width: 300,
            height: 180,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}
          source={require('../assets/athletes/heem.jpg')}
        />
        <Text
          style={{
            marginBottom: 10,
            fontSize: 15,
            fontWeight: '300',
            textAlign: 'center',
          }}>
          “be there for your team and they will be there for you. Also, being a
          great athlete begins with self-care"
          {'\n'}- <Text style={{fontWeight: '500'}}>Raheem Skinner</Text>| Track
          & field
          {"\n"}
          {"\n"}
          Injuries: impingement and labral hip tear (left hip)
        </Text>
      </Card>

      <Card>
        <Image
          style={{
            width: 300,
            height: 180,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 10,
          }}
          source={require('../assets/athletes/que.jpg')}
        />
        <Text
          style={{
            marginBottom: 10,
            fontSize: 15,
            fontWeight: '300',
            textAlign: 'center',
          }}>
          “getting injured can really make you feel like you’re at your lowest
          point with no light at the end of the tunnel. It teaches you patience
          and how to trust in the process though just gotta stay focused”
          {'\n'}- <Text style={{fontWeight: '500'}}>Que Barnett </Text>| Football
          {"\n"}
          {"\n"}
          Injuries: fractured ankle bone and ripped ligaments 
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 45,
  },
});
