import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const PropsAndState = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorm" />
      <Cat name="Spot" />

      <View style={styles.gap}>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />

        <Text style={styles.inputtoouput}>
          {text
            .split(' ')
            .map(word => word && '55')
            .join(' ')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gap: {
    height: 30,
  },
  input: {
    height: 40,
  },
  inputtoouput: {
    padding: 10,
    fontSize: 42,
    height: 50,
  },
});

export default PropsAndState;
