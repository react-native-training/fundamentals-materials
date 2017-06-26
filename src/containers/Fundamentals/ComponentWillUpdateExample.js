import React from 'react';
import { Button, Text, ScrollView } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

class ComponentWillUpdateExample extends React.Component {
  state = {
    age: 18,
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('nextProps:', nextProps);
    // console.log('props', this.props);

    // console.log('nextState:', nextState);
    // console.log('state:', this.state);

    if (this.state.age !== nextState.age) return true;
    if (this.props.name !== nextProps.name) return true;
    return false;
  }

  componentWillUpdate(nextProps, nextState) {
    // ⭐️ Similar to componentWillMount

    console.log('nextState:', nextState);
    console.log('state:', this.state);

    let mode;
    if (nextState.age > 70) {
      mode = 'old';
    } else if (nextState.age < 18) {
      mode = 'young';
    } else {
      mode = 'middle';
    }
    this.props.updateMode(mode);
  }

  updateAge = () => {
    this.setState({
      age: this.state.age + 10,
    });
  }

  render() {
    return (
      <ComponentDivider>
        <ExampleTitle title="componentWillUpdate Example" />
        <Text>{this.props.name}</Text>
        <Text>{this.state.age}</Text>
        <Button onPress={this.updateAge} title="Increment Age" />
      </ComponentDivider>
    );
  }
}


export default class componentPassingProps extends React.Component {
  static navigationOptions = {
    title: 'componentWillUpdateExample',
  }

  state = {
    name: 'Nader',
    mode: 'young',
  }

  updateName = () => {
    this.setState({
      name: 'Amanda',
    });
  }

  updateMode = (mode) => {
    this.setState({ mode });
  }

  render() {
    let backgroundColor = 'pink';
    if (this.state.mode === 'old') backgroundColor = 'yellow';
    if (this.state.mode === 'middle') backgroundColor = 'orange';
    return (
      <ScrollView style={{ backgroundColor }}>
        <ComponentWillUpdateExample
          updateMode={this.updateMode}
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
