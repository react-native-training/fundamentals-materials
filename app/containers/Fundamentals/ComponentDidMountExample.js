import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

let styles;

class ComponentDidMountExample extends React.Component {
  static navigationOptions = {
    title: 'componentDidMount Example',
  }

  state = {
    tick: 1,
  }

  componentWillMount() {
    console.log('componentWillMount called...');
  }

  componentDidMount() {
    console.log('componentDidMount called...');
    setTimeout(() => {
      this.setState({
        tick: this.state.tick + 1,
      });
    }, 2000);
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <ComponentDivider>
            <ExampleTitle title="componentDidMount example" />
            <Text>{this.state.tick}</Text>
          </ComponentDivider>
        </ScrollView>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
  },
});

export default ComponentDidMountExample;


