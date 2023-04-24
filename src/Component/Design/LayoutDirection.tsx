import {StyleSheet, View} from 'react-native';
import PreviewLayout from './PreviewLayout';
import {useState} from 'react';

const LayoutDirection = () => {
  const [direction, setDirection] = useState('ltr');

  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={['ltr', 'rtl']}
      setSelectedValue={setDirection}>
      <View style={[styles.box, {backgroundColor:'powderblue'}]} />
      <View style={[styles.box, {backgroundColor:'skyblue'}]} />
      <View style={[styles.box, {backgroundColor:'steelblue'}]} />
    </PreviewLayout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default LayoutDirection;
