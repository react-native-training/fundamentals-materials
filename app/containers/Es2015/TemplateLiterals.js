import React from 'react';
import { View } from 'react-native';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class TemplateLiterals extends React.Component {
  static navigationOptions = () => ({
    title: 'Template Literals',
  });

  render() {
    return (
      <View>
      </View>
    );
  }
}

const greeting = "Hello, my name is ${name} and my age is ${age}";

examples = {
  es5: `
  
    let name = 'Nader';

    let age = '36';

    let str = 'Hello, my name is ' + name + 'and my age is ' + age;

  `,

  es2015: `
  
    let name = 'Nader';

    let age = '36';

    let str = ${greeting};    
  
  `,
}

export default TemplateLiterals;
