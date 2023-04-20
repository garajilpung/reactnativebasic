/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/Component/Home';
import LotsOfStyles from './src/Component/LotsOfStyles';
import PropsAndState from './src/Component/PropsAndState';
import {ListComponent} from './src/model/ListData';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        {/* {ListComponent.map(el => (
          <Stack.Screen name={el} component={{el}} options={{title: el}} />
        ))} */}
        
        <Stack.Screen
          name="LotsOfStyles"
          component={LotsOfStyles}
          options={{title: 'LotsOfStyles'}}
        />
        <Stack.Screen
          name="PropsAndState"
          component={PropsAndState}
          options={{title: 'PropsAndState'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
