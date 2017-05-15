import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';

class Styling extends React.Component {
  static navigationOptions = () => ({
    title: 'Styling',
  });

  render() {
    return (
      <ScrollView>
        <ListItem
          title="Text"
          onPress={() => this.props.navigation.navigate('TextStyling')}
        />
        <ListItem
          title="View"
          onPress={() => this.props.navigation.navigate('ViewStyling')}
        />
        <ListItem
          title="Colors"
          onPress={() => this.props.navigation.navigate('ColorsExample')}
        />
        <ListItem
          title="Margin &amp; Padding"
          onPress={() => this.props.navigation.navigate('MarginVSPadding')}
        />
        <ListItem
          title="Position"
          onPress={() => this.props.navigation.navigate('Position')}
        />
        <ListItem
          title="Z Index"
          onPress={() => this.props.navigation.navigate('ZIndex')}
        />
      </ScrollView>
    );
  }
}

export default Styling;
