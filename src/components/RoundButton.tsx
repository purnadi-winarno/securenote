import React, {FC} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface RoundButtonProps {
  label: string;
  disabled?: boolean;
  onPress?: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({label, disabled, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={disabled ? undefined : onPress}>
      <Text style={styles.center}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  center: {
    textAlign: 'center',
  },
});
export default RoundButton;
