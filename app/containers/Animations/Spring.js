import React from 'react';
import { View, Animated, Button, StyleSheet, Text } from 'react-native';

/* Can Animate any of the following:
*  Animated.Image
*  Animated.ScrollView
*  Animated.Text
*  Animated.View
*/

class Spring extends React.Component {
  static navigationOptions = () => ({
    title: 'Spring',
  });

  springValue = new Animated.Value(0.3);

  reset = () => {
    this.springValue.setValue(0.3);
  }

  spring = () => {
    this.springValue.setValue(0.3);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
      },
    ).start();
  }

  render() {
    return (
      <View>
        <Button title="Animate Spring" onPress={this.spring} />
        <Button title="Reset " onPress={this.reset} />

        <View>
          <Animated.Image
            style={[styles.image, { transform: [{ scale: this.springValue }] }]}
            source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 227,
    height: 200,
  },

});

export default Spring;
