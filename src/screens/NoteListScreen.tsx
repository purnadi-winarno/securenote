import NoteList from '@components/Note/NoteList';
import RoundButton from '@components/RoundButton';
import TitleText from '@components/Text/TitleText';
import {getNotes} from '@helpers/encryptedStorage';
import {AppStackParamsList} from '@navigation/AppRoutes';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NoteType} from 'src/types/noteType';

interface NoteListScreenProps {}

const NoteListScreen: FC<NoteListScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const isFocused = useIsFocused();
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    async function getNoteList() {
      const noteList = await getNotes();
      setNotes(noteList);
    }
    getNoteList();
  }, [isFocused]);

  function addNewNote() {
    navigation.navigate('AddNewListScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TitleText text="Your Notes:" />
        <NoteList data={notes} />
      </View>
      <RoundButton label="Add Note" onPress={addNewNote} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    paddingBottom: 20,
  },
  noteList: {
    width: '100%',
    backgroundColor: '#fff',
  },
});
export default NoteListScreen;
