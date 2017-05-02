import React from 'react';

import {
  View,
  Image,
} from 'react-native';

const width = 150;
const height = 30;

const Logo = () => (
  <View style={{ width, height }}>
    <Image
      style={{ width, height }}
      source={require('../img/logo.png')}
    />
  </View>
);

export default Logo;
