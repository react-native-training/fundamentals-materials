import React from 'react';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';

class Example1 extends React.Component {
  render() {
    return (
      <ScrollView>
        <TextInput title="YO" />
        <Button title="Hello World" />
      </ScrollView>
    );
  }
}

class TextInputComponentExample extends React.Component {
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

export default TextInputComponentExample;
