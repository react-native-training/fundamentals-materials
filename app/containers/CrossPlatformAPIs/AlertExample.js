import React from 'react';
import { ScrollView, Alert, Button } from 'react-native';

class AlertExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Alert',
  });

  doSomething = () => {
    console.log('do something called...');
  }

  alert = () => {
    Alert.alert(
      'Success',
      'You\'ve successfully called an aler!',
      [
        { text: 'OK', onPress: () => console.log('OK pressed') },
        { text: 'Cancel', onPress: this.doSomething },
      ],
      { cancelable: false },
    );
  }

  render() {
    return (
      <ScrollView>
        <Button
          title="Call Alert"
          onPress={this.alert}
        />
      </ScrollView>
    );
  }
}

export default AlertExample;
