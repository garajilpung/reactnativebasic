import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, Text, View} from 'react-native';

const GestureAction = () => {
  return (
    <View style={[{backgroundColor: Colors.white}]}>
      <Text style={styles.box}>안녕하세요</Text>

      <View accessible={true}>
        <Text>accessible basic</Text>
        <Text>text one</Text>
        <Text>text two</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.gray,
    color: Colors.red,
    height: 100,
    textAlign: 'center',
  },
});

export default GestureAction;
