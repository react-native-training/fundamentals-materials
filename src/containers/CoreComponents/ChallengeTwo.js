import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

// Challenge: Implement a FlatList with the provided array of sights
// data. Show a View with two child Text components that display the
// type and name of the sight. Feel free to provide any basic styling
// you would like.

const sights = [
  { type: 'Museum', name: 'Louvre' },
  { type: 'Landmark', name: 'Eiffel Tower' },
  { type: 'Museum', name: 'Petit Palais' },
  { type: 'Landmark', name: 'Notre Dame Cathedral' },
  { type: 'Museum', name: 'Centre Pompidou' },
  { type: 'Landmark', name: 'Sainte-Chapelle' },
  { type: 'Museum', name: 'Musée d’Orsay' },
  { type: 'Landmark', name: 'Palais Garnier' },
];

class ChallengeTwo extends React.Component {
  static navigationOptions = () => ({
    title: 'Challenge 2',
  });

  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({
});

export default ChallengeTwo;
