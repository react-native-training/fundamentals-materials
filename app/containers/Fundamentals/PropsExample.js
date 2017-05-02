import React from 'react';

import {
  View,
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


const Child1 = (props) => {
  return (
    <ComponentDivider>
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
    </ComponentDivider>
  );
};
// Usage in example: <Child1 name={person.name} age={person.age} />


const Child2 = ({ name, age, info }) => {
  return (
    <ComponentDivider>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Occupation: {info.occupation}</Text>
    </ComponentDivider>
  );
};
// Usage in example: <Child2 {...person} />


const Child3 = ({ name = 'chris' }) => {
  return (
    <ComponentDivider>
      <Text>
        {name}
      </Text>
    </ComponentDivider>
  );
};
// Usages in Example:
// <Child3 />
// <Child3 name="Amanda" />


class Child4 extends React.Component {
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
// Usage in example: <Child4 {...person} />

class PropsExample extends React.Component {
  render() {
    return (
      <View>
        <ComponentDivider>
          <Text>Hello from PropsExample</Text>
        </ComponentDivider>
        <Child1 name={person.name} age={person.age} />
        <Child2 {...person} />
        <Child3 />
        <Child3 name="Amanda" />
        <Child4 {...person} />
      </View>
    );
  }
}

export default PropsExample;
