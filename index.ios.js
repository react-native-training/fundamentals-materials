/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';

import App from './app/App';

console.ignoredYellowBox = ['Remote debugger'];
console.disableYellowBox = true;

AppRegistry.registerComponent('materials', () => App);
