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

export async function removeNote(id: string) {
  try {
    const noteList: NoteType[] = await getNotes();
    const restNote = noteList.filter(note => note.id !== id);
    await EncryptedStorage.setItem(NOTE_KEY, JSON.stringify(restNote));
  } catch (error) {
    // There was an error on the native side
    console.log('error: ', JSON.stringify(error, null, 3));
  }
}

export async function updateNote(id: string, value: string) {
  try {
    const noteList: NoteType[] = await getNotes();
    const restNote = noteList.map(note => {
      if (note.id === id) {
        note.value = value;
      }
      return note;
    });
    await EncryptedStorage.setItem(NOTE_KEY, JSON.stringify(restNote));
  } catch (error) {
    // There was an error on the native side
    console.log('error: ', JSON.stringify(error, null, 3));
  }
}
