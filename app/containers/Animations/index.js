import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';

class Animations extends React.Component {
  static navigationOptions = () => ({
    title: 'Animations',
  });

  render() {
    return (
      <ScrollView>
        <ListItem
          title="BlankSlateAnimation"
          onPress={() => this.props.navigation.navigate('BlankSlateAnimations')}
        />
        <ListItem
          title="Timing"
          onPress={() => this.props.navigation.navigate('Timing')}
        />
        <ListItem
          title="Easing"
          onPress={() => this.props.navigation.navigate('Easing')}
        />
        <ListItem
          title="AnimatedXY"
          onPress={() => this.props.navigation.navigate('AnimatedXY')}
        />
        <ListItem
          title="Interpolation"
          onPress={() => this.props.navigation.navigate('Interpolation')}
        />
        <ListItem
          title="Transforms"
          onPress={() => this.props.navigation.navigate('Transforms')}
        />
        <ListItem
          title="Parallel Animations"
          onPress={() => this.props.navigation.navigate('Parallel')}
        />
        <ListItem
          title="Challenge One"
          onPress={() => this.props.navigation.navigate('AnimationChallengeOne')}
        />
        <ListItem
          title="Loop Animation"
          onPress={() => this.props.navigation.navigate('Loop')}
        />
        <ListItem
          title="Create Animated Component"
          onPress={() => this.props.navigation.navigate('CreateAnimatedComponent')}
        />
        <ListItem
          title="Sequence"
          onPress={() => this.props.navigation.navigate('Sequence')}
        />
        <ListItem
          title="Challenge Two"
          onPress={() => this.props.navigation.navigate('AnimationChallengeTwo')}
        />
        <ListItem
          title="Spring"
          onPress={() => this.props.navigation.navigate('Spring')}
        />
        <ListItem
          title="Stagger"
          onPress={() => this.props.navigation.navigate('Stagger')}
        />
      </ScrollView>
    );
  }
}

export default Animations;
