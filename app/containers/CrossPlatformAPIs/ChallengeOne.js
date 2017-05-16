import React from 'react';
import { View, AsyncStorage, TextInput } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

// Create a form input that saves the user's name and initial geolocatoin data
// to AsyncStorage

class ChallengeOne extends React.Component {
  static navigationOptions = () => ({
    title: 'Challenge One',
  });

  render() {
    return (
      <View>
        <ExampleTitle
          title="Challenge One"
        />
      </View>
    );
  }
}

export default ChallengeOne;
