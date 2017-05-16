import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomViewComponent = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export { CustomViewComponent };
