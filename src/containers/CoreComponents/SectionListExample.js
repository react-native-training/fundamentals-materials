import React from 'react';
import { Text, StyleSheet, SectionList } from 'react-native';

// SectionList must have data with the following shape:
let sections = [{ data: [] }, { data: [] }];

// Even better, sections have their own unique key or identifier:
sections = [{ data: [], key: 'People' }, { data: [], key: 'Places' }];

sections = [
  { data: [{ name: 'Chris' }, { name: 'Amanda' }], key: 'People' },
  { data: [{ name: 'Seattle' }, { name: 'San Francisco' }], key: 'City' },
  { data: [{ name: 'Farmer' }, { name: 'Programmer' }], key: 'Profession' },
];

// Sometimes it makes sense to manipulate the data on the client to add keys to
// a basic existing array.

let arrayData = [
  { name: 'Jeff', sport: 'Basketball' },
  { name: 'Amanda', sport: 'Basketball' },
  { name: 'Jennifer', sport: 'Baseball' },
  { name: 'Jim', sport: 'Baseball' },
];

arrayData = arrayData.reduce((acc, next) => {
  if (acc[next.sport]) {
    acc[next.sport].push(next);
  } else {
    acc[next.sport] = [];
    acc[next.sport].push(next);
  }
  return acc;
}, {});

const newData = [];

Object.keys(arrayData).map(key => newData.push({
  key,
  data: arrayData[key],
}));
// console.log('newData: ', newData);

class SectionListListExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Section List',
  });

  renderSectionHeader = ({ section }) => {
    return (
      <Text style={styles.header}>{section.key}</Text>
    );
  }

  renderItem = ({ item }) => {
    return (
      <Text style={styles.item}>{item.name}</Text>
    );
  }

  render() {
    return (
      <SectionList
        keyExtractor={item => item.name}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        sections={sections}
      />
    );
  }
}

// ItemSeparatorComponent={() => <View style={styles.separator} />}

const styles = StyleSheet.create({
  header: {
    padding: 13,
    backgroundColor: '#a3a3a3',
    fontSize: 14,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  },
});

export default SectionListListExample;
