import React from 'react';
import { View, Text } from 'react-native';

import ListItem from '../../components/ListItem';

class Es2015 extends React.Component {
  static navigationOptions = () => ({
    title: 'ES2015',
  });

  render() {
    return (
      <View>
        <ListItem
          title="Arrow / Lambda Functions"
          onPress={() => this.props.navigation.navigate('ArrowFunctions')}
        />
        <ListItem
          title="Default Arguments"
          onPress={() => this.props.navigation.navigate('DefaultArguments')}
        />
        <ListItem
          title="Destructuring"
          onPress={() => this.props.navigation.navigate('Destructuring')}
        />
        <ListItem
          title="LetConst"
          onPress={() => this.props.navigation.navigate('LetConst')}
        />
        <ListItem
          title="Modules"
          onPress={() => this.props.navigation.navigate('Modules')}
        />
        <ListItem
          title="Multi Line Strings"
          onPress={() => this.props.navigation.navigate('MultiLineStrings')}
        />
        <ListItem
          title="Promises"
          onPress={() => this.props.navigation.navigate('Promises')}
        />
        <ListItem
          title="Template Strings"
          onPress={() => this.props.navigation.navigate('Template <Strings></Strings>')}
        />
      </View>
    );
  }
}

export default Es2015;
