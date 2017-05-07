import React from 'react';
import { View, Text, Button } from 'react-native';

class Es2015 extends React.Component {
  static navigationOptions = () => ({
    title: 'Button',
  });

  render() {
    return (
      <View>
        <Text>Hello from Button Component</Text>
        <Button title="Hello World" />
      </View>
    );
  }
}

export default Es2015;
