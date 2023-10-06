import AppStackNavigator from '@navigation/AppRoutes';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};
export default App;
