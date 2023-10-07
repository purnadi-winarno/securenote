import RoundButton from '@components/RoundButton';
import ErrorText from '@components/Text/ErrorText';
import TitleText from '@components/Text/TitleText';
import {updateNote} from '@helpers/encryptedStorage';
import {AppStackParamsList, AppStackRouteProps} from '@navigation/AppRoutes';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useCallback, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const IS_IOS = Platform.OS === 'ios';

interface EditNoteScreenProps {}

const EditNoteScreen: FC<EditNoteScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const route = useRoute<AppStackRouteProps<'EditNoteScreen'>>();
  const inputRef = useRef<TextInput>(null);

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

  const onFocusInput = () => {
    inputRef?.current?.focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TitleText text={'Update Note'} />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.inputWrapper}
          onPress={onFocusInput}>
          <TextInput
            ref={inputRef}
            placeholder="Type your note here.."
            onChangeText={setNote}
            value={note}
            multiline={true}
            numberOfLines={3}
          />
        </TouchableOpacity>
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
    padding: 16,
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
    paddingVertical: IS_IOS ? 8 : 0,
    marginTop: 20,
    minHeight: 100,
  },
});
export default EditNoteScreen;
