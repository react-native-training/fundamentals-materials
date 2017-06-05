import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

export default class ComponentWillMountExample extends React.Component {
  static navigationOptions = {
    title: 'componentWillMount Example',
  }

  componentWillMount() {
    this.setState({ startDateTime: new Date(Date.now())});
  }

  render() {
    return (
      <View>
        <ScrollView>
          <ComponentDivider>
            <ExampleTitle title="componentWillMount example" />
            <Text>{this.state.startDateTime.toLocaleString()}</Text>
          </ComponentDivider>
        </ScrollView>
      </View>
    );
  }
}
