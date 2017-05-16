import React from 'react';
import { SegmentedControlIOS, StyleSheet, Text, View } from 'react-native';

const values = ['People', 'Places'];

const people = ['Jim', 'Ashley', 'Rob', 'Janice'];
const places = ['Maryland', 'Paris', 'Morocco', 'Iceland'];

const Data = [people, places];

const List = ({ list }) => {
  return (
    <View>
      {
        list.map((l, i) => <Text key={i}>{l}</Text>)
      }
    </View>
  );
};

class SegmentedControlIOSExample extends React.Component {
  static navigationOptions = () => ({
    title: 'SegmentedControlIOS',
  });

  state = {
    selectedIndex: 0,
  }

  updateIndex = (event) => {
    this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
  }

  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlIOS
          values={values}
          selectedIndex={this.state.selectedIndex}
          onChange={this.updateIndex}
        />
        <List list={Data[this.state.selectedIndex]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default SegmentedControlIOSExample;
