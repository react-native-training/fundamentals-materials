import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

class PositionExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Position',
  });

  render() {
    return (
      <View>
        <ExampleTitle
          textStyle={{ color: 'orange' }}
          title="Position Relative"
        />
        <View style={styles.relative} />
        <ExampleTitle
          textStyle={{ color: 'red' }}
          title="Position Absolute"
        />
        <View style={styles.absolute} />

        <ExampleTitle
          textStyle={{ color: 'green' }}
          title="Position Absolute Nested"
        />
        <View style={{ backgroundColor: 'blue', padding: 10 }}>
          <View style={styles.absolute2} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  relative: {
    height: 50,
    width: 50,
    backgroundColor: 'orange',
  },
  absolute: {
    position: 'absolute',
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  absolute2: {
    position: 'absolute',
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
});

export default PositionExample;
