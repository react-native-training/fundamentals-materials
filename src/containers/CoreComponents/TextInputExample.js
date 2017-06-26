import React from 'react';
import { TouchableHighlight, Text, TextInput, View, StyleSheet } from 'react-native';

const Button = ({ onPress }) => (
  <TouchableHighlight underlayColor="rgba(255, 153, 0, .85)" onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>SUBMIT</Text>
  </TouchableHighlight>
);

class TextInputComponentExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Text Input',
  });

  state = {
    name: '',
    email: '',
  }

  sendForm = () => {
    this.setState({
      name: '',
      email: '',
    });
  }

  updateInput = (type, value) => {
    this.setState({
      [type]: value,
    });
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            onChangeText={text => this.updateInput('name', text)}
            value={this.state.name}
            placeholder="Name"
            style={styles.input}
          />
          <TextInput
            onChangeText={text => this.updateInput('email', text)}
            value={this.state.email}
            placeholder="Email"
            style={styles.input}
          />
          <Button onPress={this.sendForm} />
          <View>
            <Text style={styles.infoText}>Name: {this.state.name}</Text>
            <Text style={styles.infoText}>Email: {this.state.email}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginTop: 20,
    backgroundColor: '#cccccc',
    height: 55,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
  infoText: {
    margin: 10,
  },
  button: {
    backgroundColor: 'rgb(255, 153, 0)',
    marginTop: 15,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Avenir',
  },
});

export default TextInputComponentExample;
