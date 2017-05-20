import React from 'react';
import { Platform, TouchableHighlight, TouchableNativeFeedback, View, Text } from 'react-native';

class App extends React.Component {
  static navigationOptions = {
    title: 'Playground',
  }

  state = {
    sport: 'basketball'
  }

  render() {
    let data = [{ name: 'chris', sport: 'baseball' }, { name: 'James', sport: 'basketball' }]
    data = data.filter(d => d.sport === this.state.sport)
    return (
      <View>
        {
          data.map(d => <Text>{d.name}</Text>)
        }
      </View>
    );
  }
}

export default App;
