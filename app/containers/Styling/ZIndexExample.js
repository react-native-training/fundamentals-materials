import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

let styles = {};

class ZIndex extends React.Component {
  static navigationOptions = () => ({
    title: 'zIndex',
  });

  render() {
    return (
      <ScrollView>
        {/*<Text style={{ backgroundColor: 'transparent', zIndex: 10, marginLeft: 150 }}>Hello</Text>*/}
        <View style={styles.noZindex}><Text style={styles.text}>No zIndex (first)</Text></View>
        <View style={styles.zIndex2}><Text style={styles.text}>zIndex 2 (second)</Text></View>
        <View style={styles.zIndex1}><Text style={styles.text}>zIndex 1 (third)</Text></View>
      </ScrollView>
    );
  }
}

styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  noZindex: {
    left: 120,
    width: 120,
    height: 120,
    backgroundColor: 'red',
    position: 'absolute',
    padding: 20,
  },
  zIndex1: {
    left: 180,
    top: 60,
    width: 120,
    height: 120,
    backgroundColor: 'blue',
    position: 'absolute',
    padding: 20,
    zIndex: 1,
  },
  zIndex2: {
    left: 80,
    top: 80,
    width: 120,
    height: 120,
    backgroundColor: 'purple',
    position: 'absolute',
    padding: 20,
    zIndex: 2,
  },
});

export default ZIndex;
