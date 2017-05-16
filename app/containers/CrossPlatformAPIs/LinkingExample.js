import React from 'react';
import { ScrollView, Linking, Text, StyleSheet } from 'react-native';

class LinkingExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Linking',
  });

  componentDidMount() {
    Linking.getInitialURL().then((url) => {
      console.log('url:', url);
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  openLink = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 15 }}>
        <Text onPress={() => this.openLink('https://www.google.com/')} style={styles.link}>Google</Text>
        <Text onPress={() => this.openLink('https://facebook.github.io/react-native/docs/')} style={styles.link}>React Native Docs</Text>
        <Text onPress={() => this.openLink('https://medium.com/')} style={styles.link}>Medium</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    margin: 17,
    marginBottom: 5,
    marginTop: 10,
  },
});

export default LinkingExample;
