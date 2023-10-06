import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import AuthenticationScreen from '../screens/AuthenticationScreen';

export type AppStackParamsList = {
  AuthenticationScreen: undefined;
};

export type AppStackRouteProps<RouteName extends keyof AppStackParamsList> =
  RouteProp<AppStackParamsList, RouteName>;

const AppStack = createStackNavigator();
const AppStackNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="AuthenticationScreen"
      component={AuthenticationScreen}
    />
  </AppStack.Navigator>
);

export default AppStackNavigator;
