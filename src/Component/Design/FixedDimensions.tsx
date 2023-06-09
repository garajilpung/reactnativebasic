import React from 'react';
import {View} from 'react-native';

const FixedDimentions = () => {
  return (
    <View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue',
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
        }}
      />
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
};

export default FixedDimentions;
