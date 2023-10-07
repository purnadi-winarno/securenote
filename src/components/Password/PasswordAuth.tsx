import RoundButton from '@components/RoundButton';
import ErrorText from '@components/Text/ErrorText';
import TitleText from '@components/Text/TitleText';
import {
  getCurrentPassword,
  setCurrentPassword,
} from '@helpers/encryptedStorage';
import {AppStackParamsList} from '@navigation/AppRoutes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface PasswordAuthProps {}

const PasswordAuth: FC<PasswordAuthProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();

  const [password, setPassword] = useState('');
  const [isPasswordSet, setIsPasswordSet] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const checkIfPasswordSet = async () => {
    const currentPassword = await getCurrentPassword();
    if (!currentPassword) {
      setIsPasswordSet(false);
    }
  };

  const togglePasswordVisible = () => {
    setIsPasswordVisible(state => !state);
  };

  useEffect(() => {
    checkIfPasswordSet();
  }, []);

  const onSetPassword = async () => {
    await setCurrentPassword(password);
    setIsPasswordSet(true);
    setPassword('');
  };

  const onLogin = async () => {
    const currentPassword = await getCurrentPassword();
    if (currentPassword !== password) {
      setIsPasswordMatch(false);
    } else {
      setPassword('');
      setIsPasswordMatch(true);
      navigation.navigate('NoteListScreen');
    }
  };

  return (
    <>
      <TitleText
        style={styles.title}
        text={isPasswordSet ? 'Login' : 'Create Your First Password'}
      />
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={
            isPasswordSet ? 'enter your password' : 'set your first password'
          }
          onChangeText={setPassword}
          value={password}
          secureTextEntry={!isPasswordVisible}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={togglePasswordVisible}>
          <Icon name={!isPasswordVisible ? 'eye' : 'key'} size={18} />
        </TouchableOpacity>
      </View>
      {!isPasswordMatch && <ErrorText text="Password doesn't match!" />}
      <RoundButton
        label={isPasswordSet ? 'Login' : 'Create Password'}
        onPress={isPasswordSet ? onLogin : onSetPassword}
      />
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  textInput: {
    flex: 1,
  },
  inputWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default PasswordAuth;
