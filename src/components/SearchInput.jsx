import { StyleSheet, View, TextInput } from "react-native";

const SearchInput = () => {

  return (
    <View style={styles.container}>
        <TextInput placeholder={'ку'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchInput;