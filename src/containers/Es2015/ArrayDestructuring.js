import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class ArrayDestructuring extends React.Component {
  static navigationOptions = () => ({
    title: 'Array Destructuring',
  });

  render() {
    const arr = [10, 20, 30, 40, 50];

    const [a, b] = arr;
    console.log(a); // 10
    console.log(b); // 20

    const [c = 10, d = 20] = [5];

    console.log('c:', c);
    console.log('d:', d);

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

  var arr = [10, 20, 30, 40, 50];

  var a = arr[0];
  var b = arr[1];

  console.log(a); // 10
  console.log(b); // 20

  `,

  es2015: `

  var arr = [10, 20, 30, 40, 50];

  const [a, b] = arr;

  console.log(a); // 10
  console.log(b); // 20

  // Also can take default values

  const [c = 10, d = 20] = [5] // c === 5; d === 20;
  
  `,
};

export default ArrayDestructuring;
