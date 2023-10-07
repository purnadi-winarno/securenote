import RoundButton from '@components/RoundButton';
import ErrorText from '@components/Text/ErrorText';
import {addNote} from '@helpers/encryptedStorage';
import {AppStackParamsList} from '@navigation/AppRoutes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useCallback, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface AddNewListScreenProps {}

const AddNewListScreen: FC<AddNewListScreenProps> = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const [note, setNote] = useState('');
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSaveNote = useCallback(async () => {
    if (!note) {
      setShowError(true);
    } else {
      try {
        setLoading(true);
        setShowError(false);
        await addNote(note);
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
        <Text>Add New Note</Text>
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
          label={loading ? 'Saving..' : 'Save'}
          onPress={onSaveNote}
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
export default AddNewListScreen;
