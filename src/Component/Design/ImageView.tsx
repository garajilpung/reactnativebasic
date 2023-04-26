import React from 'react';
import {Image, Text, View} from 'react-native';

const ImageView = () => {
  return (
    <View>
      <Text>src 폴더에서</Text>
      <Image source={require('../../Resource/images/icon.png')} />
      <View style={{height: 50}} />
      <Text>Native iOS 폴더에서</Text>
      <Image source={{uri: 'myIcon'}} style={{width: 48, height: 48}} />
      <Text>Native Android 폴더에서</Text>
      {/* <Image
        source={{uri: 'asset:/myIcon.png'}}
        style={{width: 48, height: 48}}
      /> */}
    </View>
  );
};

export default ImageView;
