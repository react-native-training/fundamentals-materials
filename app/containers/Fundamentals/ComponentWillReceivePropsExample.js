import React from 'react';
import { Button, Text, ScrollView } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

class ComponentWillReceivePropsExample extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log('this.props:', this.props);
    console.log('nexProps:', nextProps);
  }

  render() {
    return (
      <ComponentDivider>
        <ExampleTitle title="componentWillReceiveProps Example" />
        <Text>{this.props.name}</Text>
      </ComponentDivider>
    );
  }
}


export default class componentPassingProps extends React.Component {
  static navigationOptions = {
    title: 'componentWillReceivePropsExample Example',
  }

  state = {
    name: 'Nader',
  }

  updateName = () => {
    // if (this.state.name === 'Amanda') return;
    this.setState({
      name: 'Amanda',
    });
  }

  render() {
    return (
      <ScrollView>
        <ComponentWillReceivePropsExample
          name={this.state.name}
        />
        <Button
          title="Update State"
          onPress={this.updateName}
        />
      </ScrollView>
    )
  } 
}