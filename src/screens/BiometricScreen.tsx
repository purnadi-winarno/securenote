import React, {FC} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {AppStackParamsList} from '@navigation/AppRoutes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface BiometricScreenProps {}

const BiometricScreen: FC<BiometricScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const onNext = () => {
    navigation.navigate('NoteScreen');
  };
  return (
    <View style={styles.container}>
      <Button title="NoteScreen" onPress={onNext} />
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
export default BiometricScreen;
