import React from 'react';
import { View, StyleSheet } from 'react-native';

let styles = {};

const CustomViewComponent = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export { CustomViewComponent };
