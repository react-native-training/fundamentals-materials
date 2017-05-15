import React from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

// Create a staggered animation using Animated.sequence giving the user
// an introduction message:
// 1: Hello!
// 2: Welcome To
// 3: My App

// Advanced: Animate the background color of one of the Text Elements
// to transition between three background colors

let styles = {};

class ChallengeTwo extends React.Component {
  static navigationOptions = () => ({
    title: 'Challenge Two',
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

export default ChallengeTwo;
