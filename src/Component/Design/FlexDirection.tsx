import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PreviewLayout from './PreviewLayout';

const FlexDirection = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}>
      <View style={[styles.box, {backgroundColor:'powderblue'}]} />
      <View style={[styles.box, {backgroundColor:'skyblue'}]} />
      <View style={[styles.box, {backgroundColor:'steelblue'}]} />
    </PreviewLayout>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
});

export default FlexDirection;
