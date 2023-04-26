import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PreviewLayout from './PreviewLayout';

const AlignSelfLayout = () => {
  const [alignSelf, setAlignSelf] = useState('stretch');

  return (
    <PreviewLayout 
      label="alignSelf"
      selectedValue={alignSelf}
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      setSelectedValue={setAlignSelf}>
      <View
        style={[
          styles.box,
          {
            alignSelf: 'auto',
            backgroundColor: 'powderblue',
            width: 'auto',
            minWidth: 50,
          },
        ]}
      />
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

export default AlignSelfLayout;
