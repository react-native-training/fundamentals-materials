import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ListItem from '../../components/ListItem';

let styles;

export default class Fundamentals extends React.Component {
  static navigationOptions = {
    title: 'React Fundamentals',
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <ListItem
            onPress={() => this.props.navigation.navigate('PropsExample')}
            title="Props"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('State')}
            title="State"
          />
        </ScrollView>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
  },
});
