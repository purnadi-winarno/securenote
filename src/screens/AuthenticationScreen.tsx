import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface AuthenticationScreenProps {}

const AuthenticationScreen: FC<AuthenticationScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>AuthenticationScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default AuthenticationScreen;
