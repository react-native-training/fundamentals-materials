import React from 'react';
import { ScrollView, Text } from 'react-native';
import ExampleTitle from '../../../components/ExampleTitle';
import SyntaxHighlighter from '../../../components/SyntaxHighlighter';

// importing defaults does not require curly braces
import name from './ExportDefault';

// importing from file that does not have default export
import { IS_LOADING, IS_LOADED } from './Export';

// importing both from a single file
import info, { logInfo } from './ExportBoth';

// import as alias
import { CustomViewComponent as View } from './CustomViewComponent';

let example = {};

class Modules extends React.Component {
  static navigationOptions = () => ({
    title: 'Modules',
  });

  render() {
    console.log('ISLOADING: ', IS_LOADING);

    console.log('ISLOADED: ', IS_LOADED);

    console.log('Current city:', info.currentCity);

    logInfo();

    return (
      <ScrollView>
        <ExampleTitle
          title={`Name: ${name}`}
        />
        <ExampleTitle
          title="Default"
        />
        <SyntaxHighlighter>
          {example.default}
        </SyntaxHighlighter>

        <ExampleTitle
          title="Named"
        />
        <SyntaxHighlighter>
          {example.named}
        </SyntaxHighlighter>

        <ExampleTitle
          title="Multiple Types"
        />
        <SyntaxHighlighter>
          {example.multipleTypes}
        </SyntaxHighlighter>

        <ExampleTitle
          title="Alias"
        />
        <SyntaxHighlighter>
          {example.alias}
        </SyntaxHighlighter>
      </ScrollView>
    );
  }
}

example = {
  default: `
  
// in ExportDefault.js we are exporting name
const name = 'Nader';
export default name;

// then, in another file ->
// importing defaults does not require curly
// braces.
import name from './ExportDefault';

// this also works, as "name" can be any name
// you would like
import title from './ExportDefault';

  `,

  named: `
  
// in Export.js, we are exporting two variables
export const IS_LOADING = 'IS_LOADIING';
export const IS_LOADED = 'IS_LOADED';

// then in another file ->
// importing from file that has named exports
import { IS_LOADING, IS_LOADED } from './Export';

// unlike importing default exports, names of
// named exports must correspond exactly to the
// name that is exported

  `,

  multipleTypes: `
// in CustomViewComponent.js
const loginInfo = {};
const info = '';

export { logInfo, info as default };
  
// then in another file ->
// importing both from a single file
import info, { logInfo } from './ExportBoth';
  
  `,

  alias: `

// in CustomViewComponent.js

const CustomViewComponent = {...};
export CustomViewComponent;

// import as alias
import {
  CustomViewComponent as View
} from './CustomViewComponent';

// use in app as View

<View>
  // some stuff here
</View>

  `,
}

export default Modules;
