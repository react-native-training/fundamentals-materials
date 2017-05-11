import React from 'react';
import { ActivityIndicator, View, StyleSheet, ScrollView } from 'react-native';

let styles = {};

class ActivityIndicatorExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Activity Indicator',
  });

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating
          size="large"
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ActivityIndicatorExample;
