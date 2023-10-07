import EncryptedStorage from 'react-native-encrypted-storage';
import uuid from 'react-native-uuid';
import {NoteType} from 'src/types/noteType';
const NOTE_KEY = 'kNote';

export async function addNote(value: string) {
  try {
    const noteList: NoteType[] = await getNotes();
    const newNote = {
      id: uuid.v4() as string,
      value,
    };
    noteList.push(newNote);
    await EncryptedStorage.setItem(NOTE_KEY, JSON.stringify(noteList));
  } catch (error) {
    // There was an error on the native side
    console.log('error: ', JSON.stringify(error, null, 3));
  }
}

export async function getNotes() {
  try {
    const notesString = await EncryptedStorage.getItem(NOTE_KEY);
    const notes: NoteType[] = JSON.parse(notesString || '[]') || [];
    return notes;
  } catch (error) {
    // There was an error on the native side
    console.log('error: ', JSON.stringify(error, null, 3));
    return [];
  }
}
