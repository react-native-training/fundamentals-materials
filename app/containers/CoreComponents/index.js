import React from 'react';
import { View } from 'react-native';
import ListItem from '../../components/ListItem';

class CoreComponents extends React.Component {
  static navigationOptions = () => ({
    title: 'Core Components',
  });

  render() {
    return (
      <View>
        <ListItem
          title="Text"
          onPress={() => this.props.navigation.navigate('TextExample')}
        />
        <ListItem
          title="View"
          onPress={() => this.props.navigation.navigate('ViewExample')}
        />
        <ListItem
          title="ScrollView"
          onPress={() => this.props.navigation.navigate('ScrollViewExample')}
        />
        <ListItem
          title="TextInput"
          onPress={() => this.props.navigation.navigate('TextInputExample')}
        />
        <ListItem
          title="Challenge One"
          onPress={() => this.props.navigation.navigate('ChallengeOne')}
        />
        <ListItem
          title="Map List"
          onPress={() => this.props.navigation.navigate('MapListExample')}
        />
        <ListItem
          title="Flat List"
          onPress={() => this.props.navigation.navigate('FlatListExample')}
        />
        <ListItem
          title="Section List"
          onPress={() => this.props.navigation.navigate('SectionListExample')}
        />
        <ListItem
          title="Challenge Two"
          onPress={() => this.props.navigation.navigate('ChallengeTwo')}
        />
      </View>
    );
  }
}

export default CoreComponents;
