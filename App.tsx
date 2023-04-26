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
import AlignSelfLayout from './src/Component/Design/AlignSelf';
import AlignContentLayout from './src/Component/Design/AlignContent';
import FlexWrapLayout from './src/Component/Design/FlexWrap';
import FlexGrowShrinkLayout from './src/Component/Design/FlexGrowShrink';
import RowGapAndColumnGap from './src/Component/Design/RowColumnGap';
import WidthHeightBasics from './src/Component/Design/WidthAndHeight';
import PositionLayout from './src/Component/Design/AbsoluteAndRelativeLayout';
import ImageView from './src/Component/Design/ImageView';
import ButtonBasics from './src/Component/Design/ButtonBasic';
import Touchalbes from './src/Component/Design/Touchalbes';
import AniView from './src/Component/Design/Animation';
import GestureAction from './src/Component/Design/GestureAction';
import TimerExample from './src/Component/Timer';
import NativeModuleiOS from './src/Component/NativeModule';

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
        <Stack.Screen
          name="AlignSelfLayout"
          component={AlignSelfLayout}
          options={{title: 'AlignSelfLayout'}}
        />
        <Stack.Screen
          name="AlignContentLayout"
          component={AlignContentLayout}
          options={{title: 'AlignContentLayout'}}
        />
        <Stack.Screen
          name="FlexWrapLayout"
          component={FlexWrapLayout}
          options={{title: 'FlexWrapLayout'}}
        />
        <Stack.Screen
          name="FlexGrowShrinkLayout"
          component={FlexGrowShrinkLayout}
          options={{title: 'FlexGrowShrinkLayout'}}
        />
        <Stack.Screen
          name="RowGapAndColumnGap"
          component={RowGapAndColumnGap}
          options={{title: 'RowGapAndColumnGap'}}
        />
        <Stack.Screen
          name="WidthHeightBasics"
          component={WidthHeightBasics}
          options={{title: 'WidthHeightBasics'}}
        />
        <Stack.Screen
          name="PositionLayout"
          component={PositionLayout}
          options={{title: 'PositionLayout'}}
        />
        <Stack.Screen
          name="ImageView"
          component={ImageView}
          options={{title: 'ImageView'}}
        />
        <Stack.Screen
          name="ButtonBasics"
          component={ButtonBasics}
          options={{title: 'ButtonBasics'}}
        />
        <Stack.Screen
          name="Touchalbes"
          component={Touchalbes}
          options={{title: 'Touchalbes'}}
        />
        <Stack.Screen
          name="AniView"
          component={AniView}
          options={{title: 'AniView'}}
        />
        <Stack.Screen
          name="GestureAction"
          component={GestureAction}
          options={{title: 'GestureAction'}}
        />
        <Stack.Screen
          name="TimerExample"
          component={TimerExample}
          options={{title: 'TimerExample'}}
        />
        <Stack.Screen
          name="NativeModuleiOS"
          component={NativeModuleiOS}
          options={{title: 'NativeModuleiOS'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
