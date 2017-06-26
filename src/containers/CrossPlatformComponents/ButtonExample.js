import React from 'react';
import { View, Button } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

class ButtonExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Button',
  });

  render() {
    return (
      <View>
        <ExampleTitle
          title="Button Component"
        />
        <Button
          onPress={() => console.log('hello!!')}
          title="Hello World"
        />
      </View>
    );
  }
}

export default ButtonExample;
