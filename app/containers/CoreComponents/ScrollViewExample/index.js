import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

class ScrollViewExample extends React.Component {
  static navigationOptions = () => ({
    title: 'ScrollView',
  });

  render() {
    return (
      <ScrollView>
        <View style={styles.viewContainer} />
        <View style={styles.viewContainer} />
        <View style={styles.viewContainer} />

        <ScrollView horizontal>
          <View style={styles.horizontalView} />
          <View style={styles.horizontalView} />
          <View style={styles.horizontalView} />
          <View style={styles.horizontalView} />
          <View style={styles.horizontalView} />
          <View style={styles.horizontalView} />
          <View style={styles.horizontalView} />
          <View style={styles.horizontalView} />
          <View style={styles.horizontalView} />
          <View style={styles.horizontalView} />
        </ScrollView>

        <ScrollView
          // Style is the outer container style
          style={styles.contentContainerStyleView}
          // contentContainerStyle is the inner container style
          contentContainerStyle={styles.contentContainerStyleScrollView}
        />

        <View style={styles.viewContainer} />
        <View style={styles.viewContainer} />
        <View style={styles.viewContainer} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyleView: {
    backgroundColor: 'black',
    margin: 20,
  },
  contentContainerStyleScrollView: {
    backgroundColor: 'red',
    margin: 20,
    height: 100,
  },
  viewContainer: {
    margin: 20,
    borderColor: '#000',
    borderWidth: 1,
    height: 400,
  },
  horizontalView: {
    margin: 20,
    borderColor: '#000',
    borderWidth: 1,
    height: 40,
    width: 100,
  },
});

export default ScrollViewExample;
