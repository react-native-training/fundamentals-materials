import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class ObjectDestructuring extends React.Component {
  static navigationOptions = () => ({
    title: 'Object Destructuring',
  });

  render() {
    const obj = {
      name: 'nader',
      age: 36,
      kids: 2,
      profession: 'programmer',
      info: {
        hairColor: 'brown',
        height: "6'1",
      },
    };

    const { name, age, info } = obj;

    console.log('name:', name);
    console.log('age:', age);

    console.log('info:', info);

    const { profession = 'swimmer', currentCity = 'Seattle' } = obj;

    console.log('profession:', profession);
    console.log('currentCity:', currentCity);

    const getInfo = ({ name, age }) => {
      return name + ' ' + age + ' ';
    };

    console.log('getInfo(obj): ', getInfo(obj)); // nader 36

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

  var obj = {
    name: 'nader',
    age: 36,
    kids: 2,
    profession: 'programmer',
    info: {
      hairColor: 'brown',
      height: "6'1",
    },
  }

  const name = obj.name;
  const age = obj.age;
  
  const info = obj.info;

  console.log('name:', name); // nader
  console.log('age:', age);  // 36

  console.log('info:', info);
  /* {
    hairColor: 'brown',
    height: "6'1",
  } */

  `,

  es2015: `

  const obj = {
    name: 'nader',
    age: 36,
    kids: 2,
    profession: 'programmer',
    info: {
      hairColor: 'brown',
      height: "6'1",
    },
  };

  const { name, age, info } = obj;

  console.log('name:', name); // nader
  console.log('age:', age); // 36
  
  console.log('info:', info);
  /* {
    hairColor: 'brown',
    height: 6'1",
  } */

  const { profession = 'swimmer', currentCity = 'Seattle' } = obj;

  console.log('profession:', profession); // programmer
  console.log('currentCity:', currentCity); // Seattle

  const getInfo = ({ name, age }) => {
    return name + ' ' + age;
  }

  getInfo(obj, obj2);  // nader 36

  `,
};

export default ObjectDestructuring;
