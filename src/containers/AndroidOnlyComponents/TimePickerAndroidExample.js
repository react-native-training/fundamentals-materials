import React from 'react';
import { StyleSheet, Text, Button, View, TimePickerAndroid } from 'react-native';

class TimePickerAndroidExample extends React.Component {
  static navigationOptions = () => ({
    title: 'TimePickerAndroid',
  });

  state = {
    time: 'Please choose a time..',
  }

  onTimeChange = (time) => {
    this.setState({
      time,
    });
  }

  openTimePicker = () => {
    TimePickerAndroid.open({
      is24Hour: false,
    }).then((time) => {
      let { action, hour, minute } = time;
      if (action === 'timeSetAction') {
        if (hour > 12) {
          if (hour = hour - 12)
          minute = minute + ' ' + 'pm';
        } else {
          minute = minute + ' ' + 'am';
        }
        this.setState({
          time: hour + ':' + minute,
        });
      }
    });
  }

  render() {
    return (
      <View>
        <Button onPress={this.openTimePicker} title="Open Date Picker" />
        <Text style={styles.text}>{this.state.time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    margin: 20,
  },
});

export default TimePickerAndroidExample;
