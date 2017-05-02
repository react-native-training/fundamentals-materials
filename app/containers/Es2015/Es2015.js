import React from 'react';
import { View, Text } from 'react-native';

class Es2015 extends React.Component {
  static navigationOptions = () => ({
    title: 'ES2015',
  });

  render() {
    return (
      <View>
        <Text>Hello from es2015</Text>
      </View>
    );
  }
}

export default Es2015;
