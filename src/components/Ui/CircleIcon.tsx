import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

interface CircleIconProps {}

const CircleIcon: FC<CircleIconProps> = () => {
  return <View style={styles.container} />;
};
const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
});
export default CircleIcon;
