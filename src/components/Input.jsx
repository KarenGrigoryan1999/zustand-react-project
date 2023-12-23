
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput } from "react-native";

export default function Input({placeholder, onChangeText}) {

  return (
    <KeyboardAvoidingView>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        backgroundColor: '#f1f1f1',
        borderRadius: 63,
    }
});
