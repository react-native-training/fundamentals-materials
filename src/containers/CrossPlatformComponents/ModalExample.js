import React from 'react';
import { StyleSheet, View, Modal, Text, Button } from 'react-native';
import ExampleTitle from '../../components/ExampleTitle';

class ModalExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Modal',
  });

  state = {
    modalOpen: false,
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ExampleTitle
          title="Modal Component"
        />
        <Button
          onPress={this.toggleModal}
          title="Open Modal"
        />
        <Modal
          transparent={false}
          animationType="slide" // none (default) or fade
          visible={this.state.modalOpen}
        >
          <View style={styles.modalContainer}>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModalExample;
