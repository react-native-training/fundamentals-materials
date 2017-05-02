import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

let styles;

const UpdatedListItem = ({ title, onPress }) => (
  <ListItem
    title={title}
    underlayColor="#dedede"
    onPress={onPress}
    containerStyle={styles.listItem}
  />
);

UpdatedListItem.defaultProps = {
  title: '',
  onPress: () => console.log('please attach an onpress handler'),
};

UpdatedListItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
};

styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
});

export default UpdatedListItem;
