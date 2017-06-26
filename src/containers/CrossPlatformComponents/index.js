import React from 'react';
import { ScrollView } from 'react-native';

import ListItem from '../../components/ListItem';

class CrossPlatformComponents extends React.Component {
  static navigationOptions = () => ({
    title: 'Cross Platform Components',
  });

  render() {
    return (
      <ScrollView>
        <ListItem
          title="Activity Indicator"
          onPress={() => this.props.navigation.navigate('ActivityIndicatorExample')}
        />
        <ListItem
          title="Button"
          onPress={() => this.props.navigation.navigate('ButtonExample')}
        />
        <ListItem
          title="Image"
          onPress={() => this.props.navigation.navigate('ImageExample')}
        />
        <ListItem
          title="Modal"
          onPress={() => this.props.navigation.navigate('ModalExample')}
        />
        <ListItem
          title="Challenge One"
          onPress={() => this.props.navigation.navigate('CPChallengeOne')}
        />
        <ListItem
          title="Picker"
          onPress={() => this.props.navigation.navigate('PickerExample')}
        />
        <ListItem
          title="RefreshControl"
          onPress={() => this.props.navigation.navigate('RefreshControlExample')}
        />
        <ListItem
          title="Slider"
          onPress={() => this.props.navigation.navigate('SliderExample')}
        />
        <ListItem
          title="StatusBar"
          onPress={() => this.props.navigation.navigate('StatusBarExample')}
        />
        <ListItem
          title="Challenge Two"
          onPress={() => this.props.navigation.navigate('CPChallengeTwo')}
        />
        <ListItem
          title="Switch"
          onPress={() => this.props.navigation.navigate('SwitchExample')}
        />
        <ListItem
          title="TouchableHighlight"
          onPress={() => this.props.navigation.navigate('TouchableHighlightExample')}
        />
      </ScrollView>
    );
  }
}

export default CrossPlatformComponents;
