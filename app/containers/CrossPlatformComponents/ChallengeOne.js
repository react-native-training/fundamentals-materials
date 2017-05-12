import React from 'react';
import { View } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

// In this component, we want to create a modal
// that contains an image

// Advanced: Add a loading indicator and a fake
// API timeout that simulates the fetching of data
// before the modal opens

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
