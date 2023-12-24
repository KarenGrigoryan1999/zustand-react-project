import { useEffect, useState, memo } from 'react';
import { StyleSheet, View, TextInput, Image } from "react-native";

const DEBOUNCE_DELAY = 1000;

const SearchInput = ({
  onChange,
  onSubmit
}) => {
  const [text, setText] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== undefined) {
        onSubmit(text)
      }
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(timer);
    }
  }, [text]);

  useEffect(() => {
    if (text) {
      onChange(text);
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image
          style={styles.searchStyle}
          source={require('../../assets/search.png')}
        />
      </View>
      <TextInput placeholder={'Поиск'} onChangeText={setText} value={text} style={styles.customTextInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  customTextInput: {
    backgroundColor: '#f1f1f1',
    color: 'black',
    borderTopRightRadius: 63,
    borderBottomRightRadius: 63,
    padding: 10,
    flex: 1
  },
  wrapperImage: {
    backgroundColor: '#f1f1f1',
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: 'center',
    padding: 8,
  }
});

export default memo(SearchInput);