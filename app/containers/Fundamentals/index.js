import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ListItem from '../../components/ListItem';

export default class Fundamentals extends React.Component {
  static navigationOptions = {
    title: 'React Fundamentals',
  }

  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <ListItem
            onPress={() => this.props.navigation.navigate('PropsExample')}
            title="Props"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('StateExample')}
            title="State"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('ConditionalRenderExample')}
            title="Conditional Rendering"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('ForceUpdateExample')}
            title="forceUpdate"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('ComponentWillMountExample')}
            title="componentWillMount"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('ComponentDidMountExample')}
            title="componentDidMount"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('ComponentWillReceivePropsExample')}
            title="componentWillReceiveProps"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('ShouldComponentUpdateExample')}
            title="shouldComponentUpdate"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('ComponentWillUpdateExample')}
            title="componentWillUpdate"
          />
          <ListItem
            onPress={() => this.props.navigation.navigate('ComponentDidUpdateExample')}
            title="componentDidUpdate"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
