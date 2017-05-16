import React from 'react';
import { PanResponder, StyleSheet, View } from 'react-native';

class PanResponderExample extends React.Component {
  static navigationOptions = () => ({
    title: 'PanResponder',
  });

  state = {
    x: 0,
    y: 0,
    gestureX: null,
    gestureY: null,
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        if (!this.state.gestureX || !this.state.gestureY) {
          this.setState({
            gestureX: gestureState.moveX,
            gestureY: gestureState.moveY,
          });
          return;
        }
        this.setState({
          x: this.state.x - (this.state.gestureX - gestureState.moveX),
          y: this.state.y - (this.state.gestureY - gestureState.moveY),
          gestureX: gestureState.moveX,
          gestureY: gestureState.moveY,
        });
      },
      onPanResponderRelease: () => {
        this.setState({
          gestureX: null,
          gestureY: null,
        });
      },
    });
  }

  render() {
    const { x, y } = this.state;
    return (
      <View>
        <View {...this.panResponder.panHandlers} style={[styles.box, { top: y, left: x }]} />
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
