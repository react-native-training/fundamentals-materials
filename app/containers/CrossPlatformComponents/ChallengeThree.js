import React from 'react';
import { View } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

class ChallengeThree extends React.Component {
  static navigationOptions = () => ({
    title: 'Challenge Three',
  });

  render() {
    return (
      <View>
        <ExampleTitle
          title="Challenge Three"
        />
      </View>
    );
  }
}

export default ChallengeThree;
