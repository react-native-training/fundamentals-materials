import React from 'react';
import { View, TextInput, Alert } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

// Create a way for a user to type info into a TextInput and then
// click a button to call an alert with that info.

class ChallengeTwo extends React.Component {
  static navigationOptions = () => ({
    title: 'Challenge Two',
  });

  render() {
    return (
      <View>
        <ExampleTitle
          title="Challenge Two"
        />
      </View>
    );
  }
}

export default ChallengeTwo;
