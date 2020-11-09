import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function DoctorsOffice() {
  return (
    <View style={styles.container}>
      <Text>Doctor's Office</Text>
      <Text>
        Ask all the questions that come to mind. Don't be ashamed, there are no
        bad questions to ask about your injury. You have the right to know all
        the details regarding it
      </Text>
      <Text>
        Follow-up surgery visits are a time for you to inquire about anything
        regarding your injury
      </Text>
      <Text>
        Utilize the patient portal on the Mississippi Sports Medicine website if
        you have questions in between visits
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
