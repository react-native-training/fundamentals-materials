import React from 'react';
import { StyleSheet, Text, Button, View, DatePickerAndroid } from 'react-native';

class DatePickerAndroidExample extends React.Component {
  static navigationOptions = () => ({
    title: 'DatePickerAndroid',
  });

  state = {
    date: new Date(),
  }

  onDateChange = (date) => {
    this.setState({
      date,
    });
  }

  openDatePicker = () => {
    DatePickerAndroid.open({
      date: new Date(),
    }).then(date => {
      const { year, month, day } = date;
      this.onDateChange(new Date(year, month, day));
    });
  }

  render() {
    return (
      <View>
        <Button onPress={this.openDatePicker} title="Open Date Picker" />
        <Text style={styles.text}>
          {
            this.state.date.toLocaleDateString()
          }
        </Text>
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

export default DatePickerAndroidExample;
