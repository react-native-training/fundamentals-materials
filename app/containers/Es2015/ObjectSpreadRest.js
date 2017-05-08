import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

let examples = {};

class ObjectSpreadRest extends React.Component {
  static navigationOptions = () => ({
    title: 'Object Spread and Rest',
  });

  render() {
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

  `,

  es2015: `

  
  `,
};

export default ObjectSpreadRest;
