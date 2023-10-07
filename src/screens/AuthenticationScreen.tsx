import React, {FC} from 'react';
import {AppStackParamsList} from '@navigation/AppRoutes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, StyleSheet} from 'react-native';
import RoundButton from '@components/RoundButton';

interface AuthenticationScreenProps {}

const AuthenticationScreen: FC<AuthenticationScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const onNext = () => {
    navigation.navigate('BiometricScreen');
  };
  return (
    <View style={styles.container}>
      <RoundButton label="Authenticate" onPress={onNext} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AuthenticationScreen;
