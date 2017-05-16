import React from 'react';
import { Text, View, Platform, StyleSheet, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

let Component = TouchableHighlight;
if (Platform.OS === 'android') Component = TouchableNativeFeedback;

const UpdatedListItem = ({ title, onPress }) => (
  <Component onPress={onPress} underlayColor='transparent'>
    <View style={styles.listItem}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </Component>
);

UpdatedListItem.defaultProps = {
  title: '',
  onPress: () => console.log('please attach an onpress handler'),
};

UpdatedListItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    height: 50,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default UpdatedListItem;
