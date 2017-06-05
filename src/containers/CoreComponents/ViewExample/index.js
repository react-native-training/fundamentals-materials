import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ViewExample extends React.Component {
  static navigationOptions = () => ({
    title: 'View',
  });

  state = {
    width: 0,
    height: 0,
  }

  measureLayout = (evt) => {
    const { width, height } = evt.nativeEvent.layout;
    this.setState({
      width: width,
      height: height,
    });

    // Or using Object Shorthand:
    // this.setState({
    //   width,
    //   height,
    // });
  }

  render() {
    return (
      <View>
        <View style={styles.viewContainer}>
          <Text>Hello from inside View!</Text>
        </View>

        <View style={styles.viewContainer}>
          <View style={styles.viewContainer}>
            <Text>Hello from inside Child View!</Text>
          </View>
        </View>

        <View style={styles.measurable} onLayout={this.measureLayout}>
          <Text>This view is being measured:</Text>
          <Text>{this.state.height}</Text>
          <Text>{this.state.width}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    margin: 20,
    borderColor: '#000',
    borderWidth: 1,
  },
  measurable: {
    width: 200,
    height: 200,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 40,
  },
});

export default ViewExample;
