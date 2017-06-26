import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class ObjectSpread extends React.Component {
  static navigationOptions = () => ({
    title: 'Object Spread',
  });

  render() {
    const obj = {
      name: 'Jim',
      age: 22,
      kids: 2,
      profession: 'programmer',
      info: {
        hairColor: 'brown',
        height: "6'1",
      },
    };

    return (
      <ScrollView>
        <ExampleTitle
          title="Object Spread"
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

  const person = { name: 'Jim', age: 22 };

  const Jim = Object.assign({}, person, { occupation: 'Programmer' } )

  console.log('Jim:', Jim);


  `,

  es2015: `

  const person = { name: 'Jim', age: 22 };

  const Jim = { ...person, occupation: 'Programmer' };

  console.log('Jim:', Jim);


  `,
};

export default ObjectSpread;
