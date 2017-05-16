import React from 'react';
import { Dimensions, Animated, View, TouchableHighlight, Text, StyleSheet } from 'react-native';

/* Can Animate any of the following:
*  Animated.Image
*  Animated.ScrollView
*  Animated.Text
*  Animated.View
*/

const { height } = Dimensions.get('window');

class Parallel extends React.Component {
  static navigationOptions = () => ({
    title: 'Animations',
  });

  state = {
    loaded: false,
  }

  componentDidMount() {
    this.triggerAnimations();
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  animatedWelcome = new Animated.Value(0);
  animatedButton = new Animated.Value(0);

  triggerAnimations = () => {
    this.timeOut = setTimeout(() => {
      this.setState({ loaded: true });
      this.animateAll();
    }, 1300);
  }

  animateAll = () => {
    Animated.parallel([
      Animated.timing(
        this.animatedWelcome,
        {
          toValue: 1,
          duration: 740,
        },
      ),
      Animated.timing(
        this.animatedButton,
        {
          toValue: 1,
          duration: 1700,
        },
      ),
    ]).start();
  }

  render() {
    console.log('height:', height);
    const buttonMargin = this.animatedButton.interpolate({
      inputRange: [0, 1],
      outputRange: [667, 250],
    });

    const welcomeMargin = this.animatedWelcome.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 230],
    });

    return (
      <View style={styles.container}>
        { !this.state.loaded && (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>)
        }
        { this.state.loaded && (
          <View>
            <Animated.View style={[styles.welcomeContainer, { marginTop: welcomeMargin }]}>
              <Text style={styles.welcomeText}>Welcome</Text>
            </Animated.View>
            <Animated.View style={[styles.buttonContainer, { marginTop: buttonMargin }]}>
              <TouchableHighlight underlayColor='#dddddd' onPress={console.log} style={styles.button}>
                <Text style={styles.buttonText}>CLICK HERE TO GET STARTED</Text>
              </TouchableHighlight>
            </Animated.View>
          </View>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  button: {
    height: 60,
    backgroundColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '200',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    padding: 10,
  },
});

export default Parallel;
