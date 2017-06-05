import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class ObjectShorthand extends React.Component {
  static navigationOptions = () => ({
    title: 'Object Shorthand',
  });

  render() {
    const name = 'nader';
    const age = 36;

    const info = {
      name,
      age,
    };

    console.log('info: ', info);

    return (
      <ScrollView>
        <ExampleTitle
          title="ES5"
        />
        <SyntaxHighlighter>
          {examples.es5}
        </SyntaxHighlighter>
        <ExampleTitle
          title="ES2015"
        />
        <SyntaxHighlighter>
          {examples.es2015}
        </SyntaxHighlighter>
      </ScrollView>
    );
  }
}

examples = {
  es5: `
  
const name = 'nader';
const age = 36;

const info = {
  name: name,
  age: age,
}

  `,
  es2015: `
  
const name = 'nader';
const age = 36;

const info = {
  name,
  age,
}
  
  `,
};

export default ObjectShorthand;
