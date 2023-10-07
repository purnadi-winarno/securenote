/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import PasswordAuth from '@components/Password/PasswordAuth';
import RoundButton from '@components/RoundButton';
import {AppStackParamsList} from '@navigation/AppRoutes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

interface BiometricScreenProps {}

const BiometricScreen: FC<BiometricScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(true);

  async function startBiometric() {
    const {biometryType} = await rnBiometrics.isSensorAvailable();

    if (biometryType) {
      rnBiometrics
        .simplePrompt({promptMessage: 'Confirm fingerprint to continue'})
        .then(resultObject => {
          const {success} = resultObject;

          if (success) {
            navigation.navigate('NoteListScreen');
          } else {
            console.log('user cancelled biometric prompt');
          }
        })
        .catch(() => {
          console.log('biometrics failed');
        });
    } else {
      setIsBiometricAvailable(false);
    }
  }

  const _renderAuth = useMemo(() => {
    if (isBiometricAvailable) {
      return <RoundButton label="Authenticate" onPress={startBiometric} />;
    }
    return <PasswordAuth />;
  }, [isBiometricAvailable]);

  return <View style={styles.container}>{_renderAuth}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
});

export default BiometricScreen;
