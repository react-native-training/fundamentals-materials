import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

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
    setTimeout(() => {
      this.setState({
        tick: this.state.tick + 1,
      });
    }, 2000);
  }

  render() {
    return (
      <View>
        <ScrollView>
          <ComponentDivider>
            <ExampleTitle title="componentDidMount example" />
            <Text>{this.state.tick}</Text>
          </ComponentDivider>
        </ScrollView>
      </View>
    );
  }
}

export default ComponentDidMountExample;


