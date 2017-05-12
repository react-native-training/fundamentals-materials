import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

let styles = {};

// <ActivityIndicator />
// main props ->
// animating: boolean
// size: string (small, large)

class ActivityIndicatorExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Activity Indicator',
  });

  state = {
    loading: true,
  }

  componentWillMount() {
    this.loadData();
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  loadData = () => {
    this.timeOut = setTimeout(() => {
      this.setState({ loading: false });
    }, 2500);
  }

  render() {
    // const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
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
