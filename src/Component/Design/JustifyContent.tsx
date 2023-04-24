import {useState} from 'react';
import PreviewLayout from './PreviewLayout';
import {StyleSheet, View} from 'react-native';

const JustifyContent = () => {
  const [justifyContent, setJustifyContent] = useState('flex-start');

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ]}
      setSelectedValue={setJustifyContent}>
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

export default JustifyContent;
