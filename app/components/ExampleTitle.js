import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

let styles;

const ExampleTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExampleTitle;
