import React from 'react';
import { Text, NetInfo, ScrollView, Button, StyleSheet } from 'react-native';

class NetInfoExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Net Info',
  });

  state = {
    netInfo: '',
  }

  componentDidMount() {
    NetInfo.addEventListener(
      'change',
      this.handleConnectivityChange,
    );
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      'change',
      this.handleConnectivityChange,
    );
  }

  handleConnectivityChange = (reach) => {
    this.setState({ netInfo: reach });
  }

  fetchNetInfo = () => {
    NetInfo.fetch().done((reach) => {
      console.log(`Reach: ${reach}`);
      this.setState({ netInfo: reach });
    });
  }

  render() {
    return (
      <ScrollView>
        <Button title='Fetch Net Info' onPress={this.fetchNetInfo} />
        <Text style={styles.text}>Net info: { this.state.netInfo }</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 20,
  },
});

export default NetInfoExample;
