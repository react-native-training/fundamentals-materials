import React from 'react';
import { StyleSheet, Animated, Button, View } from 'react-native';

/* Can Animate any of the following:
*  Animated.Image
*  Animated.ScrollView
*  Animated.Text
*  Animated.View
*/

// transforms can be any of the following:
// [{perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}
// {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}
// {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}]

class Transforms extends React.Component {
  static navigationOptions = () => ({
    title: 'Transforms',
  });

  animatedScale = new Animated.Value(0);
  animatedRotation = new Animated.Value(0);
  animatedSkew = new Animated.Value(0);

  animateScale = () => {
    this.animatedScale.resetAnimation();
    Animated.timing(
      this.animatedScale,
      {
        toValue: 1,
        duration: 2000,
      },
    ).start();
  }

  animateRotation = () => {
    this.animatedRotation.resetAnimation();
    Animated.timing(
      this.animatedRotation,
      {
        toValue: 1,
        duration: 2000,
      },
    ).start();
  }

  animateSkew = () => {
    this.animatedSkew.resetAnimation();
    Animated.timing(
      this.animatedSkew,
      {
        toValue: 1,
        duration: 2000,
      },
    ).start();
  }

  render() {
    const scale = this.animatedScale.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2],
    });

    const rotation = this.animatedRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '135deg'],
    });

    const skew = this.animatedSkew.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '135deg'],
    });

    return (
      <View style={{ alignItems: 'center' }}>
        <Button onPress={this.animateScale} title="Animate Scale" />
        <Button onPress={this.animateRotation} title="Animate Rotation" />
        <Button onPress={this.animateSkew} title="Animate Skew" />

        <Animated.View
          style={[styles.scaled, { transform: [{ scale: scale }] }]}
        />
        <Animated.View
          style={[styles.scaled2, { transform: [{ rotate: rotation }] }]}
        />
        <Animated.View
          style={[styles.scaled3, { transform: [{ skewX: skew }] }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scaled: {
    width: 75,
    height: 75,
    marginTop: 75,
    backgroundColor: 'red',
  },
  scaled2: {
    width: 75,
    height: 75,
    marginTop: 75,
    backgroundColor: 'green',
  },
  scaled3: {
    width: 75,
    height: 75,
    marginTop: 75,
    backgroundColor: 'yellow',
  },
});

export default Transforms;
