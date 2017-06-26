import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

const { width, height } = Dimensions.get('window');

class DimensionsExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Dimensions',
  });

  render() {
    return (
      <ScrollView>
        <ExampleTitle
          title={`Height: ${height}`}
        />
        <ExampleTitle
          title={`Width: ${width}`}
        />
        <View style={styles.box} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: width / 2,
    height: width / 2,
    backgroundColor: 'red',
  },
});

export default DimensionsExample;
