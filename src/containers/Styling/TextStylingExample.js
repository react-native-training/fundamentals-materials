import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

class TextStyling extends React.Component {
  static navigationOptions = () => ({
    title: 'Text Styling Example',
  });

  render() {
    return (
      <ScrollView>
        <Text style={[styles.margin, styles.color]}>color example</Text>
        <Text style={[styles.margin, styles.fontFamily]}>fontFamily example</Text>
        <Text style={[styles.margin, styles.fontSize]}>fontSize example</Text>
        <Text style={[styles.margin, styles.fontWeight]}>fontWeight example</Text>
        <Text style={[styles.margin, styles.textAlign]}>textAlign example</Text>
        <Text style={[styles.margin, styles.textDecorationLine]}>textDecorationLine example</Text>
        <Text style={[styles.margin, styles.textShadow]}>textShadow example</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    margin: 15,
  },
  color: {
    color: 'red',
  },
  fontFamily: {
    fontFamily: 'Avenir-Light',
  },
  fontSize: {
    fontSize: 22,
  },
  fontWeight: {
    fontWeight: '100',
  },
  textAlign: {
    textAlign: 'center',
  },
  textDecorationLine: {
    textDecorationLine: 'line-through',
  },
  textShadow: {
    fontSize: 30,
    textShadowColor: 'red',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 1,
  },
});

export default TextStyling;
