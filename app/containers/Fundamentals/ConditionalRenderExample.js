import React from 'react';

import {
  ScrollView,
  Text,
} from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';

const Example1 = (props) => {
  return (
    <ComponentDivider>
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
    </ComponentDivider>
  );
};

class ConditionalRenderExample extends React.Component {
  static navigationOptions = {
    title: 'Props',
  }

  render() {
    return (
      <ScrollView>
        <ComponentDivider>
          <Text>Hello from PropsExample</Text>
        </ComponentDivider>
        <Example1 name={person.name} age={person.age} />
        <Example2 {...person} />
        <Example3 />
        <Example3 name="Amanda" />
        <Example4 {...person} />
      </ScrollView>
    );
  }
}

export default ConditionalRenderExample;
