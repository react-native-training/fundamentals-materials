import React from 'react';
import { Platform, View, Text, ScrollView, StyleSheet } from 'react-native';

const ZIndexTitle = Platform.OS === 'ios' ? 'Zindex' : 'Elevation'

class ZIndex extends React.Component {
  static navigationOptions = () => ({
    title: ZIndexTitle,
  });

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {/*<Text style={{ backgroundColor: 'transparent', zIndex: 10, marginLeft: 150 }}>Hello</Text>*/}
        <View style={styles.noZindex}><Text style={styles.text}>No zIndex (first)</Text></View>
        <View style={styles.zIndex2}><Text style={styles.text}>zIndex 2 (second)</Text></View>
        <View style={styles.zIndex1}><Text style={styles.text}>zIndex 1 (third)</Text></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
    ...Platform.select({
      ios: {
        zIndex: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  zIndex2: {
    left: 80,
    top: 80,
    width: 120,
    height: 120,
    backgroundColor: 'purple',
    position: 'absolute',
    padding: 20,
    ...Platform.select({
      ios: {
        zIndex: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});

export default ZIndex;
