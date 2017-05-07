import React from 'react';
import { View } from 'react-native';

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

class Modules extends React.Component {
  static navigationOptions = () => ({
    title: 'Modules',
  });

  render() {
    return (
      <View>
      </View>
    );
  }
}

export default Modules;
