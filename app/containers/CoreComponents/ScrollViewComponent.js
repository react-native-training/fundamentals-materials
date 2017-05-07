import React from 'react';
import { ScrollView, Text, Button } from 'react-native';

class Es2015 extends React.Component {
  static navigationOptions = () => ({
    title: 'Button',
  });

  render() {
    return (
      <ScrollView>
        <Text>Hello from Button Component</Text>
        <Button title="Hello World" />
      </ScrollView>
    );
  }
}

export default Es2015;
