import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import AuthenticationScreen from '@screens/AuthenticationScreen';
import NoteScreen from '@screens/NoteScreen';
import BiometricScreen from '@screens/BiometricScreen';
import {screenOptions} from './navigationOptions';

export type AppStackParamsList = {
  AuthenticationScreen: undefined;
  BiometricScreen: undefined;
  NoteScreen: undefined;
};

export type AppStackRouteProps<RouteName extends keyof AppStackParamsList> =
  RouteProp<AppStackParamsList, RouteName>;

const AppStack = createStackNavigator();
const AppStackNavigator = () => (
  <AppStack.Navigator screenOptions={screenOptions}>
    <AppStack.Screen
      name="AuthenticationScreen"
      component={AuthenticationScreen}
    />
    <AppStack.Screen name="BiometricScreen" component={BiometricScreen} />
    <AppStack.Screen name="NoteScreen" component={NoteScreen} />
  </AppStack.Navigator>
);

export default AppStackNavigator;
