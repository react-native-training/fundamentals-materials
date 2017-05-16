import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

export default class ComponentWillMountExample extends React.Component {
  static navigationOptions = {
    title: 'componentWillMount Example',
  }

  state = {
    tick: 1,
  }

  componentWillMount() {
    this.timeOut = setTimeout(() => {
      this.setState({
        tick: this.state.tick + 1,
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    return (
      <View>
        <ScrollView>
          <ComponentDivider>
            <ExampleTitle title="componentWillMount example" />
            <Text>{this.state.tick}</Text>
          </ComponentDivider>
        </ScrollView>
      </View>
    );
  }
}
