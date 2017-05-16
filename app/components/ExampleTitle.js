import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ExampleTitle = ({ title, textStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExampleTitle;
