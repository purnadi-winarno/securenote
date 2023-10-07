import React, {FC, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Alert} from 'react-native';
import Animated, {
  Layout,
  FadeInLeft,
  FadeOutRight,
  FlipInXUp,
  FlipOutXUp,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import {NoteType} from 'src/types/noteType';
import Row from '@components/Ui/Row';
import CircleIcon from '@components/Ui/CircleIcon';
import {removeNote} from '@helpers/encryptedStorage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamsList} from '@navigation/AppRoutes';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

interface NoteItemProps {
  item: NoteType;
  index: number;
}

const NoteItem: FC<NoteItemProps> = ({item, index}) => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamsList>>();
  const [touched, setTouched] = useState(false);

  const onEdit = () => {
    setTouched(false);
    navigation.navigate('EditNoteScreen', {
      id: item.id,
      value: item.value,
    });
  };
  const onDelete = () => {
    setTouched(false);
    setTimeout(async () => {
      await removeNote(item.id);
      navigation.setParams({
        refresher: {},
      });
    }, 500);
  };
  const onDeleteConfirm = () => {
    Alert.alert('Delete Confirmation', 'Are you sure to delete this note?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: onDelete},
    ]);
  };
  return touched ? (
    <Animated.View
      layout={Layout}
      entering={FlipInXUp.springify().mass(1).stiffness(100).damping(15)}
      exiting={FlipOutXUp.springify().mass(1).stiffness(100).damping(15)}
      style={styles.container}>
      <TouchableOpacity style={styles.full} onPress={onEdit}>
        <Row>
          <Icon name="edit" size={18} style={styles.icon} />
          <Text>Edit</Text>
        </Row>
      </TouchableOpacity>
      <TouchableOpacity style={styles.full} onPress={onDeleteConfirm}>
        <Row>
          <Icon name="delete" size={18} style={styles.icon} />
          <Text>Delete</Text>
        </Row>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => setTouched(false)}>
        <Icon name="close" size={18} color={'#fff'} />
      </TouchableOpacity>
    </Animated.View>
  ) : (
    <AnimatedTouchableOpacity
      layout={Layout.springify()}
      entering={FadeInLeft.delay(index * 100)}
      exiting={FadeOutRight}
      activeOpacity={0.9}
      style={[styles.container, styles.space]}
      onPress={() => setTouched(true)}>
      <CircleIcon />
      <Text style={styles.text}>{item.value}</Text>
    </AnimatedTouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,

    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
    padding: 16,
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  full: {
    flex: 1,
    paddingVertical: 16,
  },
  closeIcon: {
    paddingVertical: 16,
    backgroundColor: '#c42993',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 10,
  },
});
export default NoteItem;
