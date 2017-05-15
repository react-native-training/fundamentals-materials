import React from 'react';
import { Animated, Button, ScrollView } from 'react-native';

/* Can Animate any of the following:
*  Animated.Image
*  Animated.ScrollView
*  Animated.Text
*  Animated.View
*/

class Animations extends React.Component {
  static navigationOptions = () => ({
    title: 'Animations',
  });

  animatedValue = new Animated.Value(0);

  animate = () => {
    this.animatedValue.resetAnimation();
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
      },
    ).start();
  }

  render() {
    const dimensions = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 100],
    });

    const fontSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [14, 44, 36],
    });

    const backgroundColor = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#fafafa', '#FF9900'],
    });

    return (
      <Animated.ScrollView style={{ backgroundColor: backgroundColor }}>
        <Button onPress={this.animate} title="Animate" />

        <Animated.View
          style={[
            { backgroundColor: 'red' },
            { width: dimensions, height: dimensions },
          ]}
        />

        <Animated.Text style={{ fontSize: fontSize }}>
          Hello!
        </Animated.Text>
      </Animated.ScrollView>
    );
  }
}

export default Animations;
