import React from 'react';
import { View } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

// Create a Picker component that renders a list using
// an array of data
// Example: data = [{ value: '', label: ''}, ...];
// const pickerItems = data.map(d => <Picker.Item value={} label={} />)

// Show and hide the picker with some sort of event,
// eg. onPress or some other.

// Advanced: Use slider to add / subtract items
// from the array / list of data.

class ChallengeTwo extends React.Component {
  static navigationOptions = () => ({
    title: 'Challenge Two',
  });

  render() {
    return (
      <View>
        <ExampleTitle
          title="Challenge Two"
        />
      </View>
    );
  }
}

export default ChallengeTwo;
