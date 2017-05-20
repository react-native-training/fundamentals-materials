import React from 'react';
import { View, Text } from 'react-native';

class App extends React.Component {
  state = { loggedIn: false }

  login = () => {
    this.setState({ loggedIn: true })
  }

  render() {
    const { loggedIn } = this.state;

    return (
      <View>
        { loggedIn && <Text>Logged In</Text> }
        { !loggedIn && <Text onPress={this.login}>Please Log In</Text> }
      </View>
    )
  }
}

export default App;
