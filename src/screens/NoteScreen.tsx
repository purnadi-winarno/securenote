import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface NoteScreenProps {}

const NoteScreen: FC<NoteScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>NoteScreen</Text>
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
export default NoteScreen;
