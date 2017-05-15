import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ListItem from './components/ListItem';

import Logo from './components/Logo';

let styles;

export default class Subjects extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  }

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
            onPress={() => this.props.navigation.navigate('IOSOnlyComponents')}
            title="IOS Specific Components"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('AndroidOnlyComponents')}
            title="Android Specific Components"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('Animations')}
            title="Animations"
          />
        </ScrollView>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
  },
});
