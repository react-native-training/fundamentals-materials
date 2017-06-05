import React from 'react';
import { Easing, View, Animated, Button, StyleSheet } from 'react-native';

/* Can Animate any of the following:
*  Animated.Image
*  Animated.ScrollView
*  Animated.Text
*  Animated.View
*/

// Easings:
// bounce, cubic, back(number), elastic(number), ease,
// quad, sin, linear, circle, bezier(x1, y1, x2, y2), exp, in, inOut(ease), out(ease)

class EasingExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Easing',
  });

  animatedShow = new Animated.Value(350);

  animate = () => {
    this.animatedShow.resetAnimation();
    Animated.timing(
      this.animatedShow,
      {
        toValue: 0,
        duration: 1200,
        easing: Easing.in,
      },
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Animate With Easing" onPress={this.animate} />
        <Animated.View
          style={[
            styles.block,
            { bottom: this.animatedShow },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    backgroundColor: '#FF9900',
    position: 'absolute',
    width: 50,
    height: 50,
    left: 160,
  },
});

export default EasingExample;
