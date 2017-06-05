import React from 'react';
import { Easing, View, Animated, Button, StyleSheet } from 'react-native';

// transforms can be any of the following:
// [{perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}
// {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}
// {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}]

const reactLogo = require('./assets/react.png');

class Loop extends React.Component {
  static navigationOptions = () => ({
    title: 'Loop',
  });

  animatedSpin = new Animated.Value(0);

  animate = () => {
    Animated.loop(
      Animated.timing(
        this.animatedSpin,
        {
          duration: 3000,
          toValue: 1,
          easing: Easing.linear,
        },
      ),
    ).start();
  }

  render() {
    const spinValue = this.animatedSpin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View>
        <Button title="Spin" onPress={this.animate} />

        <Animated.Image
          source={reactLogo}
          style={[
            styles.image,
            { transform: [{ rotate: spinValue }] },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default Loop;
