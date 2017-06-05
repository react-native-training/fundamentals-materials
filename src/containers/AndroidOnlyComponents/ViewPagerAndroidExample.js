import React from 'react';
import { StyleSheet, Text, View, ViewPagerAndroid } from 'react-native';

const View1 = () => <View style={[styles.view, { backgroundColor: 'red' }]}><Text style={styles.text}>Hello from View 1</Text></View>;
const View2 = () => <View style={[styles.view, { backgroundColor: 'orange' }]}><Text style={styles.text}>Hello from View 2</Text></View>;
const View3 = () => <View style={[styles.view, { backgroundColor: 'blue' }]}><Text style={styles.text}>Hello from View 3</Text></View>;

class ViewPagerAndroidExample extends React.Component {
  static navigationOptions = () => ({
    title: 'ViewPagerAndroid',
  });

  render() {
    return (
      <ViewPagerAndroid style={styles.container}>
        <View1 />
        <View2 />
        <View3 />
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
  },
});

export default ViewPagerAndroidExample;
