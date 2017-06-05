import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

class TouchableNativeFeedbackExample extends React.Component {
  static navigationOptions = () => ({
    title: 'TouchableNativeFeedback',
  });

  render() {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => console.log('Button Pressed!')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Button</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    height: 60,
    backgroundColor: '#FF9900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TouchableNativeFeedbackExample;
