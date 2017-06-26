
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';

const arr = []
for (let i = 0; i < 500; i++) {
  arr.push(i)
}

class Stagger extends Component {

  constructor() {
    super();
    this.animatedValue = [];
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0);
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const animations = arr.map((item) => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 1,
          duration: 4000,
        },
      );
    });
    Animated.stagger(10, animations).start();
  }

  render() {
    const animations = arr.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={[styles.box, { opacity: this.animatedValue[a] }]}
        />
      );
    });
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {animations}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    marginLeft: 3,
    marginTop: 3,
  },
});

export default Stagger;
