import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import {Card, Divider} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function MentalHealth() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        //pagingEnabled={true}
        persistentScrollbar={true}
        showsHorizontalScrollIndicator={true}>
        <View
          onStartShouldSetResponder={() => true}
          style={{flexDirection: 'row',}}>
          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip1.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>1.</Text> With
              different classes and work hours every day, it can be hard to
              stick to a schedule, but keeping sleep times similar from day to
              day can greatly improve your chances of getting a good night’s
              sleep. Creating a routine that will let your mind and body know
              that bedtime is approaching and that it should get into sleep
              mode. After a few weeks of practice, this should help you fall
              asleep when you need to.
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip2.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>2.</Text> Time
              management skills will make everything from getting assignments
              done to managing work a lot easier. While you might want to go to
              class, work, play a sport, and participate in clubs and social
              activities, the reality is that sooner or later, you’re going to
              exhaust yourself from trying to do so much. If you’ve been working
              steadily for hours, give your eyes and mind a chance for a rest by
              taking a break. You can come back feeling more refreshed and ready
              to go.
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip3.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>3.</Text> Many
              people feel embarrassed or ashamed to ask for help with their
              depression or other mental health concerns, but many of these
              experiences are normal and treatable. You don’t have to deal with
              it alone. Reach out to the Latasha Norman Center at (601)979-0374
              to request an appointment with a counselor. It’s both free and
              confidential to promote comfortability for you to release your
              thoughts and stress.
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip4.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>4.</Text> Being a
              part of someone else’s support network can help too. Every college
              student feels overwhelmed, confused, and disheartened at some
              point in their college life. Being able to reach out to others for
              help can mean the difference between giving up and reaching
              success. Your support network should include professors, friends,
              family members, resident advisors, your counselor, and anyone else
              you feel can help you rise above a problem. Assign roles for each
              person in your support network.
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip5.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>5.</Text> When
              you are active, endorphins are released into your body, along with
              dopamine and serotonin. These chemicals boost your mood, suppress
              pain, and gives you a feeling of reward. Sticking to an exercise
              routine, even if it is walking for thirty minutes each day, can
              elevate your mood. Exercise can also help you sleep better, have
              more energy during the day, and concentrate better on assignments
              and during tests.
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip6.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>6.</Text> Many
              think the party life is what college life is all about. What they
              may not understand is that you don’t need substances to help you
              meet new friends, have a good time, or relax. Avoiding drugs and
              alcohol is the mental health tip for college students that can
              prevent hangovers, being late for class, sleep issues, and
              self-embarrassment. There are plenty of sober activities taking
              place on campus, as well as sober groups and peer mentors if you
              need extra help avoiding the party scene.
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip7.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>7.</Text>{' '}
              Understand that what you put into your body, will affect your
              mood. Chemicals that regulate moods such as happiness, anger,
              anxiety, and depression live in both your brain and your body. The
              healthier the food and drinks you consume, the better regulated
              your mood will be and the better your body will be able to release
              the chemicals that make you feel good. Eating healthy meals that
              include fruit and vegetables each day will offer positive
              benefits.
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip8.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>8.</Text>{' '}
              Recognizing your value and worth, reaching the goals you set, and
              accomplishing difficult tasks are just a few of the things that
              prove you are doing a great job. Rewarding yourself for all your
              hard work is a mental health tip for college students that is
              underutilized. Rewarding yourself means doing something nice for
              yourself because you deserve it and because you have earned it.
              Feeling proud and confident about your progress can help you feel
              excited to continue your college journey. Between each reward, set
              a new goal. Reach that goal and reward yourself again.
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip9.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>9.</Text>{' '}
              Regularly take time throughout the day to take in a nice slow
              breath. Start from your belly. Expand through your ribs, chest,
              and lungs. Breathe out as slowly as possible. Counting can help
              through your breaths may also help. Repeat the process until calm
              and relaxed
            </Text>
          </Card>

          <Card containerStyle={styles.cardcontainer}>
            <Image
              style={{
                width: 350,
                height: 350,
                alignSelf: 'center',
                marginBottom: 10,
                borderRadius: 5,
              }}
              source={require('../assets/mentalHealthTips/mtip10.png')}
            />
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: '300',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>10.</Text>{' '}
              Understand that sometimes, “it is okay not to be okay.” It is
              particularly important to acknowledge that your experiences will
              not be identical to the experiences of others. Know that everyone
              experiences stress differently, and that you might not be in the
              same place mentally as your friends, family, or classmates.
              Refrain from comparing where you are to others. Instead, focus on
              accepting who you are and where you are currently and taking the
              necessary steps to move forward.
            </Text>
          </Card>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <FontAwesome5 name="arrow-circle-left" size={25} color="gainsboro" />
        <Text
          style={{
            margin: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'gainsboro',
          }}>
          SWIPE
        </Text>
        <FontAwesome5 name="arrow-circle-right" size={25} color="gainsboro" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardcontainer: {
    margin: 40,
    width: 380,
    height: 610,
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'grey',
    shadowOffset: {width: 3, height: 2},
  },
});
