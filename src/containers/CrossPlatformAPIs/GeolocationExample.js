import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

// To enable geolocation in Android:
// open android/app/src/main/AndroidManifest.xml
// set: <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
// This has already been done in the project.

class GeolocationExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Geolocation',
  });

  state = {
    initialPosition: { coords: {} },
    lastPosition: { coords: {} },
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('position:', position)
        const initialPosition = position;
        this.setState({ initialPosition });
      },
      (error) => alert(JSON.stringify(error))
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const lastPosition = position;
      this.setState({ lastPosition });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const { initialPosition, lastPosition } = this.state;
    console.log('initialPosition:', initialPosition);
    return (
      <ScrollView>
        <Text style={styles.title}>Initial Position:</Text>
        <Text style={styles.info}>Speed: {initialPosition.coords.speed}</Text>
        <Text style={styles.info}>Longitude: {initialPosition.coords.longitude}</Text>
        <Text style={styles.info}>Latitude: {initialPosition.coords.latitude}</Text>
        <Text style={styles.info}>Timestamp: {initialPosition.timestamp}</Text>

        <Text style={styles.title}>Current Position:</Text>
        <Text style={styles.info}>Speed: {lastPosition.coords.speed}</Text>
        <Text style={styles.info}>Longitude: {lastPosition.coords.longitude}</Text>
        <Text style={styles.info}>Latitude: {lastPosition.coords.latitude}</Text>
        <Text style={styles.info}>Timestamp: {lastPosition.timestamp}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 5,
    fontSize: 20,
  },
  info: {
    margin: 5,
  },
});

export default GeolocationExample;
