import React, {FC} from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';

interface TitleTextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

const TitleText: FC<TitleTextProps> = ({text, style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
});
export default TitleText;
