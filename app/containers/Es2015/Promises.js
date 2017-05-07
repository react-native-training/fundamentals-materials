import React from 'react';
import { View, Button, Text } from 'react-native';

import ExampleTitle from '../../components/ExampleTitle';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const someObject = {
  name: 'Nader',
  info: {
    address: '213 Brisage Blvd',
    age: 23,
    profession: 'Developer',
    favoriteThings: [
      'eating', 'sleeping',
    ],
  },
};

class Promises extends React.Component {
  static navigationOptions = () => ({
    title: 'Promises',
  });

  render() {
    return (
      <View>
          <Text>hello</Text>
      </View>
    );
  }
}

export default Promises;
