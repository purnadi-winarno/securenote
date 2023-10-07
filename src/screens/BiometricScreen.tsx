/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import RoundButton from '@components/RoundButton';
import {AppStackParamsList} from '@navigation/AppRoutes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

interface BiometricScreenProps {}

const BiometricScreen: FC<BiometricScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(true);

  async function startBiometric() {
    const {biometryType} = await rnBiometrics.isSensorAvailable();

    console.log('biometryType: ', JSON.stringify(biometryType, null, 3));
    if (biometryType) {
      rnBiometrics
        .simplePrompt({promptMessage: 'Confirm fingerprint to continue'})
        .then(resultObject => {
          const {success} = resultObject;

          if (success) {
            navigation.navigate('NoteScreen');
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

  return (
    <View style={styles.container}>
      <RoundButton label="Authenticate" onPress={startBiometric} />
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
