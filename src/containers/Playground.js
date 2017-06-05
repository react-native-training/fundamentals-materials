import React from 'react';
import { TouchableHighlight, TouchableWithoutFeedback, StyleSheet, View, Text, Platform } from 'react-native';

const redColor = { color: 'red' }

class App extends React.Component {
  render() {
    

    return (
      <Text style={redColor}>Hello World</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 30,
        color: 'red',
      },
      fontSize: 12,
    }),
  },
});

export default App;
