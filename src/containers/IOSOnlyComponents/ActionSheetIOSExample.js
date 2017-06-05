import React from 'react';
import { ActionSheetIOS, StyleSheet, Button, View } from 'react-native';

class ActionSheetIOSExample extends React.Component {
  static navigationOptions = () => ({
    title: 'ActionSheetIOS',
  });

  showActionSheetWithOptions = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Send Email', 'Save', 'Update Contact', 'Cancel'],
      cancelButtonIndex: 3,
      destructiveButtonIndex: 3,
    },
    (buttonIndex) => {
      console.log('ButtonIndex:', buttonIndex);
    });
  }

  showShareActionSheetWithOptions = () => {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'https://www.reactnative.training',
      message: 'Check out this website!',
      subject: 'a subject to go in the email heading', // email only
    },
    (error) => alert(error),
    (completed, method) => {
      let text;
      if (completed) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      console.log('message: ', text);
    });
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.showActionSheetWithOptions}
          title="showActionSheetWithOptions"
        />
        <Button
          onPress={this.showShareActionSheetWithOptions}
          title="showShareActionSheetWithOptions"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default ActionSheetIOSExample;
