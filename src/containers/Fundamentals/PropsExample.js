import React from 'react';

import {
  ScrollView,
  Text,
} from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';

const person = {
  name: 'nader',
  age: 23,
  info: {
    occupation: 'Mickey Mouse at Disney World',
  },
};


const Example1 = (props) => {
  return (
    <ComponentDivider>
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
    </ComponentDivider>
  );
};
// Usage in example: <Example1 name={person.name} age={person.age} />


const Example2 = ({ name, age, info }) => {
  return (
    <ComponentDivider>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Occupation: {info.occupation}</Text>
    </ComponentDivider>
  );
};
// Usage in example: <Example2 {...person} />


const Example3 = ({ name = 'chris' }) => {
  return (
    <ComponentDivider>
      <Text>
        {name}
      </Text>
    </ComponentDivider>
  );
};
// Usages in Example:
// <Example3 />
// <Example3 name="Amanda" />


class Example4 extends React.Component {
  render() {
    const { name, age, info } = this.props;
    return (
      <ComponentDivider>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
        <Text>Occupation: {info.occupation}</Text>
      </ComponentDivider>
    );
  }
}
// Usage in example: <Example4 {...person} />

class PropsExample extends React.Component {
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

export default PropsExample;
