/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

function App(): JSX.Element {
  async function startBiometric() {
    const {biometryType} = await rnBiometrics.isSensorAvailable();
    console.log('biometryType: ', JSON.stringify(biometryType, null, 3));
    if (biometryType) {
      rnBiometrics
        .simplePrompt({promptMessage: 'Confirm fingerprint to continue'})
        .then(resultObject => {
          const {success} = resultObject;

          if (success) {
            console.log('successful biometrics provided');
          } else {
            console.log('user cancelled biometric prompt');
          }
        })
        .catch(() => {
          console.log('biometrics failed');
        });
    }
  }

  useEffect(() => {
    startBiometric();
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

export default App;
