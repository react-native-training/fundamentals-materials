import React from 'react';
import { Text, View, Switch } from 'react-native';

class SwitchExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Switch',
  });

  state = {
    isToggled: false,
  }

  updateSwitchValue = (value) => {
    this.setState({ isToggled: value });
  }

  render() {
    return (
      <View style={{ margin: 30, alignItems: 'center' }}>
        <Switch
          tintColor='#cccccc'
          onValueChange={this.updateSwitchValue}
          value={this.state.isToggled}
        />
        <Text>
          {
            this.state.isToggled ? (
              'Toggled!'
            ) : 'Not Toggled!'
          }
        </Text>
      </View>
    );
  }
}

export default SwitchExample;
