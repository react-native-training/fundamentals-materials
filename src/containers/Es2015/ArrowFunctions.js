import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

const examples = {};

const regularFunction = function() {
  console.log('this is a regular function!');
};

// Also referenced as lambda function
const arrowFunction1 = () => {
  console.log('this is an arrow function!');
};

// "=>" is implicit return 
const addMe = (a, b) => a + b;

const squared = a => a * 2;

const explicitReturn = (a, b, c) => {
  if (b < 10) b = 20;
  return a + b + c;
};

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = data.filter(num => num % 2 === 0);

const someObject = {
  name: 'Nader',
  age: 22,
  getName: function()  {
    setTimeout(() => {
      console.log('NAME:', this.name);
    })
  },
}


class ArrowFunctions extends React.Component {
  static navigationOptions = () => ({
    title: 'Arrow Functions',
  });

  callRender = () => {
    this.forceUpdate();
  }
  
  render() {
    // regularFunction();

    // arrowFunction1();

    // explicitReturn();

    // addMe(1, 2);

    // squared(10);

    // someObject.getName();
    // console.log('evens:', evens);
    return (
      <ScrollView>
        <ExampleTitle
          title="ES5"
        />
        <SyntaxHighlighter>
          {examples.regularFunctionToString}
        </SyntaxHighlighter>

        <ExampleTitle
          title="ES2015"
        />
        <SyntaxHighlighter>
          {examples.arrowFunctionToString}
        </SyntaxHighlighter>

        <ExampleTitle
          title="Implicit Return"
        />
        <SyntaxHighlighter>
          {examples.implicitReturnToString}
        </SyntaxHighlighter>

        <ExampleTitle
          title="Lexical scope"
        />
        <SyntaxHighlighter>
          {examples.thisScopingToString}
        </SyntaxHighlighter>
      </ScrollView>
    );
  }
}

examples = {
  regularFunctionToString: `const regularFunction = function() {
    console.log('this is a regular function!');
  };`,

  arrowFunctionToString: `const arrowFunction = () => {
    console.log('this is an arrow function!');
  };`,

  implicitReturnToString: `

    const implicitReturn = function(age) {
      return age + 12;
    };

    // is the same as

    const implicitReturn = age => age + 12;

    // or

    const implicitReturn = (age) => age + 12;

    // is the same as

    const implicitReturn = (age) => {
      return age + 12;
    };

    // or

    const implicitReturn = age => {
      return age + 12;
    };

  `,

  thisScopingToString: `
    const someObject = {
      name: 'Nader',
      age: 22,
      getName: function()  {
        setTimeout(() => {
          console.log('NAME:', this.name);
        })
      },
    }

    // this works
    someObject.getName();


    const someObject = {
      name: 'Nader',
      age: 22,
      getName: function()  {
        setTimeout(function() {
          console.log('NAME:', this.name);
        })
      },
    }

    // this does not work, name is
    // undefined (this now referring to getName)
    someObject.getName();

  `,
};

export default ArrowFunctions;
