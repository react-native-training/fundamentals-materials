import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';

class Flexbox extends React.Component {
  static navigationOptions = () => ({
    title: 'Flexbox',
  });

  render() {
    return (
      <ScrollView>
        <ListItem
          title="Basics"
          onPress={() => this.props.navigation.navigate('FlexboxBasics')}
        />
      </ScrollView>
    );
  }
}

export default Flexbox;
