import React from 'react';
import { Text, Button, ScrollView } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';

export default class ComponentDidUpdateExample extends React.Component {
  static navigationOptions = {
    title: 'componentDidUpdate Example',
  }

  state = {
    age: 18,
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  increment = () => {
    this.setState({
      age: this.state.age + 1,
    });
  }

  render() {
    return (
      <ScrollView
        onLayout={this.logEvent}
      >
        <ComponentDivider>
          <Button
            title="increment"
            onPress={this.increment}
          />
          <Text>{this.state.age}</Text>
        </ComponentDivider>
      </ScrollView>
    );
  }
}
