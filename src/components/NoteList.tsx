import React, {FC, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {NoteType} from 'src/types/noteType';

interface NoteListProps {
  data: NoteType[];
}

const NoteList: FC<NoteListProps> = ({data}) => {
  const _renderItem = useCallback(({item}: {item: NoteType}) => {
    return <Text>{item.value}</Text>;
  }, []);

  const _keyExtractor = useCallback((item: NoteType) => item?.id, []);

  return (
    <FlatList
      data={data}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    />
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
export default NoteList;
