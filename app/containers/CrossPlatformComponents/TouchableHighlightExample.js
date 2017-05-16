import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

class TouchableHighlightExample extends React.Component {
  static navigationOptions = () => ({
    title: 'TouchableHighlight',
  });

  onPress = () => {
    console.log('onPress called!');
  }

  render() {
    return (
      <View>
        <ExampleTitle
          title="TouchableHighlight"
        />
        <TouchableHighlight
          activeOpacity={0.9}
          style={styles.button}
          onPress={this.onPress}
          onHideUnderlay={() => {
            console.log('onHideUnderlay called')
          }}
          underlayColor='#FF9900'
        >
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 55,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9900',
  },
  buttonText: {
    color: 'white',
  },
});

export default TouchableHighlightExample;
