import { useCallback, useState } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";

import ListItem from "./ListItem";
import CustomButton from "./CustomButton";
import useTodoListStore from "../store/todoListStore";

const ListContainer = () => {
  const listTtems = useTodoListStore((state) => state.listTtems);
  const removeListItem = useTodoListStore((state) => state.removeListItem);
  const addListItem = useTodoListStore((state) => state.addListItem);

  const [newTodoElementTitle, onChangeNewTodoElementTitle] = useState('');

  const onRemove = useCallback((idx) => {
    removeListItem(idx);
  });

  const onAddElement = () => {
    addListItem(newTodoElementTitle);
    onChangeNewTodoElementTitle('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.addElementForm}>
        <TextInput
          value={newTodoElementTitle}
          onChangeText={title => onChangeNewTodoElementTitle(title)}
          placeholder="Введи заголовок элемента"
          style={styles.inputTextField}
        />
        <CustomButton title="Добавить" onPress={onAddElement} />
      </View>
      <ScrollView style={styles.scrollField}>
        {
          listTtems.map((element, idx) => (
            <ListItem
              key={`${element}-${idx}`}
              title={element}
              index={idx}
              onRemove={onRemove}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
    gap: 10,
  },
  addElementForm: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  inputTextField: {
    flexGrow: 1,
  },
  scrollField: {
    height: '100%'
  }
});

export default ListContainer;