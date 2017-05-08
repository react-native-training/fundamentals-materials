import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class ArraySpreadRest extends React.Component {
  static navigationOptions = () => ({
    title: 'Array Spread and Rest',
  });

  render() {
    let fruits = ['banana'];  
    const moreFruits = ['apple', 'orange'];  
    // fruits = [...fruits, ...moreFruits];

    fruits = fruits.concat(moreFruits);

    console.log(fruits);

    const odds = [1, 3, 5, 7, 9];

    const evens = [2, 4, 6, 8, 10];

    const [a, b, ...rest] = odds;

    console.log('a:', a); // 1
    console.log('b:', b); // 3

    console.log('rest:', rest); // [5, 7, 9]

    const [c, ...rest2] = evens;

    console.log('c: ', c); // 2

    console.log('rest2: ', rest2); // [4, 6, 8, 10];

    return (
      <ScrollView>
        <ExampleTitle
          title="The rest parameter syntax allows us to represent an indefinite number of arguments as an array."
        />
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

    let fruits = ['banana'];  
    const moreFruits = ['apple', 'orange'];  

    Array.prototype.push.apply(fruits, moreFruits);
    
    // or

    fruits = fruits.concat(moreFruits);

    console.log(fruits);

  `,

  es2015: `

    var fruits = ['banana'];  
    var moreFruits = ['apple', 'orange'];  
    fruits = [...fruits, ...moreFruits];
    console.log(fruits);

    // also

    const odds = [1, 3, 5, 7, 9];

    const evens = [2, 4, 6, 8, 10];

    const [a, b, ...rest] = odds;

    console.log('a:', a); // 1
    console.log('b:', b); // 3

    console.log('rest:', rest); // [5, 7, 9]

    const [c, ...rest2] = evens;

    console.log('c: ', c); // 2

    console.log('rest2: ', rest2); // [4, 6, 8, 10];
  
  `,
};

export default ArraySpreadRest;
