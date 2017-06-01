import React from 'react';
import { StyleSheet, Button, View, ProgressBarAndroid } from 'react-native';

class ProgressBarAndroidExample extends React.Component {
  static navigationOptions = () => ({
    title: 'ProgressBarAndroid',
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
        <ProgressBarAndroid
          indeterminate={false}
          styleAttr="Horizontal"
          progress={this.state.progress}
        />
        {/*<ProgressBarAndroid
          styleAttr="Inverse"
          color="rgb(255, 153, 0)"
        />*/}
        <View>
          <Button onPress={this.fakeFetchProgress} title="Fetch Data" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default ProgressBarAndroidExample;
