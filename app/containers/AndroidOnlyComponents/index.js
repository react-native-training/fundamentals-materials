import React from 'react';
import { ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';

class AndroidOnlyComponents extends React.Component {
  static navigationOptions = () => ({
    title: 'Android Only Components + APIs',
  });

  render() {
    return (
      <ScrollView>
        <ListItem
          title="TouchableNativeFeedback"
          onPress={() => this.props.navigation.navigate('TouchableNativeFeedbackExample')}
        />
        <ListItem
          title="ViewPagerAndroid"
          onPress={() => this.props.navigation.navigate('ViewPagerAndroidExample')}
        />
        <ListItem
          title="ProgressBarAndroid"
          onPress={() => this.props.navigation.navigate('ProgressBarAndroidExample')}
        />
        <ListItem
          title="DatePickerAndroid"
          onPress={() => this.props.navigation.navigate('DatePickerAndroidExample')}
        />
        <ListItem
          title="TimePickerAndroid"
          onPress={() => this.props.navigation.navigate('TimePickerAndroidExample')}
        />
        <ListItem
          title="ToastAndroid"
          onPress={() => this.props.navigation.navigate('ToastAndroidExample')}
        />
      </ScrollView>
    );
  }
}

export default AndroidOnlyComponents;
