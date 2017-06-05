import React from 'react';
import { TabBarIOS, StyleSheet, Text, View } from 'react-native';

const chat = require('./assets/chat.png');
const elephant = require('./assets/elephant.png');

const PageOne = () => (
  <View style={[styles.container, { backgroundColor: '#acacac' }]}>
    <Text style={styles.text}>Page One</Text>
  </View>
);
const PageTwo = () => (
  <View style={[styles.container, { backgroundColor: '#ff9900' }]}>
    <Text style={styles.text}>Page Two</Text>
  </View>
);

class TabBarIOSExample extends React.Component {
  static navigationOptions = () => ({
    title: 'TabBarIOS',
  });

  state = {
    selectedTab: 'pageOne'
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabBarIOS
          tintColor="#FF9900"
          unselectedItemTintColor="#acacac"
        >
          <TabBarIOS.Item
            title="Blue Tab"
            icon={chat}
            selected={this.state.selectedTab === 'pageOne'}
            onPress={() => {
              this.setState({
                selectedTab: 'pageOne',
              });
            }}
          >
            <PageOne />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="Blue Tab"
            icon={elephant}
            selected={this.state.selectedTab === 'pageTwo'}
            onPress={() => {
              this.setState({
                selectedTab: 'pageTwo',
              });
            }}
          >
            <PageTwo />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default TabBarIOSExample;
