import React from 'react';
import { ScrollView } from 'react-native';

import ListItem from '../../components/ListItem';

class CrossPlatformAPIs extends React.Component {
  static navigationOptions = () => ({
    title: 'Cross Platform APIs',
  });

  render() {
    return (
      <ScrollView>
        <ListItem
          title="AppState"
          onPress={() => this.props.navigation.navigate('AppStateExample')}
        />
        <ListItem
          title="AsyncStorage"
          onPress={() => this.props.navigation.navigate('AsyncStorageExample')}
        />
        <ListItem
          title="Geolocation"
          onPress={() => this.props.navigation.navigate('GeolocationExample')}
        />
        <ListItem
          title="Challenge One"
          onPress={() => this.props.navigation.navigate('CPAPISChallengeOne')}
        />
        <ListItem
          title="Dimensions"
          onPress={() => this.props.navigation.navigate('DimensionsExample')}
        />
        <ListItem
          title="CameraRoll"
          onPress={() => this.props.navigation.navigate('CameraRollExample')}
        />
        <ListItem
          title="Linking"
          onPress={() => this.props.navigation.navigate('LinkingExample')}
        />
        <ListItem
          title="NetInfo"
          onPress={() => this.props.navigation.navigate('NetInfoExample')}
        />
        <ListItem
          title="PanResponder"
          onPress={() => this.props.navigation.navigate('PanResponderExample')}
        />
        <ListItem
          title="Share"
          onPress={() => this.props.navigation.navigate('ShareExample')}
        />
        <ListItem
          title="Alert"
          onPress={() => this.props.navigation.navigate('AlertExample')}
        />
        <ListItem
          title="Challenge Two"
          onPress={() => this.props.navigation.navigate('CPAPISChallengeTwo')}
        />
      </ScrollView>
    );
  }
}

export default CrossPlatformAPIs;
