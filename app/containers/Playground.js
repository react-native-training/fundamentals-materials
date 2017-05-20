import React from 'react';
import { Platform, TouchableHighlight, TouchableNativeFeedback, View, Text } from 'react-native';

class App extends React.Component {
  static navigationOptions = {
    title: 'Playground',
  }

  render() {
    let Button = TouchableHighlight;
    if (Platform.OS === 'android') {
      Button = TouchableNativeFeedback;
    }

    return (
      <View>
        <Button onPress={console.log}>
          <Text>Hello!</Text>
        </Button>
      </View>
    );
  }
}

export default App;
