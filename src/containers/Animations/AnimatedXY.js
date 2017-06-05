import React from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

class AnimatedXY extends React.Component {
  static navigationOptions = () => ({
    title: 'Timing',
  });

  animatedXY = new Animated.ValueXY({ x: 0, y: 40 });

  animateXY = () => {
    this.animatedXY.resetAnimation();
    Animated.timing(
      this.animatedXY,
      {
        toValue: { x: 280, y: 466 },
        duration: 1000,
      },
    ).start();
  }

  render() {
    return (
      <View>
        <Button title="Animate XY" onPress={this.animateXY} />

        <Animated.View
          style={[
            styles.block,
            this.animatedXY.getLayout(),
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#FF9900',
    width: 100,
    height: 100,
  },
});

export default AnimatedXY;
