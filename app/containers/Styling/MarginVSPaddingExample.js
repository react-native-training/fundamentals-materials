import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

class MarginVSPadding extends React.Component {
  static navigationOptions = () => ({
    title: 'Margin vs Padding',
  });

  render() {
    return (
      <ScrollView>
        <ExampleTitle
          title="Margin"
        />
        <View style={styles.margin}>
          <Text>Margin</Text>
        </View>
        <ExampleTitle
          title="Padding"
        />
        <View style={styles.padding}>
          <Text>Padding</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    backgroundColor: 'red',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  padding: {
    backgroundColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default MarginVSPadding;
