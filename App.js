/**
 * @flow
 */

import Expo from 'expo';
import React from 'react';
import { Platform, View } from 'react-native';

import Routes from './src/routes';

console.ignoredYellowBox = ['Remote debugger'];
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        { Platform.OS === 'android' &&
          <View
            style={{
              height: Expo.Constants.statusBarHeight,
              backgroundColor: '#fff'
            }}
          /> }

        <Routes onNavigationStateChange={null} />
      </View>
    );
  }
}
