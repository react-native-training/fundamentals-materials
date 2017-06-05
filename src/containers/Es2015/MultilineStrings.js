import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class MultilineStrings extends React.Component {
  static navigationOptions = () => ({
    title: 'Multi Line Strings',
  });

  render() {
    const multiline1 = '\n Hello,\n my name is Nader\n and I am\n 36';

    console.log('multiline1:', multiline1);

    const multiline2 = `
 Hello, 
 my name is Nader
 and I am
 36
    `;
    console.log('multiline2: ', multiline2);

    return (
      <ScrollView>
        <ExampleTitle
          title="ES5"
        />
      </ScrollView>
    );
  }
}

export default MultilineStrings;
