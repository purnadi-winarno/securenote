import React, {FC} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface RoundButtonProps {
  label: string;
  onPress?: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
export default RoundButton;
