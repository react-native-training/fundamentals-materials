import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';

class Example1 extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>Hello from Button Component</Text>
        <Button title="Hello World" />
      </ScrollView>
    );
  }
}

class TextComponentExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Text Component Example',
  });
  render() {
    return (
      <View>
        <Example1 />
      </View>
    );
  }
}

export default TextComponentExample;
