import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

class Example1 extends React.Component {
  state = {
    name: 'Nader',
  };

  updateName = () => {
    this.state.name = 'Amanda';
    this.forceUpdate();
  }

  render() {
    return (
      <View>
        <ComponentDivider>
          <ExampleTitle title="Force update example" />
          <Text>{this.state.name}</Text>
          <Text>{this.state.age}</Text>
          <Button
            title="Update Name"
            onPress={this.updateName}
          />
        </ComponentDivider>
      </View>
    );
  }
}

class ForceUpdateExample extends React.Component {
  static navigationOptions = {
    title: 'ForceUpdate',
  }
  render() {
    return (
      <ScrollView>
        <Example1 />
      </ScrollView>
    );
  }
}

export default ForceUpdateExample;
