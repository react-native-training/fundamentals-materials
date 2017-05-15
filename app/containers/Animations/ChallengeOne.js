import React from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

// Create an animation that animates in three text elements at different
// durations using Animated.Parallel.

// Advanced: Use interpolation

let styles = {};

class ChallengeOne extends React.Component {
  static navigationOptions = () => ({
    title: 'Challenge One',
  });

  render() {
    return (
      <View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  block: {
    backgroundColor: '#FF9900',
  },
});

export default ChallengeOne;
