import React from 'react';
import { ScrollView, AppState, Text } from 'react-native';

class AppStateExample extends React.Component {
  static navigationOptions = () => ({
    title: 'AppState',
  });

  state = {
    appState: AppState.currentState,
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (nextAppState) => {
    console.log('nextAppState: ', nextAppState);
  }


  render() {
    return (
      <ScrollView>
      </ScrollView>
    );
  }
}

export default AppStateExample;
