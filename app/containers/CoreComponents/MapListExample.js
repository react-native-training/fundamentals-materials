import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

// The most basic way of showing lists in React Native
// is to simply map through a list of items and return
// an array of components.

const peopleComponentArray = [
  <Text key="Chris">Chris</Text>,
  <Text key="Michelle">Michelle</Text>,
  <Text key="Mike">Mike</Text>,
  <Text key="Amanda">Amanda</Text>,
];

// const people = [
//   { name: 'Chris J.' },
//   { name: 'Michelle H.' },
//   { name: 'Mike M.' },
//   { name: 'Amanda L.' },
// ];
// people.map(person => <Text>{person.name}</Text>)

// React & React Native require a key for items being
// rendered in an array, so we must add the key property.
// people.map((person, index) => {
//   return <Text key={index}>{person.name}</Text>
// });

// consider using node uuid (provides a universally unique identifier)
// or any unique key as item key (vs index)
// see https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318

class MapListExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Map List',
  });

  render() {
    return (
      <ScrollView>
        {peopleComponentArray}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});

export default MapListExample;
