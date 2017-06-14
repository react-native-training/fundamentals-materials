import React from 'react';
import { PanResponder, StyleSheet, View } from 'react-native';

// correct way to use panresponder, bypassing
// render by using setNativeProps

class PanResponderExample extends React.Component {
  static navigationOptions = () => ({
    title: 'PanResponder',
  });

  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.gestureX = 0;
    this.gestureY = 0;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        if (!this.gestureX || !this.gestureY) {
          this.gestureX = gestureState.moveX;
          this.gestureY = gestureState.moveY;
          return;
        }

        this.x = this.x - (this.gestureX - gestureState.moveX)
        this.y = this.y - (this.gestureY - gestureState.moveY)
        this.gestureX = gestureState.moveX;
        this.gestureY = gestureState.moveY;
        this.box.setNativeProps({ style: {left: this.x, top: this.y} })
      },
      onPanResponderRelease: () => {
        this.gestureX = null;
        this.gestureY = null;
      },
    });
  }

  render() {
    console.log('render called')
    const { x, y } = this;
    return (
      <View>
        <View
          ref={box => this.box = box}
          {...this.panResponder.panHandlers} style={[styles.box]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    position: 'absolute',
  },
});

export default PanResponderExample;
