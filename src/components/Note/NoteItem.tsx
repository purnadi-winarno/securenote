import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import Animated, {Layout, FadeInLeft} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {NoteType} from 'src/types/noteType';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

interface NoteItemProps {
  item: NoteType;
  index: number;
}

const NoteItem: FC<NoteItemProps> = ({item, index}) => {
  return (
    <AnimatedTouchableOpacity
      layout={Layout}
      entering={FadeInLeft.delay(index * 100)}
      activeOpacity={0.9}
      style={styles.container}>
      <Icon name="checkcircleo" size={16} />
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
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
});
export default NoteItem;
