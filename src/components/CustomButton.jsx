import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  color = 'orange',
  textColor = 'white',
  onPress
}) => {

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{...styles.container, ...{backgroundColor: color}}}>
      <Text style={{color: textColor}}>{title}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
  },
});

export default CustomButton;