import React from 'react';
import { View } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class TemplateLiterals extends React.Component {
  static navigationOptions = () => ({
    title: 'Template Literals',
  });

  render() {

    let name = 'Nader';

    let age = '36';

    let str = 'Hello, my name is ' + name + 'and my age is ' + age;

    let str2 = `Hello, my name is ${name} and my age is ${age}`;

    console.log('str: ', str);
    console.log('str2: ', str2);

    // Also can interpolate expressions

    const isMarried = true;

    const greeting = `Hello, my name is ${name} and I am ${isMarried ? 'married' : 'single'}`;

    console.log('greeting: ', greeting);

    return (
      <View>
        <ExampleTitle
          title="Es5"
        />
        <SyntaxHighlighter>
          {examples.es5}
        </SyntaxHighlighter>
        <ExampleTitle
          title="Es5"
        />
        <SyntaxHighlighter>
          {examples.es2015}
        </SyntaxHighlighter>
      </View>
    );
  }
}

const greeting = '`Hello, my name is ${name} and my age is ${age}`';

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
