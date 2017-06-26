import React from 'react';
import { ScrollView, Linking } from 'react-native';

class DeepLinkingExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Linking',
  });

  componentDidMount() {
    console.log('componentDidMount');
    Linking.addEventListener('url', this.handleDeepLink);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    Linking.removeEventListener('url', this.handleDeepLink);
  }

  handleDeepLink = (e) => {
    // deeplink://
    const { navigate } = this.props.navigation;
    const route = e.url.replace(/.*?:\/\//g, '');
    navigate(route);
  }

  render() {
    return (
      <ScrollView>
      </ScrollView>
    );
  }
}

export default DeepLinkingExample;
