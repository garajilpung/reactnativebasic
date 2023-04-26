import React from 'react';
import {NativeModules, Button, View} from 'react-native';

const {CalendarModule, CalendarManager} = NativeModules;

const NativeModuleiOS = () => {
  const onPress = () => {
    console.log('We will invoke the Obj-C nateive module here!');
    CalendarModule.createCalendarEvent('testName', 'testLocation');
    console.log('Name : ', CalendarModule.getName());
  };

  const onPress2 = () => {
    console.log('We will invoke the Swift nateive module here!');
    CalendarManager.addEvent('testName', 'testLocation', 23);
  };

  return (
    <View>
      <Button
        title="Click to invoke your Obj-c native module!"
        color="#841584"
        onPress={onPress}
      />

      <Button
        title="Click to invoke your Swift native module!"
        color="#841584"
        onPress={onPress2}
      />
    </View>
  );
};

export default NativeModuleiOS;
