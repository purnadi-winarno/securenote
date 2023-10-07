import React, {FC, PropsWithChildren} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

interface RowProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

const Row: FC<RowProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default Row;
