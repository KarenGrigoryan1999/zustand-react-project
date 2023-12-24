import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput } from "react-native";

export default function Input({placeholder, onChangeText, value, secureTextEntry=false}) {

  return (
    <KeyboardAvoidingView>
            <TextInput style={styles.input} value={value} placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
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