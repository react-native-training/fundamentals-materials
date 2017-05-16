import React from 'react';
import { StyleSheet, View, Dimensions, Image, CameraRoll, Button, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

class CameraRollExample extends React.Component {
  static navigationOptions = () => ({
    title: 'Camera Roll',
  });

  state = {
    photos: [],
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 2,
      // after: 'assets-library://asset/asset.JPG?id=BCEFCF89-DE69-421E-9861-8487F1122C3A&ext=JPG',
      assetType: 'All',
    })
    .then(r => {
      console.log('response from getPhotos:', r);
      this.setState({ photos: r.edges });
    });
  }


  render() {
    return (
      <ScrollView>
        <Button
          title="Get Photos"
          onPress={this.getPhotos}
        />
        <View style={styles.gridContainer}>
          {
            this.state.photos.map(p => (
              <Image source={{ uri: p.node.image.uri }} style={{ width, height: width }} />
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default CameraRollExample;
