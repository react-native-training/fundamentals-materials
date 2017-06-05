import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ViewStyling extends React.Component {
  static navigationOptions = () => ({
    title: 'Basic View Styling',
  });

  render() {
    return (
      <View>
        <View style={[styles.basis, styles.backgroundColor]}><Text>backgroundColor example</Text></View>
        <View style={[styles.basis, styles.border]}><Text>border example</Text></View>
        <View style={[styles.basis, styles.heightAndWidth]}><Text>height and width example</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'yellow',
  },
  basis: {
    margin: 15,
    width: 140,
    height: 30,
    backgroundColor: '#cccccc',
  },
  border: {
    borderBottomWidth: 2,
    borderRightWidth: 3,
    borderRightColor: 'orange',
    borderBottomColor: 'yellow',
  },
  heightAndWidth: {
    height: 100,
    width: 75,
    backgroundColor: 'purple',
  },
  left: {
    left: 60,
  },
  top: {
    top: -20,
  },
});

export default ViewStyling;
