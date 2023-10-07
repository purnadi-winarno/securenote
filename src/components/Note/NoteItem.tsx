import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NoteType} from 'src/types/noteType';

interface NoteItemProps {
  item: NoteType;
  index: number;
}

const NoteItem: FC<NoteItemProps> = ({item, index}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
  },
});
export default NoteItem;
