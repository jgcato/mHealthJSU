import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Card, Divider} from 'react-native-elements';

export default function Motivation() {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/appPics/brick.jpg')} style={width=400}>
    
      <ScrollView>
        <View onStartShouldSetResponder={() => true}>
          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 300,
                height: 180,
                alignSelf: 'center',
                marginTop: 10,
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
              {'\n'}- <Text style={{fontWeight: '500'}}>Chris Felix </Text>|
              Track & field
              {'\n'}
              {'\n'}
              Injuries: hamstring, quad, foot stress fracture
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 300,
                height: 180,
                alignSelf: 'center',
                marginTop: 10,
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
              “be there for your team and they will be there for you. Also,
              being a great athlete begins with self-care"
              {'\n'}- <Text style={{fontWeight: '500'}}>Raheem Skinner</Text> |
              Track & field
              {'\n'}
              {'\n'}
              Injuries: impingement and labral hip tear (left hip)
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 300,
                height: 180,
                alignSelf: 'center',
                marginTop: 10,
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
              “getting injured can really make you feel like you’re at your
              lowest point with no light at the end of the tunnel. It teaches
              you patience and how to trust in the process though, just gotta
              stay focused”
              {'\n'}- <Text style={{fontWeight: '500'}}>Que Barnett </Text>|
              Football
              {'\n'}
              {'\n'}
              Injuries: fractured ankle bone and ripped ligaments
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 300,
                height: 220,
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}
              source={require('../assets/athletes/d.jpg')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
                textAlign: 'center',
              }}>
              “The biggest piece of advice I wanna give to injured athletes is
              always trust the plan of the athletic medical staff and coaches.
              They will come up with a plan that will get you back on the field
              as quick as possible and each of your coaches, staff, athletic
              department and your fellow students only want to see you succeed.
              Trust in the weight room during rehabilitation and especially
              after, strong muscles re normally able to withstand long and
              enduring seasons”
              {'\n'}- <Text style={{fontWeight: '500'}}>Darian Hampton </Text>|
              Track & field
              {'\n'}
              {'\n'}
              Injuries: IT band, hamstring
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 300,
                height: 180,
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}
              source={require('../assets/athletes/jeida.jpg')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
                textAlign: 'center',
              }}>
              “soon when all is well, you’re going to look back on this period
              of your life and be so glad that you never gave up”
              {'\n'}- <Text style={{fontWeight: '500'}}>Jeida </Text>| Track &
              field
              {'\n'}
              {'\n'}
              Injuries: achilles tendinitis
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 300,
                height: 180,
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}
              source={require('../assets/athletes/jelah.jpg')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
                textAlign: 'center',
              }}>
              “God gives his toughest battles to his strongest soldiers. His
              plan before my plan.”
              {'\n'}- <Text style={{fontWeight: '500'}}>Jelah Carter</Text> |
              Soccer
              {'\n'}
              {'\n'}
              Injuries: broken collarbone, torn labrum and rotator cuff in
              shoulder
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 300,
                height: 230,
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}
              source={require('../assets/athletes/qksha.jpg')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
                textAlign: 'center',
              }}>
              “tough times don’t last, but tough people do.”
              {'\n'}- <Text style={{fontWeight: '500'}}>Markayisha Masani</Text>{' '}
              | Volleyball
              {'\n'}
              {'\n'}
              Injuries: torn left ACL
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 300,
                height: 350,
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}
              source={require('../assets/athletes/jacq.jpeg')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
                textAlign: 'center',
              }}>
              “I know it’s hard and I know exactly how you feeling but trust me
              tomorrow will be better just please keep going.”
              {'\n'}-{' '}
              <Text style={{fontWeight: '500'}}>Jacques Williams III</Text> |
              Track & Field
              {'\n'}
              {'\n'}
              Injuries: Achilles
            </Text>
          </Card>
        </View>
      </ScrollView>
  
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  scroll: {
    flex: 1,
  },
  cardcontainer: {
    margin: 40,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'grey',
    shadowOffset: {width: 3, height: 2},
  },
});
