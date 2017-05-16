import React from 'react';
import { DatePickerIOS, StyleSheet, Text, View } from 'react-native';

class DatePickerIOSExample extends React.Component {
  static navigationOptions = () => ({
    title: 'DatePickerIOS',
  });

  state = {
    date: new Date(),
    timeZoneOffsetInHours: (-1 * new Date().getTimezoneOffset()) / 60,
  }

  onDateChange = (date) => {
    this.setState({
      date,
    });
  }

  render() {
    return (
      <View>
          <DatePickerIOS
            date={this.state.date}
            mode="datetime"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />
          <Text>{this.state.date.toLocaleDateString()}</Text>
          <Text>{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default DatePickerIOSExample;
