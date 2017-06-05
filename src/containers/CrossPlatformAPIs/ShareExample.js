import React from 'react';
import { ScrollView, Button, Share } from 'react-native';

class ShareExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Share',
  });

  share = () => {
    Share.share({
      message: 'React Native is awesome!!',
      url: 'http://reactnative.training/',
      title: 'React Native Training',
    })
    .then(message => console.log('message:', message))
    .catch(error => console.log('error: ', error));
  }

  render() {
    return (
      <ScrollView>
        <Button
          title="Share"
          onPress={this.share}
        />
      </ScrollView>
    );
  }
}

export default ShareExample;
