import React from 'react';
import { ProgressViewIOS, StyleSheet, Button, View } from 'react-native';

class ProgressViewIOSExample extends React.Component {
  static navigationOptions = () => ({
    title: 'ProgressViewIOS',
  });

  state = {
    progress: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeOut);
  }

  fakeFetchProgress = () => {
    this.timeOut = setInterval(() => {
      if (this.state.progress >= 1) {
        clearInterval(this.timeOut);
      } else {
        this.setState({
          progress: this.state.progress + 0.02,
        });
      }
    }, 100);
  }

  render() {
    return (
      <View>
        <ProgressViewIOS
          progressTintColor="#FF9900"
          progress={this.state.progress}
        />
        <Button
          title="Fetch Data"
          onPress={this.fakeFetchProgress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default ProgressViewIOSExample;
