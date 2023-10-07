import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

interface AnimatedDeleteProps {}

const AnimatedDelete: FC<AnimatedDeleteProps> = () => {
  return (
    <AnimatedTouchableOpacity style={styles.container}>
      <Icon name="delete" color={'#990000'} size={16} />
    </AnimatedTouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AnimatedDelete;
