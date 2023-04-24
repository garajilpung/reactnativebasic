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
import FixedDimentions from './src/Component/Design/FixedDimensions';
import {makeListComponents} from './src/model/ListData';
import PercentageDimensions from './src/Component/Design/PercentageDimensions';
import FlexDimensions from './src/Component/Design/FlexDimensions';
import Flex from './src/Component/Design/Flex';
import FlexDirection from './src/Component/Design/FlexDirection';
import LayoutDirection from './src/Component/Design/LayoutDirection';
import JustifyContent from './src/Component/Design/JustifyContent';
import AlignItemLayout from './src/Component/Design/AlignItems';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  makeListComponents();

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
        <Stack.Screen
          name="FixedDimentions"
          component={FixedDimentions}
          options={{title: 'FixedDimentions'}}
        />
        <Stack.Screen
          name="FlexDimensions"
          component={FlexDimensions}
          options={{title: 'FlexDimensions'}}
        />
        <Stack.Screen
          name="PercentageDimensions"
          component={PercentageDimensions}
          options={{title: 'PercentageDimensions'}}
        />
        <Stack.Screen name="Flex" component={Flex} options={{title: 'Flex'}} />
        <Stack.Screen
          name="FlexDirection"
          component={FlexDirection}
          options={{title: 'FlexDirection'}}
        />
        <Stack.Screen
          name="LayoutDirection"
          component={LayoutDirection}
          options={{title: 'LayoutDirection'}}
        />

        <Stack.Screen
          name="JustifyContent"
          component={JustifyContent}
          options={{title: 'JustifyContent'}}
        />
        <Stack.Screen
          name="AlignItemLayout"
          component={AlignItemLayout}
          options={{title: 'AlignItemLayout'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
