import { memo } from 'react';
import { View, Text, StyleSheet } from "react-native";

import CustomButton from './CustomButton';

const ListItem = ({
  title,
  index,
  onRemove
}) => {

  const onRemoveElement = () => {
    onRemove(index);
  }

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <CustomButton title='Удалить' color={'red'} onPress={onRemoveElement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
});

export default memo(ListItem);