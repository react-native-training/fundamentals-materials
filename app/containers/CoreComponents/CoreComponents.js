import React from 'react';
import { View, Text } from 'react-native';
import ListItem from '../../components/ListItem';

class CoreComponents extends React.Component {
  static navigationOptions = () => ({
    title: <View style={{ width: 20, height: 20 }}>
        <Text>ES2015</Text>
      </View>,
  });

  render() {
    return (
      <View>
        <ListItem
          title="View"
        />
        <ListItem
          title="Text"
        />
        <ListItem
          title="ScrollView"
        />
        <ListItem
          title="TextInput"
        />
      </View>
    );
  }
}

export default CoreComponents;
