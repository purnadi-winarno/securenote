import NoteList from '@components/Note/NoteList';
import RoundButton from '@components/RoundButton';
import TitleText from '@components/Text/TitleText';
import {getNotes} from '@helpers/encryptedStorage';
import {AppStackParamsList, AppStackRouteProps} from '@navigation/AppRoutes';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NoteType} from 'src/types/noteType';

interface NoteListScreenProps {}

const NoteListScreen: FC<NoteListScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const route = useRoute<AppStackRouteProps<'NoteListScreen'>>();

  const isFocused = useIsFocused();
  const refresher = route?.params?.refresher;

  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    async function getNoteList() {
      const noteList = await getNotes();
      setTimeout(() => {
        setNotes(noteList);
      }, 300);
    }
    getNoteList();
  }, [isFocused, refresher]);

  function addNewNote() {
    navigation.navigate('AddNewListScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TitleText text="Your Notes:" />
        <Text style={styles.notice}>
          {notes?.length > 0
            ? 'Press to edit / delete note below!'
            : 'Create your first note now!'}
        </Text>
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
    padding: 16,
  },
  content: {
    flex: 1,
    paddingBottom: 20,
  },
  noteList: {
    width: '100%',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  notice: {
    backgroundColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    color: '#555',
  },
});
export default NoteListScreen;
