import React from 'react';
import { View, Button } from 'react-native';

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

class MultilineStrings extends React.Component {
  static navigationOptions = () => ({
    title: 'Multi Line Strings',
  });

  render() {
    return (
      <View>
      </View>
    );
  }
}

export default MultilineStrings;
