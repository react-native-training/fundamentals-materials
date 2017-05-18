import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class LetConst extends React.Component {
  static navigationOptions = () => ({
    title: 'New variable types',
  });

  render() {

    let a = 10;

    a = 20; // a === 20

    a = {};

    console.log('a: ', a); // {}

    // const b = 20;

    // function varTest() {
    //   var x = 1;
    //   if (true) {
    //     var x = 2;  // same variable!
    //     console.log(x);  // 2
    //   }
    //   console.log(x);  // 2
    // }

    // function letTest() {
    //   let x = 1;
    //   if (true) {
    //     let x = 2;  // different variable
    //     console.log(x);  // 2
    //   }
    //   console.log(x);  // 1
    // }

    // varTest();

    // letTest();

    // b = 20; // error, a is read only;

    // const a = 20;

    // a = 20; // error, a is read only;

    const b = [1, 2, 3, 4, 5, 6];

    b.push(7);

    console.log('b:', b);

    const d = {
      name: 'nader',
      age: 36,
    };

    d.age = 37;

    console.log('d:', d);

    return (
      <ScrollView>
        <ExampleTitle
          title="Let"
        />
        <SyntaxHighlighter>
          {examples.let}
        </SyntaxHighlighter>

        <ExampleTitle
          title="Const"
        />
        <SyntaxHighlighter>
          {examples.const}
        </SyntaxHighlighter>
      </ScrollView>
    );
  }
}

examples = {
  let: `
  
    // Variables declared using the let keyword
    // are block-scoped, which means that they
    // are available only in the block in which
    // they were declared.

    let a = 10;

    a = 20; // a === 20

    function varTest() {
      var x = 1;
      if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
      }
      console.log(x);  // 2
    }

    function letTest() {
      let x = 1;
      if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
      }
      console.log(x);  // 1
    }

  `,
  const: `
  
    const a = 20;

    a = 20; // error, a is read only;

    const b = [1, 2, 3, 4, 5, 6];

    b.push(7);

    console.log('b:', b);

    const d = {
      name: 'nader',
      age: 36,
    };

    d.age = 37;

  `,
}

export default LetConst;
