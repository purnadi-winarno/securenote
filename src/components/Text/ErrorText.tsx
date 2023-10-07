import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ErrorTextProps {
  text: string;
}

const ErrorText: FC<ErrorTextProps> = ({text}) => {
  return <Text style={styles.errorText}>{text}</Text>;
};
const styles = StyleSheet.create({
  errorText: {
    color: '#990000',
  },
});
export default ErrorText;
