import RoundButton from '@components/RoundButton';
import ErrorText from '@components/Text/ErrorText';
import TitleText from '@components/Text/TitleText';
import {updateNote} from '@helpers/encryptedStorage';
import {AppStackParamsList, AppStackRouteProps} from '@navigation/AppRoutes';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useCallback, useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface EditNoteScreenProps {}

const EditNoteScreen: FC<EditNoteScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const route = useRoute<AppStackRouteProps<'EditNoteScreen'>>();

  const [noteId] = useState(route?.params?.id!);
  const [note, setNote] = useState(route?.params?.value);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onUpdateNote = useCallback(async () => {
    if (!note) {
      setShowError(true);
    } else {
      try {
        setLoading(true);
        setShowError(false);
        await updateNote(noteId, note);
        setLoading(false);
        navigation.goBack();
      } catch (error) {
        console.log('error: ', error);
      }
    }
  }, [note]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TitleText text={'Update Note'} />
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Type your note here.."
            onChangeText={setNote}
            value={note}
            multiline={true}
            numberOfLines={3}
          />
        </View>
        <ErrorText text={showError ? 'note can not be empty!' : ''} />
        <RoundButton
          label={loading ? 'Updating..' : 'Update'}
          onPress={onUpdateNote}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
  },
  inputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 20,
    minHeight: 100,
  },
});
export default EditNoteScreen;
