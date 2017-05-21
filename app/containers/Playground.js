import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

/*class Person extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
};*/


const Person = ({ person }) => (
  <View>
    <Text>{person.name}</Text>
  </View>
);

Person.propTypes = {
  person: PropTypes.object.isRequired,
};

class App extends React.Component {
  static navigationOptions = {
    title: 'Playground',
  }
  render() {
    return <Person person={{ name: 'Bob' }} />;
  }
}

export default App;
