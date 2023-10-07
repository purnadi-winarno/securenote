import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import NoteListScreen from '@screens/NoteListScreen';
import BiometricScreen from '@screens/BiometricScreen';
import {screenOptions} from './navigationOptions';
import AddNewListScreen from '@screens/AddNewListScreen';
import EditNoteScreen from '@screens/EditNoteScreen';

export type AppStackParamsList = {
  AuthenticationScreen: undefined;
  BiometricScreen: undefined;
  NoteListScreen?: {
    refresher?: Object;
  };
  AddNewListScreen: undefined;
  EditNoteScreen: {
    id: string;
    value: string;
  };
};

export type AppStackRouteProps<RouteName extends keyof AppStackParamsList> =
  RouteProp<AppStackParamsList, RouteName>;

const AppStack = createStackNavigator();
const AppStackNavigator = () => (
  <AppStack.Navigator screenOptions={screenOptions}>
    <AppStack.Screen name="BiometricScreen" component={BiometricScreen} />
    <AppStack.Screen name="NoteListScreen" component={NoteListScreen} />
    <AppStack.Screen name="AddNewListScreen" component={AddNewListScreen} />
    <AppStack.Screen name="EditNoteScreen" component={EditNoteScreen} />
  </AppStack.Navigator>
);

export default AppStackNavigator;
