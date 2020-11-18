import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function DoctorsOffice() {
  return (
    //onStartShouldSetResponder() enables scrolling for ScrollView which is disabled by TouchableWithoutFeedback in App.js file
    <View style={styles.container}>
      <ScrollView>
        <View onStartShouldSetResponder={() => true}>
          <Text style={styles.tip}>
            {' '}
            <Text style={styles.number}>1.</Text> Follow-up surgery visits are a
            time for you to inquire about any concerns or questions regarding
            your injury, take advantage of them.
            {'\n'}
            {'\n'}
            <Text style={styles.number}>2.</Text> Ask all the questions that
            come to mind, there are no bad questions to ask. You have the right
            to know all the details regarding your injury.
            {'\n'}
            {'\n'}
            <Text style={styles.number}>3.</Text> Utilize the patient portal on
            the Mississippi Sports Medicine website if you have questions in
            between visits.
            {'\n'}
            {'\n'}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  number: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'darkblue',
  },
  tip: {
    fontSize: 18,
    marginTop: 10,
  },
});
