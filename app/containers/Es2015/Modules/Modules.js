import React from 'react';
import { ScrollView, Text } from 'react-native';
import ExampleTitle from '../../../components/ExampleTitle';

// importing defaults does not require curly braces
import name from './ExportDefault';

// importing from file that does not have default export
import { IS_LOADING, IS_LOADED } from './Export';

// importing both from a single file
import info, { logInfo } from './ExportBoth';

// import as alias
import { CustomViewComponent as View } from './CustomViewComponent';

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
        <View>
          <Text>hello from custom view</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Modules;
