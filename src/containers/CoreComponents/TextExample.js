import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

class TextComponentExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Text',
  });

  onPress = () => {
    console.log('button pressed!');
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.text}>
          This is a basic Text component
        </Text>

        <Text
          style={styles.text2}
          onPress={this.onPress}
        >
          This is a basic Text component with an onpress handler
        </Text>

        <Text
          style={styles.text}
        >
          This is an example of
            <Text style={styles.textNested}> nested Text components</Text>
        </Text>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 15,
    textAlign: 'center',
  },
  text2: {
    margin: 15,
    color: 'red',
    textAlign: 'center',
  },
  textNested: {
    fontSize: 18,
    color: 'green',
  },
});

export default TextComponentExample;
