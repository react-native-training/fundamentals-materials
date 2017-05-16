import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

class ColorsExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Colors',
  });

  render() {
    return (
      <ScrollView>
        <Text style={[styles.text, styles.rgb]}>rgb(255, 153, 0)</Text>
        <Text style={[styles.text, styles.rgba]}>rgba(255, 153, 0, .5)</Text>

        <Text>Transparent</Text>
        <View style={{ backgroundColor: 'orange' }}>
          <Text style={[styles.text, styles.transparent]}>transparent</Text>
        </View>

        <Text style={[styles.text, styles.red]}>red</Text>
        <Text style={[styles.text, styles.aqua]}>aqua</Text>
        <Text style={[styles.text, styles.lightcoral]}>lightcoral</Text>
        <Text style={[styles.text, styles.lime]}>lime</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rgb: {
    color: 'rgb(255,153, 0)',
  },
  rgba: {
    color: 'rgba(255,153, 0, .5)',
  },
  transparent: {
    color: 'transparent',
  },
  red: {
    color: 'red',
  },
  aqua: {
    color: 'aqua',
  },
  lightcoral: {
    color: 'lightcoral',
  },
  lime: {
    color: 'lime',
  },
});

export default ColorsExample;
