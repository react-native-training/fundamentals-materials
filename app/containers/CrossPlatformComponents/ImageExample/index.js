import React from 'react';
import { Text, Dimensions, Image, ScrollView, StyleSheet } from 'react-native';
import ExampleTitle from '../../../components/ExampleTitle';

const ReactLogo = require('./react.png');

const { width } = Dimensions.get('window');

class ImageExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Button',
  });

  render() {
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <ExampleTitle
          title="Image Component"
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={ReactLogo}
        />
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: 'https://cdn.auth0.com/blog/react-js/react.png' }}
        />
        <Image
          // loading an image from native app resources
          // iOS: ios/materials/Images.xcasses
          // android: android/app/src/main/res/drawable
          source={{ uri: 'logo2' }}
          style={styles.image}
        />

        {/* Using an image as a background */}
        <Image
          style={styles.bgContainer}
          source={require('./russ.jpg')}
        >
          <Text style={styles.text}>HELLO FROM IMAGE BG</Text>
        </Image>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  bgContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    width,
    height: 300,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default ImageExample;
