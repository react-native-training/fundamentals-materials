import React from 'react';
import { Text, View, Picker } from 'react-native';

class PickerExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Picker Example',
  });

  state = {
    city: 'Dallas',
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.city}
          onValueChange={value => this.setState({ city: value })}
        >
          <Picker.Item label="Seattle" value="Seattle" />
          <Picker.Item label="San Francisco" value="San Francisco" />
          <Picker.Item label="Dallas" value="Dallas" />
          <Picker.Item label="Orlando" value="Orlando" />
        </Picker>

        <Text>{this.state.city}</Text>
      </View>
    );
  }
}

export default PickerExample;
