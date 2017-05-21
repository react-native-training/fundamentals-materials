import React from 'react';
import { View, Text } from 'react-native';

class App extends React.Component {
  state = {
    tick: 0,
  }

  tick = () => {
    this.setState({
      tick: this.state.tick + 1,
    });
  }

  render() {
    return (
      <Ticker onPress={this.tick} tick={this.state.tick} />
    );
  }
};

class Ticker extends React.Component {
  state = {
    greeting: `Number: ${this.props.tick}`,
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps:', nextProps)
    if (this.props.age !== nextProps.tick) {
      this.setState({ greeting: `Number: ${this.props.tick}` });
    }
  }
  render() {
    return <Text onPress={this.props.onPress}>{this.state.greeting}</Text>;
  }
}

export default App;
