import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

const uuidV4 = require('uuid/v4');

const data = [
  { sport: 'Basketball' }, { sport: 'Baseball' }, { sport: 'Hockey' }, { sport: 'Tennis' },
];

class RefreshControlExample extends React.Component {
  static navigationOptions = () => ({
    title: 'RefreshControl',
  });

  state = {
    isRefreshing: false,
    data,
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  onRefresh = () => {
    this.setState({
      isRefreshing: true,
    });
  }

  // addItemsToList = () => {
  //   this.timeout = setTimeout(() => {
  //     this.setState({
  //       data: [...this.state.data, ...data],
  //       isRefreshing: false,
  //     });
  //   }, 2000);
  // }

  renderItem = ({ item }) => {
    return <Text style={styles.listItem}>{item.sport}</Text>;
  }

  render() {
    return (
      <View>
        <ExampleTitle
          title="RefreshControl"
        />
        <FlatList
          onRefresh={this.onRefresh}
          refreshing={this.state.isRefreshing}
          data={this.state.data}
          keyExtractor={() => uuidV4()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

export default RefreshControlExample;
