import React from 'react';
import { Button, Text, ScrollView } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

class ShouldComponentUpdateExample extends React.Component {
  state = {
    age: 36,
  }

  componentWillReceiveProps(nextProps) {
    console.log('this.props:', this.props);
    console.log('nexProps:', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // State:
    console.log('nextState: ', nextState);
    console.log('state: ', this.state);

    // Props:
    console.log('nextProps: ', nextProps);
    console.log('props: ', this.props);

    // return true (default behaviour)
    return false;
  }

  updateAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  }

  render() {
    return (
      <ComponentDivider>
        <ExampleTitle title="shouldComponentUpdate Example" />
        <Text>{this.props.name}</Text>
        <Text>{this.state.age}</Text>
        <Button onPress={this.updateAge} title="Increment Age" />
      </ComponentDivider>
    );
  }
}


export default class componentPassingProps extends React.Component {
  static navigationOptions = {
    title: 'shouldComponentUpdate Example',
  }

  state = {
    name: 'Nader',
  }

  updateName = () => {
    this.setState({
      name: 'Amanda',
    });
  }

  render() {
    return (
      <ScrollView>
        <ShouldComponentUpdateExample
          name={this.state.name}
        />
        <Button
          title="Update State"
          onPress={this.updateName}
        />
      </ScrollView>
    );
  }
}
