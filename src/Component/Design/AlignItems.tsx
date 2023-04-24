import {useState} from 'react';
import PreviewLayout from './PreviewLayout';
import {StyleSheet, View} from 'react-native';

const AlignItemLayout = () => {
  const [alignItems, setAlignItems] = useState('stretch');

  return (
    <PreviewLayout
      label="alignItems"
      selectedValue={alignItems}
      values={['stretch', 'flex-start', 'flex-end', 'center', 'baseline']}
      setSelectedValue={setAlignItems}>
      <View
        style={[
          styles.box,
          {backgroundColor: 'powderblue', width: 'auto', minWidth: 50},
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

export default AlignItemLayout;
