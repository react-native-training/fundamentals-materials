import React from 'react';
import { View, Slider, Text, StyleSheet } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

class SliderExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Slider',
  });

  state = {
    value: 50,
  }

  onValueChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <View>
        <ExampleTitle
          title="Slider"
        />
        <Slider
          value={this.state.value}
          maximumValue={100}
          minimumValue={0}
          onValueChange={this.onValueChange}
          step={1}
        />
        <Text style={styles.text}>{this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 20,
  },
});

export default SliderExample;
