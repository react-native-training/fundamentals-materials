import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';

class IOSOnlyComponents extends React.Component {
  static navigationOptions = () => ({
    title: 'iOS Only Components',
  });

  render() {
    return (
      <ScrollView>
        <ListItem
          title="DatePickerIOS"
          onPress={() => this.props.navigation.navigate('DatePickerIOSExample')}
        />
        <ListItem
          title="ProgressViewIOS"
          onPress={() => this.props.navigation.navigate('ProgressViewIOSExample')}
        />
        <ListItem
          title="SegmentedControlIOS"
          onPress={() => this.props.navigation.navigate('SegmentedControlIOSExample')}
        />
        <ListItem
          title="TabBarIOS"
          onPress={() => this.props.navigation.navigate('TabBarIOSExample')}
        />
        <ListItem
          title="Challenge One"
          onPress={() => this.props.navigation.navigate('IOSChallengeOne')}
        />
        <ListItem
          title="ActionSheetIOS"
          onPress={() => this.props.navigation.navigate('ActionSheetIOSExample')}
        />
      </ScrollView>
    );
  }
}

export default IOSOnlyComponents;
