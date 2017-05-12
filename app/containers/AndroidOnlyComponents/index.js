import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';

class AndroidOnlyComponents extends React.Component {
  static navigationOptions = () => ({
    title: 'Android Only Components',
  });

  render() {
    return (
      <ScrollView>
        <ListItem
          title="TouchableNativeFeedback"
          onPress={() => this.props.navigation.navigate('TouchableNativeFeedbackExample')}
        />
      </ScrollView>
    );
  }
}

export default AndroidOnlyComponents;
