import React from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView } from 'react-native';

const people = [
  { name: 'Chris J.', age: 22 },
  { name: 'Michelle H.', age: 44 },
  { name: 'Mike M.', age: 50 },
  { name: 'Amanda L.', age: 34 },
];

class FlatListExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Flat List',
  });

  renderItem = (item) => {
    console.log('item: ', item);
  }

  // renderItem = ({ item, index }) => {
  //
  // }

  render() {
    return (
      <View>
        <FlatList
          renderItem={this.renderItem}
          keyExtractor={person => person.name}
          data={people}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default FlatListExample;
