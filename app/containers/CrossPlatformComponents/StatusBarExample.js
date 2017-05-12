import React from 'react';
import { View, StatusBar } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

class StatusBarExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Status Bar',
  });

  componentDidMount() {
    StatusBar.setBackgroundColor('#000000', true);
  }

  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          hidden="false"
        />
        <ExampleTitle
          title="Status Bar"
        />
      </View>
    );
  }
}

export default StatusBarExample;
