import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';

interface TitleTextProps {
  text: string;
}

const TitleText: FC<TitleTextProps> = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
});
export default TitleText;
