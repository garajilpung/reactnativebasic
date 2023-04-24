import React from 'react';
import {View} from 'react-native';

const PercentageDimensions = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={{height: '15%', backgroundColor: 'powderblue'}} />
      <View style={{height: '35%', width: '66%', backgroundColor: 'skyblue'}} />
      <View
        style={{height: '50%', width: '33%', backgroundColor: 'steelblue'}}
      />
    </View>
  );
};

export default PercentageDimensions;
