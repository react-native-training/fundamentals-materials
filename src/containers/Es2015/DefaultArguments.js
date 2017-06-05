import React from 'react';
import { ScrollView } from 'react-native';

import ExampleTitle from '../../components/ExampleTitle';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

const examples = {};

class DefaultArguments extends React.Component {
  static navigationOptions = () => ({
    title: 'Default Parameters',
  });

  render() {
    function multiply(a, b) {
      b = (typeof b !== 'undefined') ? b : 1;
      return a * b;
    }

    console.log('multiply(1): ', multiply(1));
    console.log('multiply(2): ', multiply(2));
    console.log('multiply(2, 2): ', multiply(2, 2));

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
  
    function multiply(a, b) {
      b = (typeof b !== 'undefined') ?  b : 1;
      return a * b;
    }

    multiply(1); // => 1

    multiply(2); // => 2

    mutiply(2, 2); // => 4

  `,

  es2015: `
  
    function multiply(a, b = 1) {
      return a * b;
    }

    // or

    const multiply = (a, b = 1) => a * b;

    multiply(1); // => 1;

    multiply(2); // => 2;

    mutiply(2, 2); // => 4;

  `,

  args: `
  
    const setBgColor(element, color = 'red') {
      element.style.backgroundColor = color;
    }

    setBackgroundColor(someDiv);            // color set to 'red'
    setBackgroundColor(someDiv, undefined); // color set to 'red'
    setBackgroundColor(someDiv, 'blue');    // color set to 'blue'

  `,

  passingFunction: `
  
    const myFunc = () => 57;

    const addAge = (age = myFunc()) => age + 10;
  
  `,


};

export default DefaultArguments;
