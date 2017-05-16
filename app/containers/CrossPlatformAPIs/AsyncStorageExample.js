import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, AsyncStorage } from 'react-native';

const STORAGE_KEY = 'STORAGE_KEY';
const DATA = 'MY DATA!!';

const ARRAY_KEY = 'ARRAY_KEY';
const DATA_ARRAY = ['Nader', 'Melissa', 'Nadine', 'Amanda', 'Chris', 'Jim'];

class AsyncStorageExample extends React.Component {
  static navigationOptions = () => ({
    title: 'AsyncStorage',
  });

  state = {
    data: '',
    dataArray: [],
  }

  // componentDidMount() {
  //   console.log('componentDidMount in AsyncStorageExample');
  //   AsyncStorage.getItem(STORAGE_KEY)
  //     .then(d => {
  //       console.log(STORAGE_KEY, d);
  //       this.setState({
  //         data: d,
  //       });
  //     })
  //     .catch(err => {
  //       console.log('error fetching data: ', err);
  //     });
  //   AsyncStorage.getItem(ARRAY_KEY)
  //     .then(d => {
  //       console.log(ARRAY_KEY, d);
  //       this.setState({
  //         dataArray: JSON.parse(d),
  //       });
  //     })
  //     .catch(err => {
  //       console.log('error fetching data: ', err);
  //     });
  // }

  storeData = () => {
    AsyncStorage.setItem(STORAGE_KEY, DATA)
      .then(() => {
        console.log('data stored..');
      });
  }

  fetchData = () => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(d => {
        console.log('data:', d);
        this.setState({
          data: d,
        });
      })
      .catch(err => {
        console.log('error fetching data: ', err);
      });
  }

  deleteData = () => {
    AsyncStorage.removeItem(STORAGE_KEY)
      .then(() => {
        this.setState({
          data: '',
        });
      })
      .catch(err => {
        console.log('error deleting data: ', err);
      });
  }

  storeDataArray = () => {
    AsyncStorage.setItem(ARRAY_KEY, JSON.stringify(DATA_ARRAY))
      .then(() => {
        console.log('data array stored...');
      });
  }

  fetchDataArray = () => {
    AsyncStorage.getItem(ARRAY_KEY)
      .then(d => {
        console.log('d:', d)
        this.setState({
          dataArray: JSON.parse(d),
        });
      })
      .catch(err => {
        console.log('error fetching data: ', err);
      });
  }

  deleteDataArray = () => {
    AsyncStorage.removeItem(ARRAY_KEY)
      .then(() => {
        this.setState({
          dataArray: [],
        });
      })
      .catch(err => console.log('error:', err))
  }

  render() {
    return (
      <ScrollView>
        <Button
          onPress={this.storeData}
          title="Store Data"
        />
        <Button
          onPress={this.fetchData}
          title="Fetch Data"
        />
        <Button
          onPress={this.deleteData}
          title="Delete Data"
        />
        <Text style={styles.data}>Data: {this.state.data}</Text>

        <Button
          onPress={this.storeDataArray}
          title="Store Array of Data"
        />
        <Button
          onPress={this.fetchDataArray}
          title="Fetch Array of Data"
        />
        <Button
          onPress={this.deleteDataArray}
          title="Delete Array of Data"
        />
        <Text style={styles.data}>Array:</Text>
        {
          this.state.dataArray.map((d, i) => {
            return (
              <View style={styles.row} key={i}>
                <Text>{d}</Text>
              </View>
            );
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  data: {
    margin: 20,
    fontSize: 20,
  },
  row: {
    backgroundColor: '#cccccc',
    padding: 15,
  },
});

export default AsyncStorageExample;
