import React from 'react';
import { Animated, View, Button, StyleSheet } from 'react-native';

/* Can Animate any of the following:
*  Animated.Image
*  Animated.ScrollView
*  Animated.Text
*  Animated.View
*/

class Sequence extends React.Component {
  static navigationOptions = () => ({
    title: 'Animated Sequence',
  });

  state = {
    loaded: false,
  }

  animatedMarginLeft = new Animated.Value(0);
  animatedMarginTop = new Animated.Value(0);

  animate = () => {
    Animated.sequence([
      Animated.timing(
        this.animatedMarginTop,
        {
          toValue: 516,
          duration: 1000,
        },
      ),
      Animated.timing(
        this.animatedMarginLeft,
        {
          toValue: 325,
          duration: 1000,
        },
      ),
      Animated.timing(
        this.animatedMarginTop,
        {
          toValue: 0,
          duration: 1000,
        },
      ),
      Animated.timing(
        this.animatedMarginLeft,
        {
          toValue: 0,
          duration: 1000,
        },
      ),
    ]).start(() => this.animate());
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.animate} title="Animate Sequence" />
        <Animated.View
          style={[
            styles.block,
            { marginTop: this.animatedMarginTop, marginLeft: this.animatedMarginLeft },
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
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});

export default Sequence;
