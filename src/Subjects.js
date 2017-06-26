import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ListItem from './components/ListItem';

import Logo from './components/Logo';

export default class Subjects extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   Linking.addEventListener('url', this.handleDeepLink);
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  //   Linking.removeEventListener('url', this.handleDeepLink);
  // }

  // handleDeepLink = (e) => {
  //   // deeplink://
  //   const { navigate } = this.props.navigation;
  //   const route = e.url.replace(/.*?:\/\//g, '');
  //   navigate(route);
  // }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <ListItem
            title="ES 2015"
            onPress={() => this.props.navigation.navigate('ES2015')}
          />
          <ListItem
            title="React Fundamentals"
            onPress={() => this.props.navigation.navigate('Fundamentals')}
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('CoreComponents')}
            title="Core Components"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('CrossPlatformComponents')}
            title="Cross Platform Components"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('CrossPlatformAPIs')}
            title="Cross Platform APIs"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('IOSOnlyComponents')}
            title="IOS Specific Components + APIs"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('AndroidOnlyComponents')}
            title="Android Specific Components + APIs"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('Animations')}
            title="Animations"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('Styling')}
            title="Styling"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('Flexbox')}
            title="Flexbox"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('Playground')}
            title="Playground"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
