import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';

export const screenOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  headerShadowVisible: false,
  ...TransitionPresets.SlideFromRightIOS,
};
