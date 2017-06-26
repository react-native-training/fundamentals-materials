import React from 'react';
import { StyleSheet, Button, View, ToastAndroid } from 'react-native';

class ToastAndroidExample extends React.Component {
  static navigationOptions = () => ({
    title: 'ToastAndroid',
  });

  showBasicToast = () => {
    ToastAndroid.show('Hello from basic toast!', ToastAndroid.SHORT);
  }

  showGravityToast = () => {
    ToastAndroid.showWithGravity('Hello from gravity toast!', ToastAndroid.SHORT, ToastAndroid.CENTER);
  }

  showTopGravityToast = () => {
    ToastAndroid.showWithGravity('Hello from top gravity toast!', ToastAndroid.SHORT, ToastAndroid.TOP);
  }

  render() {
    return (
      <View>
        <Button
          title="Show Basic Toast"
          onPress={this.showBasicToast}
        />
        <View style={styles.breaker} />
        <Button
          title="Show Gravity Toast"
          onPress={this.showGravityToast}
        />
        <View style={styles.breaker} />
        <Button
          title="Show Top Gravity Toast"
          onPress={this.showTopGravityToast}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  breaker: {
    height: 10,
  },
});

export default ToastAndroidExample;
